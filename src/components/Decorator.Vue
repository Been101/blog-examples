<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Prop, Data, Vue } from 'vue-property-decorator'

@Component
export default class Decorator extends Vue {
  @Prop() private msg!: string
}
</script>

<style scoped></style>
