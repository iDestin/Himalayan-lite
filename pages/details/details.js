Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		performance: [{
			name: "《人在江湖》郭德纲 于谦",
			year: "2年前",
			count: "5601.9万",
			time: "34:36"
		},
		{
			name: "《人在江湖》郭德纲 于谦",
			year: "2年前",
			count: "5601.9万",
			time: "34:36"
		},
		{
			name: "《人在江湖》郭德纲 于谦",
			year: "2年前",
			count: "5601.9万",
			time: "34:36"
		},
		{
			name: "《人在江湖》郭德纲 于谦",
			year: "2年前",
			count: "5601.9万",
			time: "34:36"
		},
		{
			name: "《人在江湖》郭德纲 于谦",
			year: "2年前",
			count: "5601.9万",
			time: "34:36"
		},
		{
			name: "《人在江湖》郭德纲 于谦",
			year: "2年前",
			count: "5601.9万",
			time: "34:36"
		},
		{
			name: "《人在江湖》郭德纲 于谦",
			year: "2年前",
			count: "5601.9万",
			time: "34:36"
		},
		{
			name: "《人在江湖》郭德纲 于谦",
			year: "2年前",
			count: "5601.9万",
			time: "34:36"
		},
		],
		performanceInfo: [],
		imgurl: ''
	},
	onLoad(options) {
		this.setData({
			performanceInfo: [{
				imgurl: options.url + '=5&upload_type=album&device_type=ios&name=medium&magick=png',
				title: options.title,
				author: "某某某",
				num1: "767.6万",
				num2: "257"
			}],
			imgurl: options.url + '=5&upload_type=album&device_type=ios&name=medium&magick=png',
		});
	}
})