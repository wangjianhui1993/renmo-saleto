<style scoped>
  .main {
    margin-left: 100px;
    margin-top: 50px;
    color: white;
  }
</style>
<template>
  <div class="main">
    设计
    <son :child-msg="msg"></son> <!-- child-msg  是son.vue用来接收数据的名字 用来接收数据的名字必须是驼峰命名   msg是变量 -->

    {{ri}}
  </div>
</template>

<script>
  import son from '../components/son.vue'
  export default {
    name: '',
    data () {
      return {
        msg:true,
        ri:true
      }
    }, created(){

    }, mounted(){

    }, methods: {}
    ,components:{
      son
    }
  }
</script>
