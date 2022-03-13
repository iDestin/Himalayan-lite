Component({
	properties: {
		disabled: {
			type: Boolean,
			value: true
		},
		isShow: {
			type: Boolean,
			value: false
		}
	},
	methods: {
		goToSearch() {
			wx.navigateTo({
				url: '/pages/search/search',
			})
		}
	},
});