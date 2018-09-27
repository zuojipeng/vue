<template>
  <div class="xs">
    <h1>新手请加微信！</h1>
    <img src="../../static/images/code.jpg">
  </div>
</template>

<script>
export default {
  name: 'Xs',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    // 引入基础的样式
    @import '../assets/sass/base.scss';

    h1{
        text-align: center;
        font-size:rem(50px);
        color:#bfbfbf;
        line-height: rem(100px);
    }
    img{
      width:80%;
      display: block;
      margin:0 auto;
    }
</style>
