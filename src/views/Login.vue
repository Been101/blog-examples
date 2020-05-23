<template>
  <div class="about">
    <h1>This is an login page</h1>
    <button @click="login1">登录</button>
  </div>
</template>

<script>
import Setting from './Setting'
import { mapActions } from 'vuex'
export default {
  methods: {
    login1 () {
      // localStorage.setItem('token', 'hasToken')
      // this.$store.dispatch('user/LOGIN').then(() => {
      //   console.log('dispatch success')
      // })
      this.LOGIN().then(() => {
        console.log('dispatch map actions')
        localStorage.setItem('token', 'hasToken')
        if (this.$route.query.redirect) {
          this.$router.addRoutes([
            {
              path: '/setting',
              name: 'setting',
              component: Setting
            }
          ])
          this.$router.push(this.$route.query.redirect)
        } else {
          this.$router.push('/')
        }
      })
    },
    ...mapActions('user', ['LOGIN'])
  }
}
</script>

<style>
</style>
