<script>
export default {
  name: "Home"
}
</script>

<template>
  <div class="main-container">
    <div class="main-container1">
      <p>은혜와평강교회에 오신 여러분</p>
      <p>사랑하고 축복합니다</p>
    </div>
    <div class="main-container2">
      <p>이번주 말씀</p>
      <div class="kellyBox">
        <img src="https://www.dropbox.com/s/5rh3ka0ypz4ho2m/kelly240603.jpg?raw=1" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 1024px) {
  .main-container {
    flex : 1;
    overflow-y: auto;
    padding-bottom: 90px;
    /*height: 800px;*/
  }
  .main-container1 {
    padding: 1rem 0 0 2.5rem;
    width: 100%;
    height: 190px;
    background-color: white;
    color: black;
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
  }
  .main-container2 {
    padding: 1rem;
    width: 100%;
    height: fit-content;
    background-color: #DCDCDC;
    padding-bottom: 100px;
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;

  }
  .main-container2 p {
    padding: 1rem 0 0 1.7rem;
    color: black;
  }
  .kellyBox {
    padding-top: 0.4rem;
    width: 100%;
    display: flex;
  }
  .main-container2 img {
    width: 90%;
    margin: auto;
    border-radius: 15px;
  }
}
@media screen and (min-width: 1024px) {
  .main-container {
    width: 1200px;
  }
}
</style>