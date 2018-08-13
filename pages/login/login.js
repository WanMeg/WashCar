// pages/login/login.js
var app = getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    codeViewColor: '#d3d3d3',
    getCodeTapViewHidden: true,
    getCodeText: '获取验证码',
    currentTime: 60,

    phoneNumLength: 0,
    codeNumLength: 0,
    startViewColor: '#d3d3d3',
    startTapViewHidden: true,


    userPhone: '',
    userCode: '',
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
   * 返回view点击
   */
  backViewTap: function() {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },


  /**
   * 手机号输入框改变事件
   */
  phoneInputChange: function(e) {
    var value = e.detail.value;

    if (value.length == 11) {
      this.setData({
        codeViewColor: '#50b5eb',
        getCodeTapViewHidden: false,
      })
    } else {
      this.setData({
        codeViewColor: '#d3d3d3',
        getCodeTapViewHidden: true,
      })
    }

    this.setData({
      phoneNumLength: value.length,
      userPhone: value
    })
  },


  /**
   * 验证码输入框改变事件
   */
  codeInputChange: function(e) {
    var value = e.detail.value;
    var length = this.data.phoneNumLength;

    if (value.length == 6 && length == 11) {
      this.setData({
        startViewColor: '#50b5eb',
        startTapViewHidden: false,
      })
    } else {
      this.setData({
        startViewColor: '#d3d3d3',
        startTapViewHidden: true,
      })
    }
    this.setData({
      userCode: value
    })
  },

  /**
   * 获取验证码
   */
  getCodeTap: function(e) {
    var that = this
    that.getCode();

    that.setData({
      getCodeTapViewHidden: true
    })
  },

  /**
   * 开始
   */
  startTap: function() {
    app.globalData.userInfo = {userPhone: this.data.userPhone}
    wx.navigateBack({
      url: '../../pages/my/my',
    })
  },

  /**
   * 验证码倒计时方法
   */
  getCode: function(options) {
    var that = this;
    var currentTime = that.data.currentTime
    var timeM;
    timeM = setInterval(function() {
      currentTime--;
      that.setData({
        getCodeText: '重新获取(' + currentTime + 's)'
      })

      if (currentTime <= 0) {
        clearInterval(timeM)
        that.setData({
          getCodeText: '获取验证码',
          currentTime: 60,
          getCodeTapViewHidden: false
        })
      }
    }, 1000)
  },
})