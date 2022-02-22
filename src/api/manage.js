import { axios } from '@/utils/request'
 
const api = {
  getLastAccounts: '/faucet/v1/getLastAccounts',
  transfer: '/faucet/v1/transfer',
  getToken:'/faucet/v1/getToken'
}

 
/**获取token */
export function getToken(parameter){
  return new Promise((resolve, reject) => { axios.post(api.getToken,parameter).then(function (result) {
      if (result) {
          resolve(result)
      } else {
          reject(undefined)
      }
    });
  }); 
}
 


/**获取Ip list*/
export function getLastAccounts(parameter){
  return new Promise((resolve, reject) => { axios.get(api.getLastAccounts,parameter).then(function (result) {
      if (result) {
          resolve(result)
      } else {
          reject(undefined)
      }
    });
  }); 
}

/**发送交易 */
export function sendTransfer(parameter){
  return new Promise((resolve, reject) => { axios.post(api.transfer,parameter).then(function (result) {
      if (result) {
          resolve(result)
      } else {
          reject(undefined)
      }
    });
  }); 
}
 

//post
export function postAction(url,parameter) {
  return axios({
    url: url,
    method:'post' ,
    data: parameter
  })
}

//post method= {post | put}
export function httpAction(url,parameter,method) {
  return axios({
    url: url,
    method:method ,
    data: parameter
  })
}

//put
export function putAction(url,parameter) {
  return axios({
    url: url,
    method:'put',
    data: parameter
  })
}

//get
export function getAction(url,parameter) {
  return axios({
    url: url,
    method: 'get',
    params: parameter
  })
}

//deleteAction
export function deleteAction(url,parameter) {
  return axios({
    url: url,
    method: 'delete',
    params: parameter
  })
}
 
export function getServiceList(parameter) {
  return axios({
    url: api.service,
    method: 'get',
    params: parameter
  })
}

export function getPermissions(parameter) {
  return axios({
    url: api.permissionNoPager,
    method: 'get',
    params: parameter
  })
}

// id == 0 add     post
// id != 0 update  put
export function saveService(parameter) {
  return axios({
    url: api.service,
    method: parameter.id == 0 ? 'post' : 'put',
    data: parameter
  })
}
