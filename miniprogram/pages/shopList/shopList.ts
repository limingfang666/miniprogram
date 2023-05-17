// pages/shopList/shopList.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query: {} as { [key: string]: any },
    shopList: [] as Array<Object>[],
    page:1,
    pageSize:10,
    total:0,
    isBottom: false
  },

  getShowList(cb: Boolean =false){
    let _this = this;
    wx.showLoading({ title: '加载中'});

    // https://applet-base-api-t.itheima.net/categories/:cate_id/shops
    wx.request({
      url:"https://applet-base-api-t.itheima.net/categories/"+`${this.data.query.id}`+"/shops",
      data:{
        _page:this.data.page,
        _limit:this.data.pageSize
      },
      success(res: any){
        //res.header['X-Total-Count']-0 强转为数字
        _this.setData({shopList: [..._this.data.shopList,...res.data],total:res.header['X-Total-Count']-0}); 
      },
      complete(){
        wx.hideLoading();
        if(cb) wx.stopPullDownRefresh();
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({query:options});
    // 获取id对应数据
    this.getShowList();
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
// 初次渲染完成后设置页面title为传递过来的title
    wx.setNavigationBarTitle({title:this.data.query.title});
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
    // 下拉时重置参数
    this.setData({page:1,total:0,shopList:[],isBottom:false});
    // 传参时表示需要关闭下拉刷新
    this.getShowList(true);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    this.setData({page:this.data.page+1});
    // 数据load完以后不再调用
    if(this.data.page * this.data.pageSize >= this.data.total) {
      this.setData({isBottom:true});
      return;
    }
    this.getShowList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})