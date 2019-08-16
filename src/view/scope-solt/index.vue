<template>
  <div class="main">
    <book-list>
      <template slot="book" slot-scope="scope">
        <li>
          {{ scope.bookName }}
        </li>
      </template>
    </book-list>
  </div>
</template>
<script>
import bookList from './book-list'
export default {
  components: {
    bookList
  }
}
</script>
<style lang="scss" scoped>

</style>
