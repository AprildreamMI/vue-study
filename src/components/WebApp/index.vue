<template>
  <div class="pageLayout ">
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped>
  .pageLayout {
    padding: 15px;
    width: 100%;
    height: 100%;
  }
</style>
