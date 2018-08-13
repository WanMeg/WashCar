// pages/my/my.js

var app = getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    listViewItem: [{
      icon: '../../images/my_bag.png',
      title: '我的钱包'
    }, {
      icon: '../../images/my_order.png',
      title: '我的订单'
    }, {
      icon: '../../images/my_set.png',
      title: '设置'
    }],
    phoneNumber: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    if (app.globalData.userInfo == null) {
      wx.navigateTo({
        url: '../../pages/login/login',
      })
    } else {
      this.setData({
        phoneNumber: app.globalData.userInfo.userPhone
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },


  /**
   * 列表view点击
   */
  listItemTap: function(e) {
    if (e.currentTarget.id == '0') {
      wx.navigateTo({
        url: '../../pages/wallet/wallet',
      })
    } else if (e.currentTarget.id == '1') {
      wx.switchTab({
        url: '/pages/order/order',
      })
    } else {
      wx.navigateTo({
        url: '../../pages/set/set',
      })
    }
  },

})