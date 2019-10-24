<template>
  <div id="app">
    Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    <p>{{ value1 }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { mapState } from 'vuex'
export default {
  computed: mapGetters([
    'evenOrOdd'
  ]),
   // mapState 辅助函数,帮助我们生产计算属性
  computed: mapState({
    value1: state => state.count + 'gaojy',
  }),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ])
}
</script>
