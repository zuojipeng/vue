<template>
  <div class="me">
    <div class="guanyu">
        <h1 class="title">关于</h1>
        <div class="content">
              CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。
              CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。
              CNode 的 SLA 保证是，一个9，即 90.000000%。
              社区目前由 @alsotang 在维护，有问题请联系：<a href="https://github.com/alsotang">https://github.com/alsotang</a>
              请关注我们的官方微博：<a href="http://weibo.com/cnodejs">http://weibo.com/cnodejs</a>
        </div>
    </div>

    <div class="youqing">
        <h1 class="title1">友情链接</h1>
        <div class="play">
          <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in images"><img :src="item" alt=""></div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
    </div>

    <h1 class="wx">更多请添加微信公众号</h1>
  </div>
</template>

<script>
export default {
  name: 'Me',
  data () {
    return {
      images:[
        '../../static/images/p1.png',
        '../../static/images/p2.png',
        '../../static/images/p3.png',
        '../../static/images/p4.png',
        '../../static/images/p5.png',
        '../../static/images/p6.png',
        '../../static/images/p7.png',
      ]
    }
  },

    // 钩子函数
  mounted:function(){
    // 配置swiper
    var mySwiper = new Swiper('.swiper-container', {
      autoplay:true,
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// 引入基础的样式
@import '../assets/sass/base.scss' ;

div.guanyu{
  width:rem(730px);
  margin:0 auto;
  .content{
      width:rem(680px);
      margin:0 auto;
      font-size:rem(18px);
      line-height: rem(50px);
  }
}

.play{
  width:rem(500px);
  height:rem(120px);
  border:1px solid blue;
  .swiper-slide{
    img{
       width:rem(500px);
       height:rem(120px);
    }
  }
}

h1.wx{
  text-align: center;
  color: #ff6699;
  margin-top: rem(50px);
}

</style>
