<template>
    <div>
      {{ count }}
      <button @click="setCount">点击改变</button>
      <button v-get-count="{countArray: countArray, setCount: setCount}">测试传来的参数</button>
    </div>
</template>

<script>
  export default {
    name: "index",
    data () {
      return {
        countArray:[]
      }
    },
    methods:{
      setCount () {
        this.$store.commit('setCount', 20)
        this.countArray[0] = this.count
      }
    },
    computed: {
      count () {
        return this.$store.getters.getCount
      }
    },
    directives: {
      getCount: {
        bind (el, bingind, vnode) {
          el.onclick = function () {
            bingind.value.setCount()
            console.log(bingind.value)
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
