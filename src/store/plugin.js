export default store => {
  console.log('my plugin')
  store.subscribe(({ type, payload }, state) => {
    if (type === 'user/login') {
      localStorage.setItem('token22', payload.token)
    }
  })
}
