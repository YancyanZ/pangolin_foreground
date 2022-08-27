<template>
  <div class="footer">
    <footer class="w copyright">
      <a-row class="service">
        <a-col :span="6">
          <a href="javascript:">帮助手册</a>
        </a-col>
        <a-col :span="6">
          <a href="javascript:">关于我们</a>
        </a-col>
        <a-col :span="6">
          <a href="javascript:">联系我们</a>
        </a-col>
        <a-col :span="6">
          <a href="javascript:">系统监控</a>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">版权所有 @copyright <a href="http://www.uenit.cn">www.uenit.cn</a> All Right Reserved</a-col>
      </a-row>
      <a-row>
        <a-col :span="24"><a href="http://beian.miit.gov.cn/">浙ICP备15025374号-4</a></a-col>
      </a-row>
      <a-row>
        <a-col :span="24">v1.6-10-20210406-0</a-col>
      </a-row>
    </footer>
  </div>
</template>

<script>
export default {
  name:'footer'
}
</script>

<style lang="less" scoped>
.footer{
  margin-top: 15px;
  background:url('@/assets/footer-bj.jpg') no-repeat;
  background-size: 100% 100%;
  height:192px;
  color: #f6ab39;
  padding-top: 50px;
  text-align: center;
  .copyright a{
  color: #f6ab39;
  }
  .ant-row{
    width: 400px;
    margin: 0 auto 10px;
  }
  .service{
    width: 300px;
  }
}
</style>