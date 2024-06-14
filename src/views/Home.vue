<script>
export default {
  name: "Home"
}
</script>

<template>
  <div class="main-container">
    <div class="mainBgBox">
      <img src="https://www.dropbox.com/scl/fi/a4vd1yon69es5wrcmxbud/mainPic1.jpg?rlkey=cx751fwd1c30gtmpfwmsqymvv&raw=1" alt="" width="1200">
    </div>
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
@media screen and (max-width: 1025px) {
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
  .mainBgBox {
    display: none;
  }
}
@media screen and (min-width: 1025px) {
  .main-container {
    width: 100%;
    background-color: #f7f6f5;
    position: relative;
    margin: 0 auto;
    padding-bottom: 30px;
  }
  .mainBgBox {
    width: 1200px;
    margin: 0 auto;
    position: relative;
  }
  .main-container2 {
    background-color: white;
    position: relative;
    width: 1200px;
    margin: 0 auto;
    margin-top: 50px;
    padding : 20px 30px 0 30px;
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
    font-size: 17px;
  }
  .main-container1 p{
    display: none;
  }
  .kellyBox {
    display: flex;
  }
  .kellyBox img {
    width: 35%;
    margin: auto;
    border-radius: 15px;
  }
}
</style>