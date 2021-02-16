const app = getApp()
Page({
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
  onLoad(options) {
    const that = this;
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
      }
    })
  },
  // 点击获取头像和昵称
  bindGetUserInfo(e) {
    const that = this;
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
  checkItem(e) {
    const that = this;
    if (this.data.currentIndex === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentIndex: e.target.dataset.index
      })
    }
  },
  // 滑动切换tab
  changeTab(e) {
    const that = this;
    that.setData({
      currentIndex:e.detail.current
    })
  }
})