// pages/classification/classification.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex:0,
    VerticalNavTop: 0,
    TabCur: 0,
    ificationTitle:[
      {title:"有声书"},
      {title:"畅销书"},
      {title:"儿童"},
      {title:"相声评书"},
      {title:"情感生活"},
      {title:"人文"},
      {title:"历史"},
      {title:"国学书院"},
      {title:"音乐"},
      {title:"英语"},
      {title:"教育培训"},
      {title:"健康养生"},
      {title:"广播剧"},
      {title:"戏曲"}
    ],
    ificationContent:[
      {
        title:"有声书",
        content:[
          {text:"言情"},
          {text:"悬疑"},
          {text:"都市"},
          {text:"幻想"},
          {text:"武侠"},
          {text:"历史"}
        ]
      },
      {
        title:"畅销书",
        content:[
          {text:"社科"},
          {text:"经管"},
          {text:"文学"},
          {text:"励志"},
          {text:"名著"},
          {text:"生活"}
        ]
      },
      {
        title:"儿童",
        content:[
          {text:"故事"},
          {text:"儿歌"},
          {text:"动画"},
          {text:"科普"},
          {text:"名著"},
          {text:"国学"}
        ]
      },
      {
        title:"相声评书",
        content:[
          {text:"单田芳"},
          {text:"郭德纲"},
          {text:"热门相声"},
          {text:"单口相声"},
          {text:"名家评书"},
          {text:"新锐笑将"}
        ]
      },
      {
        title:"情感生活",
        content:[
          {text:"恋爱技巧"},
          {text:"睡前夜话"},
          {text:"情绪压力"},
          {text:"婚姻家庭"},
          {text:"个人成长"},
          {text:"心理健康"}
        ]
      },
      {
        title:"人文",
        content:[
          {text:"言情"},
          {text:"悬疑"},
          {text:"都市"},
          {text:"幻想"},
          {text:"武侠"},
          {text:"历史"}
        ]
      },
      {
        title:"历史",
        content:[
          {text:"言情"},
          {text:"悬疑"},
          {text:"都市"},
          {text:"幻想"},
          {text:"武侠"},
          {text:"历史"}
        ]
      },
      {
        title:"国学书院",
        content:[
          {text:"言情"},
          {text:"悬疑"},
          {text:"都市"},
          {text:"幻想"},
          {text:"武侠"},
          {text:"历史"}
        ]
      },
      {
        title:"音乐",
        content:[
          {text:"言情"},
          {text:"悬疑"},
          {text:"都市"},
          {text:"幻想"},
          {text:"武侠"},
          {text:"历史"}
        ]
      },
      {
        title:"英语",
        content:[
          {text:"言情"},
          {text:"悬疑"},
          {text:"都市"},
          {text:"幻想"},
          {text:"武侠"},
          {text:"历史"}
        ]
      },
      {
        title:"教育培训",
        content:[
          {text:"言情"},
          {text:"悬疑"},
          {text:"都市"},
          {text:"幻想"},
          {text:"武侠"},
          {text:"历史"}
        ]
      },
      {
        title:"健康养生",
        content:[
          {text:"言情"},
          {text:"悬疑"},
          {text:"都市"},
          {text:"幻想"},
          {text:"武侠"},
          {text:"历史"}
        ]
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success (res) {
        console.log(res.screenHeight);
        var height = (res.screenHeight*2);
        console.log(height);
        that.setData({
          phoneHeight:height
        })
      }
    })
  },

  showActive:function (e) {
    console.log(e);
    if(e.target.offsetTop=== parseInt(281.4*e.target.dataset.index)){
      that.setData({
        activeIndex: e.target.dataset.index,
      })
    }
    // this.setData({
    //   activeIndex: e.detail
    //  })
  },
  change:function (e){
    var that = this;
    console.log(e)
    that.setData({
      VerticalNavTop: (e.currentTarget.dataset.index - 1) * 50,
      activeIndex: e.currentTarget.dataset.index,
      TabCur: e.currentTarget.dataset.id,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})