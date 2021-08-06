import axios from 'axios'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

//import router from './router'

function startLoading() {
  //使用Element loading-start 方法
}
function endLoading() {
  //使用Element loading-close 方法
}

const serve = axios.create({
  //baseURL: 'http://47.99.93.97/api/',

  // baseURL: '/api/?',
  baseURL: '/UFLS/?',

  // 超时时间 单位是ms，这里设置了3s的超时时间
  timeout: 50 * 1000,
})
// 请求拦截  设置统一header
serve.interceptors.request.use(
  (config) => {
    NProgress.start()
    // 加载
    // startLoading()
    // if (localStorage.Token)
    // config.headers.token = localStorage.Token
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截  401 token过期处理
serve.interceptors.response.use(
  (response) => {
    //    endLoading()
    console.log('服务调用成功')
    NProgress.done()
    return response
  },
  (error) => {
    console.log('服务调用失败', error)
    /***** 接收到异常响应的处理开始 *****/
    if (error && error.response) {
      // 1.公共错误处理
      // 2.根据响应码具体处理
      switch (error.response.status) {
        case 400:
          error.message = '错误请求'
          break
        case 401:
          error.message = '未授权，请重新登录'
          break
        case 403:
          error.message = '拒绝访问'
          break
        case 404:
          error.message = '请求错误,未找到该资源'
          break
        case 405:
          error.message = '请求方法未允许'
          break
        case 408:
          error.message = '请求超时'
          break
        case 500:
          error.message = '服务器端出错'
          break
        case 501:
          error.message = '网络未实现'
          break
        case 502:
          error.message = '网络错误'
          break
        case 503:
          error.message = '服务不可用'
          break
        case 504:
          error.message = '网络超时'
          break
        case 505:
          error.message = 'http版本不支持该请求'
          break
        default:
          error.message = `连接错误${error.response.status}`
      }
    } else {
      // 超时处理
      if (JSON.stringify(error).includes('timeout')) {
        Message.error('服务器响应超时，请刷新当前页')
      }
      error.message = '连接服务器失败'
    }

    Message.error(error.message)
    /***** 处理结束 *****/
    //如果不需要错误处理，以上的处理过程都可省略
    return Promise.resolve(error.response)
  }
)

export default serve
