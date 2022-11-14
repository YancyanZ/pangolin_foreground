<template>
  <div class="header">
    <header class="w header-container">
      <!-- logo -->
      <div class="logo">
        <img src="@/assets/logo.svg" alt="" width="100px" />
      </div>
      <!-- 账户 -->
      <div class="account">
        <AvatarDropdown></AvatarDropdown>
      </div>
      <!-- 导航菜单 -->
      <a-menu v-model="current" mode="horizontal">
        <a-menu-item key="home">
          <router-link to="/home">首页</router-link>
        </a-menu-item>
        <a-menu-item key="training">
          <router-link to="/training">N-实训</router-link>
        </a-menu-item>
        <a-menu-item key="trainingdetails">
          <router-link to="/trainingdetails">实训详情</router-link>
        </a-menu-item>
        <a-menu-item v-for="item in menuList" :key="item.navId">
          <router-link to="/home">{{ item.navName }}</router-link>
        </a-menu-item>
      </a-menu>
    </header>
  </div>
</template>

<script>
import AvatarDropdown from './AvatarDropdown.vue'
export default {
  name: 'Header',
  components: {
    AvatarDropdown
  },
  props: {
    menuList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      current: ['home']
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 64px;
  background-color: #fff;
  .header-container {
    position: relative;
  }
  .logo {
    margin-top: 2px;
    float: left;
  }
  .account {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
  }
  .ant-menu,
  .ant-menu-item,
  .ant-menu-item:hover,
  .ant-menu-item-selected {
    border-bottom: none;
  }
  .ant-menu-item {
    height: 64px;
    padding: 0 30px;
    line-height: 64px;
  }
  .ant-menu-item:hover {
    background: linear-gradient(#fe8900, #f6ab39);
    a {
      color: #fff;
    }
  }
  .ant-menu-item-selected {
    background: linear-gradient(#fe8900, #f6ab39);
    a {
      color: #fff;
    }
  }
}
</style>
