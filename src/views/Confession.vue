<script>
export default {
  name: 'Confession',
}
</script>

<template>
<div class="confessionMain">
  <div class="confessionImgBox">
    <img src="https://www.dropbox.com/scl/fi/3pqfvhozr9nh9qs6ptvz8/confession1.jpg?rlkey=i96137425e878cmjity0wiev5&st=0m81s7wm&raw=1" alt="">
  </div>
  <h2 class="confessionMainH2">신앙고백</h2>
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
    height: 100%;
  }
  .confessionImgBox {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .confessionImgBox img {
    width: 65%;
    padding-bottom: 30px;
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
    padding: 100px 2.5rem 150px 2.5rem;
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
    width: 75%;
    padding-bottom: 20px;
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
@media screen and (min-width: 1025px) {
  .confessionMain {
    padding: 50px 5% 150px 5%;
    background-color: white;
    font-family: NanumSquareNeo-Variable-Bold,sans-serif;
    color: black;
    height: 100%;
  }
  .confessionImgBox {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .confessionImgBox img {
    width: 40%;
    padding-bottom: 30px;
  }
  .confessionMain h2 {
    font-size: 30px;
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
  }
  .confessionMainH2 {
    padding-left: 17%;
  }
  .creed {
    padding-top: 10px;
    padding: 1rem 0 0 1rem;
    line-height: 1.8;
    padding-left: 20%;
  }
  .creed h2 {
    font-size: 25px;
  }
  .creed p {
    font-size: 1.3rem;
  }
}
</style>