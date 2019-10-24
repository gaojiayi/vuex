import 'babel-polyfill'
import Vue from 'vue'
import Counter from './Counter.vue'
import store from './store'


new Vue({
  el: '#app',
  // 把store对象提供给“store”选项，这可以把store的实例注入所有的子组件
  store,

  render: h => h(Counter)
})
