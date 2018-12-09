Vue.component('my-input', {
    template: `<div>
                   <input type="number" 
                        :value="currentValue"
                        @change="inputChange" 
                         />
                   <button :disabled="currentValue <= min"
                           @click="down"
                   >-</button>
                   <button :disabled="currentValue >= max"
                            @click="up">+</button>
               </div>`,
    props: {
        max: {
            type: Number,
            default: Infinity
        },
        min: {
            type: Number,
            default: -Infinity
        },
        value: {
            type:Number,
            default: 0
        },
        step: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            // 对应上面的value
            currentValue: this.value
        }
    },
    methods: {
        inputChange(e) {
            let val = e.target.value.trim()
            /*如果不是数字 是字符串的话 那么就用之前的值覆盖*/
            if (isNaN(val)) {
                e.target.value = this.currentValue
            } else {
                val = Number(val)
                this.currentValue = val
                if (val > this.max) {
                    this.currentValue = this.max
                } else if (val < this.min) {
                    this.currentValue = this.min
                }
            }
        },
        updateCurrentValue(val) {
            if (val > this.max) {
                this.currentValue = this.max
            } else if (val < this.min) {
                this.currentValue = this.min
            } else {
                this.currentValue = val
            }
        },
        up() {
            if (this.currentValue >= this.max) return
            if (this.currentValue + this.step >= this.max) {
                this.currentValue = this.max
                return
            }
            this.currentValue +=this.step
        },
        down() {
            if (this.currentValue <= this.min) return
            if (this.currentValue - this.step <= this.min) {
                this.currentValue = this.min
                return
            }
            this.currentValue -=this.step
        }
    },
    mounted() {
      this.updateCurrentValue(this.value)
    },
    watch: {
        currentValue(value) {
            this.$emit('input', value)
        },
        value(value) {
            this.currentValue = value
        }
    }
})