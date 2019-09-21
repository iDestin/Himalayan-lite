// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //获得设备信息
    wx.getSystemInfo({
      success (res) {
        console.log(res.windowHeight);
        that.setData({
          phoneHeight:res.windowHeight,
        })
      }
    })
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo);
              that.setData({
                login:true,
                avatarUrl:res.userInfo.avatarUrl,
                nickName:res.userInfo.nickName
              })
            }
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
        console.log(e.detail.userInfo);
        that.setData({
          login:true,
          avatarUrl:e.detail.userInfo.avatarUrl,
          nickName:e.detail.userInfo.nickName
        })
      }
    })
    
  },
  
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})