<template>
    <button
      @click="clickFn"
      class="page-btn two-next-btn"
      :style="btnStyle">
      <slot></slot>
    </button>
</template>

<script>
  export default {
    name: "pageButton",
    data() {
      return {
        btnStyle: {
          backgroundColor: this.color,
        }
      }
    },
    props: {
      color: String,
      task: {},
      clickFn: Function
    }
  }
</script>

<style scoped>

</style>
