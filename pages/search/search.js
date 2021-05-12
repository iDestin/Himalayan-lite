Page({
	data: {
		searchHistory: [],
		hotData: [
			{ title: "宝宝巴士", icon: "icon-jiantouUp", color: "text-orange" },
			{ title: "孟鹤堂", icon: "icon-jiantouUp", color: "text-red" },
			{ title: "三体", icon: "icon-jiantouDown", color: "text-green" },
			{ title: "龙王殿", icon: "icon-jiantouUp", color: "text-red" },
			{ title: "儿童恐龙故事", icon: "icon-jiantouDown", color: "text-red" },
			{ title: "儿童版三国演义", icon: "icon-jiantouUp", color: "text-red" },
		]
	},
	/**
	 * 搜索事件
	 * @param {Object} e 
	 */
	search(e){
		this.setData({
			searchHistory: [...this.data.searchHistory,e.detail.value]
		})
	},
	/**
	 * 取消搜索事件
	 */
	cancelSearch(){
		wx.navigateBack({
			delta: 1,
		})
	},
	/**
	 * 清空历史记录
	 */
	clearHistory(){
		this.setData({
			searchHistory: []
		})
	}
})