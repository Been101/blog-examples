<template>
  <div class = 'notice_box' v-if='isShow'>
    <div class= 'notice_main'>
      ---{{title}}--
      {{type}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'props-success'
    },
    title: {
      type: String,
      default: 'props-原始title'
    },
    duration: {
      type: Number,
      default: 1000
    }
  },
  data () {
    return {
      isShow: false
      // title: '原始title',
      // duration: 1000,
      // type: 'success'
    }
  },
  created () {
    // 如果不用 props 的话， 也可以从$options中直接拿到propsData属性
    // const { title = this.title, type = this.type } = this.$options.propsData
    // this.duration = this.$options.duration || this.duration
    // this.title = title
    // this.type = type
    // 直接解构传入的属性，createComponent1 中传参数的方法
    // this.duration = this.$options.duration || this.duration
    // this.title = this.$options.title || this.title
  },
  methods: {
    show () {
      this.isShow = true
      setTimeout(this.hide, this.duration)
    },
    hide () {
      this.isShow = false
      this.remove()
    }
  }
}
</script>

<style scoped>
  .notice_box{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
  }
  .notice_main{
    position: absolute;
    width: 30%;
    height: 150px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid #ccc;
    border-radius: 4px;
    background: #fff;
  }
</style>
