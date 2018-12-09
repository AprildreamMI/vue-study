<template>
  <ul class="todo-main">
    <item v-for="(task, index) in tasks"
          :key="index" :task="task" :index="index"
          :deleteTask="deleteTask"
    />
  </ul>
</template>

<script>
  import item from './listSonComponents/item.vue'
  export default {
    name: "list",
    props:{
      tasks: {
        type: Array
      },
      deleteTask: {
        type: Function
      }
    },
    components:{
      item
    }
  }
</script>

<style scoped>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
