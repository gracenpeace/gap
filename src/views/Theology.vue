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
    <p>정통신학이란?</p>
    <p>예수님이 전해주신 참된 복음을 사도들이 사명으로 사람들에게 전하였습니다.</p>
    <p>이러한 사도들이 전한 복음을 사도적 복음, 정통이라고 합니다.</p>
  </div>
</template>

<style scoped>
@media screen and (max-width: 1024px) {
  .theologyMain {
    padding: 1rem 2.5rem 0 2.5rem;
    background-color: white;
  }
}
@media screen and (max-width: 768px) {
  .theologyMain {
    padding: 1rem 2.5rem 0 2.5rem;
    background-color: white;
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
}
</style>