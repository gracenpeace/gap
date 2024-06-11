<script>
export default {
  name: 'Header',
  props: {
    menuOpen: {
      type: Boolean,
    }
  },
  data() {
    return{
      headerMenuOpen : this.menuOpen
    }
  },
  methods : {
    menuClick() {
      this.$emit('toggleMenu');
    }
  },
  watch: {
    menuOpen(newValue) {
      if (newValue) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  },
  beforeDestroy() {
    // Ensure the no-scroll class is removed if the component is destroyed
    document.body.style.overflow = '';
  }
}
</script>

<template>
<div class="headerImg">
  <router-link to="/">
    <img src="https://www.dropbox.com/scl/fi/wr9cabtnk4xg3dca2oif8/eplogoBlack.jpg?rlkey=71nyp6jdd9m88e52etsvifz8u&raw=1" alt="">
  </router-link>
  <div class="menuBox" @click = "menuClick">
    <svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-menu"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8l16 0" /><path d="M4 16l16 0" /></svg>
  </div>
  <transition name="menu-fade">
    <div class="menuList" v-if="menuOpen">
      <div class="menuDetail1">
        <router-link to="/introduce" class="menuLink">
          <svg  xmlns="http://www.w3.org/2000/svg"  width="35"  height="35"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-building-church"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l18 0" /><path d="M10 21v-4a2 2 0 0 1 4 0v4" /><path d="M10 5l4 0" /><path d="M12 3l0 5" /><path d="M6 21v-7m-2 2l8 -8l8 8m-2 -2v7" /></svg>
        </router-link>
        <p>교회 소개</p>
      </div>
      <div class="menuDetail2">
        <router-link to="/worship" class="menuLink">
          <svg  xmlns="http://www.w3.org/2000/svg"  width="35"  height="35"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chalkboard"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 19h-3a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v11a1 1 0 0 1 -1 1" /><path d="M11 16m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /></svg>
        </router-link>
        <p>예배 안내</p>
      </div>
      <div class="menuDetail3">
        <router-link to="/map" class="menuLink">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-map"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13" /><path d="M9 4v13" /><path d="M15 7v13" /></svg>
        </router-link>
        <p>찾아오시는길</p>
      </div>
      <div class="menuDetail"></div>
    </div>
  </transition>
</div>

</template>

<style scoped>
@media screen and (max-width: 1024px) {
  .headerImg {
    padding : 0.7rem 0 0.5rem 0.8rem;
    background-color: white;
    display: flex;
  }
  .headerImg img {
    width: 40%;
    background-color: white;
    cursor: pointer;
  }
  .menuBox {
    width: 10%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    cursor: pointer;
    background-color: white;
  }
  .menuList {
    position: absolute;
    background-color: #2E4184;
    width: 100%;
    height: 100%;
    margin: auto;
    top: 7rem;
    left: 0;
    opacity: 0.9;
  }
}
@media screen and (max-width: 767.9px) {
  .headerImg {
    padding : 0.7rem 0 0.5rem 0.8rem;
    background-color: white;
    display: flex;
  }
  .headerImg img {
    width: 40%;
    background-color: white;
  }
  .menuBox {
    width: 10%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    background-color: white;
  }
  .menuList {
    position: absolute;
    background-color: #2E4184;
    width: 100%;
    height: 100%;
    margin: auto;
    top: 4rem;
    left: 0;
    opacity: 0.9;
    padding: 2.5rem 1.5rem 0 1.5rem;
    color: white;
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
  }
  .menuLink {
    background-color: white;
    color: black;
    border-radius: 15px;
    width: 70%;
    height: 60%;
    display : flex;
    align-items: center;
    justify-content: center;

  }
  .menuDetail1, .menuDetail2, .menuDetail3 {
    display: flex;
    width: 20%;
    height: 10%;
    justify-content: center;
    flex-wrap: wrap;
    position: absolute;
  }
  .menuDetail1 p, .menuDetail2 p, .menuDetail3 p {
    font-size: 12px;
  }
  .menuDetail1 {
    top: 2.5rem;
  }
  .menuDetail2 {
    top: 2.5rem;
    left: 7rem;
  }
  .menuDetail3 {
    top: 10rem;
  }
}

.menu-fade-enter-active, .menu-fade-leave-active {
  transition: opacity 0.6s;
}
.menu-fade-enter-from, .menu-fade-leave-to /* .menu-fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
@media screen and (min-width: 1025px) {
  .headerImg img {
    width: 200px;
    margin: auto;
  }
}

</style>