var url=require("../../utils/config.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:false,
    data:[],
    loadingover:false,
    loadinglist:false,
    num: 1,   //默认第一页
    colors:["one","two","three"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '正在加载',
      mask:true
    })
    this.request()   //调用请求方法
  },
  request:function(){ //请求数据
    var timeNow = new Date().getTime();
    wx.request({
      url:url.textJoke,
      data:{
        showapi_timestamp:timeNow,
        page:this.data.num,
        maxResult:30
      },
      success:(e)=>{
        console.log(e)
        var data = e.data.showapi_res_body.contentlist
        if(data.length==0){
          //最后一页,没数据了
          this.setData({
            loadinglist:false,
            loadingover:true
          })
          return;
        }
        var list= this.data.data.concat(data)
        for(let i=0;i<data.length;i++){
          data[i].text=this.removeHtml(data[i].text)
        }
          this.setData({
            data:list ,
            flag:true,
            num:this.data.num+1
          })
          wx.hideLoading()  
      }

    })
  },
  //点击跳转详情
  getdetail:function(e){
    let param = this.data.data[e.currentTarget.id]
    param=JSON.stringify(param)
    wx.navigateTo({
      url: '../detail/detail?param='+param
    })
  },
  //去掉文本里面的html标签
  removeHtml: function (str) {
    return str.replace(/<[^>]+>/g, "")
  },
  //上拉加载数据
  onReachBottom:function(){
    this.setData({
      loadinglist:true,
      loadingover:false
    })
    this.request()
  },
  onPullDownRefresh:function(){
    this.request();
  }
})