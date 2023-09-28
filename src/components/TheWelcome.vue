<script setup>
</script>

<template lang="pug">
WelcomeItem
  template(#icon)
    IconDocumentation
  template(#heading) Documentation
  |
  | Vue&rsquo;s
  a(href="https://vuejs.org/" rel="noopener" target="_blank") official documentation
  |
  | provides you with all information you need to get started.
WelcomeItem
  template(#icon)
    IconTooling
  template(#heading) Tooling
  |
  | This project is served and bundled with
  a(href="https://vitejs.dev/guide/features.html" rel="noopener" target="_blank") Vite
  |
  | . The recommended IDE setup is
  a(href="https://code.visualstudio.com/" rel="noopener" target="_blank") VSCode
  |
  | +
  a(href="https://github.com/johnsoncodehk/volar" rel="noopener" target="_blank") Volar
  |
  | . If you need to test your components and web pages, check out
  a(href="https://www.cypress.io/" rel="noopener" target="_blank") Cypress
  |
  | and
  a(href="https://on.cypress.io/component" rel="noopener" target="_blank") Cypress Component Testing
  |
  | .
  br
  |
  | More instructions are available in
  code README.md
  |
  | .
WelcomeItem
  template(#icon)
    IconEcosystem
  template(#heading) Ecosystem
  |
  | Get official tools and libraries for your project:
  a(href="https://pinia.vuejs.org/" rel="noopener" target="_blank") Pinia
  |
  | ,
  a(href="https://router.vuejs.org/" rel="noopener" target="_blank") Vue Router
  |
  | ,
  a(href="https://test-utils.vuejs.org/" rel="noopener" target="_blank") Vue Test Utils
  |
  | , and
  a(href="https://github.com/vuejs/devtools" rel="noopener" target="_blank") Vue Dev Tools
  |
  | . If you need more resources, we suggest paying
  a(href="https://github.com/vuejs/awesome-vue" rel="noopener" target="_blank") Awesome Vue
  |
  | a visit.
WelcomeItem
  template(#icon)
    IconCommunity
  template(#heading) Community
  |
  | Got stuck? Ask your question on
  a(href="https://chat.vuejs.org" rel="noopener" target="_blank") Vue Land
  |
  | , our official Discord server, or
  a(href="https://stackoverflow.com/questions/tagged/vue.js" rel="noopener" target="_blank") StackOverflow
  |
  | . You should also subscribe to
  a(href="https://news.vuejs.org" rel="noopener" target="_blank") our mailing list
  |
  | and follow the official
  a(href="https://twitter.com/vuejs" rel="noopener" target="_blank") @vuejs
  |
  | twitter account for latest news in the Vue world.
WelcomeItem
  template(#icon)
    IconSupport
  template(#heading) Support Vue
  |
  | As an independent project, Vue relies on community backing for its sustainability. You can help us by
  a(href="https://vuejs.org/sponsor/" rel="noopener" target="_blank") becoming a sponsor
  |
  | .
</template>
