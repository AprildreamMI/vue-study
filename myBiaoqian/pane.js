Vue.component('pane',{
    template: `<div v-if="isClose" class="pane" v-show="show">
                  <slot></slot>
               </div>`,
    props: {
      label: {
          type: String,
      },
      id: {
          type: String
      },
      closable: {
          type: String,
          default: 'off'
      }
    },
    data() {
        return {
            show: true,
            isClose: true
        }
    },
    methods: {
        pushPaneArr() {
            this.$parent.pushPaneArr()
        }
    },
    mounted() {
        // 等子组件全部加载好了，就调用方法告诉父组件，让父组件
        // 把子组件加入数组 开始事物
        this.pushPaneArr();
    }
})