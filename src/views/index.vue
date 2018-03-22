<style scoped>
  .box {
    width: 100%;
    height: 100%;
  }
</style>
<template>
  <div class="box">
    <sideNav></sideNav>
    <bottomNav></bottomNav>
    <router-view/>
  </div>
</template>

<script>
  import sideNav from '@/components/sideNav'
  import bottomNav from '@/components/bottomNav'
  export default {
    name: '',
    data () {
      return {

      }
    },
    components:{
      sideNav,bottomNav
    }
  }
</script>

