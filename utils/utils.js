/**
 * 本文件主要是工具类函数
 */
let myRequest = function(url,methods,data = {}){
    wx.request({
        url: url,
        data: data,
        header: {'content-type':'application/json'},
        method: methods,
        dataType: 'json',
        responseType: 'text',
        success: (result)=>{
          console.log(result);
          if(result.statusCode == 200){
              // TODO
          }else{
            // TODO
          }
        },
    })
}