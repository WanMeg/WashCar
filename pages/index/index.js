Page({

  /**
   * 页面的初始数据
   */
  data: {
    second_height: 0,
    subview_height: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
        // 可使用窗口宽度、高度
        console.log('height=' + res.windowHeight);
        console.log('width=' + res.windowWidth);
        // 计算主体部分高度,单位为px
        that.setData({
          // second部分高度 = 利用窗口可使用高度 - first部分高度（这里的高度单位为px，所有利用比例将480rpx转换为px）
          second_height: res.windowHeight - res.windowWidth / 750 * 480,
          subview_height: (res.windowHeight - res.windowWidth / 750 * (480 + 50)) / 2, 
        })
      }
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
   * 我要洗车
   */
  carWashTap: function() {
    wx.navigateTo({
      url: '../../pages/carwash/carwash',
    })
  },
  
  /**
   * 我要充值
   */
  rechargeTap: function() {
    wx.navigateTo({
      url: '../../pages/recharge/recharge?type=home',
    })
  },

  /**
   * 我要付款
   */
  payTap: function() {
    wx.scanCode({
      scanType: ['qrCode'],
      success: (res) => {
        console.log(res)
      },
      fail: (res) => {
        console.log(res)
      },
    })    
  },
})