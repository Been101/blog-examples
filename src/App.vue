<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <el-form :model="model" :rules="rules">
      <el-form-item prop="name" label="用户名" :rules="rules.name">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码" :rules="rules.password">
        <el-input v-model="model.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import elForm from "./components/Form/el-form.vue";
import elFormItem from "./components/Form/el-form-item.vue";
import elInput from "./components/Form/el-input.vue";

@Component({
  components: {
    HelloWorld,
    elForm,
    elFormItem,
    elInput
  }
})
export default class App extends Vue {
  data() {
    return {
      rules: {
        name: [
          { required: true, message: "必填项， 不能为空" },
          { max: 12, min: 6, message: "长度在6-12之间" }
        ],
        password: [
          { required: true, message: "不填密码怎么登录" },
          { max: 6, message: "密码这么长， 能记得住吗" }
        ]
      },
      model: {
        name: "",
        password: ""
      }
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
