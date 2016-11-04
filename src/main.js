import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

// 创建一个路由对象用于管理页面的路由
const router = new VueRouter({
  mode: 'history',
  routes: routes
});

window.__lendApp__ = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})*/
