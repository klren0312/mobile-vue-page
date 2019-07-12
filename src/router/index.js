import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: resolve => require(['@/views/homePage/index.vue'], resolve)
    },
    {
      path: '/form',
      name: 'formPage',
      component: resolve => require(['@/views/formPage/index.vue'], resolve)
    },
  ]
})
