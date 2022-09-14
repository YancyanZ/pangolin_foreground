<template>
  <div>
    <a-card title="欢迎登录浙江工业大学计算机学院" :bordered="false">
      <a-form-model :model="loginForm" :rules="loginRules" ref="loginForm">
        <a-form-model-item prop="username">
          <a-input placeholder="请输入用户名" v-model="loginForm.username" size="large"/>
        </a-form-model-item>
        <a-form-model-item prop="password">
          <a-input-password placeholder="请输入密码" v-model="loginForm.password" size="large"/>
        </a-form-model-item>
        <a-row>
          <a-col :span="14">
            <a-form-model-item prop="code">
              <a-input v-model="loginForm.code" placeholder="验证码" size="large"/>
            </a-form-model-item>
          </a-col>
          <a-col :span="8" :offset="2">
            <img class="captcha" :src="codeUrl" @click="getCode">
          </a-col>
        </a-row>
        <a-form-model-item>
          <a-button class="login_btn" @click="onSubmit">登录</a-button>
        </a-form-model-item>
      </a-form-model>
      <a-row type="flex" justify="center">
        <a-col :span="8">
          <a-button>找回密码</a-button>
        </a-col>
        <a-col :span="6" :offset="10">
          <a-button type="primary" @click="register">注册</a-button>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script>
import {getCodeImg,login} from '@/api/login.js'
export default {
  name:'login-card',
  data(){
    return {
      // 验证码图片
      codeUrl:'',
      // 表单数据
      loginForm:{
        username:'',
        password:'',
        code:'',
        uuid:''
      },
      // 验证规则
      loginRules:{
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }
    }
  },
  created(){
    // 获取验证码图片
    this.getCode()
  },
  methods:{
    // 注册卡片显示
    register(){
      this.$emit('transfer',true)
    },
    // 获取验证码图片
    async getCode() {
      const { data: res } = await getCodeImg()
      this.codeUrl = 'data:image/gif;base64,' + res.img
      this.loginForm.uuid = res.uuid
    },
    // 登录点击事件
    onSubmit(){
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          const {data:res} = await login(this.loginForm)
          if(res.code !== 200){
            // 弹出错误提示窗口
            alert(res.msg)
            // 重置验证码
            this.getCode()
            return false
          }
          // 本地存储token
          localStorage.setItem('ACCESS_TOKEN',res.token)
          this.$router.push('/home')
        } else {
          return false;
        }
      });
    }
  }
}
</script>

<style scoped>
.ant-card{
  width: 342px;
  background-color: transparent;
  position: absolute;
  top: 50%;
  transform: translate(0,-50%);
}
.ant-card >>> .ant-card-head{
  height: 52px;
  background-color: #3deeee;
  border-bottom: 1px solid #e8eaec;
  text-align: center;
  color: #001441;
  font-size: 18px;
  line-height: 1;
}
.ant-card >>> .ant-card-body{
  background-color: rgba(0,0,0,.4);
}
.ant-form-item{
  height: 60px;
  margin-bottom: 0;
}
.login_btn,
.login_btn:hover,
.login_btn:active,
.login_btn:focus{
  width: 100%;
  background-color: #f6ab39;
  border-color:#f6ab39;
  color: #fff;
}
.captcha{
    /* display: block; */
    display: block;
    width: 100%;
    height: 40px;
}
</style>