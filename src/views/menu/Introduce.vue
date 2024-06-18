<script>
export default {
  name : "Introduce",
}
</script>

<template>
  <div class="introduce-container">
    <h2>교회 소개 페이지</h2>
    <div style="display: flex; justify-content: center; align-items: center;">
      <iframe id="player" type="text/html" width="400" height="203" src="http://www.youtube.com/embed/YYgcq2RCIvQ" allowfullscreen></iframe>
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
}@media screen and (max-width: 768px) {
  .introduce-container {
    padding: 100px 2.5rem 0 2.5rem;
    background-color: white;
    height: 800px;
    font-family: NanumSquareNeo-Variable-Bold,sans-serif;
    color: black;
  }
}
</style>