<template>
	<div>
		<p>{{ age }}</p>
		<el-form status-icon :rules="{age: [
            { required: true, message: '年龄不能为空'},
						{ type: 'number', message: '年龄必须为数字值'}
          ]}" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
		  <el-form-item label="年龄" prop="age">
		    <el-input v-model.number="age"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
		    <el-button @click="resetForm('ruleForm2')">重置</el-button>
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
//         info: {
//           age: ''
//         },
				age: 25,
        rules: {
          age: [
            { validator: ageTest, trigger: 'blur' }
          ]
        }
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
      }
    },
		computed: {
// 			info () {
// 				let a  = {
// 					age: 888
// 				}
// 				return a
// 			}
		}
  }
</script>