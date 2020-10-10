const request = require('../utils/request').request;

function getData() {
  return request({
    method: 'get'
  })
}

module.exports = {
  getData
}