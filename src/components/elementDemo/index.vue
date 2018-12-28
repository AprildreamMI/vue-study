<template>
	<div>
		<p>{{ info.dier.myAge }}</p>
		<el-form :model="info" status-icon :rules="rules" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="年龄" prop="dier.myAge">
				<div>
					<el-input v-model.number="info.dier.myAge" @input="updateAge"></el-input>
				</div>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
  export default {
    data() {
			let ageTest = (rule, value, callback) => {
				console.log(value)
				console.log('验证了')
				if (!value) {
          return callback(new Error('年龄不能哈哈哈哈'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
			}
      return {
				// 必须保证最后的名字与验证规则的名字保持一致 如果是多层的对象引用 则需要按照下方的写法
				rules: {
					dier: {
						myAge: [
							{ validator: ageTest, trigger: 'blur' },
						]
					}
				},
				count: 0,
				bol: false
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
			// 输入事件
			updateAge () {
				console.log(this.info.dier.myAge)
				console.log('触发了更新操作')
				// this.info = this.info
				this.bol = true
				console.log(this.bol)
			}
    },
		computed: {
			info: {
				get () {
					if (this.bol) {
						console.log('bol改变了')
					}
					let info = {
						dier: {
							myAge: this.count
						}
					}
					return info
				},
				/* set (value) {
					console.log(value)
					this.count = value.dier.myAge
				} */
			}
		}
  }
</script>