<template>
  <div class="twoPage">
    <h2>2、选择你的兴趣爱好</h2>
    <div class="checkbox-from">
      <label for="">
        <input type="checkbox" v-model="isAllCheck" @click="allCheck"> 全选
      </label>
      <label  v-for="(item, index) in aihaoList" :key="index" for="">
        <input v-model="chceckList" :value="item.id" type="checkbox">{{ item.label }}
      </label>
    </div>
    <pageButton  color="#2e6da4" :clickFn="nextPage">
      下一题
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
    name: "twoPage",
    data () {
      return {
        isAllCheck: false,
        chceckList: [],
        aihaoList: [
          {
            id: 1,
            label: '看书'
          },{
            id: 2,
            label: '打游戏'
          },{
            id: 3,
            label: '跑步'
          },{
            id: 4,
            label: '看电影'
          },{
            id: 5,
            label: '听音乐'
          },
        ]
      }
    },
    methods: {
      allCheck () {
        if (!this.isAllCheck) {
          this.chceckList = []
          this.aihaoList.forEach((item) => {
            console.log(this.chceckList)
            this.chceckList.push(item.id)
          })
        } else {
          this.chceckList = []
        }
      },
      nextPage () {
        console.log(11)
        if (this.chceckList.length < 2) {
          alert('请选择您的兴趣爱好,最少选择两项')
          return
        }
        this.$router.push('/webapp/threePage')
      },
      provePage (){
        this.$router.push('/webapp/onePage')
      },
      reset () {
        this.chceckList = []
      }
    },
    components: {
      pageButton
    },
    watch:{
      chceckList:{
        handler (newValue) {
          console.log(newValue.toString())
          if (this.chceckList.length === this.aihaoList.length) {
            console.log(this.isAllCheck)
            this.isAllCheck = true
          } else {
            this.isAllCheck = false
          }
        },
        deep:true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .checkbox-from {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /*align-items: center;*/
    label {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 10px;
      width: 80px;
    }
  }
</style>
