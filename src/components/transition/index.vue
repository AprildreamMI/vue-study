<template>
    <div>
      <button @click="isShow = !isShow">开关动画</button>
      <transition name="one">
        <div v-show="isShow">这是一段动画</div>
      </transition>
    </div>
</template>

<script>
    export default {
        name: "indx",
      data() {
        return {
          isShow: false
        }
      }
    }
</script>

<style scoped>
  .one-enter,.one-leave-to {
    transform: translateX(200px);
    opacity: 0;
  }
  .one-enter-active,.one-leave-active {
    transition: all 2s ease;
  }
</style>
