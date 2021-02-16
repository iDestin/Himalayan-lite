const app = getApp();
Page({
	data: {
		height: 400
	},
	onLoad(options) {
		//获取设备信息
		const that = this;
		wx.getSystemInfo({
			success(res) {
				that.setData({
					height: res.screenHeight
				})
			}
		})
	},
	login() {
		wx.showToast({
			title: '成功',
		})
	}
})