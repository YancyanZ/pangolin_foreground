<template>
  <div id="app-layout">
    <Header :menuList="this.menuData"></Header>
    <main>
      <div class="w">
        <router-view></router-view>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import {Listmenu} from '@/api/Home/menu.js'
import Header from '@/components/Home/Header.vue'
import Footer from '@/components/Home/Footer.vue'
export default {
  name:'Layout',
  components:{
    Header,
    Footer
  },
  data(){
    return {
      menuData:[]
    }
  },
  created(){
    this.getMenulList()
  },
  methods:{
    async getMenulList(){
      const {data:res} = await Listmenu()
      this.menuData=res
      console.log(res)
    }
  }
}
</script>

<style lang="less" scope>
#app-layout{
    background: url(@/assets/banner-bj.jpg) no-repeat;
    background-size: 100% 480px;
}
</style>