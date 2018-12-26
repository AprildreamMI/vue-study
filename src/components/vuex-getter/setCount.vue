<template>
  <button @click="setCount">点击改变count</button>
</template>

<script>
  export default {
    name: "setCount",
    methods:{
      setCount () {
        console.log('进入了')
        this.$store.commit('setCount', 10)
      }
    }
  }
</script>

<style scoped>

</style>
