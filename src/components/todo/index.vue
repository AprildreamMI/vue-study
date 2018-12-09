<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <my-header :addTask="addTask"></my-header>
      <list :tasks="tasks" :deleteTask="deleteTask"></list>
      <my-footer :deleteSelectTask="deleteSelectTask" :taskAllSelect="taskAllSelect" :tasks="tasks"></my-footer>
    </div>
  </div>
</template>

<script>
  import myHeader from './sonComponents/header.vue'
  import list from './sonComponents/list.vue'
  import myFooter from './sonComponents/footer.vue'
  export default {
    name: "index",
    data() {
      return {
        tasks:[
          {
            title: '看权威指南',
            bol: false
          },
          {
            title: '学习vue实战',
            bol: true
          },
          {
            title: '学习外语',
            bol: false
          }
        ]
      }
    },
    methods: {
      addTask(task) {
        this.tasks.unshift(task)
      },
      deleteTask(index) {
        console.log(index)
        this.tasks.splice(index, 1)
      },
      taskAllSelect(fbol) {
        this.tasks.forEach(item => {
          item.bol = fbol
        })
      },
      deleteSelectTask() {
        this.tasks = this.tasks.filter((item => !item.bol))
      }
    },
    components: {
      myHeader,
      list,
      myFooter,
    }
  }
</script>

<style scoped>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
