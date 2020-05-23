import Vue from 'vue'
import Vuex from 'vuex'
import plugin from './plugin'
import user from './user'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  },
  plugins: [plugin]
})
