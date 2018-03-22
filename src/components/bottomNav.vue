<style scoped>
  .bottomNav {
    position: fixed;
    width: 100%;
    height: 100px;
    border: 1px solid white;
    bottom: 0px;
    left: 100px;
    color: white;
  }

  .bottomNav li {
    width: 70px;
    height: 100px;
    text-align: center;
    float: left;
    line-height: 100px;
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
  <div class="bottomNav">
    <ul>
      <li>
        <router-link to="/h5"><span></span>h5</router-link>
      </li>
      <li>
        <router-link to="/video"><span></span>视频</router-link>
      </li>
      <li>
        <router-link to="/smallProgram"><span></span>小程序</router-link>
      </li>
      <li>
        <router-link to="/VR"><span></span>VR/AR</router-link>
      </li>
      <li>
        <router-link to="/D3"><span></span>3D/全息</router-link>
      </li>
      <li>
        <router-link to="/design"><span></span>设计</router-link>
      </li>
      <li>
        <router-link to="/event"><span></span>事件</router-link>
      </li>
      <li>
        <router-link to="/PR"><span></span>PR</router-link>
      </li>
      <li>
        <router-link to="/operating"><span></span>双微运营</router-link>
      </li>
      <li>
        <router-link to="/SEO"><span></span>SEO/舆情</router-link>
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
