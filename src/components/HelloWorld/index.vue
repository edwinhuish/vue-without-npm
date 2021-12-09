<template>
  <span class="example">{{ msg }}</span>
</template>
<script>
export default {
  data() {
    return {
      msg: 'hello world!',
      color: 'blue'
    }
  }
}
</script>

<style scoped>
.example {
  color: v-bind('color');
}
</style>
