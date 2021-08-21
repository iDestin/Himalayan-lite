Component({
  properties: {
    disabled: {
			type: Boolean,
			value: true
		},
		isshow : {
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