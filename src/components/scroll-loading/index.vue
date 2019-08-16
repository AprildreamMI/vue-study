<template>
	<div>
		<h2>Scroll Loading Table</h2>
		<div>
			<p v-for="(item, index) in list" :key="index">
				Line:
				<span v-text="item"></span>
			</p>
			<infinite-loading :on-infinite="onInfinite" ref="infiniteLoading"></infinite-loading>
		</div>
	</div>
</template>

<script>
	import InfiniteLoading from 'vue-infinite-loading';
	export default {
	  data() {
	    return {
	      list: []
	    };
	  },
	  methods: {
	    onInfinite() {
	      setTimeout(() => {
	        const temp = [];
	        for (let i = this.list.length + 1; i <= this.list.length + 20; i++) {
	          temp.push(i);
	        }
	        this.list = this.list.concat(temp);
	        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
	      }, 1000);
	    }
	  },
	  components: {
	    InfiniteLoading
	  }
	};
</script>

<style>

</style>
