<script>
export default {
  name: 'MenuBar',
  props: {
    menuOpen: {
      type: Boolean,
      required: true
    },
    menuClick: {
      type: Function,
      required: true
    }
  },
  watch: {
    menuOpen(newValue) {
      if (newValue) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }
  },
  beforeUnmount() {
    // Ensure the no-scroll class is removed if the component is destroyed
    document.body.style.overflow = ''
  }
}
</script>

<template>
  <div class="menuBox" @click="menuClick">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon icon-tabler icons-tabler-outline icon-tabler-menu"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 8l16 0" />
      <path d="M4 16l16 0" />
    </svg>
  </div>
  <transition name="menu-fade">
    <div class="menuList" v-if="menuOpen">
      <div class="introduce-container">
        <p style="font-size: 17px">교회 소개</p>
        <div class="menuDetails">
          <div class="menuDetail menuDetailChurchIntroduce">
            <router-link to="/introduce" class="menuLink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-building-church"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l18 0" />
                <path d="M10 21v-4a2 2 0 0 1 4 0v4" />
                <path d="M10 5l4 0" />
                <path d="M12 3l0 5" />
                <path d="M6 21v-7m-2 2l8 -8l8 8m-2 -2v7" />
              </svg>
            </router-link>
            <p>교회 소개</p>
          </div>
          <div class="menuDetail menuDetailPastorIntroduce">
            <router-link to="/pastorIntroduce" class="menuLink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-person-square"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"
                />
              </svg>
            </router-link>
            <p>목사님 소개</p>
          </div>
          <div class="menuDetail menuDetailVision">
            <router-link to="/vision" class="menuLink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-telescope"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 21l6 -5l6 5" />
                <path d="M12 13v8" />
                <path
                  d="M3.294 13.678l.166 .281c.52 .88 1.624 1.265 2.605 .91l14.242 -5.165a1.023 1.023 0 0 0 .565 -1.456l-2.62 -4.705a1.087 1.087 0 0 0 -1.447 -.42l-.056 .032l-12.694 7.618c-1.02 .613 -1.357 1.897 -.76 2.905z"
                />
                <path d="M14 5l3 5.5" />
              </svg>
            </router-link>
            <p>목회 비전</p>
          </div>
          <div class="menuDetail menuDetailServe">
            <router-link to="/servePerson" class="menuLink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-hand-stop"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 13v-7.5a1.5 1.5 0 0 1 3 0v6.5" />
                <path d="M11 5.5v-2a1.5 1.5 0 1 1 3 0v8.5" />
                <path d="M14 5.5a1.5 1.5 0 0 1 3 0v6.5" />
                <path
                  d="M17 7.5a1.5 1.5 0 0 1 3 0v8.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"
                />
              </svg>
            </router-link>
            <p>섬기는이</p>
          </div>
          <div class="menuDetail menuDetailWorship">
            <router-link to="/worship" class="menuLink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-cross"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 21h4v-9h5v-4h-5v-5h-4v5h-5v4h5z" />
              </svg>
            </router-link>
            <p>예배 안내</p>
          </div>
          <div class="menuDetail menuDetailMap">
            <router-link to="/map" class="menuLink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-map"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13" />
                <path d="M9 4v13" />
                <path d="M15 7v13" />
              </svg>
            </router-link>
            <p>오시는길</p>
          </div>
          <div class="menuDetail menuDetailAnnualEvent">
            <router-link to="/annualEvent" class="menuLink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-confetti"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 5h2" />
                <path d="M5 4v2" />
                <path d="M11.5 4l-.5 2" />
                <path d="M18 5h2" />
                <path d="M19 4v2" />
                <path d="M15 9l-1 1" />
                <path d="M18 13l2 -.5" />
                <path d="M18 19h2" />
                <path d="M19 18v2" />
                <path d="M14 16.518l-6.518 -6.518l-4.39 9.58a1 1 0 0 0 1.329 1.329l9.579 -4.39z" />
              </svg>
            </router-link>
            <p>연간행사</p>
          </div>
        </div>
      </div>
      <div class="nextGeneration-container">
        <p style="font-size: 17px">다음세대 세움</p>
        <div class="menuDetails">
          <div class="menuDetail sundaySchool">
            <router-link to="/SundaySchool" class="menuLink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-horse-toy"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3.5 17.5c5.667 4.667 11.333 4.667 17 0" />
                <path
                  d="M19 18.5l-2 -8.5l1 -2l2 1l1.5 -1.5l-2.5 -4.5c-5.052 .218 -5.99 3.133 -7 6h-6a3 3 0 0 0 -3 3"
                />
                <path d="M5 18.5l2 -9.5" />
                <path d="M8 20l2 -5h4l2 5" />
              </svg>
            </router-link>
            <p>주일학교</p>
          </div>
          <div class="menuDetail raonStudents">
            <router-link to="/raonStudents" class="menuLink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-school"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
              </svg>
            </router-link>
            <p>라온 학생부</p>
          </div>
          <div class="menuDetail weareYouth">
            <router-link to="/weareYoute" class="menuLink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-person-arms-up"
                viewBox="0 0 16 16"
              >
                <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                <path
                  d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z"
                />
              </svg>
            </router-link>
            <p>우리는 청년부</p>
          </div>
        </div>
      </div>
      <div class="feedGospel">
        <p style="font-size: 17px">양육</p>
        <div class="menuDetails">
          <div class="menuDetail feed">
            <router-link to="/feed" class="menuLink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-user-heart"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h.5" />
                <path
                  d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z"
                />
              </svg>
            </router-link>
            <p>말씀 양육</p>
          </div>
        </div>
      </div>
      <div class="consulting-container">
        <p style="font-size: 17px">상담</p>
        <div class="menuDetails">
          <div class="menuDetail consulting">
            <router-link to="/consulting" class="menuLink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-desk"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 6h18" />
                <path d="M4 6v13" />
                <path d="M20 19v-13" />
                <path d="M4 10h16" />
                <path d="M15 6v8a2 2 0 0 0 2 2h3" />
              </svg>
            </router-link>
            <p>이단 & 기타 상담</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
