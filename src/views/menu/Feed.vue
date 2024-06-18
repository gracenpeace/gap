<script>
export default {
  name: "Feed",
}
</script>

<template>
  <div class="feedMain">
    <h2>양육</h2>
    <div class="feed-container">
      <h3>분기별 양육</h3>
      <p>날마다 믿음고백과 새사람이 자라가는 생명의 양식으로 실제적 양육내용</p>
    </div>
    <div class="feed-container">
      <h3>특강</h3>
      <p>분기별 특강으로 교역자, 중직자, 직분자, 목장장, 기관임원들의 요청에 의한 실제 사역에 필요한 주제별 특강</p>
    </div>
    <div class="feed-container">
      <h3>섬김이 교육</h3>
      <p>새가족과 교회 방문하시는 분들을 섬기는 사역자 교육</p>
    </div>
    <div class="feed-container">
      <h3>학습, 세례, 입교 교육</h3>
      <p>믿음고백의 내용들을 4~6주간 진행됨</p>
    </div>
    <div class="feed-container">
      <h3>새가족 교육</h3>
      <p>교회 안내와 신앙 생활의 기본적 내용으로 4주간 진행됨</p>
    </div>
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
    padding: 100px 2.5rem 150px 2.5rem;
    background-color: white;
    font-family: NanumSquareNeo-Variable-Bold,sans-serif;
    color: black;
    height: 900px;
  }
  .feedMain h2 {
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
    font-size: 1.7rem;
  }
  .feed-container {
    margin-top: 30px;
  }
  .feed-container h3 {
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
    font-size: 1.2rem;
  }
}
</style>