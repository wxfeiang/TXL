import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/pc',
    name: 'pc',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pc.vue'),
    meta: {
      title: 'PCrem',
    },
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '通讯录',
    },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '设置',
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
