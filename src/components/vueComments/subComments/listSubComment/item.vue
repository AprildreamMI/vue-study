<template>
  <li class="list-group-item">
    <div class="handle">
      <a @click="deleteComment" href="javascript:;">删除</a>
    </div>
    <p class="user"><span >{{ commentItem.name }}</span><span>说:</span></p>
    <p class="centence">{{ commentItem.content }}</p>
  </li>
</template>

<script>
    export default {
      name: "item.vue",
      props:{
        commentItem: {
          type: Object
        },
        deleteComments: {
          type: Function
        },
        index: {
          type: Number
        }
      },
      methods: {
        deleteComment() {
          if (window.confirm(`确定要删除${this.commentItem.name}的评论吗`)) {
            this.deleteComments(this.index)
          }
        }
      }
    }
</script>

<style scoped>
  li {
    transition: .5s;
    overflow: hidden;
  }

  .handle {
    width: 40px;
    border: 1px solid #ccc;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
  }

  .handle a {
    display: block;
    text-decoration: none;
  }

  .list-group-item .centence {
    padding: 0px 50px;
  }

  .user {
    font-size: 22px;
  }
</style>
