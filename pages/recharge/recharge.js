// pages/recharge/recharge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    }],
    backType: '',
    rechargeMoney: '0',
    confirmViewColor: '#d3d3d3',
    payTapViewHidden: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      backType: options.type
    })
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
   * 金额input
   */
  moneyInput: function(e) {
    var value = e.detail.value
    if (value.length == 0) {
      this.setData({
        rechargeMoney: '0',
        confirmViewColor: '#d3d3d3',
        payTapViewHidden: true,
      })
    } else {
      this.setData({
        rechargeMoney: value,
        confirmViewColor: '#50b5eb',
        payTapViewHidden: false,
      })
    }
  },


  /**
   * 支付方式view点击
   */
  payStyleViewTap: function(e) {
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
   * 确认支付点击
   */
  confirmPayTap: function() {
    var back = this.data.backType;
    var num;
    if (back == 'home') {
      num = 1;
    } else {
      num = 2;
    }
    wx.showToast({
      title: '支付成功！',
      icon: 'success',
      duration: 1000,
      success: function() {
        setTimeout(function() {
          wx.navigateBack({
            delta: num,
          })
        }, 1000) //延迟时间 这里是1秒
      }
    })
  },
})