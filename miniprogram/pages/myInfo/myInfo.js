Page({
  data: {
    phoneInfo: "",
    batteryInfo: "",
    networkInfo: ""
  },
  onLoad: function (res) {
    var that = this;

    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
        that.setData({
          phoneInfo: res
        });
      }
    }), 

    wx.getBatteryInfo({
      success: function (res) {
        console.log(res)
        that.setData({
          batteryInfo: res
        });
      }
    }), 

    wx.getNetworkType({
      success: function (res) {
        console.log(res)
        that.setData({
          networkInfo: res
        });
      }
    })
  },

  onReady: function () { },
  onShow: function () { },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () { }

});