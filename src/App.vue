<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './views/Home.vue'

export default {
  components : {
    Header, Footer, Home
  },
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    }
  }
}
</script>

<template>
  <Header :menuOpen="menuOpen"  @toggleMenu="toggleMenu"/>
  <router-view/>
  <Footer @routeChanged="closeMenu"/>
</template>

<style scoped>

</style>
