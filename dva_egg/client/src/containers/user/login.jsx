import React, { Component } from 'react'
import { Row, Col, Form, Icon, Input, Button,message } from 'antd';
import {loginService} from "../../api/index"
import "../../assets/css/login.css"
import {connect} from "dva"

//action creater
import {SAVETOKEN,SAVEUID} from "../../store/action/index"

//调用存本地方法
import {setSession} from "../../utils"



const LoginForm= { name: 'normal_login' }

const mapState2Props=state=>{
// console.log(state)
return state.login
}
const mapState2Dispatch=dispatch=>{
    return{
        saveToken(token){
            dispatch(SAVETOKEN(token))
        },
        saveUid(uid){
            dispatch(SAVEUID(uid))
        }
    }
}

//装饰器语法
@connect(mapState2Props,mapState2Dispatch)
@Form.create(LoginForm)
class Login extends Component {
    
    //测试一下哈   要在登录成功之后搞
    // componentDidMount() {
    //    this.props.saveToken()
    // }
    
    login(params){
        const {history,form}=this.props
        loginService(params).then(res=>{
            if(res.status===200){
                console.log(res.data)
                //保存token
                this.props.saveToken(res.data.token)
                //保存uid
                this.props.saveUid(res.data.uid)
                // console.log(res.data)
                //存token到本地
                setSession('authoriaztion',res.data.token)
                //存uid到本地
                setSession('uid',res.data.uid)

                // console.log(this.props)
                message.success('登陆成功',1,()=>{
                    history.replace('/home')
                })
            }else{
                message.error('登陆失败',1,()=>{
                    this.form.setFieldsValue({
                        username:'',
                        password:''
                    })
                })
            }
        })
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.login(values)
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Row>
                <h3>登陆</h3>

                    <Col xs={{ span: 8, offset: 8 }}>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('username',
                                {initialValue:"lishengzhi"},                                
                                {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', 
                                {initialValue:666},
                                {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                    />,
                                )}
                            </Form.Item>
                            
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                           
                        </Form>
                    </Col>
                </Row>

            </div>
        )
    }
}
export default Login
