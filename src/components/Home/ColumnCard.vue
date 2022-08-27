<template>
  <div class="clumn-card">
    <a href="#">
      <a-card style="width:416px;height:267px">
        <span><img :src=image></span>
        <h3 class="card-name">{{name}}</h3>
        <p class="card-des">{{des}}</p>
      </a-card>
    </a>
  </div>
</template>

<script>
export default {
  name:'column-card',
  props:[
    'image',
    'name',
    'des'
  ]
}
</script>

<style scoped>
.ant-card{
  margin:0 auto;
  padding:16px;
}
.ant-card:hover{
  box-shadow: 0 1px 6px rgba(0, 0, 0, .2)
}
.ant-card img{
  width: 64px;
  height: 64px;
  margin: 22px auto 0;
}
.ant-card .card-name,
.ant-card .card-des{
  color: #2c3e50;
  text-align: center;
}


.ant-card .card-name{
  margin-top: 36px;
  margin-bottom: 0;
  font-size: 16px;
  font-weight: 800;
}
.ant-card .card-des{
  margin:10px auto
}
</style>