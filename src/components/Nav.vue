<script>
export default {
  name : 'navVar',
  data() {
    return {
      isDropDown : false,
      isFixed: false,
    }
  },
  methods : {
    addDropDown() {
      this.isDropDown = true
    },
    removeDropDown() {
      this.isDropDown = false
    },
    handleScroll() {
      // 스크롤 시에 호출되는 메소드
      const navbar = this.$refs.navbar;
      this.isFixed = window.scrollY  > navbar.offsetTop;
    },
    alarm() {
      alert('올 겨울에 만나요~')
    }
  },
  mounted() {
    // 스크롤 이벤트에 핸들러를 추가
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    // 컴포넌트가 파괴되기 전에 스크롤 이벤트 핸들러를 제거
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<template>
  <div class="navBox" :class="{'fixed' : isFixed}" ref="navbar">
    <ul class="navUl">
      <li @mouseenter="addDropDown" @mouseleave="removeDropDown">
        <span href=""  style="font-size: 20px; cursor: pointer;">교회소개</span>
        <div class="weUl" :class="{'isDropDown' : isDropDown}"  >
          <router-link to="/">우리는 소개</router-link>
          <router-link to="/">우리는 사역소개</router-link>
          <hr>
          <a href="https://khendev23.notion.site/2023-b9447223e5014629a1480c82df21d756?pvs=4" target="_blank">2023 우리는</a>
          <a @click="alarm">2024 우리는</a>
        </div>
      </li>
      <li>
        <router-link to="/">공지사항</router-link>
      </li>
      <li>
        <router-link to="/">예배</router-link>
      </li>
      <li>
        <router-link to="/">사역</router-link>
      </li>
      <li>
        <router-link to="/">질문</router-link>
      </li>
      <li>
        <a href="https://khendev23.notion.site/a9be08d0e5ec4aa6b5096dc5bfc9cdfc?pvs=4" target="_blank">자료실</a>
      </li>
      <li>
        <a href="https://forms.gle/ej7xdjdN4LpWmXPV6" target="_blank">피드백</a>
      </li>
    </ul>
  </div>
</template>
<style scoped>
li {
  list-style: none;
    float: left;
    margin: 0 5px;
}
@media screen and (max-width: 1024px){
  .navBox{
    display: none;
  } 
}
@media screen and (min-width: 1024px) {
  .navBox {
    width: 100%;
    border-bottom: 3px solid #1f4866;
    border-top: 1px solid lightgray;
    height:65px;
    z-index: 100;
    background: white;
    padding-top: 15px;
  }
  .navUl {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .navUl li {
    font-family: 'NanumSquareNeo-Variable-ExtraBold';
    width: 150px;
    height: 55px;
  }
  .navUl a {
    text-decoration: none;
    color: inherit;
    font-size: 20px;
  }
  .weUl {
    font-family: 'NanumSquareNeo-Variable-Regular';
    padding: 10px;
    background: #1f4866;
    color: white;
    position: absolute;
    /* left: 22.3%; */
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease, visibility 0.5s ease;
    margin-top: 18px;
    margin-left: 10px;
    z-index: 1;
  }
  .weUl a {
    display: block;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 15px;
  }
  .isDropDown {
    display: block;
    opacity: 1;
    visibility: visible;
  }
  .fixed {
    position: fixed;
    top: 0;
    z-index: 1000;
    left : 0;
  }
}
</style>