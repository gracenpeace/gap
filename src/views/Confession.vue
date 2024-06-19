<script>
export default {
  name: 'Confession',
}
</script>

<template>
<div class="confessionMain">
  <div class="confessionImgBox">
    <img src="https://www.dropbox.com/scl/fi/o6u136rwrc8ux8w36h17m/confession1.jpg?rlkey=0fjhw8zxzxbpdlqu4rxbs7glp&st=w945ieeu&raw=1" alt="">
  </div>
  <h2>신앙고백</h2>
  <div class="creed">
    <h2>고대신조</h2>
    <p>1. 사도신조</p>
    <p>2. 니케아-콘스탄티노플 신조</p>
    <p>3. 칼케톤 신조</p>
    <p>4. 아타나시우스 신조</p>
  </div>
  <div class="creed">
    <h2>개혁신앙 신조</h2>
    <p>1. 하이델베르크 요리문답</p>
    <p>2. 웨스트민스터 소요리문답</p>
    <p>3. 벨직 신조</p>
    <p>4. 돌트 신조</p>
  </div>
</div>
</template>

<style scoped>
@media screen and (max-width: 1025px) {
  .confessionMain {
    padding: 8rem 2.5rem 150px 4.5rem;
    background-color: white;
    font-family: NanumSquareNeo-Variable-Bold,sans-serif;
    color: black;
    height: 900px;
  }
  .confessionMain h2 {
    font-size: 2.5rem;
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
  }
  .creed {
    margin-top: 10px;
    padding: 1rem 0 0 1rem;
    line-height: 1.8;
  }
  .creed h2 {
    font-size: 1.8rem;
  }
  .creed p {
    font-size: 1.3rem;
  }
}@media screen and (max-width: 768px) {
  .confessionMain {
    padding: 30px 2.5rem 150px 2.5rem;
    background-color: white;
    font-family: NanumSquareNeo-Variable-Bold,sans-serif;
    color: black;
    height: 900px;
  }
  .confessionImgBox {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .confessionImgBox img {
    width: 92%;
  }
  .confessionMain h2 {
    font-size: 1.7rem;
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
  }
  .creed {
    margin-top: 10px;
    padding: 1rem 0 0 1rem;
  }
  .creed h2 {
    font-size: 1.3rem;
  }
  .creed p {
    font-size: 1.1rem;
  }
}
</style>