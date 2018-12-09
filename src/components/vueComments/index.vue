<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <from :addComments="addComments"></from>
      <list :comments="comments" :deleteComments="deleteComments"></list>
    </div>
  </div>
</template>

<script>
  // 运行此项目请引用bootstarp
  import from from './subComments/from.vue'
  import list from './subComments/list.vue'
  export default {
    name: "index",
    data() {
      return {
        comments:[
          {
            name:'赵思',
            content: 'vue 很不错'
          },
          {
            name:'王新翔',
            content: 'vue 很好学'
          },
          {
            name:'刘胜',
            content: 'vue是什么'
          }
        ]
      }
    },
    methods: {
      addComments(comment) {
        this.comments.unshift(comment)
      },
      deleteComments(index) {
        this.comments.splice(index, 1)
      }
    },
    components: {
      from,
      list
    }
  }
</script>

<style scoped>

</style>
