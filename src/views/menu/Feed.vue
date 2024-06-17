<script>
export default {
  name: "Feed",
}
</script>

<template>
  <div class="feedMain">
    양육 페이지 입니다.
  </div>
</template>

<style scoped>
@media screen and (max-width: 1025px) {
  .feedMain {
    padding: 1rem 2.5rem 0 2.5rem;
    background-color: white;
  }
}
@media screen and (max-width: 768px) {
  .feedMain {
    padding: 1rem 2.5rem 150px 2.5rem;
    background-color: white;
    font-family: NanumSquareNeo-Variable-Bold,sans-serif;
    color: black;
    height: 900px;
  }
}
</style>