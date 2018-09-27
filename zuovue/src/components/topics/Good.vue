<template>
  <div class="good">
      <!-- 栏目列表 -->
      <topics-list :items="items"></topics-list>
      <infinite-loading @infinite="infiniteHandler" class="box" v-if="isloadingshow"></infinite-loading>
  </div>
</template>

<script>

// 引入加载栏目列表组件
import topicsList from '@/components/topics/Topicslist';

// 引入查询数据模块
import {getItemsList} from '@/getdata/topic.js'

// 引入刷新滑动组件
import InfiniteLoading from 'vue-infinite-loading';

export default {
  name: 'Good',
  data(){
    return{
      items:[],
      page:1,
      isloadingshow:true
    }
  },

  // 引入组件
  components:{
      topicsList,
      InfiniteLoading
  },

    // 滑动组件的方法
    methods: {
    infiniteHandler($state) {
      setTimeout(() => {

      getItemsList({limit:6,tab:'good',page:++this.page}).then((data)=>{
          this.items=this.items.concat(data.data.data);

          if(data.data.data.length==0){
            this.isloadingshow=false;
          }else{
            $state.loaded();
          }
      })
      }, 1000);
    },
  },

  mounted:function(){
    getItemsList({limit:6,tab:'good',page:this.page}).then((data)=>{
        this.items=data.data.data;
    })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

// 引入基础的样式
@import '../../assets/sass/base.scss' ;

.box{
  margin-bottom: rem(90px);
}

</style>
