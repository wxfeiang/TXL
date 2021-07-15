import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
    meta: {
      title: '登录',
    },
  },
  { path: '*', redirect: '/' },
  {
    path: '/',
    name: 'homeIndex',
    component: () => import(/* webpackChunkName: "login" */ '../views/homeIndex.vue'),
    meta: {
      title: '首页',
    },
    redirect: '/home2',
    children: [
      {
        path: '/home2',
        name: 'home2',
        meta: {
          title: '首页',
        },
        component: () => import(/* webpackChunkName: "home" */ '../views/home2.vue'),
      },
      {
        path: '/desc',
        name: 'desc',
        meta: {
          title: '首页',
        },
        component: () => import(/* webpackChunkName: "home" */ '../views/desc.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})
router.beforeEach((to, from, next) => {
  // console.log(JSON.parse(localStorage.getItem('loginstatus')), 'loginstatus---------')
  // const isLogin = JSON.parse(localStorage.getItem('loginstatus')) ? true : false
  // console.log(store, 'store')
  // store.dispatch('setcurrRouter', to.path)
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
  // if (to.path == '/login') {
  //   next()
  // } else {
  //   // isLogin ? next() : next('/login')
  // }
})
export default router
