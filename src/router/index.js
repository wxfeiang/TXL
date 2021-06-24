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
  { path: '*', redirect: '/' },
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/home.vue'),
    meta: {
      title: '首页',
    },
  },
]

const router = new VueRouter({
  routes,
})
router.beforeEach((to, from, next) => {
  console.log(JSON.parse(localStorage.getItem('loginstatus')), 'loginstatus---------')
  const isLogin = JSON.parse(localStorage.getItem('loginstatus')) ? true : false
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.path == '/login') {
    console.log('sss')
    next()
  } else {
    isLogin ? next() : next('/login')
  }
})
export default router
