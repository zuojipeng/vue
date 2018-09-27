<template>
  <div class="show">
    <h2 class="title">{{title}}</h2>
    <p class="author">作者：{{author}}</p>
    <div class="content" v-html="content"></div>
  </div>
</template>

<script>

// 引入查询数据模块
import {getArticle} from '@/getdata/topic.js'

export default {
  name: 'Show',
  data () {
    return {
      title:'',
      author:'',
      content:''
    }
  },

    mounted:function(){


        var id=this.$route.params.id


         getArticle (id).then((data)=>{
              //  console.log(data.data.data)

               this.title=data.data.data.title;

               this.author=data.data.data.author.loginname;

               //设置文章内容

               this.content=data.data.data.content;

         })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// 引入基础的样式
@import '../../assets/sass/base.scss' ;

h2.title{
    text-align: center;
    font-size:rem(40px);
    font-family: '楷体';
    font-weight: bold;
}
p.author{
    text-align: center;
    font-size:rem(30px);
    color:navy;
}

div.content{
    width:rem(710px);
    margin:0 auto;
    margin-top: rem(20px);
    margin-bottom: rem(90px);
    font-size:rem(18px);
    line-height: rem(50px);
}

</style>
