// pages/user/user.js
const app = getApp()
let userInfo = app.globalData.userInfo;
let login = app.globalData.login;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  onLoad: function (options) {
    var that = this;
    //获得设备信息
    wx.getSystemInfo({
      success (res) {
        console.log(res.windowHeight);
        that.setData({
          phoneHeight: res.windowHeight,
        })
      }
    })
    // 查看是否授权
    if (app.globalData.userInfo === null) {
      that.setData({
        login: login
      })
    } else {
      that.setData({
        login: app.globalData.login,
        avatarUrl: app.globalData.userInfo.avatarUrl,
        nickName: app.globalData.userInfo.nickName
      })
    }
  },
  // 获取用户的头像和昵称信息
  bindGetUserInfo(e) {
    var that = this;
    wx.getUserInfo({
      success: function(res) {
        console.log(e.detail.userInfo);
        app.globalData.userInfo = e.detail.userInfo;
        app.globalData.login = false;
        that.setData({
          login: app.globalData.login,
          avatarUrl: e.detail.userInfo.avatarUrl,
          nickName: e.detail.userInfo.nickName
        })
      }
    })
  },
  phoneLogin:function(){
    wx.navigateTo({
      url: './phoneLogin/phoneLogin',
    });
  },
  gotoLogin(){
    wx.navigateTo({
      url: './phoneLogin/phoneLogin',
    });
  },
  openSwitch:function(){
    var that = this;
    that.setData({
      show:true
    })
  },
  close:function(){
    var that = this;
    that.setData({
      show:false
    })
  }
})