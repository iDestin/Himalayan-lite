// pages/user/user.js
const app = getApp()
let userInfo = app.globalData.userInfo;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timeout:[
      {text:"不开启"},
      {text:"播放当前声音关闭"},
      {text:"播放2首声音关闭"},
      {text:"播放3首声音关闭"},
      {text:"播放4首声音关闭"},
      {text:"10分钟后"},
      {text:"20分钟后"},
      {text:"30分钟后"},
    ],
    activeIndex:0,
    login: true,
    avatarUrl:"",
    nickName:""
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
    wx.getStorage({
      key: 'login',
      success(res){
        if (res.data === 200) {
          that.setData({
            login: false
          })
        } else {
          that.setData({
            login: true
          })
        }
      }
    })
    
  },
  // 获取用户的头像和昵称信息
  bindGetUserInfo(e) {
    var that = this;
    wx.getUserInfo({
      success: function(res) {
        app.globalData.userInfo = e.detail.userInfo;
        wx.setStorage({
          key: "login",
          data: 200
        })
        that.setData({
          login: false,
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
  },
  chooseTimeOut:function(e){
    var that = this;
    console.log(e)
    that.setData({
      activeIndex:e.currentTarget.dataset.activeindex
    })
  }
})