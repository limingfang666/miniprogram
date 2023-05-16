// pages/home/home.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:[],
    categoriesList:[],
  },

  getSwiperList(){
    let _This = this;
    wx.request({
      url:'https://applet-base-api-t.itheima.net/slides',
      method:'GET',
      success(res: any){
        if(res.statusCode === 200){
          _This.setData({
            swiperList: res.data
          });
        }
      }
    });
  },
  getCategoriesList(){
    let _This = this;
    wx.request({
      url:'https://applet-base-api-t.itheima.net/categories',
      method:'GET',
      success(res: any){
        if(res.statusCode === 200){
          _This.setData({
            categoriesList: res.data
          });
        }
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // 页面初次加载就获取轮播图
    this.getSwiperList();
    // 九宫格
    this.getCategoriesList();
    console.log(this.data.categoriesList);
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})