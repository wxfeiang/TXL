// import api from './index'
import { getDataInfo } from '../utils/encryption'
import axios from '../utils/requst'

//登录请求
export function login(paramArr) {
  // let theEndValue = {
  //   funcID: '9999999', //功能号，默认9999999
  //   paramArr, //参数
  //   interfaceName: 'p_h5_User_Login', //接口名
  //   retCount: '1', //默认 1
  // }

  var ajas_data = getDataInfo('9999999', paramArr, 'p_h5_User_Login', '1', 1)
  console.log(ajas_data)
  return axios({
    url: 'p_h5_User_Login',
    method: 'POST',
    data: ajas_data,
  })
}
//登录退出
export function loginout() {
  var ajas_data = getDataInfo('9999999', [], 'p_h5_User_Exit', '1')
  console.log(ajas_data)
  return axios({
    url: 'p_h5_User_Exit',
    method: 'POST',
    data: ajas_data,
  })
}
