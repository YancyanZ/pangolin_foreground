<template>
  <a-dropdown placement="bottomCenter" overlayClassName="dropdown">
    <span>
      <a-avatar size="default" icon="user"/>
      <span class="username">{{$store.state.username}}</span><a-icon type="down" />
    </span>
    <a-menu slot="overlay" >
      <a-menu-item key="settings"><router-link to="/center">个人设置</router-link></a-menu-item>
      <a-menu-item key="logout">我的成长</a-menu-item>
      <a-menu-item key="logout">我的战队</a-menu-item>
      <a-menu-item key="logout">退出登录</a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
export default {
  data(){
    return {
    }
  }
}
</script>

<style scoped lang="less">
.username{
  margin: 0 5px;
}
.dropdown{
  .ant-dropdown-menu{
    margin-top: 15px;
  }
}
</style>