// pages/collection/collection.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex:0,
    height:0,
    content: [
      {text: "我的收藏"},
      {text: "我的已购"},
      {text: "收听历史"},
      {text: "我的礼包"}
    ],
    login: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success (res) {
        that.setData({
          height :res.windowHeight
        })
      }
    })
    wx.getStorage({
      key: 'login',
      success(res){
        if(res.data === 200){
          that.setData({
            login: false,
          })
        }
      },
      fail(res){
        console.log(res)
      }
    })

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
        wx.setStorage({
          key: "login",
          data: 200
        })
        that.setData({
          login: false,
        })
      }
    })
  },

  checkItem(e){
    var that = this;
    if (this.data.currentIndex === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentIndex: e.target.dataset.index
      })
    }
  },
  // 滑动切换tab

  changeTab:function(e){
    var that = this;
    console.log(e.detail.current)
    that.setData({
      currentIndex:e.detail.current
    })
  }
})