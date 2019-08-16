<template>
  <div class="main">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="content">
      <slot></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
    console.log(this.$slots.header)
    console.log(this.$slots.default)
    console.log(this.$slots.footer)
  }
}
</script>
<style lang="scss" scoped>

</style>
