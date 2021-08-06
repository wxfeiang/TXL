import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getter'
import * as mutations from './mutations'

Vue.use(Vuex)
const state = {
  //  定义 管理状态
  isAutnenticated: false, // 是否认证  授权
  user: {},
  profile: {}, // 存个人信息
  loading: false, // 加载动画
  time: 5,
  currRouter: '',
}
export default new Vuex.Store({
  state,
  getters, // 模块化
  mutations,
  actions, // 会异步
})
