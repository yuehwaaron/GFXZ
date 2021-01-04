// pages/deviceslist/deviceslist.js
Page({


  /**
   * 页面的初始数据
   */
  data: {
    deviceslist: [],
    listArr: [],
    title: "选择机型",
    subtitle: "* 请选择你的设备型号",
  },

  getDeviceslist() {

    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)

    
    let that = this;
    wx.vrequest({
      url: 'https://api.ipsw.me/v4/devices',
      success(res) {


        that.setData({
          deviceslist: JSON.parse(res.data),
        })

        console.log(JSON.parse(res.data));


        var devicesdata = JSON.parse(res.data).reverse()
        var length = devicesdata.length;
        var listArr = [];

        for (var L1 = 0; L1 < length; L1++) {


          var stringArr = JSON.stringify(devicesdata[L1].name)

          if (stringArr.indexOf("iPad") !== -1) {

            var name = 'listArr[' + L1 + '].name';
            var identifier = 'listArr[' + L1 + '].identifier';

          /*  
            console.log("包含 " + L1);
            console.log(devicesdata[L1].name);
            console.log(devicesdata[L1].identifier);
            */

            that.setData({
              [name]: devicesdata[L1].name,
              [identifier]: devicesdata[L1].identifier
            })
          }

        }




      }

    })
  },

  getIpsw: function (id) {

    const identifier = id.currentTarget.dataset.identifier

    // console.log(identifier)

    wx.navigateTo({
      url: `../ipswlist/ipswlist?identifier=${identifier}`

    })

  },

  /* datadeal: function dataDeal(data){
     var listArr = [];
     data.forEach(function (el, index) {
       for (var i = 0; i < listArr.length; i++) {
         // 对比相同的字段key，相同放入对应的数组
         if (listArr[i].Company == el.company) {
           listArr[i].listInfo.push({
             number: el.number,
             name: el.name,
             date: el.date
           });
           return;
         }
       }
       // 第一次对比没有参照，放入参照
       listArr.push({
         Company: el.company,
         listInfo: [{
           number: el.number,
           name: el.name,
           date: el.date
         }]
       })
     })
     
     return listArr;
 
   },
   
   */


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDeviceslist();

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