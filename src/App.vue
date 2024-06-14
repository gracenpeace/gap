<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Nav from './components/Nav.vue';
import Home from './views/Home.vue'

export default {
  components : {
    Header, Footer, Nav, Home
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
  <Nav/>
  <router-view/>
  <Footer @routeChanged="closeMenu"/>
</template>

<style>
@font-face {
  font-family: 'NanumSquareNeo-Variable-Light';
  src: url('assets/fonts/NanumSquareNeo-aLt.ttf') format('truetype');
  font-weight: 100;
}
@font-face {
  font-family: 'NanumSquareNeo-Variable-Regular';
  src: url('assets/fonts/NanumSquareNeo-bRg.ttf') format('truetype');
  font-weight: 200;
}
@font-face {
  font-family: 'NanumSquareNeo-Variable-Bold';
  src: url('assets/fonts/NanumSquareNeo-cBd.ttf') format('truetype');
  font-weight: 500;
}
@font-face {
  font-family: 'NanumSquareNeo-Variable-ExtraBold';
  src: url('assets/fonts/NanumSquareNeo-dEb.ttf') format('truetype');
  font-weight: 600;
}
@font-face {
  font-family: 'NanumSquareNeo-Variable-Heavy';
  src: url('assets/fonts/NanumSquareNeo-eHv.ttf') format('truetype');
  font-weight: 700;
}
@font-face {
  font-family: 'NanumGothic';
  src: url('assets/fonts/NanumGothic.ttf') format('truetype');
}
@font-face {
  font-family: 'GamtanDotum';
  src: url('assets/fonts/GamtanDotum.ttf') format('truetype');
}
@font-face {
  font-family: 'GowunBatang-Regular';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunBatang-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
</style>
