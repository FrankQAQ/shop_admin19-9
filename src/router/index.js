import Vue from 'vue'
import Router from 'vue-router'
// 导入Login组件
import Login from '@/components/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Login'
    },
    {
      path: '/Login',
      component: Login
    }
  ]
})
