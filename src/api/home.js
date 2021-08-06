// import api from './index'
import { getDataInfo } from '../utils/encryption'
import axios from '../utils/requst'

//  查询顶部开户人数
export function openCountSum() {
  var ajas_data = getDataInfo('9999999', [], 'p_h5_1000_open_count_sum', '1')
  return axios({
    url: 'p_h5_1000_open_count_sum',
    method: 'POST',
    data: ajas_data,
  })
}

//  字典查询

export function ldziselect(code, flog) {
  let pramArr = [
    ['p_dict_code', code, 'C', 20],
    ['p_all', flog ? flog : 'A', 'C', 1],
  ]
  var ajas_data = getDataInfo('9999999', pramArr, 'p_h5_y_Dictvalue_Select', '1')
  return axios({
    url: 'p_h5_y_Dictvalue_Select',
    method: 'POST',
    data: ajas_data,
  })
}
// 组织机构

export function ldziselectJG(key) {
  let pramArr = [['p_key', key ? key : '', 'C', 1]]
  var ajas_data = getDataInfo('9999999', pramArr, 'p_h5_organization_Select', '1')
  return axios({
    url: 'p__h5_organization_Select',
    method: 'POST',
    data: ajas_data,
  })
}
// 城市

export function ldziselectCY(key) {
  let pramArr = [['p_key', key ? key : '', 'C', 1]]
  var ajas_data = getDataInfo('9999999', pramArr, 'p_h5_regions_Select', '1')
  return axios({
    url: 'p__h5_regions_Select',
    method: 'POST',
    data: ajas_data,
  })
}

//  漏斗层总体情况

export function layerSum(pramArr) {
  console.log(pramArr, 'pramArr')
  var ajas_data = getDataInfo('9999999', pramArr, 'p_h5_1000_layer_sum', '1')
  return axios({
    url: 'p_h5_1000_layer_sum',
    method: 'POST',
    data: ajas_data,
  })
}
//开户数总体情况
export function openSumLine(pramArr) {
  var ajas_data = getDataInfo('9999999', pramArr, 'p_h5_1000_open_sum_line', '1')
  return axios({
    url: 'p_h5_1000_open_sum_line',
    method: 'POST',
    data: ajas_data,
  })
}
//实时分层数据转化率
export function changeSaveRate(pramArr) {
  var ajas_data = getDataInfo('9999999', pramArr, 'p_h5_1000_change_save_rate', '1')
  return axios({
    url: 'p_h5_1000_change_save_rate',
    method: 'POST',
    data: ajas_data,
  })
}
//
//实时分层数据
export function timeNowSum(pramArr) {
  var ajas_data = getDataInfo('9999999', pramArr, 'p_h5_1000_layer_time_now_sum', '1')
  return axios({
    url: 'p_h5_1000_layer_time_now_sum',
    method: 'POST',
    data: ajas_data,
  })
}

//实时分层数据
export function homezqfb(pramArr) {
  var ajas_data = getDataInfo('9999999', pramArr, 'p_h5_1000_layer_cycle_Select', '3')
  return axios({
    url: 'p_h5_1000_layer_cycle_Select',
    method: 'POST',
    data: ajas_data,
  })
}
