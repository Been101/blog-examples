import Vue from 'vue'
// 这么写如果 Notice.vue 中 用的 v-if
// NOtice 中先 this.isShow = false  此时 dom 会移除
// 再调用 document.body.removeChild(noticeDom) 会报错，没有这子dom
export function createComponent1 (Component, props) {
  const Ctru = Vue.extend(Component)
  const noticeVM = new Ctru({ ...props }).$mount()
  const noticeDom = noticeVM.$el
  document.body.appendChild(noticeDom)
  noticeVM.remove = () => {
    document.body.removeChild(noticeDom)
    noticeVM.$destroy()
  }
  return noticeVM
}

// 这么写可以和 Notice.vue 中 v-if 一起使用, 有疑惑，为什么可以?
export function createComponent2 (Component, props) {
  const Ctru = Vue.extend(Component)
  const noticeVM = new Ctru({ ...props }).$mount()
  document.body.appendChild(noticeVM.$el)
  noticeVM.remove = () => {
    document.body.removeChild(noticeVM.$el)
    noticeVM.$destroy()
  }
  return noticeVM
}

// Vue.extend 可以通过 propsData 属性把值传入到Notice props

export function createComponent (Component, propsData) {
  const Ctru = Vue.extend(Component)
  const noticeVM = new Ctru({ propsData }).$mount()
  document.body.appendChild(noticeVM.$el)
  noticeVM.remove = () => {
    document.body.removeChild(noticeVM.$el)
    noticeVM.$destroy()
  }
  return noticeVM
}
