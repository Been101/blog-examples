<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      form: this
    };
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: Object
  },
  methods: {
    validate(cb) {
      let flag = true;
      const tasks = this.$children
        .filter(item => item.prop)
        .map(item => item.validate());
      Promise.all(tasks)
        .then(() => cb(flag))
        .catch(() => {
          flag = false;
          cb(flag);
        });
    }
  }
};
</script>

<style scoped></style>
