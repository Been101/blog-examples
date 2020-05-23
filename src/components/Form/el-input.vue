<template>
  <div>
    <input :type="type" :value="value" @input="onInput" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    }
  },
  methods: {
    onInput(e) {
      console.log(e.target.value);
      this.$emit("input", e.target.value);

      // 值发生变化的时候就是要校验的时候
      this.$parent.$emit("validate", e.target.value);
    }
  }
};
</script>

<style scoped></style>
