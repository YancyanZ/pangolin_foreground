<template>
  <div>
    <h1 class="title">我的信息</h1>
    <a-form :form="infoForm" :label-col="{span:2,offset:1}" :wrapper-col="{ span: 10}" labelAlign="left">
      <a-form-item label="用户名称">
        <span class="ant-form-text">{{user.user_name}}</span>
      </a-form-item>
      <a-form-item label="真实姓名">
        <span class="ant-form-text">
        {{user.real_name}}
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
        <a-date-picker placeholder="生日" v-model="infoForm.birth"/>
      </a-form-item>
      <a-form-item label="邮箱">
        <a-input placeholder="请输入邮箱.." v-model="infoForm.mail"></a-input>
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
        <a-textarea :auto-size="{ minRows: 3, maxRows: 6 }" placeholder="Enter something..." v-model="infoForm.note"></a-textarea>
      </a-form-item>
      <a-form-item :wrapper-col="{span:10,offset:3}" class="submit">
        <a-button class="submit_btn">提交</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import {getUser} from '@/api/system/user.js'
export default {
  created(){
    this.getUser()
  },
  data(){
    return {
      user:{},
      infoForm:{
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
      this.user = res

      this.infoForm.sno = res.sno
      this.infoForm.sex = res.sex
      this.infoForm.birthday = res.birthday
      this.infoForm.email = res.email
      this.infoForm.qq = res.qq
      this.infoForm.wechat = res.wechat
      this.infoForm.phone = res.phone
      this.infoForm.address = res.address
      this.infoForm.signature = res.signature

      console.log(this.user)
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