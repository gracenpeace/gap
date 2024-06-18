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
          src="https://www.youtube.com/embed/YYgcq2RCIvQ"
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
    position: relative;
    padding-bottom: 56.25%; /* 16:9 비율 */
    height: 0;
    overflow: hidden;
    max-width: 100%;
    background: #000;
    margin: 0 auto;
    z-index: 1;
  }
  .video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
    z-index: 1;
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
    position: relative;
    padding-bottom: 56.25%; /* 16:9 비율 */
    height: 0;
    overflow: hidden;
    max-width: 100%;
    background: #000;
    margin: 0 auto;
    z-index: 1;
  }
  .video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
    z-index: 1;
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
    height: 480px;
  }
}
</style>