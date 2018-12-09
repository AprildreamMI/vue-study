const vm = new Vue({
    el:'#app',
    data: {
        goods: [
            {
                id: 1,
                name: 'iPhone 7',
                price: 6188,
                count: 1
            },
            {
                id: 2,
                name: 'iPad Pro',
                price: 5888,
                count: 1
            },
            {
                id: 3,
                name: 'MacBook Pro',
                price: 61288,
                count: 1
            },
            {
                id: 4,
                name: 'iPhone 5s',
                price: 4188,
                count: 1
            }
        ],
        checkGoods: [

        ],
        checked: false,
        checkArr: []
    },
    methods: {
        removeGood(index)  {
            console.log(1)
            this.goods.splice(index,1);
        },
        addGood(index) {
            this.goods[index].count++
        },
        reduceGood(index) {
            this.goods[index].count--
        },
        checkAll() {
            if (this.checked) {  // 如果为真，实现全选
                this.checkArr = []
                this.goods.forEach((item) => {
                    this.checkArr.push(item.id)
                })
            } else {  //  如果为假  实现反选
                this.checkArr = []
            }
        }
    },
    watch: {
        checkArr: {
            handler() {
                console.log(this.checkArr.toString())
                if (this.checkArr.length === this.goods.length) {
                    this.checked  = true
                } else {
                    this.checked = false
                }
            },
            /*开启深度检测*/
            deep: true
        }
    },
    computed: {
        getTotalPrice () {
            let total = 0;
            for (let i = 0; i < this.checkArr.length; i++) {
                total +=this.goods[this.checkArr[i]-1].price * this.goods[this.checkArr[i]-1].count;
            }
            return total
        }
    }
})