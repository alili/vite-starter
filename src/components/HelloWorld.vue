<script setup>
  defineProps({
    msg: {
      type: String,
      required: true,
    },
  })
</script>

<template lang="pug">
.greetings
  h1.green {{ msg }}
  h3
    a(href="https://vitejs.dev/" rel="noopener" target="_blank") Vite
    a(href="https://vuejs.org/" rel="noopener" target="_blank") Vue 3
</template>

<style scoped>
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
  }

  h3 {
    font-size: 1.2rem;
  }

  .greetings h1,
  .greetings h3 {
    text-align: center;
  }

  @media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
      text-align: left;
    }
  }
</style>
