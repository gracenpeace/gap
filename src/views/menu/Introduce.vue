<script>
export default {
  name : "Introduce",
}
</script>

<template>
  <div class="introduce-container">
    <h2>교회 소개 페이지</h2>
    <div class="video-wrapper">
      <iframe
          id="player"
          type="text/html"
          src="https://www.youtube.com/embed/YYgcq2RCIvQ?wmode=opque"
          allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 1025px) {
  .introduce-container {
    padding: 8rem 4.5rem 0 4.5rem;
    background-color: white;
    height: 800px;
    font-family: NanumSquareNeo-Variable-Bold,sans-serif;
    color: black;
  }
  .introduce-container h2 {
    font-size: 1.5rem;
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
  }
  .video-wrapper {
    padding-top: 50px;
    position: relative;
    padding-bottom: 56.25%; /* 16:9 비율 */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .video-wrapper iframe {
    width: 100%;
    height: 380px;
  }
}
@media screen and (max-width: 768px) {
  .introduce-container {
    padding: 100px 2.5rem 0 2.5rem;
    background-color: white;
    height: 800px;
    font-family: NanumSquareNeo-Variable-Bold,sans-serif;
    color: black;
  }
  .introduce-container h2 {
    font-size: 1.2rem;
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
  }
  .video-wrapper {
    padding-top: 10px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .video-wrapper iframe {
    width: 100%;
    height: 185px;
  }
}
@media screen and (min-width: 1025px) {
  .introduce-container {
    padding: 50px 5% 240px 5%;
    background-color: white;
    height: 100%;
    font-family: NanumSquareNeo-Variable-Bold,sans-serif;
    color: black;
    max-width: 1280px;
    margin: 0 auto;
  }
  .introduce-container h2 {
    font-size: 1.7rem;
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
    padding-left: 70px;
  }
  .video-wrapper {
    margin-top: 50px;
    position: relative;
    padding-bottom: 56.25%; /* 16:9 비율 */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .video-wrapper iframe {
    width: 800px;
    height: 452px;
  }
}
</style>