<template>
  <div>
    <input type="checkbox" v-model="ischeck" @click="check">
  </div>
</template>

<script>
  export default {
    data () {
      return {
        ischeck: false
      }
    },
    methods: {
      check () {
        console.log(1)
        console.log(this.ischeck)
      }
    }
  }
</script>

<style scoped>

</style>
