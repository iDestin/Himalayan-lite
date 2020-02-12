Page({

  /**
   * 页面的初始数据
   */
  data: {
    performance: [{
        name: "《人在江湖》郭德纲 于谦",
        year: "2年前",
        count: "5601.9万",
        time: "34:36"
      },
      {
        name: "《人在江湖》郭德纲 于谦",
        year: "2年前",
        count: "5601.9万",
        time: "34:36"
      },
      {
        name: "《人在江湖》郭德纲 于谦",
        year: "2年前",
        count: "5601.9万",
        time: "34:36"
      },
      {
        name: "《人在江湖》郭德纲 于谦",
        year: "2年前",
        count: "5601.9万",
        time: "34:36"
      },
      {
        name: "《人在江湖》郭德纲 于谦",
        year: "2年前",
        count: "5601.9万",
        time: "34:36"
      },
      {
        name: "《人在江湖》郭德纲 于谦",
        year: "2年前",
        count: "5601.9万",
        time: "34:36"
      },
      {
        name: "《人在江湖》郭德纲 于谦",
        year: "2年前",
        count: "5601.9万",
        time: "34:36"
      },
      {
        name: "《人在江湖》郭德纲 于谦",
        year: "2年前",
        count: "5601.9万",
        time: "34:36"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */


  onLoad: function (options) {
    console.log(options)
    this.setData({
      performanceInfo: [{
        imgurl: options.url+'=5&upload_type=album&device_type=ios&name=medium&magick=png',
        title: options.title,
        author: "某某某",
        num1: "767.6万",
        num2: "257"
      }],
      imgurl: options.url+'=5&upload_type=album&device_type=ios&name=medium&magick=png',
    });
  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})