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
        // 解析存放在licalStorage中的数组 ， 如果没有，则解析一个空数据
        tasks: JSON.parse(window.localStorage.getItem('tasks') || '[]')
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
    },
    watch:{
      tasks: {
        // 开启深度监视
        deep: true,
        handler(newValue) {
          window.localStorage.setItem('tasks', JSON.stringify(newValue))
        }
      }
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
