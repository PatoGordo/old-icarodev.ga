<template>
  <div>
    <h2>404 - page not found</h2>
    <router-link to="/">Go to home page</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Page404',
    created() {
      document.title = '404'
    }
  }
</script>

<style scoped>
  div {
    text-align: center;
  }
</style>