<template>
  <div>
    <a-card title="注册" :bordered="false">
      <a-form-model :model="regForm" :rules="regRules" :wrapperCol="{span:22,offset:1}" ref="regForm">
        <a-form-model-item prop="userName">
          <a-input v-model="regForm.userName" placeholder="请输入用户名">
            <a-icon slot="addonBefore" type="user" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item prop="phonenumber">
          <a-input v-model="regForm.phonenumber" placeholder="手机号码">
            <a-icon slot="addonBefore" type="phone"/>
          </a-input>
        </a-form-model-item>
        <a-form-model-item prop="password">
          <a-input-password v-model="regForm.password" placeholder="请输入密码">
            <a-icon slot="addonBefore" type="lock"/>
          </a-input-password>
        </a-form-model-item>
        <a-form-model-item prop="rePassword">
          <a-input-password v-model="regForm.rePassword" placeholder="确认密码">
            <a-icon slot="addonBefore" type="lock"/>
          </a-input-password>
        </a-form-model-item>
        <a-form-model-item prop="realName">
          <a-input v-model="regForm.realName" placeholder="请输入真实姓名">
            <a-icon slot="addonBefore" type="user" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-select placeholder="请选择班级..." v-model="regForm.xzclass">
            <a-select-option value="行政1班">
              行政1班
            </a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item style="height:auto">
          <a-col :span="14">
            <a-form-model-item prop="code">
              <a-input placeholder="验证码" v-model="regForm.code"/>
          </a-form-model-item>
          </a-col>
          <a-col :span="8" :offset="2">
            <img class="getCaptcha" :src="codeUrl" @click="getCode">
          </a-col>
        </a-form-model-item >
        <a-form-model-item :wrapperCol="{span:24}" style="height:auto">
          <a-checkbox v-model="regForm.check">我已认真阅读充分理解并接受
            <a href="#">隐私协议</a>
            和
            <a href="#">用户协议</a>
          </a-checkbox>
        </a-form-model-item>
      </a-form-model>
      <a-row type="flex" justify="center">
        <a-col :span="22">
          <a-row>
            <a-col :span="8">
              <a-button ghost @click="back">返回登录</a-button>
            </a-col>
            <a-col :span="8" :offset="8">
              <a-button class="res_btn" @click="handleRegister">马上注册</a-button>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </a-card>
    
  </div>
</template>

<script>
import {getCodeImg,register} from '@/api/login.js'
export default {
  name:'reg-card',
  data(){
    let validatePass = (rule, value, callback) => {
      if (value !== this.regForm.password) {
        callback(new Error('确认密码不一致'));
      } else {
        callback();
      }
    };
    return {
      options:[],
      codeUrl:'',
      // 表单数据
      regForm:{
        userName:'test111',
        phonenumber:'13967260917',
        password:'cccc123478',
        rePassword:'cccc123478',
        realName:'陈',
        xzclass:'行政1班',
        code:'',
        uuid:'',
        check:true
      },
      // 验证规则
      regRules:{
        userName: [
          { required: true, message: '用户名不能为空', trigger: 'blur', whitespace: true },
          { min: 1, max: 18, message: '用户名长度不能大于18字符', trigger: 'blur' },
        ],
        phonenumber: [
          { required: true, message: '请填写手机号码...', trigger: 'blur', whitespace: true },
          { pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/, message: '请填写正确的手机号码...', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur', whitespace: true },
          { min: 1, max: 18, message: '密码长度不能大于18字符', trigger: 'blur' },
        ],
        rePassword: [
          { required: true, message: '确认密码不能为空', trigger: 'blur', whitespace: true },
          { min: 1, max: 18, message: '确认密码长度不能大于18字符', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ],
        realName: [
          { required: true, message: '真实姓名不能为空', trigger: 'blur', whitespace: true },
          { min: 1, max: 5, message: '真实姓名长度不能大于5字符', trigger: 'blur' },
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur', whitespace: true }
        ]
      }
    }
  },
  created(){
    this.getCode()
  },
  methods:{
    back(){
      this.$emit('transfer',false)
    },
    // 获取验证码图片
    async getCode() {
      const { data: res } = await getCodeImg()
      this.codeUrl = 'data:image/gif;base64,' + res.img
      this.regForm.uuid = res.uuid
    },
    // 注册点击事件
    handleRegister(){
      if(this.regForm.check==false){
        alert('请仔细阅读用户协议和隐私协议并确认!')
        return false
      }
      this.$refs.regForm.validate(async valid => {
        if (valid) {
          const saveForm = JSON.parse(JSON.stringify(this.regForm))
          console.log('saveForm',saveForm)
          const {data:res} = await register(saveForm)
          if(res.code == 200 ){
            alert('已提交信息，请等待审核。')
          }else{
            alert(res.msg)
          }
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
  padding: 16px;
}
.ant-form-item{
  height: 50px;
  width:100%;
  margin-bottom: 0px;
}
.ant-checkbox-wrapper{
  font-size: 12px;
  color: rgb(153, 153, 153);
}
.res_btn,
.res_btn:hover,
.res_btn:focus,
.res_btn:active{
  background-color: #f6ab39;
  border-color:#f6ab39;
  color: #fff;
}
.getCaptcha{
    /* display: block; */
    width: 100%;
    height: 32px;
    margin-top: -4px;
}
.ant-form-item >>> .ant-form-explain{
  font-size: 12px;
  margin-bottom: -10px;
}
</style>