<template>
  <div>
    <component :is="currentComponent"></component>
    <C></C>
    <button @click="handleToggle('A')">切换组件A</button>
    <button @click="handleToggle('B')">切换组件B</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      currentComName: 'A'
    }
  },
  computed: {
    currentComponent () {
      let componetns = {
        'A': () => import('./a'),
        'B': () => import('./b')
      }
      console.log(componetns)
      return componetns[this.currentComName]
    }
  },
  components: {
    C: () => import('./c')
  },
  methods: {
    handleToggle (name) {
      this.currentComName = name
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
