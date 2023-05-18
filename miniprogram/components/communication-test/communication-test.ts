// components/communication-test/communication-test.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    num: 100,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addCount(){
      let count = this.properties.count;
      this.triggerEvent('sync',{count: count + 1});
    },
    _funTest(){
      console.log("获取到了子组件实例上的方法");
    }
  }
})
