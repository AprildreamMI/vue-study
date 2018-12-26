<template>
    <div>
      <input type="text" v-model="value.name">
    </div>
</template>

<script>
    export default {
      name: "index",
      props: {
        value: Object
      }
    }
</script>

<style scoped>

</style>
