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
              //
          }else{
            //
          }
        },
    })
}