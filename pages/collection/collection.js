const app = getApp()
Page({
  data: {
    currentIndex:0,
    height:0,
    login: false,
    content: [
      {text: "我的收藏"},
      {text: "我的已购"},
      {text: "收听历史"},
      {text: "我的礼包"}
    ]
  },
  onLoad() {
    const that = this;
    wx.getSystemInfo({
      success (res) {
        that.setData({
          height :res.windowHeight
        })
      }
    })
  },
  onShow() {
    const that = this
    if (!that.login) {
      wx.getStorage({
        key: 'userinfo',
        success(res){
          that.setData({
            login: res.data ? true : false,
          })
        }
      })
    }
  },
  // 点击获取头像和昵称
  bindGetUserInfo(e) {
    const that = this;
		wx.getUserInfo({
			success: function (res) {
				wx.setStorage({
					key: "userinfo",
					data: JSON.stringify(res.userInfo)
				})
				that.setData({
					login: true
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