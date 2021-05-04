<template>
  <div>
    <skills></skills>
    <recent-projects></recent-projects>
    <Footer></Footer>
    <!-- <contacts></contacts> -->
  </div>
</template>

<script>
  import Skills from '../components/Skills'
  import RecentProjects from '../components/RecentProjects'
  import Footer from '../components/AppFooter'
  // import Contacts from '../components/Contacts'

  export default {
    components: {
      Skills,
      RecentProjects,
      Footer,
      // Contacts
    }
  }
</script>

<style scoped>
  
</style>