<template>
	<!-- 计算属性进行双向的数据绑定 -->
	<div id="example">
		<!-- 设置计算属性的绑定字段，即reversedMessage的计算属性绑定到此输入框 -->
		<!-- 输入框中内容变化会调用相应的getter, setter计算属性 -->
		<input v-model="reversedMessage" type="text" style="font-size: 16px;">
		<p>Original message: "{{ message }}"</p>
		<p>Computed reversed message: "{{ reversedMessage }}"</p>
	</div>
</template>
<script>
export default {
	name: 'Compute',
	data() {
		return {
			message: 'Hello'
		};
	},
	computed: {
		// getter，setter计算属性都有
		reversedMessage: {
			// getter
			get: function() {
				console.log('把message的值获取到，进行反转，本方法会在页面一家在的时候进行调用')
				console.log('在set方法进行调用之后，也会同步更新get中的方法')
				return this.message
					.split('')
					.reverse()
					.join('');
			},
			// setter
			set: function(newValue) {
				console.log('重新设置值，进行了get操作')
				this.message = newValue;
			}
		}
	}
};
</script>
