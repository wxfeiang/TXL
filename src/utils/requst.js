import axios from 'axios'

//import router from './router'

function startLoading() {
  //使用Element loading-start 方法
}
function endLoading() {
  //使用Element loading-close 方法
}

// 请求拦截  设置统一header
axios.interceptors.request.use(
  (config) => {
    // 加载
    // startLoading()
    if (localStorage.Token)
      // config.headers.token = localStorage.Token
      return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截  401 token过期处理
axios.interceptors.response.use(
  (response) => {
    //    endLoading()
    console.log('请求进入成功,对应的状态')
    return response
  },
  (error) => {
    console.log(error, '请求出错,这里是统一返回的错误')

    return Promise.reject(error)
  }
)

export default axios
