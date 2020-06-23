// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.config.productionTip = false
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'


Vue.use(VueMaterial)
Vue.use(Vuex)

var state = {
  isLogin:0
};
const mutations = {
  changeLogin(state,data){
    state.isLogin = data
  }
}

router.beforeEach((to,from,next)=>{
  if(sessionStorage.getItem('accessToken')){
    next()
  }else if(to.path == '/sign'){
    next()
  }else{
    next({path:'/sign'})
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
