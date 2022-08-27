<template>
  <div class="w home-column">
    <h1 class="title">
      <a-icon :type=icon style="marginRight:20px;color:rgb(246, 171, 57);"></a-icon>{{title}}
    </h1>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name:'home-column',
  props:[
    'title',
    'icon'
  ]
}
</script>

<style scoped>
.title{
  margin: 30px 0 16px;
  text-align: center;
  font-size: 36px;
  color: #2c3e50;
}
</style>