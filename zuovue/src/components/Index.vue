<template>
  <div class="index">

    
        <div class="logo"><img src="https://cnodejs.org/public/images/cnodejs_light.svg" alt=""></div>
    <!-- 话题导航 -->
    <nav class="top">
        <ul>
            <router-link to="/index/" tag="li" :class="(resPath==''||resPath==undefined)?'fontColor':''">全部</router-link>
            <router-link to="/index/good" tag="li" :class="resPath=='good'?'fontColor':''">精华</router-link>
            <router-link to="/index/share" tag="li" :class="resPath=='share'?'fontColor':''">分享</router-link>
            <router-link to="/index/ask" tag="li" :class="resPath=='ask'?'fontColor':''">问答</router-link>
            <router-link to="/index/job" tag="li" :class="resPath=='job'?'fontColor':''">招聘</router-link>
            <router-link to="/index/dev" tag="li" :class="resPath=='dev'?'fontColor':''">客户测试</router-link>
        </ul>
    </nav>

    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
    computed:{
    resPath:function(){

      var arr=this.$route.path.split('/');

      return arr[2];
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// 引入基础的样式
@import '../assets/sass/base.scss' ;

div.logo{
  width:100%;
  height:rem(100px);
  background:#444;
  overflow: hidden;
  img{
    width:rem(245px);
    height:rem(63px);
    display: block;
    margin:0 auto;
    margin-top: rem(10px);
    // vertical-align: middle;
  }
}

nav.top{
    width:rem(750px);
    height:rem(80px);
    background: #f6f6f6;
    ul{
        width:rem(750px);
        height:rem(80px);
        display:flex;
        justify-content: space-around;
        li{
            align-self: center;
            height:rem(50px);
            padding: rem(5px) rem(20px);
            font-size: rem(30px);
            color:#8ec405;
            border-radius:rem(10px);
            line-height: rem(50px);
            // line-height: rem(80px);
            &.fontColor{
              color:#444;
              background:orange;

            }
        }
    }
}

</style>
