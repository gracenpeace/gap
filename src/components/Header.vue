<script>
import MenuBar from "@/components/MenuBar.vue";

export default {
  name: 'Header',
  props: {
    menuOpen: {
      type: Boolean,
    }
  },
  components : {
    MenuBar
  },
  methods : {
    menuClick() {
      this.$emit('toggleMenu');
    }
  },
}
</script>

<template>
<div class="headerImg">
  <router-link to="/">
    <img src="https://www.dropbox.com/scl/fi/wr9cabtnk4xg3dca2oif8/eplogoBlack.jpg?rlkey=71nyp6jdd9m88e52etsvifz8u&raw=1" alt="">
  </router-link>
  <MenuBar :menuOpen="menuOpen"  :menu-click="menuClick"/>
</div>

</template>

<style scoped>
@media screen and (max-width: 1025px) {
  .headerImg {
    padding : 0.7rem 0 0.5rem 0.8rem;
    background-color: white;
    display: flex;
    position: fixed;
    top: 0;
  }
  .headerImg img {
    width: 30%;
    background-color: white;
  }
}
@media screen and (max-width: 767px) {
  .headerImg {
    padding : 0.7rem 0 0.5rem 0.8rem;
    background-color: white;
    display: flex;
    position: fixed;
    top: 0;
  }
  .headerImg img {
    width: 40%;
    background-color: white;
  }
}
@media screen and (min-width: 1025px) {
  .headerImg {
    width: 100%;
    height: 100px;
    padding : 0.7rem 0 0.5rem 0.8rem;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .headerImg img {
    width: 220px;
    background-color: white;
  }

}


</style>