<script>
export default {
  name : "Introduce",
}
</script>

<template>
  <div class="introduce-container">
    교회 소개 페이지
    <div style="display: flex; justify-content: center; align-items: center;">
      <iframe id="player" type="text/html" width="320" height="180" src="http://www.youtube.com/embed/YYgcq2RCIvQ" allowfullscreen></iframe>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 1025px) {
  .introduce-container {
    padding: 1rem 2.5rem 0 2.5rem;
    background-color: white;
  }
}@media screen and (max-width: 768px) {
  .introduce-container {
    padding: 1rem 2.5rem 0 2.5rem;
    background-color: white;
    height: 100%;
    font-family: NanumSquareNeo-Variable-Bold,sans-serif;
    color: black;
  }
}
</style>