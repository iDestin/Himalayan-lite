Page({

  /**
   * 页面的初始数据
   */
  data: {
    performance:[
      {name:"《人在江湖》郭德纲 于谦",year:"2年前",count:"5601.9万",time:"34:36"},
      {name:"《人在江湖》郭德纲 于谦",year:"2年前",count:"5601.9万",time:"34:36"},
      {name:"《人在江湖》郭德纲 于谦",year:"2年前",count:"5601.9万",time:"34:36"},
      {name:"《人在江湖》郭德纲 于谦",year:"2年前",count:"5601.9万",time:"34:36"},
      {name:"《人在江湖》郭德纲 于谦",year:"2年前",count:"5601.9万",time:"34:36"},
      {name:"《人在江湖》郭德纲 于谦",year:"2年前",count:"5601.9万",time:"34:36"},
      {name:"《人在江湖》郭德纲 于谦",year:"2年前",count:"5601.9万",time:"34:36"},
      {name:"《人在江湖》郭德纲 于谦",year:"2年前",count:"5601.9万",time:"34:36"},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */

  
  onLoad: function (options) {
    console.log(options.value)
    if(options.value == 1){
      this.setData({
        performanceInfo:[{
          imgurl:"../../image/guess1.jpg",
          title:"米小圈上学记:一二三年级",
          author:"米小圈",
          num1: "767.6万",
          num2:"257"
        }],
        imgurl:"../../image/guess1.jpg",
      });
    }
    if(options.value == 2){
      this.setData({
        performanceInfo:[{
          imgurl:"../../image/guess2.jpg",
          title:"段子来了",
          author:"段子来了",
          num1: "767.6万",
          num2:"257"
        }],
        imgurl:"../../image/guess2.jpg",
      });
    }
    if(options.value == 3){
      this.setData({
        performanceInfo:[{
          imgurl:"../../image/guess3.jpg",
          title:"读者",
          author:"读者",
          num1: "767.6万",
          num2:"257"
        }],
        imgurl:"../../image/guess3.jpg",
      });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})