<template>
  <div class="onePage">
    <p class="title-p">1、请问你的性别是：</p>
    <div>
      <input v-model="oneTask" value="man" type="radio"> 男
      <input v-model="oneTask" type="radio" value="woman"> 女
      <input v-model="oneTask" type="radio" value="baomi"> 保密
    </div>
    <pageButton :task="oneTask" color="#2e6da4" :clickFn="nextPage">
      下一题
    </pageButton>
    <pageButton :task="oneTask" color="#747474" :clickFn="reset">
      重置
    </pageButton>
  </div>
</template>

<script>
  import pageButton from './subCom/pageButton.vue'
  export default {
    name: "onePage",
    data() {
      return {
        oneTask: 'man'
      }
    },
    methods: {
      nextPage () {
        if (!this.oneTask) {
          alert('请选择您的性别！')
          return
        }
        this.$router.push('/webapp/twoPage')
      },
      reset () {
        this.oneTask = 'man'
      }
    },
    components: {
      pageButton
    }
  }
</script>

<style lang="scss" scoped>
  .onePage {
    position: relative;
  }
</style>
