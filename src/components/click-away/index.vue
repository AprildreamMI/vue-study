<template>
	<div>
		<div @click="addActive" v-on-clickaway="away" class="click-box one">
		</div>
		<div @click="addActive" v-on-clickaway="away" class="click-box two">
		</div>
	</div>
</template>

<script>
  import { addClass, removeClass, setStyle } from 'element-ui/src/utils/dom'
  import { directive as onClickaway } from 'vue-clickaway';
	export default {
		methods: {
			away () {
        let elArray = document.querySelectorAll('.click-box');
        elArray.forEach (item => {
          removeClass(item, 'active')
        })
			},
      addActive (e) {
        let el = e.target;
        addClass(el, 'active')
      }
		},
		directives: {
			onClickaway: onClickaway,
		},
	}
</script>

<style lang="scss">
	.click-box {
    position: relative;
		margin: 0 auto;
		margin-top: 50px;
		width: 100px;
		height: 100px;
		text-align: center;
    &.active {
      &:before {
        content: '';
        position: absolute;
        top: -4px;
        left: -4px;
        width: 105%;
        height: 105%;
        border: 1px solid rgb(1, 247, 165);
      }
    }
	}
	.one {
		background-color: red;
	}
	.two {
		background-color: blue;
	}
</style>
