<template>
  <div>
    <a-card title="注册" :bordered="false">
      <a-form-model :model="regForm" :rules="regRules" :wrapperCol="{span:22,offset:1}">
        <a-form-model-item prop="name">
          <a-input v-model="regForm.name" placeholder="请输入用户名">
            <a-icon slot="addonBefore" type="user" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item prop="phone">
          <a-input v-model="regForm.phone" placeholder="手机号码">
            <a-icon slot="addonBefore" type="phone"/>
          </a-input>
        </a-form-model-item>
        <a-form-model-item prop="password">
          <a-input v-model="regForm.password" placeholder="请输入密码">
            <a-icon slot="addonBefore" type="lock"/>
          </a-input>
        </a-form-model-item>
        <a-form-model-item prop="rePassword">
          <a-input v-model="regForm.rePassword" placeholder="确认密码">
            <a-icon slot="addonBefore" type="lock"/>
          </a-input>
        </a-form-model-item>
        <a-form-model-item prop="trueName">
          <a-input v-model="regForm.trueName" placeholder="请输入真实姓名">
            <a-icon slot="addonBefore" type="user" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-select placeholder="请选择班级...">
            <a-select-option value="jack">
              行政1班
            </a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item style="height:auto">
          <a-col :span="14">
              <a-input placeholder="验证码" />
            </a-col>
            <a-col :span="8" :offset="2">
              <img class="getCaptcha" :src="codeUrl" @click="getCode">
            </a-col>
        </a-form-model-item >
        <a-form-model-item :wrapperCol="{span:24}" style="height:auto">
          <a-checkbox>我已认真阅读充分理解并接受
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
              <a-button class="res_btn">马上注册</a-button>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </a-card>
    
  </div>
</template>

<script>
export default {
  name:'reg-card',
  data(){
    return {
      options:[],
      codeUrl:'',
      // 表单数据
      regForm:{
        name:'',
        phone:'',
        password:'',
        rePassword:'',
        trueName:''
      },
      // 验证规则
      regRules:{
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
        ],
        phone: [
          { required: true, message: '请填写手机号码...', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
        ],
        rePassword: [
          { required: true, message: '确认密码不能为空', trigger: 'blur' },
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
    getCode () {
      getCodeImg().then(res => {
        this.codeUrl = 'data:image/gif;base64,' + res.img
        // this.form.uuid = res.uuid
      })
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
}
.ant-form-item >>> .ant-form-explain{
  font-size: 12px;
  margin-bottom: -10px;
}
</style>