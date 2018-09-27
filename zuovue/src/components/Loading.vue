<template>
  <div class="loading">
    <img :src="'../../static/images/haoloading.gif'" alt="">
  </div>
</template>

<script>
export default {
  name: 'Loading',
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

img{
    width:100%;
    display: block;
    margin-top:rem(200px);
}

</style>
