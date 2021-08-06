import store from '@/store'
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
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/index',
    name: 'index',
    component: () => import(/* webpackChunkName: "index" */ '../views/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
        },
        component: () => import(/* webpackChunkName: "home" */ '../views/home.vue'),
      },
      {
        path: '/Openaccount',
        name: 'Openaccount',
        meta: {
          title: '开户层',
        },
        component: () => import(/* webpackChunkName: "Openaccount" */ '../views/Openaccount.vue'),
      },
      {
        path: '/Ingold',
        name: 'Ingold',
        meta: {
          title: '入金层',
        },
        component: () => import(/* webpackChunkName: "Ingold" */ '../views/Ingold.vue'),
      },

      {
        path: '/Transaction',
        name: 'Transaction',
        meta: {
          title: '交易层',
        },
        component: () => import(/* webpackChunkName: "Transaction" */ '../views/Transaction.vue'),
      },
      {
        path: '/Subsist',
        name: 'Subsist',
        meta: {
          title: '存续层',
        },
        component: () => import(/* webpackChunkName: "Subsist" */ '../views/Subsist.vue'),
      },
      {
        path: '/Deactivation',
        name: 'Deactivation',
        meta: {
          title: '失活层',
        },
        component: () => import(/* webpackChunkName: "aboDeactivationut" */ '../views/Deactivation.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})
router.beforeEach((to, from, next) => {
  const isLogin = JSON.parse(localStorage.getItem('loginstatus')) ? true : false

  store.dispatch('setcurrRouter', to.path)
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.path == '/login' && isLogin == false) {
    next()
  } else {
    isLogin ? next() : next('/login')
  }
})
export default router
