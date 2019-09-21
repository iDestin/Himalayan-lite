// pages/collection/collection.js
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
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
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
  bindGetUserInfo(e) {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        console.log(e.detail.userInfo);
        that.setData({
          login: false,
        })
        // 存缓存
        wx.setStorage({
          key: 'avatarUrl',
          data: e.detail.userInfo.avatarUrl,
          success: (result) => {
            console.log('缓存成功');
          },

        });
        wx.setStorage({
          key: 'nickName',
          data: e.detail.userInfo.nickName,
          success: (result) => {
            console.log('缓存成功');
          },
        });
      }
    })
  },
})