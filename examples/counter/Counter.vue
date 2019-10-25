<template>
  <div id="app">
    Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    <p>{{ value1 }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import { mapState } from "vuex";
export default {
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      "evenOrOdd"
      // ...
    ]),
    ...mapState({
      value1: state => state.count + "gaojy"
    })
  },
  // mapState 辅助函数,帮助我们生产计算属性

  methods: {
    ...mapMutations(["increment", "decrement"]), //mutation是同步事务
    ...mapActions(["incrementIfOdd", "incrementAsync"])
  }
};
</script>
