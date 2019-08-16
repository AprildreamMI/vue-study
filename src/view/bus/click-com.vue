<template>
  <div class="click">
    <p @click="clickDom">clickDom</p>
  </div>
</template>
<script>
import Bus from './bus'
export default {
  methods: {
    clickDom (e) {
      Bus.$emit('getTarget', e.target)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
