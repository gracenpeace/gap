<script>
export default {
  name: "Worship",
}
</script>

<template>
  <div class="worship-container">
    <p class="division">교회소개 > 예배 안내</p>
    <h2>예배 안내</h2>
    <div class="worshipContents">
      <p class="worshipTitle">주일예배</p>
      <div class="worshipContent">
        <p class="worshipName">1부 주일학교 교사예배 |  <span class="time">주일 오전 09:00 소예배실(2층)</span></p>
        <p class="worshipPost">주로 주일학교를 섬기는 교사들이 먼저 나와서 드립니다.</p>
        <p class="worshipName">2부 주일예배  |  <span class="time">주일 오전 10:40 본당(1층)</span></p>
        <p class="worshipPost">사도적 정통 복음을 선포하며 믿음고백으로 화답하는 예배</p>
        <p class="worshipName">주일 오후예배 | <span class="time">주일 오후 3:00 본당(1층)</span></p>
        <p class="worshipPost">정통과 이단을 분별케 하는 주제별 시리즈 설교</p>
      </div>
      <p class="worshipTitle" style="margin-top: 2rem">주중예베</p>
      <div class="worshipContent">
        <p class="worshipName">수요예배 | <span class="time">수요일 오후 7:30 본당(1층)</span></p>
        <p class="worshipPost">하이델베르크 요리문답 강해설교</p>
      </div>
      <div class="worshipContent">
        <p class="worshipName">금요 기도회 | <span class="time">금요일 오후 8:30 본당(1층)</span></p>
        <p class="worshipPost" >잠언 말씀의 설교 내용으로 믿음 고백과 다짐과 결단과 간절한 간구와 응답을 구하는 기도회</p>
      </div>
      <p class="worshipTitle" style="margin-top: 2rem">기관예배</p>
      <div class="worshipContent">
        <p class="worshipName">라온 학생부예배 | <span class="time">토요일 오전 09:00 소예배실(2층)</span></p>
        <p class="worshipName">우리는 청년예배 | <span class="time">토요일 오전 10:40 본당(1층)</span></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 1025px) {
  .worship-container {
    padding: 8rem 2.5rem 150px 3.5rem;
    background-color: white;
    height: 100%;
    color: black;
  }
  .worshipContents {
    padding: 2rem 0 0 1rem;
    line-height: 2;
  }
  .worship-container h2 {
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
    font-size: 2.1rem;
    color: black;
  }
  .worshipTitle {
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
    font-size: 1.5rem;
    color: black;
  }
  .worshipContent {
    margin-top: 0.3rem;
    color: black;
  }
  .worshipName{
    font-family: NanumSquareNeo-Variable-Bold,sans-serif;
    color: black;
    font-size: 1.1rem;
  }
  .worshipPost {
    font-size: 0.9rem; padding-bottom: 5px; margin-left: 6%;
    font-family: NanumSquareNeo-Variable-Regular,sans-serif;
  }
  .time {
    font-size: 0.9rem;
    color: black;
  }
  .division {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .worship-container {
    padding: 100px 2.5rem 150px 1.5rem;
    background-color: white;
    height: 100%;
    color: black;
  }
  .worshipContents {
    padding: 2rem 0 0 1rem;
    line-height: 1.8;
  }
  .worship-container h2 {
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
    font-size: 1.7rem;
    color: black;
  }
  .worshipTitle {
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
    font-size: 1.3rem;
    color: black;
  }
  .worshipContent {
    margin-top: 0.3rem;
    color: black;
  }
  .worshipContent p {
    font-family: NanumSquareNeo-Variable-Bold,sans-serif;
    color: black;
  }
  .worshipName{
    font-family: NanumSquareNeo-Variable-Bold,sans-serif;
    color: black;
    font-size: 15px;
  }
  .worshipPost {
    font-size: 12px; padding-bottom: 5px; margin-left: 6%
  }
  .time {
    font-size: 11px;
    color: black;
  }
  .division {
    display: none;
  }
}
@media screen and (min-width: 1025px) {
  .worship-container {
    padding: 30px 8% 150px 9%;
    background-color: white;
    height: 100%;
    font-family: NanumSquareNeo-Variable-Bold, sans-serif;
    color: black;
    width: 1200px;
    margin: 0 auto;
  }
  .division {
    padding-left: 24px;
  }
  .worshipContents {
    padding: 2rem 0 0 21%;
    line-height: 2.3;
  }
  .worship-container h2 {
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
    font-size: 35px;
    color: black;
    padding-top: 30px;
    padding-left: 20%;
  }
  .worshipTitle {
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
    font-size: 30px;
    color: black;
  }
  .worshipContent {
    margin-top: 0.3rem;
    color: black;
  }
  .worshipName{
    font-family: NanumSquareNeo-Variable-Bold,sans-serif;
    color: black;
    font-size: 20px;
  }
  .worshipPost {
    font-size: 15px; padding-bottom: 5px; margin-left: 6%;
    font-family: NanumSquareNeo-Variable-Regular,sans-serif;
  }
  .time {
    font-size: 15px;
    color: black;
  }
}
</style>