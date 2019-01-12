<template>
  <div id="app">
    <div class="btn" @click="go">进入相册</div>
    <dialogFragment v-if="show" :isShow="show" @cancel="cancel" >
      <div class="item" @click.stop="getP">拍&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;照</div>
      <div class="item" @click.stop="getP">从相册选择</div>
    </dialogFragment>

    <div class="gift" @click="go" v-if="gift">
      这是一个礼物
    </div>

    <div class="progress"></div>

    <div class="progressY"></div>

    <!-- 截图部分 -->
    
    <button @click="screenshot" class="screenshot">截图</button>
    <div class="imgWrap">
      <img src="false" alt="" ref="img">
    </div>
    
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      gift: true
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

      // html2canvas(document.body).then((canvas)=> {
      //   var img = canvas.toDataURL();
      //   this.$refs.img.src = img;
      // });
      
    },
    giftDisappear() {
      setTimeout(()=>{
        console.log(this.gift);
        this.gift = false;
      },8000);
    }
  },
  created() {
    this.giftDisappear();
    var obj = {
      name: 'name',
      age: 20
    }
    obj = JSON.stringify(obj);
    localStorage.setItem('token', obj);
  }
}
</script>
<style lang="less">
.progressY{
  width: calc(2rem - .2rem);
  height: calc(2rem - .2rem);
  border-radius: 50%;
  border: .1rem solid lightskyblue;
}
.progress{
  height: .4rem;
  background: lightblue;
  animation: progress 5s linear;
}
@keyframes progress{
  from{
    width: 0%;
  }
  to{
    width: 100%;
  }
}
.gift{
  width: 2rem;
  height: .6rem;
  line-height: .6rem;
  text-align: center;
  font-size: .3rem;
  background: lightblue;
  animation: gift 10s linear;
  position: relative;
}
@keyframes gift{
  from {
    right: -7.5rem;
  }
  to {
    right: 2rem;
  }
}
html,body,#app{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.btn{
  width: 2rem;
  height: 1rem;
  background: violet;
  border-radius: .5rem;
  text-align: center;
  line-height: 1rem;
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