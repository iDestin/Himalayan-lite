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
    navList:[
      {"navIconImg":'/image/nav-icon/bangdan.png',navText:"榜单"},
      {"navIconImg":'/image/nav-icon/bangdan.png',navText:"听小说"},
      {"navIconImg":'/image/nav-icon/bangdan.png',navText:"情感电台"},
      {"navIconImg":'/image/nav-icon/bangdan.png',navText:"听相声"},
      {"navIconImg":'/image/nav-icon/bangdan.png',navText:"儿童故事"},
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
        that.setData({
          xiaoshuocontent:result.data.hotRecommends.list[0].list,
          xiangshengcontent:result.data.hotRecommends.list[2].list,
          tuokocontent:result.data.hotRecommends.list[4].list
        })
      },
      fail: ()=>{},
      complete: ()=>{}
    });
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