import CryptoJS from 'crypto-js'
import tool from './tool'

var getDatainfo
var ajaxData

/**
 * ajax请求
 * @param {*} funcID 功能号
 * @param {*} paramArr 参数
 * @param {*} interfaceName 接口名
 * @param {*} retCount 结果集个数
 */
var encryptionStatus = 'true' //是否加密
var encryptionMode = '1' //加密模式

var key = 'ea8a706c4c34a168' //秘钥
var iv = 'ea8a706c4c34a168' //同key

/**
 * 加密
 * @param {string} data 需要加密的数据
 * @param {string} key 	秘钥
 * @param {string} iv 	同key
 */

function AESEncrypt(data, g_AES_key, g_AES_iv) {
  var key = CryptoJS.enc.Utf8.parse(g_AES_key)
  var options = {
    iv: CryptoJS.enc.Utf8.parse(g_AES_iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }
  var encryptedData = CryptoJS.AES.encrypt(data, key, options)
  return encryptedData.toString()
}
//新网关请求
export function getDataInfo(funcID, paramArr, interfaceName, retCount, logo) {
  var userid = '',
    token = ''

  if (JSON.parse(localStorage.getItem('users'))) {
    userid = JSON.parse(localStorage.getItem('users')).userid
    token = JSON.parse(localStorage.getItem('users')).str
  }

  // retCount=="0"
  var param = ''
  var cmd = ''
  //通用接口9999999
  if (funcID == '9999999') {
    for (var index = 0; index < paramArr.length; index++) {
      param +=
        '{' +
        "id:'" +
        paramArr[index][0] +
        "'," +
        "value:'" +
        paramArr[index][1] +
        "'," +
        "type:'" +
        paramArr[index][2] +
        "'," +
        'length:' +
        paramArr[index][3] +
        '}' +
        ','
    }
    if (logo) {
      cmd =
        '{' +
        '"ver":"1.0",' +
        '"sql_cmd":"' +
        interfaceName +
        '",' +
        '"sql_ret_count":"' +
        retCount +
        '",' +
        '"Param":"{root:[' +
        param +
        ']}",' +
        '"ret_type": "json",' +
        '"bl1": "bl1",' +
        '"bl2": "bl2"' +
        '}'
    } else {
      cmd =
        '{' +
        '"ver":"1.0",' +
        '"sql_cmd":"' +
        interfaceName +
        '",' +
        '"sql_ret_count":"' +
        retCount +
        '",' +
        '"Param":"{root:[{' +
        "id:'p_userid',value:'" +
        userid +
        "',type:'C',length:4},{" +
        "id:'p_token',value:'" +
        token +
        "',type:'C',length:50}," +
        param +
        ']}",' +
        '"ret_type": "json",' +
        '"bl1": "bl1",' +
        '"bl2": "bl2"' +
        '}'
    }
  } else {
    for (let index = 0; index < paramArr.length; index++) {
      if (paramArr.length <= 1 || index == paramArr.length - 1) {
        param += "'" + paramArr[index][0] + "':'" + paramArr[index][1] + "'"
      } else {
        param += "'" + paramArr[index][0] + "':'" + paramArr[index][1] + "',"
      }
    }

    param = '{' + param + '}'
    cmd = param
  }
  ajaxData = {
    funcID: funcID,
    type: '',
    param: cmd,
  }

  ajaxData = JSON.stringify(ajaxData)

  if (encryptionStatus == 'true') {
    if (encryptionMode == '0') {
      ajaxData = tool.Bt_encrypt(ajaxData)
    } else if (encryptionMode == '1') {
      ajaxData = AESEncrypt(ajaxData, key, iv) //加密
    }
  }

  return ajaxData
}

export { getDatainfo }
