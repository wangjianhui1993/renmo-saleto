<style scoped>
  .main {
    margin-left: 100px;
    /*margin-top: 50px;*/
    padding-top: 50px;
    color: white;
    height: 1200px;
    overflow: auto;
    overflow-X: hidden;
  }

  .content {
    width: 1400px;
    margin: 0 auto;
  }

  .demo-title {
    height: 54px;
    padding-left: 18px;
    line-height: 54px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;/*no*/
    color: #555;
  }

  .demos {
    width: 48%;
    margin-right: 2%;
    float: left;
    background: white;
    margin-top: 5%;
  }
  .demos:nth-child(1),.demos:nth-child(2){
    margin-top: 0;
  }

  .demo-tool {
    width: 100%;
    height: 54px;
    padding-left: 18px;
    line-height: 54px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    color: #555;
  }
  .demos-img img {
    width: 100%;
  }

  .ct{ width: 1200px;height: 1200px;}
  .video-width{
    width: 30%;
    float: left;
    margin-left: 2%;
    margin-top: 5%;
    background: white;
  }

</style>
<template>
  <div>
    <tostbg v-if="tost" @up="change" :msg="msg" :child-msg="msg2"></tostbg>
    <div class="main">

     <div class="video-width" v-for="(item,index) in demos" @click="tosts(index)">
         <div class="demo-title">{{item.title}}</div>
         <div class="demos-img"><img :src='item.pgimg'></div>
         <div class="demo-tool">{{item.title}}</div>

     </div>


      <!--<div class="content">-->
        <!--<div class="demos" v-for="(item,index) in demos" @click="tosts(index)">-->
          <!--<div class="demo-title">{{item.title}}</div>-->
          <!--<div class="demos-img"><img :src='item.pgimg'></div>-->
          <!--<div class="demo-tool">{{item.title}}</div>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="demos">-->
        <!--<div class="demo-title">测试数据</div>-->
        <!--<div class="demos-img"><img src='./static/yun.jpg'></div>-->
        <!--<div class="demo-tool"></div>-->
      <!--</div>-->
      <div class="content" style="height: 100px;float: left;"></div>
    </div>
  </div>
</template>

<script>
  import tostbg from '../components/tost.vue'
  export default {
    name: '',
    data () {
      return {
        demos:[
          {title:'AWSome Day 云计算技术课堂',pgimg:'./static/yun.jpg',tool:'标签：亚马逊、云计算、邀请函、AWS',link:'http://xps.utuiwu.com/aws/index.html'},
          {title:'熊孩子别跑',pgimg:'./static/yun.jpg',tool:'标签：熊孩子',link:'http://xps.utuiwu.com/beibei/index.html'},
          {title:'从前有座山',pgimg:'./static/yun.jpg',tool:'标签：从前',link:'http://xps.utuiwu.com/binbin/chengguang/index.html'},
          {title:'和信贷',pgimg:'./static/yun.jpg',tool:'标签：熊孩子',link:'http://xps.utuiwu.com/binbin/hexindai/index.html'},
          {title:'一气沈阳',pgimg:'./static/yun.jpg',tool:'标签：熊孩子',link:'http://xps.utuiwu.com/binbin/yiqig/index.html'},
          {title:'一气广州',pgimg:'./static/yun.jpg',tool:'标签：熊孩子',link:'http://xps.utuiwu.com/binbin/yiqis/index.html'},
          {title:'京东便民',pgimg:'./static/yun.jpg',tool:'标签：熊孩子',link:'http://xps.utuiwu.com/binbin/bianming/index.html'},
          {title:'雀巢咖啡',pgimg:'./static/yun.jpg',tool:'标签：熊孩子',link:'http://jtest.i-h5.cn/Nestle/index.html'},
          {title:'老司机驾照',pgimg:'./static/yun.jpg',tool:'标签：熊孩子',link:'http://www.weilaiclass.com/game/laosiji/index.html'}
        ],
        tost:false,
        msg:'',
        msg2:''
      }
    }, created(){

    }, mounted(){


    }, methods: {
        tosts(index){
          this.tost=true;
          this.msg2=this.demos[index].link;
          console.log(this.tost)
        },
      change(msg){
        this.tost=msg;
        console.log(msg);
      }
    },components:{
      tostbg
    }
  }
</script>
