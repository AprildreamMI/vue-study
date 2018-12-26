<template>
  <div>
    <h3>hahah</h3>
    <h2>{{ parentValue.name }}</h2>
    <zs-input :value="parentValue"></zs-input>
    <h2>{{ parentCheckObject }}</h2>
    <zs-check :fn="parentFn" :check="parentCheckObject"></zs-check>
    <input type="checkbox" v-model="check" @click.stop="testCheck">
  </div>
</template>

<script>
  import zsInput from './subInput'
  import zsCheck from './subChek'
  export default {
    name: "index",
    data () {
      return {
        check: false,
        parentValue: {
          name: '赵思',
          info: '赵思思思思思思'
        },
        parentCheckObject: false
      }
    },
    methods: {
      parentFn (id) {
        console.log(id.id)
      },
      testCheck () {
        console.log(this.check)
      }
    },
    components:{
      zsInput,
      zsCheck
    }
  }
</script>

<style scoped>

</style>
