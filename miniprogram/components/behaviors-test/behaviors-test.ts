// components/behaviors-test/behaviors-test.ts
// 引入behaviors文件
const myBehaviors = require("../../behaviors/my-behaviors");
Component({
  behaviors:[myBehaviors],
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  } as any,

  /**
   * 组件的方法列表
   */
  methods: {
    getBehaviorsFunc(){
      console.log(this.data.myBehaviorData);
      this.properties.myBehaviorData = 100;
      console.log(this.properties.myBehaviorData);
    }
  }
})
