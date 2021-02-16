//Component Object
Component({
  properties: {
    myProperty: {
		type: String,
			value: '',
			observer: function () { }
		},
  },
	data: {
		disabled: true,
		isshow: false,
	},
	methods: {
		goToSearch() {
			wx.navigateTo({
				url: '/pages/search/search',
			})
		}
	},
});