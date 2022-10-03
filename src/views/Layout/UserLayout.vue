<template>
  <div>
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
import {menuList} from '@/api/Home/menu.js'
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
      const {data:res} = await menuList()
      this.menuData=res
    }
  }
}
</script>

<style lang="less" scope>
</style>