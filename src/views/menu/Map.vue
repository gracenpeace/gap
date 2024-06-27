<script>
export default {
  name: "Map",
}
</script>

<template>
  <div class="map-container">
    <p class="division">교회소개 > 오시는길</p>
    <h3>오시는길</h3>
    <div class="roadLink">
      <a href="https://place.map.kakao.com/1804583795" style="text-align: center;">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="30"  height="30"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-road-sign"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z" /><path d="M9 14v-2c0 -.59 .414 -1 1 -1h5" /><path d="M13 9l2 2l-2 2" /></svg>
        <br>
        <span>길찾기 링크</span>
      </a>
    </div>
    <div class="mapImg">
      <img src="https://www.dropbox.com/scl/fi/sr0a7v55dodk8bgs913r2/map.png?rlkey=l5xzqxy0jb0khvt1guzhvv4mc&st=wq5txikm&raw=1" alt="">
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 1025px) {
  .map-container {
    padding: 8rem 2.5rem 150px 2.5rem;
    background-color: white;
    font-family: NanumSquareNeo-Variable-Bold,sans-serif;
    color: black;
  }
  .map-container h3 {
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
    padding-left: 3rem;
    padding-bottom: 20px;
    font-size: 2rem;
  }
  .roadLink {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    font-size: 1.4rem;
  }
  .mapImg {
    width: 100%;
  }
  .mapImg img {
    width: 100%;
  }
  .division {
    display: none;
  }
}@media screen and (max-width: 768px) {
  .map-container {
    padding: 100px 1.5rem 150px 1.5rem;
    background-color: white;
    height: 900px;
    font-family: NanumSquareNeo-Variable-Bold,sans-serif;
    color: black;
  }
  .map-container h3 {
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
    padding-left: 1rem;
    padding-bottom: 20px;
    font-size: 1.3rem;
  }
  .roadLink {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    font-size: 1.2rem;
  }
  .mapImg {
    width: 100%;
  }
  .mapImg img {
    width: 100%;
  }
  .division {
    display: none;
  }
}
@media screen and (min-width: 1025px) {
  .map-container {
    padding: 30px 7% 150px 7%;
    background-color: white;
    font-family: NanumSquareNeo-Variable-Bold,sans-serif;
    color: black;
    width: 1200px;
    margin: 0 auto;
  }
  .map-container h3 {
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
    padding-left: 60px;
    padding-bottom: 20px;
    padding-top: 30px;
    font-size:30px;
  }
  .roadLink {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    font-size: 1.4rem;
  }
  .mapImg {
    width: 100%;
  }
  .mapImg img {
    width: 100%;
  }
  .division {
    padding-left: 55px;
  }
}
</style>