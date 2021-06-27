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
    path: '/index',
    name: 'index',
    component: () => import(/* webpackChunkName: "about" */ '../views/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/home.vue'),
      },
      {
        path: '/Openaccount',
        name: 'Openaccount',
        meta: {
          title: '开户层',
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/Openaccount.vue'),
      },
      {
        path: '/Ingold',
        name: 'Ingold',
        meta: {
          title: '入金层',
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/Ingold.vue'),
      },

      {
        path: '/Transaction',
        name: 'Transaction',
        meta: {
          title: '交易层',
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/Transaction.vue'),
      },
      {
        path: '/Subsist',
        name: 'Subsist',
        meta: {
          title: '存续层',
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/Subsist.vue'),
      },
      {
        path: '/Deactivation',
        name: 'Deactivation',
        meta: {
          title: '失活层',
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/Deactivation.vue'),
      },
    ],
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
    next()
  } else {
    isLogin ? next() : next('/login')
  }
})
export default router
