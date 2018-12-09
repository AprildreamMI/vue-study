Vue.component('tabs', {
    template: `<div class="tabs">  <!--标签名字-->
                  <div class="tabs-bar">
                    <div
                        v-for="(item, index) in paneArr"
                        :class="tabCls(item)"
                        :key="index"
                        @click="changeCurrent(index)"
                    >
                    <span @click="clospane(index)" v-show="item.closable === 'on'"></span>
                    {{ item.label }}
                    </div>
                  </div>
                  <div class="tabs-content"> <!--标签内容-->
                    <slot></slot>
                  </div>
               </div>
                `,
    props: {
      value: {
          type: String,
          default: "1"
      }
    },
    data() {
        return {
            paneArr: [],
            currentValue: this.value
        }
    },
    methods: {
        // 获取所有的pane子组件
        getPaneArr() {
            return this.$children.filter(function (pane) {
                return pane.$options.name === 'pane'
            })
        },
        pushPaneArr() {
            this.paneArr = []
            let _this = this
            this.getPaneArr().forEach(function (pane, index) {
                _this.paneArr.push({
                    label: pane.label,
                    id: pane.id || index,
                    closable: pane.closable || 'off'
                })
                if (index === 0) {
                    _this.currentValue = pane.id
                }
            })
            _this.updateStatus();
        },
        updateStatus() {
            let _this = this
            this.getPaneArr().forEach(function (pane) {
                pane.show = _this.currentValue === pane.id
            })
        },
        changeCurrent(index) {
            let id = this.paneArr[index].id
            this.currentValue = id
            this.$emit('input', id)
        },
        tabCls: function (item) {
            return [
                'tabs-tab',
                {
                    'tabs-tab-active': item.id === this.currentValue
                }
            ]
        },
        clospane(index) {
            console.log(this.getPaneArr()[index])
            this.getPaneArr()[index].isClose = false
        }
    },
    watch: {
        currentValue: function() {
            this.updateStatus()
        },
        value: function(val) {
            this.currentValue = val
        }
    }
})