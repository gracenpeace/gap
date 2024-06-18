<script>
export default {
  name: "Theology"
}
</script>

<template>
  <div class="theologyMain">
    <div class="theologyImgBox">
      <img src="https://www.dropbox.com/scl/fi/y3n7fulsfln7y084avxbc/bible.png?rlkey=ohpgd21w7z5urhclzlcyujmnr&raw=1" alt="">
    </div>
    <div class="theologyContent">
      <p class="theologyTitle">정통신학이란?</p>
      <p class="theologyPost">예수님이 전해주신 참된 복음을 사도들이 사명으로 사람들에게 전하였습니다.</p>
      <p class="theologyPost">이러한 사도들이 전한 복음을 사도적 복음, 정통 이라고 합니다.</p>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 1025px) {
  .theologyMain {
    padding: 8rem 2.5rem 150px 2.5rem;
    background-color: white;
    height: 900px;
  }
  .theologyMain img{
    width: 40%;
    background-color: white;
  }
  .theologyImgBox {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }
  .theologyContent {
    font-family: NanumSquareNeo-Variable-Bold,sans-serif;
    color: black;
    padding-top: 50px;
    line-height: 1.8;
  }
  .theologyTitle {
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
    color: black;
    font-size: 1.8rem;
  }
  .theologyPost{
    font-size: 1.3rem;
  }
}
@media screen and (max-width: 768px) {
  .theologyMain {
    padding: 100px 2.5rem 150px 2.5rem;
    background-color: white;
    height: 900px;
  }
  .theologyMain img{
    width: 50%;
    background-color: white;
  }
  .theologyImgBox {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }
  .theologyContent {
    font-family: NanumSquareNeo-Variable-Bold,sans-serif;
    color: black;
    padding-top: 30px;
    line-height: 1.8;
  }
  .theologyTitle {
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
    color: black;
    font-size: 1.2rem;
  }
}
</style>