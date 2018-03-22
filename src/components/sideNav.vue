<style scoped>
  .sideNav {
    position: fixed;
    width: 100px;
    height: 100%;
    left: 0;
    top: 0;
    border-right: 1px solid red;
    color: white;
  }

  .sideNav li {
    height: 70px;
    text-align: center
  }

  .sideNav li:first-child {
    padding-top: 50px
  }

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
        <router-link to="/index2"><span></span>首页</router-link>
      </li>
      <li>
        <router-link to="/team"><span></span>团队</router-link>
      </li>
      <li>
        <router-link to="/customer"><span></span>客户</router-link>
      </li>
      <li>
        <router-link to="/example"><span></span>案列</router-link>
      </li>
      <li>
        <router-link to="/telphone"><span></span>13718910525</router-link>
      </li>
      <li>
        <router-link to="/resources"><span></span>独特资源</router-link>
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
