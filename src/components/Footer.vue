<script>

export default {
  name: 'Footer',
  emits: ['routeChanged'],
  watch: {
    '$route'() {
      this.$emit('routeChanged');
    }
  }
}
</script>

<template>
  <div class="footerBox">
    <router-link to="/" class="footerContentLink" exact-active-class="now-page">
      <div class="footerContent">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-building-church"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l18 0" /><path d="M10 21v-4a2 2 0 0 1 4 0v4" /><path d="M10 5l4 0" /><path d="M12 3l0 5" /><path d="M6 21v-7m-2 2l8 -8l8 8m-2 -2v7" /></svg>
        <p class="footerContentFont">Home</p>
      </div>
    </router-link>
    <router-link to="/theology" class="footerContentLink" exact-active-class="now-page">
      <div class="footerContent">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-bible"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" /><path d="M19 16h-12a2 2 0 0 0 -2 2" /><path d="M12 7v6" /><path d="M10 9h4" /></svg>
        <p class="footerContentFont">정통신학</p>
      </div>
    </router-link>
    <router-link to="/life" class="footerContentLink" exact-active-class="now-page">
    <div class="footerContent">
      <svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-health-recognition"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8v-2a2 2 0 0 1 2 -2h2" /><path d="M4 16v2a2 2 0 0 0 2 2h2" /><path d="M16 4h2a2 2 0 0 1 2 2v2" /><path d="M16 20h2a2 2 0 0 0 2 -2v-2" /><path d="M8.603 9.61a2.04 2.04 0 0 1 2.912 0l.485 .39l.5 -.396a2.035 2.035 0 0 1 2.897 .007a2.104 2.104 0 0 1 0 2.949l-3.397 3.44l-3.397 -3.44a2.104 2.104 0 0 1 0 -2.95z" /></svg>
      <p class="footerContentFont">신앙의삶</p>
    </div>
    </router-link>
    <router-link to="/confession" class="footerContentLink" exact-active-class="now-page">
    <div class="footerContent">
      <svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-pray"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M7 20h8l-4 -4v-7l4 3l2 -2" /></svg>
      <p class="footerContentFont">신앙고백</p>
    </div>
    </router-link>
    <router-link to="/heresy" class="footerContentLink" exact-active-class="now-page">
    <div class="footerContent">
      <svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-traffic-lights-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 4c.912 -1.219 2.36 -2 4 -2a5 5 0 0 1 5 5v6m0 4a5 5 0 0 1 -10 0v-10" /><path d="M12 8a1 1 0 1 0 -1 -1" /><path d="M11.291 11.295a1 1 0 0 0 1.418 1.41" /><path d="M12 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M3 3l18 18" /></svg>
      <p class="footerContentFont">이단</p>
    </div>
    </router-link>
  </div>
  <div class="footerBoxWeb">
    <div style="width: 1200px; margin: 0 auto;">
      <h5 style="font-size: 20px;">사랑하고 축복합니다</h5>
      <p>인천광역시 부평구 평천로 149</p>
      <a class="btn btn-social mx-1" target="_blank" href="https://www.youtube.com/@user-vk4je6qi5u">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16" style="color: white">
          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
        </svg>
      </a>
      <p style="padding-top: 25px; font-size: 13px;">
        © Copyright 2024 | All Rights Reserved by GAP CHURCH
      </p>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 1025px) {
  .footerContentLink {
    display: flex;
    flex-wrap: wrap;
    width: 15%;
    margin: auto;
    align-items: center;
    justify-content: center;
    color: black;
  }
  .footerBox {
    width: 100%;
    height: 90px;
    background-color: white;
    position: fixed;
    display: flex;
    bottom : 0;
  }
  .footerContent {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: auto;
    align-items: center;
    justify-content: center;
    color: black;
  }
  .footerContentFont {
    font-size: 13px;
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
  }
  .footerContentLink.now-page > .footerContent{
    color: goldenrod;
  }
  .footerBoxWeb {
    display: none;
  }
}
@media screen and (min-width: 1025px) {
  .footerBox {
    display: none;
  }
  .footerBoxWeb {
    padding-top: 30px;
    background : #1f4866;
    font-family: 'NanumSquareNeo-Variable-Bold',sans-serif;
    color: white;
    height: 240px;
    text-align: center;
  }
}
</style>