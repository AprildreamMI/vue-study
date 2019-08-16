<template>
  <ul>
    <slot name="book" v-for="item in books" :book-name="item.name"></slot>
  </ul>
</template>
<script>
export default {
  props: {
    books: {
      type: Array,
      default: () => {
        return [
          {
            name: '天南魔影',
            price: 99
          },
          {
            name: '嗜血历练',
            price: 99
          },
          {
            name: '大晋皇族',
            price: 99
          },
          {
            name: '名震海外',
            price: 130
          },
          {
            name: '风起云涌',
            price: 130
          }
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
