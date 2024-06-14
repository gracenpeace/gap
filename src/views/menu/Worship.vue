<script>
export default {
  name: "Worship",
}
</script>

<template>
  <div class="worship-container">
    <h2>예배 안내</h2>
    <div class="worshipContents">
      <p class="worshipTitle">주일예배</p>
      <div class="worshipContent">
        <p>주일 오전예배  |  <span class="time">주일 오전 10:40 예배당</span></p>
        <p>주일 오후예배 | <span class="time">주일 오후 3:00 예배당</span></p>
      </div>
      <p class="worshipTitle" style="margin-top: 2rem">주중예베</p>
      <div class="worshipContent">
        <p>수요예배 | <span class="time">수요일 오후 7:30 예배당</span></p>
      </div>
      <div class="worshipContent">
        <p>금요 기도회 | <span class="time">금요일 오후 8:30 예배당</span></p>
      </div>
      <p class="worshipTitle" style="margin-top: 2rem">기관예배</p>
      <div class="worshipContent">
        <p>라온 학생부예배 | <span class="time">토요일 오전 09:00 소예배실</span></p>
        <p>우리는 청년예배 | <span class="time">토요일 오전 10:40 예배당</span></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 1025px) {
  .worship-container {
    padding: 1rem 2.5rem 0 2.5rem;
    background-color: white;
  }
  .worship-container h2 {
    font-family: NanumSquareNeo-Variable-Heavy,sans-serif;
  }
  .worshipTitle {
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
  }
}
@media screen and (max-width: 768px) {
  .worship-container {
    padding: 1rem 2.5rem 0 2.5rem;
    background-color: white;
    height: 100%;
  }
  .worshipContents {
    padding: 2rem 0 0 1rem
  }
  .worship-container h2 {
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
    font-size: 1.7rem;
  }
  .worshipTitle {
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
    font-size: 1.3rem;
  }
  .worshipContent {
    margin-top: 0.3rem;
  }
  .worshipContent p {
    font-family: NanumSquareNeo-Variable-Bold,sans-serif;
  }
  .time {
    font-size: 0.8rem;
  }
}
</style>