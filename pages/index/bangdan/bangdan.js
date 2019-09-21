const app = getApp();
// 定义一个全局变量保存从接口获取到的数据，以免重复请求接口
var resut; 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    navTitle:[
      {title:'经典必听'},
      {title:'优质专辑'},
      {title:'有声小说'},
      {title:'儿童教育'},
      {title:'人文历史'},
      {title:'最潮外语'},
      {title:'商业财经'},
      {title:'热门新闻'}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://mobile.ximalaya.com/mobile/discovery/v3/recommend/hotAndGuess?code=43_310000_3100&device=android&version=5.4.45',
      
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res)=>{
        resut = res;
        console.log(res);
        that.setData({
          list: res.data.hotRecommends.list[0].list
        })
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  handleClick(e) {
    let currentTab = e.currentTarget.dataset.index;
    // 实现每一个tabbar切换对应内容的原理，根据每一个tabbar的index对应数组中的数据
    this.setData({
      currentTab,
      list: resut.data.hotRecommends.list[currentTab].list
    })
  },
  pullDown:function(){
    
  }
})