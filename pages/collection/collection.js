// pages/collection/collection.js

const app = getApp()

let userInfo = app.globalData.userInfo;
let login = app.globalData.login

Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: [
      {
        text: "我的收藏"
      },
      {
        text: "我的已购"
      },
      {
        text: "收听历史"
      },
      {
        text: "我的礼包"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // console.log(app)
    // console.log("userInfo" +userInfo)
    if (app.globalData.userInfo === null){
      that.setData({
        login:login
      })
    }else{
      console.log("login:" + app.globalData.login)
      that.setData({
        login: app.globalData.login
      })
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
        app.globalData.login = false;
        console.log(e.detail.userInfo);
        that.setData({
          login: app.globalData.login,
        })
      }
    })
  },
})