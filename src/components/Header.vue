<script>
export default {
  name: 'Header'
}
</script>

<template>
<div class="headerImg">
  <img src="https://www.dropbox.com/scl/fi/wr9cabtnk4xg3dca2oif8/eplogoBlack.jpg?rlkey=71nyp6jdd9m88e52etsvifz8u&raw=1" alt="">
</div>

</template>

<style scoped>
@media screen and (max-width: 760px) {
  .headerImg img {
    width: 40%;
  }
}
@media screen and (max-width: 1024px) {
  .headerImg img {
    width: 40%;
  }
}
@media screen and (min-width: 1025px) {
  .headerImg img {
    width: 200px;
    margin: auto;
  }
}
</style>