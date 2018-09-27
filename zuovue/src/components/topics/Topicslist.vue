<template>
  <div class="all">

    <loading v-if="!items.length"></loading>
    <ul class="items">
      <li class="item" v-for="item in items">
        <img v-lazy="item.author.avatar_url" alt="">
        <div class="tab">

          <div class="bj" v-if="item.top">置顶</div>
          <div class="bj" v-else-if="item.good">精华</div>

          <div class="mo" v-else>{{tab[item.tab]}}</div>
        </div>

        <router-link :to="'/index/show/'+item.id" tag="div" class="title">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

import Loading from '@/components/Loading';


export default {
  name: 'All',
  data () {
    return {
    //  所有栏目分类
      tab:{
        share:'分享',
        ask:'问答',
        job:'招聘',
        dev:'测试'
      }
    }
  },

    // 引入组件
  components:{
      Loading
  },

  // 接收数据
  props:['items'],

  mounted:function(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// 引入基础的样式
@import '../../assets/sass/base.scss' ;

.items{
  width:100%;
  .item{
    display: flex;
    height:rem(80px);
    align-items: center;
    margin-top: rem(20px);
    border-bottom: 1px solid #ccc;
    img{
      align-self: center;
      display: block;
      margin:0 rem(10px);
      width:rem(60px);
      height:rem(60px);
      border-radius:rem(10px);
    }
    .tab{
      .bj{
        width:rem(70px);
        height:rem(40px);
        background:#82bb05;
        color:#faffff;
        border-radius:rem(5px);
        text-align: center;
        line-height: rem(40px);
      }
        .mo{
        width:rem(70px);
        height:rem(40px);
        background:#ccc;
        color:#333;
        border-radius:rem(5px);
        text-align: center;
        line-height: rem(40px);
      }
    }

    .title{
      width:rem(550px);
      margin-left: rem(10px);
      height:rem(80px);
      line-height: rem(80px);
      font-size:rem(30px);
      color:#333;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}

</style>
