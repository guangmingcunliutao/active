<template>
  <div id="app">
    <div class="activeName">魔法相册</div>
    <div class="btn" @click="go">进入相册</div>
    <dialogFragment v-if="show" :isShow="show" @cancel="cancel">
      <div class="item">拍&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;照</div>
      <div class="item">从相册选择</div>
    </dialogFragment>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    go() {
      this.show = !this.show;
    },
    cancel() {
      this.show = false;
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
</style>

