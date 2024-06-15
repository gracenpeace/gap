<script>
export default {
  name: 'Header',
  props: {
    menuOpen: {
      type: Boolean,
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
      <div class="introduce-container">
        <p style="font-size: 17px">교회 소개</p>
        <div class="menuDetails">
          <div class="menuDetail menuDetailChurchIntroduce">
            <router-link to="/introduce" class="menuLink">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="35"  height="35"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-building-church"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l18 0" /><path d="M10 21v-4a2 2 0 0 1 4 0v4" /><path d="M10 5l4 0" /><path d="M12 3l0 5" /><path d="M6 21v-7m-2 2l8 -8l8 8m-2 -2v7" /></svg>
            </router-link>
            <p>교회 소개</p>
          </div>
          <div class="menuDetail menuDetailPastorIntroduce">
            <router-link to="/introduce" class="menuLink">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="35"  height="35"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-building-church"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l18 0" /><path d="M10 21v-4a2 2 0 0 1 4 0v4" /><path d="M10 5l4 0" /><path d="M12 3l0 5" /><path d="M6 21v-7m-2 2l8 -8l8 8m-2 -2v7" /></svg>
            </router-link>
            <p>목사님 소개</p>
          </div>
          <div class="menuDetail menuDetailVision">
            <router-link to="/introduce" class="menuLink">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="35"  height="35"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-building-church"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l18 0" /><path d="M10 21v-4a2 2 0 0 1 4 0v4" /><path d="M10 5l4 0" /><path d="M12 3l0 5" /><path d="M6 21v-7m-2 2l8 -8l8 8m-2 -2v7" /></svg>
            </router-link>
            <p>목회 비전</p>
          </div>
          <div class="menuDetail menuDetailServe">
            <router-link to="/worship" class="menuLink">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="35"  height="35"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chalkboard"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 19h-3a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v11a1 1 0 0 1 -1 1" /><path d="M11 16m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /></svg>
            </router-link>
            <p>섬기는이</p>
          </div>
          <div class="menuDetail menuDetailWorship">
            <router-link to="/worship" class="menuLink">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="35"  height="35"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chalkboard"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 19h-3a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v11a1 1 0 0 1 -1 1" /><path d="M11 16m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /></svg>
            </router-link>
            <p>예배 안내</p>
          </div>
          <div class="menuDetail menuDetailMap">
            <router-link to="/map" class="menuLink">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="30"  height="30"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-map"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13" /><path d="M9 4v13" /><path d="M15 7v13" /></svg>
            </router-link>
            <p>찾아오시는길</p>
          </div>
        </div>
      </div>
      <div class="nextGeneration-container">
        <p style="font-size: 17px">다음세대 세움</p>
        <div class="menuDetails">
          <div class="menuDetail sundaySchool">
            <router-link to="/introduce" class="menuLink">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="35"  height="35"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-building-church"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l18 0" /><path d="M10 21v-4a2 2 0 0 1 4 0v4" /><path d="M10 5l4 0" /><path d="M12 3l0 5" /><path d="M6 21v-7m-2 2l8 -8l8 8m-2 -2v7" /></svg>
            </router-link>
            <p>주일학교</p>
          </div>
          <div class="menuDetail raonStudents">
            <router-link to="/introduce" class="menuLink">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="35"  height="35"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-building-church"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l18 0" /><path d="M10 21v-4a2 2 0 0 1 4 0v4" /><path d="M10 5l4 0" /><path d="M12 3l0 5" /><path d="M6 21v-7m-2 2l8 -8l8 8m-2 -2v7" /></svg>
            </router-link>
            <p>라온 학생부</p>
          </div>
          <div class="menuDetail weareYouth">
            <router-link to="/introduce" class="menuLink">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="35"  height="35"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-building-church"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l18 0" /><path d="M10 21v-4a2 2 0 0 1 4 0v4" /><path d="M10 5l4 0" /><path d="M12 3l0 5" /><path d="M6 21v-7m-2 2l8 -8l8 8m-2 -2v7" /></svg>
            </router-link>
            <p>우리는 청년부</p>
          </div>
        </div>
      </div>
      <div class="feedGospel">
        <p style="font-size: 17px">양육</p>
        <div class="menuDetails">
          <div class="menuDetail feed">
            <router-link to="/introduce" class="menuLink">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="35"  height="35"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-building-church"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l18 0" /><path d="M10 21v-4a2 2 0 0 1 4 0v4" /><path d="M10 5l4 0" /><path d="M12 3l0 5" /><path d="M6 21v-7m-2 2l8 -8l8 8m-2 -2v7" /></svg>
            </router-link>
            <p>말씀 양육</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</div>

</template>

<style scoped>
@media screen and (max-width: 1025px) {
  .headerImg {
    padding : 0.7rem 0 0.5rem 0.8rem;
    background-color: white;
    display: flex;
  }
  .headerImg img {
    width: 30%;
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
    color: black;
  }
  .menuList {
    position: absolute;
    background-color: #2E4184;
    width: 100%;
    height: 100%;
    margin: auto;
    top: 6rem;
    left: 0;
    opacity: 0.9;
    padding: 2.5rem 1.5rem 0 1.5rem;
    color: white;
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
  }
  .introduce-container {
    position: relative;
    width: 100%;
    height: 160px;
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
  .menuDetails {
    margin-top: 1rem;
  }
  .menuDetail {
    display: flex;
    width: 90px;
    height: 90px;
    justify-content: center;
    flex-wrap: wrap;
    position: absolute;
  }
  .menuDetail p{
    font-size: 12px;
  }
  .menuDetailPastorIntroduce {
    left: 12%;
  }
  .menuDetailVision {
    left: 24%;
  }
  .menuDetailServe {
    left: 36%;
  }
  .menuDetailWorship {
    left: 48%;
  }
  .menuDetailMap {
    left: 60%;
  }
  .nextGeneration-container {
    position: relative;
    width: 100%;
    height: 160px;
  }
  .raonStudents {
    left: 12%;
  }
  .weareYouth {
    left: 24%;
  }
}
@media screen and (max-width: 767px) {
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
    color: black;
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
  .introduce-container {
    position: relative;
    width: 100%;
    height: 280px;
  }
  .menuDetails {
    margin-top: 1rem;
  }
  .menuDetail {
    display: flex;
    width: 90px;
    height: 90px;
    justify-content: center;
    flex-wrap: wrap;
    position: absolute;
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
  .menuDetail p{
    font-size: 12px;
  }
  .menuDetailPastorIntroduce {
    left: 5.5rem;
  }
  .menuDetailVision {
    left: 11rem;
  }
  .menuDetailServe {
    left: 16.5rem;
  }
  .menuDetailWorship {
    top: 10rem;
    left: 0;
  }
  .menuDetailMap {
    top: 10rem;
    left: 5.5rem;
  }
  .nextGeneration-container {
    position: relative;
    width: 100%;
    height: 160px;
  }
  .raonStudents {
    left: 5.5rem;
  }
  .weareYouth {
    left: 11rem;
  }
  .feedGospel {
    position: relative;
    width: 100%;
    height: 160px;
  }
}
@media screen and (min-width: 1025px) {
  .headerImg {
    /*width: 1200px;*/
    height: 100px;
    padding : 0.7rem 0 0.5rem 0.8rem;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .headerImg img {
    width: 250px;
    background-color: white;
  }
  .menuBox, .menuList {
    display: none;
  }
}

.menu-fade-enter-active, .menu-fade-leave-active {
  transition: opacity 0.6s;
}
.menu-fade-enter-from, .menu-fade-leave-to /* .menu-fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>