<template>
  <div class="show">

  </div>
</template>
<script>
import Bus from './bus'
export default {
  created () {
    Bus.$on('getTarget', target => {
      console.log('show 触发的', target)
    })
  }
}
</script>
<style lang="scss" scoped>

</style>
