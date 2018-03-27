<style scoped>
  .bottomNav {
    position: fixed;
    width: 100%;
    height: 80px;
    border: 1px solid white;
    bottom: 0px;
    left: 100px;
    background: white;
    opacity: 0.8;

  }

  .bottomNav li {
    width: 70px;
    height: 100px;
    text-align: center;
    float: left;
    color: black;
    margin-left: 80px;
  }
  .bottomNav li img{ width: 40px; height: 40px;margin-top: 10px;}
  .bottomNav li div{ color: black;}

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
        <router-link to="/h5"><img src="../assets/h5e.png" /><div>H5</div></router-link>
      </li>
      <li>
        <router-link to="/video"><img src="../assets/video.png" /><div>视频</div></router-link>
      </li>
      <li>
        <router-link to="/smallProgram"><img src="../assets/small.png" /><div>小程序</div></router-link>
      </li>
      <li>
        <router-link to="/VR"><img src="../assets/VR.png" /><div>VR/AR</div></router-link>
      </li>
      <li>
        <router-link to="/D3"><img src="../assets/3d.png" /><div>3D/全息</div></router-link>
      </li>
      <li>
        <router-link to="/design"><img src="../assets/design.png" /><div>设计</div></router-link>
      </li>
      <li>
        <router-link to="/event"><img src="../assets/event.png" /><div>事件</div></router-link>
      </li>
      <li>
        <router-link to="/PR"><img src="../assets/Pr.png" /><div>PR</div></router-link>
      </li>
      <li>
        <router-link to="/operating"><div></div>双微运营</router-link>
      </li>
      <li>
        <router-link to="/SEO"><div></div>SEO/舆情</router-link>
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
