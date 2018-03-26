<style scoped>
    .tost {
      width:100%;
      height: 100%;
      position: fixed;
      background: rgba(0,0,0,0.7);
      z-index: 999;
    }
  .ct{
    width: 640px;
    height: 1000px;
    margin: 90px auto;
    background: white;
  }
  .close{
    width: 40px;
    height: 40px;
    position: absolute;
    top:20px;
    right: 20px;
    color: white;
  }
</style>
<template>
    <div class="tost" v-show="tost" >
      <div class="close" @click="close">关闭</div>
      <div class="ct">
         <iframe :src="childMsg" width="100%" height="100%">
         </iframe>
      </div>
      <!--<div style="width: 800px;height: 400px;margin: 0 auto;">-->
        <!--<iframe width="500" height="500" style="margin: 0 auto" src="https://www.baidu.com/"></iframe>-->
      <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: '',
        data () {
            return {
              tost:true
            }
        },props:["childMsg"]
      , created(){

      }, mounted(){

        }, methods: {
            close(){
              this.tost=!this.tost;
              this.$emit('up',this.tost)
            }
      }
    }
</script>
