import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Xs from '@/components/Xs'
import Me from '@/components/Me'

import Loading from '@/components/Loading'

// 引入子组件
import All from '@/components/topics/All'
import Good from '@/components/topics/Good'
import Share from '@/components/topics/Share'
import Ask from '@/components/topics/Ask'
import Job from '@/components/topics/Job'
import Dev from '@/components/topics/Dev'

// 详情组件
import Show from '@/components/topics/Show'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index,
      
      children:[
          {
            path:'/',
            component:All
          },
          {
            path:'good',
            component:Good
          },
          {
            path:'share',
            component:Share
          },
          {
            path:'ask',
            component:Ask
          },
          {
            path:'job',
            component:Job
          },
          {
            path:'dev',
            component:Dev
          },
          {
            path:'show/:id',
            component:Show
          }
      ]

    },
    {
      path: '/xs',
      name: 'Xs',
      component: Xs
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
       path:'/loading',
       component:Loading
    },
    {
      path:'/*',
      redirect:'/index'
    }
  ]
})
