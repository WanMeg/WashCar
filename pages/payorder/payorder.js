// pages/payOrder/payOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    payHidden: true,
    payStyleItems: [{
      icon: '../../images/pay_zfb.png',
      title: '支付宝支付',
      select: true,
      payId: '0'
    }, {
      icon: '../../images/pay_wx.png',
      title: '微信支付',
      select: false,
      payId: '1'
    }, {
      icon: '../../images/pay_ye.png',
      title: '余额支付',
      select: false,
      payId: '2'
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
   * 确认支付
   */
  confirmPayTap: function() {
    this.setData({
      payHidden: false
    })
  },

  /**
   * 透明view点击
   */
  garyViewTap: function() {
    this.setData({
      payHidden: true
    })
  },

  /**
   * 支付方式view点击
   */
  payStyleViewTap: function (e) {
    var id = e.currentTarget.id
    var list = this.data.payStyleItems

    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].payId == id) {
        list[i].select = true
      } else {
        list[i].select = false
      }
    }

    this.setData({
      payStyleItems: list
    });
  },

  /**
   * 立即支付view点击
   */
  quicklyPayTap: function () {
    wx.redirectTo({
      url: '../../pages/orderdetail/orderdetail?id=000',
    })
  },
})