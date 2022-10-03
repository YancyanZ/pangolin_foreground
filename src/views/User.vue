<template>
  <div class="user-container">
    <a-layout>
      <a-layout-sider width="256" theme="light">
        <a-menu
          mode="inline"
          :default-selected-keys="['1']"
          :open-keys.sync="openKeys"
          @click="handleClick"
        >
          <a-sub-menu key="sub1" >
            <span slot="title"><a-icon type="mail" /><span>个人设置</span></span>
            <a-menu-item key="1">
              <router-link to="info"><a-icon type="mail" /><span>我的信息</span></router-link>
            </a-menu-item>
            <a-menu-item key="2">
              <router-link to="avatar"><a-icon type="mail" /><span>我的头像</span></router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2" >
            <span slot="title"><a-icon type="mail" /><span>安全设置</span></span>
            <a-menu-item key="3">
              <a-icon type="mail" /><span>登录密码</span>
            </a-menu-item>
            <a-menu-item key="4">
              <a-icon type="mail" /><span>安全问题</span>
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout-content :style="{ padding: '20px 24px', minHeight: '800px' ,background: '#fff' }">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>

  </div>
</template>

<script>
export default {
  data(){
    return {
      openKeys:['sub1','sub2']
    }
  },
  methods: {
    handleClick(e) {
      console.log('click', e);
    },
  }
}
</script>

<style>
</style>