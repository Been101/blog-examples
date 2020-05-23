<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HelloWorld msg='Welcome to Your Vue.js App' />
    <button @click="notice">点击有提示</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Notice from '@/components/Notice.vue'
import { createComponent } from '@/utils/createComponent'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    notice () {
      const notice = createComponent(Notice, {
        title: '来自Home的title33',
        type: 'warning'
      })
      notice.show()
    }
  }
}
</script>
