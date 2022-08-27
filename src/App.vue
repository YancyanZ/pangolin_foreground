<template>
  <router-view></router-view> 
</template>

<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'

export default {
  name: 'app',
  data() {
    return {
      zh_CN
    }
  }
}
</script>

<style></style>
