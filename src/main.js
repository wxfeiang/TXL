// import '@/assets/css/gloab.sass'
// import '@/assets/style/gloab.css'
import '@/EleUI'
import ElementResizeDetectorMaker from 'element-resize-detector'
import 'rest-css'
import Vue from 'vue'
import VueWechatTitle from 'vue-wechat-title'
import App from './App.vue'
import router from './router'
import store from './store'
import encryption from './utils/encryption'
import axios from './utils/requst'
Vue.prototype.$erd = ElementResizeDetectorMaker()
Vue.use(VueWechatTitle)

Vue.prototype.$http = axios
Vue.prototype.$encryption = encryption
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
