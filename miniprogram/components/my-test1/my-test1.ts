// components/my-test1/my-test1.ts
Component({
  // 自定义组件的声明周期函数
  lifetimes:{
    created(){
      console.log("自定义组件created");
    },
    attached(){
      console.log("自定义组件attached");
    },
    ready(){
      console.log("自定义组件ready");
    },
    moved(){
      console.log("自定义组件moved");
    },
    error(){
      console.log("自定义组件error");
    },
  },
  // 自定义组件所在页面的生命周期函数
  pageLifetimes:{
    show(){
      console.log("自定义组件所在页面的生命周期函数 show");
      // 每次页面打开时，颜色随机显示
      this.setData({
        _rgb: {
          // Math.floor()向下取整，Math.ceil()向上取整
          r: Math.floor(Math.random()*255),
          g: Math.floor(Math.random()*255),
          b: Math.floor(Math.random()*255)
        },
      });
    },
    hide(){
      console.log("自定义组件所在页面的生命周期函数 hide");
    },
    resize(){
      console.log("自定义组件所在页面的生命周期函数 resize");
    },
  },
  // 自定义组件样式隔离
  options: {
    // styleIsolation:"isolated" // 默认，自定义组件不受页面样式影响
    // styleIsolation:"apply-shared" // 自定义组件受页面样式影响
    styleIsolation: "shared", // 自定义组件和页面样式互相影响
    // 设置纯数据字段匹配规则
    pureDataPattern: /^_/
  },
  /**
   * 组件的属性列表
   */
  properties: {
    max: Number,
    min: {
      type: Number,
      value: 0 //默认值
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    countTest: 0,
    num1: 0,
    num2: 0,
    sum: 0,
    obj: {
      a: 0,
      b: 0
    } as { [key: string]: any },
    sum2: 0,
    // 随机颜色监听
    // rgb:{
    //   r:0,
    //   g:0,
    //   b:0
    // },
    // 纯数据改造随机颜色监听
    _rgb: {
      r: 0,
      g: 0,
      b: 0
    },
    fullColor: '0,0,0'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addCount() {
      if (this.data.countTest >= this.properties.max) return;
      this.setData({
        countTest: this.data.countTest + 1
      });
      // console.log(this.data);
      // console.log(this.properties);
      // console.log(this.data === this.properties);
      this._showInfo();
    },
    _showInfo() {
      wx.showToast({ title: "countTest为：" + this.data.countTest, icon: 'none' });
    },
    addNum1() {
      this.setData({ num1: this.data.num1 + 1 });
    },
    addNum2() {
      this.setData({ num2: this.data.num2 + 1 });
    },
    addObj1() {
      this.setData({ obj: { a: this.data.obj.a + 1, b: this.data.obj.b } });
    },
    addObj2() {
      this.setData({ obj: { a: this.data.obj.a, b: this.data.obj.b + 1 } });
    },
    // 随机颜色改变
    // 出数据改造随机颜色改变
    clickR() {
      this.setData({
        ['_rgb.r']: this.data._rgb.r + 5 >= 255 ? 255 : this.data._rgb.r + 5
      })
    },
    clickG() {
      this.setData({
        ['_rgb.g']: this.data._rgb.g + 5 >= 255 ? 255 : this.data._rgb.g + 5
      })
    },
    clickB() {
      this.setData({
        ['_rgb.b']: this.data._rgb.b + 5 >= 255 ? 255 : this.data._rgb.b + 5
      })
    },
  },
  observers: {
    // 监听多个属性，方法里是对应的新值
    'num1, num2': function (num1, num2) {
      this.setData({ sum: num1 + num2 });
    },
    // 监听对象
    // 'obj':function(){
    //   this.setData({sum2: this.data.obj.a + this.data.obj.b});
    // },
    // // 监听对象上的单个
    // 'obj.a, obj.b':function(objA, objB){
    //   this.setData({sum2: objA + objB});
    // }
    // 监听通配符** 监听对象上的所有属性
    'obj.**': function () {
      this.setData({ sum2: this.data.obj.a + this.data.obj.b });
    },
    // 监听随机颜色改变
    // 'rgb.r, rgb.g, rgb.b':function(rgbR, rgbG, rgbB){
    //   this.setData({fullColor: `${rgbR},${rgbG},${rgbB}`});
    // },
    '_rgb.**': function () {
      this.setData({ fullColor: `${this.data._rgb.r},${this.data._rgb.g},${this.data._rgb.b}` });
    },
  }
})