@media screen and (max-width: 1025px) {
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
    background-color: #2e4184;
    width: 100%;
    height: 1500px;
    margin: auto;
    top: 6rem;
    left: 0;
    opacity: 0.9;
    padding: 2.5rem 1.5rem 0 1.5rem;
    color: white;
    font-family: NanumSquareNeo-Variable-ExtraBold, sans-serif;
    z-index: 9999;
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
    display: flex;
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
  .menuDetail p {
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
  .menuDetailAnnualEvent {
    left: 72%;
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
  .feedGospel {
    position: relative;
    width: 100%;
    height: 160px;
  }
  .consulting-container {
    position: relative;
    width: 100%;
    height: 160px;
  }
}
@media screen and (max-width: 767px) {
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
    background-color: #2e4184;
    width: 100%;
    height: 1100px;
    margin: auto;
    top: 4rem;
    left: 0;
    opacity: 0.9;
    padding: 2.5rem 1.5rem 400px 1.5rem;
    color: white;
    font-family: NanumSquareNeo-Variable-ExtraBold, sans-serif;
    overflow: auto;
    z-index: 100;
  }
  .introduce-container {
    position: relative;
    width: 100%;
    height: 270px;
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
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .menuDetail p {
    font-size: 12px;
  }
  .menuDetailPastorIntroduce {
    left: 25%;
  }
  .menuDetailVision {
    left: 50%;
  }
  .menuDetailServe {
    left: 75%;
  }
  .menuDetailWorship {
    top: 9rem;
    left: 0;
  }
  .menuDetailMap {
    top: 9rem;
    left: 25%;
  }
  .menuDetailAnnualEvent {
    top: 9rem;
    left: 50%;
  }
  .nextGeneration-container {
    position: relative;
    width: 100%;
    height: 160px;
  }
  .raonStudents {
    left: 25%;
  }
  .weareYouth {
    left: 50%;
  }
  .feedGospel {
    position: relative;
    width: 100%;
    height: 160px;
  }
  .consulting-container {
    position: relative;
    width: 100%;
    height: 160px;
  }
}
@media screen and (min-width: 1025px) {
  .menuBox,
  .menuList {
    display: none;
  }
}
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.6s;
}
.menu-fade-enter-from, .menu-fade-leave-to /* .menu-fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
