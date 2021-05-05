<template>
  <div id="app">
    <AppHeader></AppHeader>
    <AppNavbar></AppNavbar>
    <router-view></router-view>
    <AppFooter></AppFooter>
    <a v-if="$route.name == 'home'" class="scroll-btn" @click="scrollToTop()"><ion-icon name="chevron-up-circle-outline"></ion-icon></a>
  </div>
</template>

<script>
  import AppNavbar from './components/AppNavbar'
  import AppHeader from './components/AppHeader'
  import AppFooter from './components/AppFooter'


  export default {
    name: 'App',
    methods: {
      scrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'})
      }
    },
    components: {
      AppNavbar,
      AppHeader,
      AppFooter
    }
  }
</script>

<style>
  :root {
    --yellow: #FFD54F;
  }
  * {
    font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    list-style: none;
    text-decoration: none;
  }
  body {
    background: #252b33;
    color: #c9d1d9;
  }
  .yellow {
    color: #FFD54F;
  }
  .only-screen-reader {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: 0;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border-width: 0;
  }
</style>

<style scoped>
  .scroll-btn {
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 10px;
    cursor: pointer;
    display: grid;
    place-items: center;
    z-index: 8;
  }
  .scroll-btn ion-icon {
    font-size: 2.5rem;
  }
</style>