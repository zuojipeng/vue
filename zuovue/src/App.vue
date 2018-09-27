<template>
  <div id="app">
    <router-view/>

    <nav class="footer">
        <ul>
          <router-link to="/" tag="li" :class="resPath=='index'?'fontColor':''">首页</router-link>
          <router-link to="/xs" tag="li" :class="resPath=='xs'?'fontColor':''">新手入门</router-link>
          <router-link to="/me" tag="li" :class="resPath=='me'?'fontColor':''">关于我们</router-link>
        </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  // 计算属性
  computed:{
    resPath:function(){

      var arr=this.$route.path.split('/');

      return arr[1];
    }
  }
}
</script>

<style lang="scss">

// 引入基础的样式
@import './assets/sass/base.scss' ;

    nav.footer{
      position: fixed;
      bottom:0;
      left: 0;
      width:100%;
      height:rem(80px);
      background: #444;
      ul{
        width:100%;
        height:rem(80px);
        display: flex;
        color:#bfb;
        li{
          line-height: rem(80px);
          font-size:rem(40px);
          width:33.33%;
          text-align: center;
          &.fontColor{
              color:#fff;
              background: #333;
          }
        }
      }
    }

</style>
