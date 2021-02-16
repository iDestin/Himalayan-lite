const { request } = require('../utils/request');

function getData() {
  return request({
    method: 'GET'  // 因为没有二级请求地址所以不需要添加url
  })
}

module.exports = {
  getData
}