<template>
  <div class="login_container">
    <!-- 语言下拉选择框 -->
    <div class="login_language">
      <a-dropdown :trigger="['click']" placement="bottomCenter">
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">语言<a-icon type="down" />
        </a>
        <a-menu slot="overlay">
          <a-menu-item>
            <a href="javascript:;">中文简体</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">中文繁体</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">English</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
    <!-- 背景粒子效果 -->
    <Particles></Particles>
    <div class="login_wrap">
      <!-- 上方gif图片 -->
      <div class="head"></div>
      <!-- 左侧旋转图片 -->
      <a-row>
        <a-col :span="14">
          <div class="login_ctf_left_wrap">
            <img src="@/assets/login_ctf_left.png" alt="" class="login_ctf_left">
          </div>
        </a-col>
        <a-col :span="6">
          <div class="login_ctf_right_wrap">
            <LoginCard v-if="!registerShow" @transfer="changeReg"></LoginCard>
            <RegCard v-if="registerShow" @transfer="changeReg"></RegCard>
          </div>
        </a-col>
      </a-row>
    </div>
    <!-- copyright -->
    <div class="login_footer">
      <a href="http://beian.miit.gov.cn/" target="_blank">浙ICP备15025374号-4</a>
    </div>
  </div>
</template>

<script>
import LoginCard from '@/components/Login/LoginCard.vue'
import RegCard from '@/components/Login/RegCard.vue'
import Particles from '@/components/particles/'
export default {
  name:'login',
  components:{
    LoginCard,
    RegCard,
    Particles
  },
  data(){
    return {
      registerShow:false
    }
  },
  methods:{
    changeReg(flag){
      console.log(flag)
      this.registerShow=flag
    }
  }
}
</script>

<style scoped>
.login_container{
  position: static;
  widows: 100%;
  height: 100%;
  background-color: #17233d;
}
.login_language{
  position: absolute;
  top: 2%;
  right: 3%;
}
.login_wrap{
  position: absolute;
  top: 40%;
  left: 50%;
  width: 1360px;
  transform: translate(-50%,-50%);
}
.login_wrap .head{
  position: relative;
  width: 100%;
  height: 120px;
  background: url(@/assets/head.gif) no-repeat 50%;
  background-size: 100%;
}
.login_wrap .login_ctf_left_wrap{
  position: relative;
  width: 700px;
  height: 375px;
}
@keyframes rotation{
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.login_wrap .login_ctf_left{
  position: absolute;
  right: 50px;
  top: -50px;
  height: 476px;
  animation: rotation 15s linear infinite;
}
.login_wrap .login_ctf_right_wrap{
  height: 375px;
  position: absolute;
}
.login_footer{
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>