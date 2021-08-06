// import api from './index'
import { getDataInfo } from '../utils/encryption'
import axios from '../utils/requst'

//开户层实时看板
export function openlayerTime(paramArr) {
  var ajas_data = getDataInfo('9999999', paramArr, 'p_h5_300100_trd_layer_time_panel', '1')
  return axios({
    url: 'p_h5_300100_trd_layer_time_panel',
    method: 'POST',
    data: ajas_data,
  })
}
//排行榜
export function layerRank(paramArr) {
  var ajas_data = getDataInfo('9999999', paramArr, 'p_h5_300100_trd_layer_rank_select', '1')
  return axios({
    url: 'p_h5_300100_trd_layer_rank_select',
    method: 'POST',
    data: ajas_data,
  })
}
// 整体趋势
export function layerqushi(paramArr) {
  var ajas_data = getDataInfo('9999999', paramArr, 'p_h5_300100_trd_layer_flow_panel_ZTQS_select', 4)
  return axios({
    url: 'p_h5_300100_trd_layer_flow_panel_ZTQS_select',
    method: 'POST',
    data: ajas_data,
  })
}
// 手笔交易时间

export function layerKhsj(paramArr) {
  var ajas_data = getDataInfo('9999999', paramArr, 'p_h5_300100_trd_layer_flow_panel_SBJYSJ_select', 7)
  return axios({
    url: 'p_h5_300100_trd_layer_flow_panel_SBJYSJ_select',
    method: 'POST',
    data: ajas_data,
  })
}

// 性别图表
export function sex(paramArr) {
  var ajas_data = getDataInfo('9999999', paramArr, 'p_h5_300100_trd_layer_flow_panel_sex_select', '1')
  return axios({
    url: 'p_h5_300100_trd_layer_flow_panel_sex_select',
    method: 'POST',
    data: ajas_data,
  })
}
// 学历图表
export function xueli(paramArr) {
  var ajas_data = getDataInfo('9999999', paramArr, 'p_h5_300100_trd_layer_flow_panel_XL_select', '1')
  return axios({
    url: 'p_h5_300100_trd_layer_flow_panel_XL_select',
    method: 'POST',
    data: ajas_data,
  })
}
// 省份图表

export function city(paramArr) {
  var ajas_data = getDataInfo('9999999', paramArr, 'p_h5_300100_trd_layer_flow_panel_province_select', '1')
  return axios({
    url: 'p_h5_300100_trd_layer_flow_panel_province_select',
    method: 'POST',
    data: ajas_data,
  })
}
// 城市级别

export function level(paramArr) {
  var ajas_data = getDataInfo('9999999', paramArr, 'p_h5_300100_trd_layer_flow_panel_CSJB_select', '1')
  return axios({
    url: 'p_h5_300100_trd_layer_flow_panel_CSJB_select',
    method: 'POST',
    data: ajas_data,
  })
}

// 开户年龄

export function openage(paramArr) {
  var ajas_data = getDataInfo('9999999', paramArr, 'p_h5_300100_trd_layer_flow_panel_KHNL_select', '1')
  return axios({
    url: 'p_h5_300100_trd_layer_flow_panel_KHNL_select',
    method: 'POST',
    data: ajas_data,
  })
}
// 渠道图表
export function qudao(paramArr) {
  var ajas_data = getDataInfo('9999999', paramArr, 'p_h5_300100_trd_layer_flow_panel_canal_select', '1')
  return axios({
    url: 'p_h5_300100_trd_layer_flow_panel_canal_select',
    method: 'POST',
    data: ajas_data,
  })
}
// 风险等级

export function fengxian(paramArr) {
  var ajas_data = getDataInfo('9999999', paramArr, 'p_h5_300100_trd_layer_flow_panel_FXJB_select', '1')
  return axios({
    url: 'p_h5_300100_trd_layer_flow_panel_FXJB_select',
    method: 'POST',
    data: ajas_data,
  })
}

// 民族

export function minzu(paramArr) {
  var ajas_data = getDataInfo('9999999', paramArr, 'p_h5_300100_trd_layer_flow_panel_nation_select', '1')
  return axios({
    url: 'p_h5_300100_trd_layer_flow_panel_nation_select',
    method: 'POST',
    data: ajas_data,
  })
}
