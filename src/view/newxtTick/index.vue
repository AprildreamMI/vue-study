<template>
  <div class="main">
    <h1 id="title" v-if="showTitle">文本标题</h1>
    <button @click="handleShowTitle">显示标题</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showTitle: false
    }
  },
  methods: {
    handleShowTitle () {
      this.showTitle = true
      // var text = document.getElementById('title').innerHTML
      // console.log(text)
      this.$nextTick(() => {
        console.log(document.getElementById('title').innerHTML)
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
