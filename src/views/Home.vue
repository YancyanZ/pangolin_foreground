<template>
<div class="home w">
  <template>
    <a-back-top />
  </template>
  <!-- 走马灯 -->
  <a-carousel arrows class="shuffling" autoplay>
    <!-- 左切换箭头 -->
    <div
      slot="prevArrow"
      slot-scope="props"
      class="custom-slick-arrow"
      style="left: 10px;zIndex: 1"
    >
      <a-icon type="left" />
    </div>
    <!-- 右切换箭头 -->
    <div
      slot="nextArrow" slot-scope="props"
      class="custom-slick-arrow"
      style="right: 10px"
    >
      <a-icon type="right" />
    </div>
    <!-- 轮播图片 -->
    <div v-for="item in carouselData" :key="item.crlId"><img :src="`data:image/png;base64,${item.crlPicture}`" alt=""></div>
  </a-carousel>
  <!-- 栏目 -->
  <HomeColumn title="栏目分类" icon="tags">
    <template v-slot:content>
      <a-carousel class="column" autoplay>
        <div v-for="(columns,index) in columnData" :key="index">
          <a-row>
            <a-col :span='8' v-for="item in columns" :key="item.colId"><ColumnCard :column="item"></ColumnCard></a-col>
          </a-row>
        </div>
      </a-carousel>
    </template>
  </HomeColumn>
  <!-- 精品课程 -->
  <HomeColumn title="精品课程" icon="read">
    <template v-slot:content>
      <a-row>
        <!-- 精品课程卡片 -->
        <a-col :span='6' v-for="item in courseProData" :key="item.traId">
          <CourseCard :coursePro="item"></CourseCard>
        </a-col>
      </a-row>
    </template>
  </HomeColumn>
  <!-- 实训 -->
  <HomeColumn title="实训" icon="dashboard">
    <template v-slot:content>
      <a-row>
        <a-col :span='6' v-for="item in trainingData" :key="item.id">
          <TrainingCard :training="item"></TrainingCard>
        </a-col>
      </a-row>
      <button class="more"><a href="#">更多</a></button>
    </template>
  </HomeColumn>
  <!-- 工具 -->
  <HomeColumn title="工具" icon="tool">
    <template v-slot:content>
      <a-row>
        <a-col :span="2" v-for="item in toolData" :key="item.toolId">
          <button class="tool-button">
            <a href="#">
              <a-icon type="tool" style="marginRight:5px"></a-icon>
              {{item.toolName}}
            </a>
          </button>
        </a-col>
      </a-row>
    </template>
  </HomeColumn>
</div>

</template>

<script>
import HomeColumn from '@/components/Home/HomeColumn.vue'
import ColumnCard from '@/components/Home/ColumnCard.vue'
import CourseCard from '@/components/Home/CourseCard.vue'
import TrainingCard from '@/components/Home/TrainingCard.vue'
import {carouselList} from '@/api/Home/carousel.js'
import {courseProList} from '@/api/Home/course.js'
import {traningList} from '@/api/Home/training.js'
import {toolList} from '@/api/Home/tool.js'
import {columnlList} from '@/api/Home/column.js'

export default {
  name:'home',
  components:{
    HomeColumn,
    ColumnCard,
    CourseCard,
    TrainingCard
  },
  data(){
    return {
      // 轮播图
      carouselData:[],
      // 精品课程
      courseProData:[],
      // 实训
      trainingData:[],
      // 工具
      toolData:[],
      // 专栏
      columnData:[]
    }
  },
  created(){
    // 获取轮播图
    this.getCarouselList()
    // 获取精品课程
    this.getCourseProList()
    // 获取实训
    this.getTrainingList()
    // 获取工具列表
    this.getToolList()
    // 获取专栏列表
    this.getColumnList()
  },
  methods:{
    // 获取轮播图
    async getCarouselList(){
      const { data: res } = await carouselList()
      this.carouselData = res
      console.log(this.carouselData)
    },
    // 获取精品课程
    async getCourseProList(){
      const { data: res } = await courseProList()
      this.courseProData = res
      
    },
    // 获取实训列表
    async getTrainingList(){
      const { data: res } = await traningList()
      this.trainingData = res
    },
    // 获取工具列表
    async getToolList(){
      const { data: res } = await toolList()
      this.toolData = res
    },
    // 获取专栏列表
    async getColumnList(){
      const { data: res } = await columnlList()
      this.columnData = res
      console.log(res)
    }
  }
}
</script>

<style scoped>
.ant-back-top{
  right: 50px;
  bottom: 50px;
}

.ant-back-top,
.ant-back-top >>> .ant-back-top-content{
  border-radius: 0;
}
.shuffling{
  height: 375px;
  margin-top: 70px;
  overflow: hidden;
}

.column >>> .slick-dots button,
.shuffling >>> .slick-dots button {
  background-color: #000;
  opacity: 0.1;
}

.column >>> .slick-dots .slick-active button:hover,
.shuffling >>> .slick-dots .slick-active button:hover {
  background-color: #000;
  opacity: 0.3;
}

.column >>> .slick-dots .slick-active button:focus,
.shuffling >>> .slick-dots .slick-active button:focus {
  background-color: #000;
  opacity: 0.3;
}

.column >>> .slick-dots .slick-active button,
.shuffling >>> .slick-dots .slick-active button {
  background-color: #000;
  opacity: 0.3;
}

.shuffling >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #000;
  opacity: 0;
}

.shuffling:hover >>> .custom-slick-arrow {
  opacity: 0.3;
}

.shuffling >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  color: #000;
  opacity: 0.5;
}

.column div{
  height: 310px;
}

.more{
  display: block;
  width: 60px;
  height: 32px;
  padding: 0 15px;
  margin: 16px auto;
  background-color: #f6ab39;
  border: 1px solid #f6ab39;
  border-radius: 4px;
  outline: none;
  color: #fff;
  font-size: 14px;
  transition: all 0.6s;
}
.more a{
  color: #fff;
}
.more:hover {
  background-color: #fff;
}
.more:hover a{
  color: #57a3f3;
}
.tool-button{
  width: 103px;
  height: 32px;
  padding: 0 10px;
  margin-top: 10px;
  background-color: #f90;
  border: 1px solid #f90;
  border-radius: 4px;
  outline: none;
  color: #fff;
  font-size: 14px;
  transition: all 0.6s;
}
.tool-button a{
  color: #fff;
}
.tool-button:hover{
  background-color: #ffad33;
}
</style>