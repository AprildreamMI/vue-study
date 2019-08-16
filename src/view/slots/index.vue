<template>
  <child-com>
    <h1 slot="header">
      标题
    </h1>
    <p>
      内容
    </p>
    <h1 slot="footer">
      尾部
    </h1>
  </child-com>
</template>
<script>
import childCom from './child-com'
export default {
  components: {
    childCom
  }
}
</script>
<style lang="scss" scoped>

</style>
