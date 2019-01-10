<template>
  <div id="app">
    <div class="activeName">魔法相册</div>
    <div class="btn" @click="go">进入相册</div>
    <dialogFragment v-if="show" :isShow="show" @cancel="cancel" v-bind:test.sync="test">
      <div class="item" @click.stop="getP">拍&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;照</div>
      <div class="item" @click.stop="getP">从相册选择</div>
      <div class="item">{{test}}</div>
    </dialogFragment>
      <img src="../src/assets/1.jpg" alt="">
    <button @click="screenshot" class="screenshot">截图</button>
    <div class="test">
      <img src="false" alt="" ref="img">
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      test: 'test'
    }
  },
  methods: {
    go() {
      this.show = !this.show;
    },
    cancel() {
      this.show = false;
    },
    getP(){
      console.log('getP');
      this.show = false;
    },
    screenshot() {
      
      if(!this.$refs.img.src.match('false')) return;

      html2canvas(document.body).then((canvas)=> {
        var img = canvas.toDataURL();
        this.$refs.img.src = img;
      });
      
    }
  }
}
</script>
<style lang="less">

html,body,#app{
  width: 100%;
  height: 100%;
}
#app{
  background-image: url('https://via.placeholder.com/300.png/09f/fff');
}
.btn{
  width: 2rem;
  height: 1rem;
  background: violet;
  border-radius: .5rem;
  text-align: center;
  line-height: 1rem;
}
.tanchu{
  width: 100%;
  height: 2rem;
  background: white;
  font-size: .3rem;
  text-align: center;
  line-height: 2rem;
}
.sss{
  width: 100%;
  height: 100%;
  background: violet;
}
.screenshot{
  width: 2rem;
  height: 1.2rem;
  background: lightskyblue;
  margin: 10px;
  outline: none;
  user-select: none;
  font-size: .3rem;
  border: none;
  border-radius: .5rem;
}
</style>

