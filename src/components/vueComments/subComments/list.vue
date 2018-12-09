<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="comments.length === 0">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <item v-for="(item, index) in comments" :key="index" :commentItem="item"
            :deleteComments="deleteComments" :index="index"></item>
    </ul>
  </div>
</template>

<script>
  import item from './listSubComment/item.vue'
    export default {
      name: "list",
      props:{
        comments:{
          type:Array
        },
        deleteComments: {
          type:Function
        }
      },
      components: {
        item
      }
    }
</script>

<style scoped>
  .reply {
    margin-top: 0px;
  }
</style>
