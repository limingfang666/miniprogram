// pages/basic/basic.ts
Page({
  /**
   * 页面的初始数据
   */
  data: {
    count:0,
    name:"test",
    // 声明数据为string类型数组
    randomColorList: [] as Array<string>,
    // 节流阀：现在版本已经不需要节流阀了
    isLoading: false
  },
  // 导航到联系我们页面
  tapToContact(){
    wx.switchTab({url:'/pages/contact/contact?name=zs'});
  },
  // 导航到日志页
  tapToLogs(){
    wx.navigateTo({url:'/pages/logs/logs?name=zs'});
  },
  // count加1
  plusCount(){
    this.setData({count: this.data.count+1});
  },
  // 获取随机颜色
  getRandomColor(){
    let _this = this;
    wx.showLoading({
      title: '加载中',
    })
    // this.setData({isLoading:true});
    console.log("发起请求了。。。。。。。。");
    wx.request({
      url:'https://applet-base-api-t.itheima.net/api/color',
      success(res: any){
        _this.setData({randomColorList : [..._this.data.randomColorList, ...res.data.data]});
      },
      complete(){
        // 无论成功与否，都需要隐藏loading状态
        wx.hideLoading()
        // _this.setData({isLoading:false});
      }
    })
    // 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // 如果正在获取数据isLoading=true则不发起请求
    this.getRandomColor();
    console.log("onload----------");
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log("onReady----------");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log("onShow----------");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log("onHide----------");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log("onUnload----------");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log("下拉刷新了");
    this.setData({count:0});
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
console.log("上拉触底了。。。。");
      // if(this.data.isLoading) return 
      this.getRandomColor();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})