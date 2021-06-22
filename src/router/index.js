import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '*',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue'),
    meta: {
      title: '通讯录',
    },
  },
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue'),
    meta: {
      title: '通讯录',
    },
  },
]

const router = new VueRouter({
  routes,
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router
