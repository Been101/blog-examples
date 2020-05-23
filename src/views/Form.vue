<template>
  <div class="home">
    <el-form :model="model" :rules="rules" ref="form">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="model.password" type="password"></el-input>
      </el-form-item>
      <button @click="onLogin">Login</button>
    </el-form>
  </div>
</template>

<script>
// @ is an alias to /src
import elInput from "@/components/Form/el-input.vue";
import elFormItem from "@/components/Form/el-form-item.vue";
import elForm from "@/components/Form/el-form.vue";
export default {
  name: "Form",
  components: {
    elInput,
    elFormItem,
    elForm
  },
  data() {
    return {
      model: {
        username: "tom",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "必填项" }],
        password: [{ required: true, length: 6, message: "必填项" }]
      }
    };
  },
  methods: {
    onLogin() {
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log("通过");
        } else {
          console.log("不通过");
        }
      });
    }
  }
};
</script>
