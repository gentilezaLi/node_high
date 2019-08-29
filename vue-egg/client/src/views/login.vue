<template>
  <div>
    <el-radio-group v-model="labelPosition" size="small">
  <el-radio-button label="left">左对齐</el-radio-button>
  <el-radio-button label="right">右对齐</el-radio-button>
  <el-radio-button label="top">顶部对齐</el-radio-button>
</el-radio-group>
<div style="margin: 20px;"></div>
<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
  <el-form-item label="用户名" >
    <el-input v-model="formLabelAlign.username"></el-input>
  </el-form-item>
  <el-form-item label="密码" >
    <el-input v-model="formLabelAlign.password"></el-input>
  </el-form-item>
</el-form>
<el-button type="primary" @click='eve'>登录</el-button>
<el-button type="danger" @click='clear'>重置</el-button>
{{token}}
{{id}}
  </div>
</template>
<script>

import {mapState,mapMutations,mapActions} from "vuex"
export default {
  props: {},
  components: {},
  data() {
    return {
     labelPosition: 'right',
        formLabelAlign: {
          username: 'lili',
          password: 777
        }
    };
  },
  computed: {
    ...mapState({
      token:state=>state.token,
      id:state=>state.id
    })
  },
  methods: {
    ...mapActions(['save']),
      eve(){
          let params={
              username:this.formLabelAlign.username,
              password:this.formLabelAlign.password
          }
          this.save(params)
          this.$router.push("/user/list")
          console.log(params)
      },
      clear(){
          this.formLabelAlign.username=""
          this.formLabelAlign.password=""
      }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
</style>