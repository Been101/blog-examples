export default {
  namespaced: true,
  state: {
    token: ''
  },
  mutations: {
    login (state, { token }) {
      state.token = token
    }
  },
  actions: {
    LOGIN ({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          const payload = {
            username: 'admin',
            token: 'admin token'
          }
          commit('login', payload)
          resolve()
        }, 500)
      })
    }
  }
}
