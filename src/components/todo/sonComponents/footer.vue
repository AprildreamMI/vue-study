<template>
  <div class="todo-footer">
    <label>
      <input v-model="checkboxAll" type="checkbox"/>
    </label>
    <span>
          <span>已完成{{ completeSize }}</span> / 全部{{ tasks.length }}
    </span>
    <button class="btn btn-danger" v-show="completeSize" @click="deleteSelectTask">清除已完成任务</button>
  </div>
</template>

<script>
    export default {
      name: "footer",
      props:{
        tasks: Array,
        taskAllSelect: Function,
        deleteSelectTask: Function
      },
      computed:{
        completeSize() {
          return this.tasks.reduce((preTotal, todo) =>
            preTotal + (todo.bol? 1 : 0), 0
          )
        },
        checkboxAll:{
          get() {
            return this.completeSize === this.tasks.length && this.tasks.length!=0
          },
          set(value) {
            this.taskAllSelect(value)
          }
        }
      }
    }
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
