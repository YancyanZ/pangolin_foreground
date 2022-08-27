<template>
  <div class="training-card">
    <a href="#">
      <a-card :title=name>
        <a-row>
          <a-col :span="8">
            <a-tag>{{difficulty}}</a-tag>
          </a-col>
          <a-col :span="8">
            <a-tag>{{score}}</a-tag>
          </a-col>
          <a-col :span="8">
            <a-tag>{{tags}}</a-tag>
          </a-col>
        </a-row>
        <a-divider />
        <a-row>
          <a-col :span="24" style="color:#bebebe">
            solved:0
          </a-col>
        </a-row>
      </a-card>
    </a>

  </div>
</template>

<script>
export default {
  name:'training-card',
  props:[
    'name',
    'difficulty',
    'score',
    'tags'
  ]
}
</script>

<style scoped>
.training-card{
  padding:0 8px;
}
.training-card .ant-card{
  height: 230px;
  margin-top: 10px;
  text-align: center;
}
.training-card .ant-card:hover{
  box-shadow: 0 1px 6px rgba(0, 0, 0, .2)
}
.training-card .ant-card >>> .ant-card-head{
  background-color: #f6ab39;
  font-size: 22px;
  color: #fff;
}
.training-card .ant-card >>> .ant-card-body{
  padding: 0;
}
.ant-tag{
  width: 66px;
  height: 36px;
  margin: 16px auto 0;
  padding: 0 8px;
  background-color: #f6ab39;
  color: #fff;
  font-size: 16px;
  line-height: 34px;
}

</style>