//index.js
//获取应用实例
const app = getApp()
var utils = require('../../utils/utils.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList:[
      '/image/ad1.jpg',
      '/image/ad2.jpg',
      '/image/ad3.jpg',
      '/image/ad4.jpg',
      '/image/ad5.jpg',
      '/image/ad6.jpg',
      '/image/ad7.jpg'
    ],
    navList:[
      {icon:'/image/nav-icon/diantai.png',events:'goToBangDan',text:'榜单'},
      {icon:'/image/nav-icon/diantai.png',events:'goToBangDan',text:'听小说'},
      {icon:'/image/nav-icon/diantai.png',events:'goToBangDan',text:'情感电台'},
      {icon:'/image/nav-icon/diantai.png',events:'goToBangDan',text:'听知识'},
      
    ],
    swiperCurrent: 0,
  },
  //轮播图改变事件
  swiperChange: function(e){
    this.setData({
     swiperCurrent: e.detail.current
    })
   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var url = 'http://mobile.ximalaya.com/mobile/discovery/v3/recommend/hotAndGuess?code=43_310000_3100&device=android&version=5.4.45';

    // 调用的是自己封装的工具函数，在utils中
    utils.myRequest({
      url:url,
      methods:'GET',
      success:function(result){
        that.setData({
          showitem:true,
          guess:result.data.paidArea.list,
          xiaoshuocontent:result.data.hotRecommends.list[0].list,
          xiangshengcontent:result.data.hotRecommends.list[2].list,
          tuokocontent:result.data.hotRecommends.list[4].list
        })
      },
      fail:function(){
        that.setData({
          showitem:false
        })
      }
    });
  },
  goToBangDan:function(){
    wx.navigateTo({
      url: '/pages/index/bangdan/bangdan',
    })
  },
  gotoDetails(e){
    var url = e.currentTarget.dataset.coverimg;
    var title = e.currentTarget.dataset.title;
    wx.navigateTo({
      url: '/pages/details/details?url='+url+'&title='+title,
    })
  }
})
