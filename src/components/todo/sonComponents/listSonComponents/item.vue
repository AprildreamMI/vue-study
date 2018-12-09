<template>
  <li @mouseenter="deleteBtnShow(true)" @mouseleave="deleteBtnShow(false)" :style="{backgroundColor:bgColor}">
    <label>
      <input v-model="task.bol" type="checkbox"/>
      <span>{{ task.title }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteTaskBtn">删除</button>
  </li>
</template>

<script>
    export default {
      name: "item",
      data() {
        return {
          bgColor: 'white',
          isShow: false
        }
      },
      props: {
        task: {
          type:Object
        },
        index: {
          type: Number
        },
        deleteTask: {
          type: Function
        }
      },
      methods: {
        deleteBtnShow(isShow) {
          if (isShow) {
            this.bgColor = '#ccc'
            this.isShow = true
          } else {
            this.bgColor = 'white'
            this.isShow = false
          }
        },
        deleteTaskBtn() {
          if (window.confirm(`确定要删除${this.task.title}任务吗？`)) {
            this.deleteTask(this.index);
          }
        }
      }
    }
</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: block;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
