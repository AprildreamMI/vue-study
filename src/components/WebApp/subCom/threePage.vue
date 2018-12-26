<template>
  <div>
    <h2>3、请介绍一下自己</h2>
    <textarea v-model="textareaText" minlength="300" placeholder="不少于300字">

    </textarea>
    <pageButton  color="#2e6da4" :clickFn="subFrom">
      提交
    </pageButton><pageButton color="#2e6da4" :clickFn="provePage">
      上一题
    </pageButton>
    <pageButton color="#747474" :clickFn="reset">
      重置
    </pageButton>
  </div>
</template>

<script>
  import pageButton from './subCom/pageButton.vue'
  export default {
      name: "threePage",
      data () {
        return {
          textareaText: ''
        }
      },
      methods: {
        subFrom () {
          if (this.textareaText.length < 300) {
            alert("文本框字数小于300,请多多输入")
          }
        },
        provePage (){
          this.$router.push('/webapp/twoPage')
        },
        reset () {
          this.textareaText = ''
        }
      },
      components: {
        pageButton
      }
    }
</script>

<style lang="scss" scoped>
  div {
    padding: 10px;
    textarea {
      width: 90%;
      height: 300px;
    }
  }
</style>
