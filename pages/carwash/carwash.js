// pages/carWash/carWash.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },

  /**
   * 支付
   */
  payTap: function () {
    wx.navigateTo({
      url: '../../pages/payorder/payorder',
    })
  },

  /**
   * 开始导航
   */
  navigationTap: function () {
    //打开地图 （火车站 38.0098583073,114.4868946075）
    wx.openLocation({
      latitude: 38.0098583073,
      longitude: 114.4868946075,
      scale: 15,
      name: '车友汇24小时洗车店',
      address: '中山路与平安大街交叉口南行100米',
      success: function(res){
        console.log(res)
      }
    })
  },
})