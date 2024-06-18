<script>
export default {
  name: "Map",
}
</script>

<template>
  <div class="map-container">
    찾아오시는길
  </div>
</template>

<style scoped>
@media screen and (max-width: 1025px) {
  .map-container {
    padding: 1rem 2.5rem 0 2.5rem;
    background-color: white;
  }
}@media screen and (max-width: 768px) {
  .map-container {
    padding: 100px 2.5rem 150px 2.5rem;
    background-color: white;
    height: 900px;
    font-family: NanumSquareNeo-Variable-Bold,sans-serif;
    color: black;
  }
}
</style>