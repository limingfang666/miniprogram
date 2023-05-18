module.exports = Behavior({
  properties:{
    myBehaviorProperties: Number,
  },
  data:{
    myBehaviorData: 10,
  },
  // behaviors: ['']
  methods:{
    getBehaviorsInfo(){
      console.log("getBehaviorsInfo--------");
    },
  },
  created(){
    console.log("my-behaviors上的created()");
  },
  attached(){
    console.log("my-behaviors上的attached()");
  },
  ready(){
    console.log("my-behaviors上的ready()");
  },
  detached(){
    console.log("my-behaviors上的detached()");
  },
});