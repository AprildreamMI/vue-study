<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input v-model="name" type="text" class="form-control" placeholder="用户名">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea v-model="content" class="form-control" rows="6" placeholder="评论内容"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button @click="addComment" type="button" class="btn btn-default pull-right">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
    export default {
      name: "from",
      data() {
          return {
            name: '',
            content: ''
          }
      },
      props: {
        addComments: {
          type:Function,
          required: true
        }
      },
      methods: {
        addComment() {
          if (!this.name.trim() || !this.content.trim()) {
            alert('姓名或内容不能为空')
            return
          }
          this.addComments({
            name: this.name,
            content: this.content
          })
          this.name = ''
          this.content = ''
        }
      }
    }
</script>

<style scoped>

</style>
