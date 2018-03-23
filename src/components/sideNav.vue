<style scoped>
  .sideNav {
    position: fixed;
    width: 100px;
    height: 100%;
    left: 0;
    top: 0;
    border-right: 1px solid white;
    color: white;
  }

  .sideNav li {
    height: 70px;
    text-align: center;
    margin-top: 90px;
  }
  .sideNav li img{ width: 50px; height: 50px;}

  .sideNav li:first-child {
    padding-top: 50px
  }
  .sideNav li div{ margin-top: 5px;}

  a:link {
    color: white
  }

  a {
    text-decoration: none;
    color: white;
  }
</style>
<template>
  <div class="sideNav">
    <ul>
      <li>
        <router-link to="/index2">RENMO</router-link>
      </li>
      <li>
        <router-link to="/index2"> <img src="../assets/index.png" /><div> 首页</div></router-link>
      </li>
      <li>
        <router-link to="/team"><img src="../assets/jianjie.png" /><div>团队</div></router-link>
      </li>
      <li>
        <router-link to="/customer"><img src="../assets/kehu.png" /><div>客户</div></router-link>
      </li>
      <li>
        <router-link to="/example"><img src="../assets/yewu.png" /><div>案列</div></router-link>
      </li>
      <li>
        <router-link to="/telphone"><img src="../assets/lianxi.png" /><div>13718910525</div></router-link>
      </li>
      <li>
        <router-link to="/resources"><img src="../assets/ziyuan.png" /><div>独特资源</div></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {}
    }, created(){

    }, mounted(){

    }, methods: {}
  }
</script>
