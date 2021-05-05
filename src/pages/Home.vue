<template>
  <div>
    <Skills></Skills>
    <RecentProjects></RecentProjects>
    <Contacts></Contacts>
  </div>
</template>

<script>
  import Skills from '../components/Skills'
  import RecentProjects from '../components/RecentProjects'
  import Contacts from '../components/Contacts'

  export default {
    name: 'Home',
    components: {
      Skills,
      RecentProjects,
      Contacts
    }
  }
</script>