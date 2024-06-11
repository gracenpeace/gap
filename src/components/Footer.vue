<script>

export default {
  name: 'Footer',
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
</template>

<style scoped>
@media screen and (max-width: 768px) {
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
}
</style>