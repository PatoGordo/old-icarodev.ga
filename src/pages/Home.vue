<template>
  <div>
    <skills></skills>
    <recent-projects></recent-projects>
    <!-- <contacts></contacts> -->
  </div>
</template>

<script>
  import Skills from '../components/Skills'
  import RecentProjects from '../components/RecentProjects'
  // import Contacts from '../components/Contacts'

  export default {
    components: {
      Skills,
      RecentProjects
      // Contacts
    }
  }
</script>

<style scoped>
  
</style>