// pages/collection/collection.js
const app = getApp()
let userInfo = app.globalData.userInfo;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex:0,
    content: [
      {text: "我的收藏"},
      {text: "我的已购"},
      {text: "收听历史"},
      {text: "我的礼包"}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    if (app.globalData.userInfo === null){
      that.setData({
        login:true
      })
    }else{
      that.setData({
        login: false
      })
    }
  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  
  // 点击获取头像和昵称
  bindGetUserInfo(e) {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        app.globalData.userInfo = e.detail.userInfo;
        console.log(e.detail.userInfo);
        that.setData({
          login: false,
        })
      }
    })
  },
  checkItem(e){
    console.log(e)
    var that = this;
    that.setData({
      currentIndex : e.target.dataset.index
    })
  }
})