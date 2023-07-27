<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <!-- <HelloWorld /> -->
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
// import { ref } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'LayoutDefault',

  components: {
    // HelloWorld
  },

  setup () {
    return {
      // leftDrawerOpen: ref(false)
    }
  }
}
</script>

// <style lang="scss">
//   html body {
// }
// </style>