// 取数据

// 引入 axios 模块（封装的ajax）
import axios from "axios"

var $http=axios.create({
    baseURL: 'https://cnodejs.org/api/v1/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });


//获取栏目
function getItemsList(options){

    // 默认参数
  var newOptions=Object.assign({
        limit:6,
        page:1,
    },options)
    
    return $http({
        url: '/topics',

        method: 'get',

        params:newOptions
    })
}

function getArticle(id){
        return $http.get('/topic/'+id)
}

// 获取主题详情

  export {getItemsList,getArticle}