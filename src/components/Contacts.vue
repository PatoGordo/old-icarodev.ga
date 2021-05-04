<template>
  <section>
    <h2 class="section-title">Comming soon</h2>
  </section>
</template>

<script>
  import db from '../firebase.js'

  export default {
    name: 'contacts',
    data: () => {
      return {
        form: {
          name: ''
        }
      }
    },
    methods: {
      addContact() {
        db.collection('test').doc('oi').set({
          name: this.form.name
        })
      }
    }
  }
</script>

<style scoped>
  section {
    text-align: center;
  }
  .section-title {
    font-size: 2.1rem;
    margin: 40px 0 15px 0;
  }
</style>