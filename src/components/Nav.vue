<script>
export default {
  name : 'navVar',
  data() {
    return {
      isDropDown : false,
      isDropDown2 : false,
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
    addDropDown2() {
      this.isDropDown2 = true
    },
    removeDropDown2() {
      this.isDropDown2 = false
    },
    handleScroll() {
      // 스크롤 시에 호출되는 메소드
      const navbar = this.$refs.navbar;
      this.isFixed = window.scrollY  > navbar.offsetTop;
    },
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
        <div class="weUl1" :class="{'isDropDown' : isDropDown}"  >
          <router-link to="/introduce">교회 소개</router-link>
          <router-link to="/pastorIntroduce">목사님 소개</router-link>
          <router-link to="/vision">목회 비전</router-link>
          <router-link to="/servePerson">섬기는이</router-link>
          <router-link to="/worship">예배 안내</router-link>
          <router-link to="/map">오시는길</router-link>
          <router-link to="/annualEvent">연간 행사</router-link>
        </div>
      </li>
      <li>
        <router-link to="/theology">정통신학</router-link>
      </li>
      <li>
        <router-link to="/life">신앙의삶</router-link>
      </li>
      <li>
        <router-link to="/confession">신앙고백</router-link>
      </li>
      <li style="width: 90px;">
        <router-link to="/heresy">이단</router-link>
      </li>
      <li @mouseenter="addDropDown2" @mouseleave="removeDropDown2" style="width: 150px">
        <span href=""  style="font-size: 20px; cursor: pointer;">다음세대 세움</span>
        <div class="weUl2" :class="{'isDropDown' : isDropDown2}"  >
          <router-link to="/sundaySchool">주일학교</router-link>
          <router-link to="/raonStudents">라온 학생부</router-link>
          <router-link to="/weareYoute">우리는 청년부</router-link>
        </div>
      </li>
      <li style="width: 100px;">
        <router-link to="/feed">양육</router-link>
      </li>
      <li style="width: 80px">
        <router-link to="/consulting">상담</router-link>
      </li>
    </ul>
  </div>
</template>
<style scoped>
li {
  list-style: none;
    float: left;
    margin: 0 5px;
    text-align: center;
}
@media screen and (max-width: 1025px){
  .navBox{
    display: none;
  } 
}
@media screen and (min-width: 1025px) {
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
    display: flex;
    justify-content: center;
  }
  .navUl li {
    font-family: 'NanumSquareNeo-Variable-ExtraBold',sans-serif;
    width: 120px;
    height: 55px;
    color: black;
  }
  .navUl a {
    text-decoration: none;
    color: inherit;
    font-size: 20px;
  }
  .weUl1 {
    font-family: 'NanumSquareNeo-Variable-Regular',sans-serif;
    padding: 10px;
    background: #1f4866;
    color: white;
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease, visibility 0.5s ease;
    margin-top: 18px;
    margin-left: 4px;
    z-index: 1;
  }
  .weUl2 {
    font-family: 'NanumSquareNeo-Variable-Regular',sans-serif;
    padding: 10px;
    background: #1f4866;
    color: white;
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease, visibility 0.5s ease;
    margin-top: 18px;
    margin-left: 18px;
    z-index: 1;
  }
  .weUl1 a, .weUl2 a {
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