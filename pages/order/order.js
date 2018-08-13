// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listViewItems: [{
      date: '2018-08-06 17:43:52',
      status: '交易成功',
      image: '../../images/order.png',
      title: '车友汇24小时洗车店',
      price: '8.88',
      count: '10',
      totalprice: '88.88',
    }, {
      date: '2018-08-06 17:43:52',
      status: '交易失败',
      image: '../../images/order.png',
      title: '车友汇48小时洗车店',
      price: '8.88',
      count: '4',
      totalprice: '48.88',
    }, {
      date: '2018-08-06 17:43:52',
      status: '交易成功',
      image: '../../images/order.png',
      title: '车友汇12小时洗车店',
      price: '8.88',
      count: '12',
      totalprice: '28.88',
    }, {
      date: '2018-08-06 17:43:52',
      status: '交易失败',
      image: '../../images/order.png',
      title: '车友汇48小时洗车店',
      price: '8.88',
      count: '4',
      totalprice: '48.88',
    }],
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
   * 查看订单详情
   */
  checkOrderDetail: function(e) {
    wx.navigateTo({
      url: '../../pages/orderdetail/orderdetail?id=' + e.currentTarget.id,
    })
  },
})