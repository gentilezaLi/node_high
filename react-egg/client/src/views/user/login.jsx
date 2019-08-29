import React, { Component } from 'react'
import { Form, Icon, Input, Button,message } from 'antd';
import { connect } from "react-redux"
import {loginService} from "../../api"
import {setSession} from "../../utils"
class login extends Component {
    login(params){
        loginService(params).then(res=>{
            console.log(res.data)
            setSession("authorization",res.data.token)
            setSession("id",res.data.id)
            
            this.props.saveToken(res.data.token)
            this.props.saveId(res.data.id)
            if(res.status===200){
                message.success("登录成功",1,()=>{
                    this.props.history.push("/list/home")
                })
            }else{
                message.error("登录失败",1,()=>{
                    this.props.form.setFieldsValue({
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
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username',
                        {initialValue:"lili"},
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
                        {initialValue:777},
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
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return {}
}
const mapDispatchToProps=dispatch=>{
    return {
        saveToken:(res)=>{
            dispatch({type:"SAVETOKEN",data:res})
        },
        saveId:(res)=>{
            dispatch({type:'SAVEID',data:res})
        }
    }
}
login = connect(mapStateToProps,mapDispatchToProps)(Form.create({ name: 'normal_login' })(login))
export default login
