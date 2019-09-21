//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList:[
      '/image/ad1.jpg',
      '/image/ad2.jpg',
      '/image/ad3.jpg',
      '/image/ad4.jpg',
      '/image/ad5.jpg',
      '/image/ad6.jpg',
      '/image/ad7.jpg'
    ],
    swiperCurrent: 0,
  },
  //轮播图改变事件
  swiperChange: function(e){
    //console.log(e.detail.current);
    this.setData({
     swiperCurrent: e.detail.current
    })
   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://mobile.ximalaya.com/mobile/discovery/v3/recommend/hotAndGuess?code=43_310000_3100&device=android&version=5.4.45',
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        console.log(result);
        if(result.statusCode == 200){
          that.setData({
            showitem:true,
            xiaoshuocontent:result.data.hotRecommends.list[0].list,
            xiangshengcontent:result.data.hotRecommends.list[2].list,
            tuokocontent:result.data.hotRecommends.list[4].list
          })
        }else{
          that.setData({
            showitem:false
          })
        }
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  goToBangDan:function(){
    wx.navigateTo({
      url: '/pages/index/bangdan/bangdan',
    })
  }
})