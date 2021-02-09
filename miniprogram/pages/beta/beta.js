


Page({

  data: {
    updateList: [],
    ios: 'https://hsyw.me/beta/iosipados.mobileconfig',
    ipados: 'https://hsyw.me/beta/iosipados.mobileconfig',
    watchos: 'https://hsyw.me/beta/watchos.mobileconfig',
    tvos: 'https://hsyw.me/beta/tvos.mobileconfig',
    macos: 'https://hsyw.me/beta/macos.dmg',
    homepod: 'https://hsyw.me/beta/homepod.mobileconfig',
    noota: 'https://hsyw.me/beta/noota.mobileconfig',
    
    title: "描述文件",
    subtitle: "* 这里可以查询 Apple 描述文件",
  },

  
  getUpdateList(){

    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
    
    let that = this;
    
    wx.request({
      url: "https://developer.apple.com/news/releases/rss/releases.rss",

          success(res) {
          //console.log(res.data);
          var xml2json = require('xmlstring2json');
          // console.log(JSON.stringify(xml2json(res.data), null, 4));
          var xml = JSON.stringify(xml2json(res.data), null, 4)
        
          
          var jsondata = (JSON.parse(xml))


          that.setData({
            updateList: (jsondata.rss.channel.item).reverse()
          })

          console.log(that.data.updateList)
            
        }
  })


  },

  
  

  copyText: function (e) {
    var text = e.currentTarget.dataset.text
    wx.setClipboardData({
      data: text,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '已复制到剪贴板'
            })
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.getUpdateList();
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
    
  }
})