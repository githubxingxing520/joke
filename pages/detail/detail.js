// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      data:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let joke=JSON.parse(options.param)
      joke.ct=joke.ct.substr(0,10)
      this.setData({
        data:joke
      })
  },
  
})