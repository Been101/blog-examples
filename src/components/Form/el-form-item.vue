<template>
  <div class="el-form-item">
    <label>{{ label }}</label>
    <slot></slot>
    <span class="error" v-if="error">{{ error }}</span>
    <!-- <p>{{ form.rules[prop] }}</p> -->
  </div>
</template>

<script>
import Schema from "async-validator";
export default {
  inject: ["form"],
  props: {
    label: {
      type: String,
      default: ""
    },
    rules: {
      type: Array,
      default() {
        return [];
      }
    },
    prop: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      error: ""
    };
  },
  mounted() {
    this.$on("validate", val => {
      console.log(val, "<-----val-----");
      this.validate(val);
    });
  },
  methods: {
    validate(val) {
      //  执行校验
      // 1. 获取值,校验规则
      // const value = val;
      // const rules = this.rules;
      const value = this.form.model[this.prop];
      const rules = this.form.rules[this.prop];
      // console.log(val, "<------val------");
      // console.log(rules, "<------val------");
      if (!rules) {
        return Promise.resolve(true);
      }
      // 2. 执行校验
      // 创建描述对象
      const descriptor = { [this.prop]: rules };
      // 创建校验函数
      const validator = new Schema(descriptor);
      // 校验
      return validator.validate({ [this.prop]: value }, errors => {
        console.log(errors, "<----error----");
        if (errors) {
          this.error = errors[0].message;
        } else {
          this.error = "";
        }
      });
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
