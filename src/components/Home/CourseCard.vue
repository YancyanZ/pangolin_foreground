<template>
  <div class="course-card">
    <a href="#">
      <a-card>
        <div class="course-img">
          <img :src=courseImage>
        </div>
        <a-tooltip>
          <template slot="title">
            {{title}}
          </template>
          <h3 class="title">{{title}}</h3>
        </a-tooltip>
        <div class="count-icon">
          <a-tooltip v-if="charpterCount!=0">
            <template slot="title">
              章节数量
            </template>
            <span class="charpter">
              <a-icon type="file-text" theme="filled" style="color:#f6ab39;marginRight:3px;"></a-icon>{{charpterCount}}
            </span>
          </a-tooltip>
          <a-tooltip v-if="trainingCount!=0">
            <template slot="title">
              实训数量
            </template>
            <span class="training" >
              <a-icon type="dashboard" style="color:#f6ab39;marginRight:3px;"></a-icon>{{trainingCount}}
            </span>
          </a-tooltip>
          <a-tooltip v-if="experimentCount!=0">
            <template slot="title">
              实验数量
            </template>
            <span class="experiment" >
              <a-icon type="experiment" theme="filled" style="color:#f6ab39;marginRight:3px;"></a-icon>{{experimentCount}}
            </span>
          </a-tooltip>
          <a-tooltip  v-if="powerpointCount!=0">
            <template slot="title">
              课件数量
            </template>
            <span class="powerpoint">
              <a-icon type="snippets" theme="filled" style="color:#f6ab39;marginRight:3px;"></a-icon>{{powerpointCount}}
            </span>            
          </a-tooltip>
        </div>
        <a-row>
          <a-col :span="6" :offset="18">
            <a-tag color="red">{{tag}}</a-tag>
          </a-col>
        </a-row>
      </a-card>
    </a>
  </div>
</template>

<script>
export default {
  name:'course-card',
  props:[
    'courseImage',
    'title',
    'charpterCount',
    'trainingCount',
    'experimentCount',
    'powerpointCount',
    'tag'
  ]
}
</script>

<style scoped>
.course-card{
  padding: 0 8px;
}
.course-card .ant-card{
  margin-top: 16px;
  height: 265px;
}
.course-card .ant-card >>> .ant-card-body{
  padding: 0;
}
.course-card .ant-card:hover{
  box-shadow: 0 1px 6px rgba(0, 0, 0, .2)
}
.course-card .ant-card .course-img,
.course-card .ant-card .course-img img{
  width:100%;
  height: 180px;
}
.course-card .ant-card .course-img{
  overflow: hidden;
}
.course-card .ant-card img{
  transition: transform .6s;
}

.course-card .ant-card img:hover{
  transform: scale(1.2);
}

.course-card .ant-card .title{
  display: inline-block;
  margin:5px 0 0;
  padding-left: 10px;
  font-size: 18px;
  font-weight: 500;
  color: #17233d;
}
.course-card .ant-card .count-icon{
  padding-left: 10px;
  color:#f6ab39;
}
.course-card .ant-card .count-icon span{
  margin-right: 5px;
}
.course-card .ant-card .anat-tag{
}
</style>