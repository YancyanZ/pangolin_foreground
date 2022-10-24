<template>
  <div>
    <h1 class="title">我的信息</h1>
    <a-form :form="infoForm" :label-col="{span:2,offset:1}" :wrapper-col="{ span: 10}" labelAlign="left">
      <a-form-item label="用户名称">
        <span class="ant-form-text">{{user.userName}}</span>
      </a-form-item>
      <a-form-item label="真实姓名">
        <span class="ant-form-text">
        {{user.realName}}
        </span>
      </a-form-item>
      <a-form-item label="学号">
        <a-input v-model="infoForm.sno"></a-input>
      </a-form-item>
      <a-form-item label="性别">
        <a-radio-group v-model="infoForm.sex">
          <a-radio :value="1">男</a-radio>
          <a-radio :value="2">女</a-radio>
          <a-radio :value="3">未知</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="生日">
        <a-date-picker placeholder="生日" v-model="birth"/>
      </a-form-item>
      <a-form-item label="邮箱">
        <a-input placeholder="请输入邮箱.." v-model="infoForm.email"></a-input>
      </a-form-item>
      <a-form-item label="QQ号码">
        <a-input v-model="infoForm.qq"></a-input>
      </a-form-item>
      <a-form-item label="微信">
        <a-input v-model="infoForm.wechat"></a-input>
      </a-form-item>
      <a-form-item label="手机号码">
        <a-input v-model="infoForm.phone"></a-input>
      </a-form-item>
      <a-form-item label="地址">
        <a-input v-model="infoForm.address"></a-input>
      </a-form-item>
      <a-form-item label="个性签名">
        <a-textarea :auto-size="{ minRows: 3, maxRows: 6 }" placeholder="Enter something..." v-model="infoForm.signature"></a-textarea>
      </a-form-item>
      <a-form-item :wrapper-col="{span:10,offset:3}" class="submit">
        <a-button class="submit_btn" @click="handleSubmit">提交</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import {getUser, modUser} from '@/api/system/user.js'
export default {
  created(){
    this.getUser()
  },
  data(){
    return {
      birth:'',
      user:{},
      infoForm:{
        userName:'',

        sno:'',
        sex:undefined,
        birthday:'',
        email:'',
        qq:'',
        wechat:'',
        phone:'',
        address:'',
        signature:''
      }
    }
  },
  methods:{
    // 获取用户信息
    async getUser(){
      const { data: res } = await getUser(this.$store.state.username)
      this.user = res.username
      console.log('res',res)
      console.log('user',this.user)

      this.infoForm.userName = this.$store.state.username

      this.infoForm.sno = res.username.sno
      this.infoForm.sex = res.username.sex-0
      this.infoForm.birthday = res.username.birthday
      this.infoForm.email = res.username.email
      this.infoForm.qq = res.username.qq
      this.infoForm.wechat = res.username.wechat
      this.infoForm.phone = res.username.phone
      this.infoForm.address = res.username.address
      this.infoForm.signature = res.username.signature

      if(this.infoForm.birthday){
        this.birth = this.$moment(this.infoForm.birthday,"YYYY-MM-DD")
      }
      
    },
    // 修改用户信息
    async handleSubmit(){
      if(this.birth){
        this.infoForm.birthday = this.$moment(this.birth).format("YYYY-MM-DD")
      }else{
        this.infoForm.birthday = null
      }
      const saveForm = JSON.parse(JSON.stringify(this.infoForm))
      const { data: res } = await modUser(this.$store.state.username,saveForm)
      console.log("infoForm",saveForm)
      if(res.code==200){
        alert("修改用户信息成功")
      }else{
        alert(res.msg)
      }
    }
  }
}
</script>

<style>
.title{
  color: #2c3e50;
  font-size: 28px;
  font-weight: 700;
}
.submit .submit_btn,
.submit .submit_btn:hover,
.submit .submit_btn:active,
.submit .submit_btn:focus{
  background-color: #f6ab39;
  border-color:#f6ab39;
  color: #fff;
}
</style>