<template>
  <button class="btn" :class="color" @click="$emit('action')">
    <slot/>
  </button>
</template>
<script>
export default {
  emits: ['action'],
  props: {
    color: {
      type: String,
      default: '',
      validator(value) {
        return ['', 'primary', 'danger'].includes(value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>