// app.ts
App<IAppOption>({
  globalData: {},
  onLaunch() {
    // console.log("小程序启动了-----");
    
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },
  onShow(){
    // console.log("小程序从后台到前台");
  },
  onHide(){
    // console.log("小程序进入后台");
  }
})