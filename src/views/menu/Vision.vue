<script>
export default {
  name: "Vision",
}
</script>

<template>
  <div class="visionMain">
    <p class="division">교회소개 > 목회 비전</p>
    <h1>은혜와평강교회는</h1>
    <div style="padding-top: 30px;" class="visionText">
      <p>1. 기독교 세계관과 가치관의 혼재로 방황하는 청소년, 청년들에게 그리스도를 앎으로 방황 끝, 행복 시작으로 꿈을 꾸고 이뤄가는 교회</p>
      <p>2. 창조주 하나님을 앎으로 나의 존재와 참된 존재 목적과 존재 방식 알게된다. 이와같이 성경의 바른 이해와 해석으로 이끄는 교회</p>
      <p>3. 하나님이 주인되시는 가정, 교회, 이나라 이민족 더 나아가 세계 열방으로 뻗어나가도록 영향력을 끼치는 바른 사도적 복음을 가르치는 교회</p>
      <p>4. 요람에서 무덤까지 책임지는 교회</p>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 1025px) {
  .visionMain {
    padding: 8rem 5.5rem 150px 5.5rem;
    background-color: white;
    font-family: NanumSquareNeo-Variable-Bold,sans-serif;
    color: black;
    height: 900px;
  }
  .visionMain h1 {
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
  }
  .visionMain p {
    line-height: 2.1;
    font-size: 1.3rem;
    margin-top: 25px;
  }
  .division {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .visionMain {
    padding: 100px 2.5rem 150px 2.5rem;
    background-color: white;
    font-family: NanumSquareNeo-Variable-Bold,sans-serif;
    color: black;
    height: 900px;
  }
  .visionMain h1 {
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
  }
  .visionMain p {
    line-height: 2.1;
    font-size: 1rem;
    margin-top: 25px;
  }
  .division {
    display: none;
  }
}
@media screen and (min-width: 1025px) {
  .visionMain {
    width: 1200px;
    margin: 0 auto;
    padding: 30px 5% 150px 8%;
    background-color: white;
    font-family: NanumSquareNeo-Variable-Bold,sans-serif;
    color: black;
    height: 900px;
  }
  .division {
    font-size: 15px;
    padding-left: 10px;
  }
  .visionMain h1 {
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
    padding-top: 30px
  }
  .visionText p {
    line-height: 2.4;
    font-size: 18px;
    padding-left: 15px;
  }
}
</style>