import Vue from 'vue'
import Router from 'vue-router'
import LoginOrRegi from '@/components/LoginOrRegi'
import Index from '@/components/Index'
import NotFound from '@/components/NotFound'
import Forget from '@/components/Forget'


Vue.use(Router)
export default new Router({
  routes: [{
      path: '/',
      name: 'LoginOrRegi',
      component: LoginOrRegi
    },
    {
      path: '/sign',
      name: 'LoginOrRegi',
      component: LoginOrRegi
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
    },
    {
      path: '/forget',
      name: 'Forget',
      component: Forget,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
  ]
})
