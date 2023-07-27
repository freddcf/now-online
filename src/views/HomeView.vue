<template>
  <div class="home">
  <Navbar/>
  <Banner/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/NavbarComponent.vue'
import Banner from '@/components/BannerComponent.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Banner
  }
}
</script>
