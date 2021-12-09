<template>
  <div>
    <h1>{{ email }}</h1>
    <h2>{{ isValidEmail(email) }}</h2>
    <hello-world />
  </div>
</template>

<script>

import * as Validate from './utils/validate.js'

import HelloWorld from './components/HelloWorld/index.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      email: 'aaa@example.com'
    }
  },
  methods: {
    isValidEmail(email) {
      return Validate.validEmail(email)
    }
  }
}
</script>
