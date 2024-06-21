<script>
export default {
  name: 'ServePerson'
}
</script>

<template>
  <div class="servePersonMain">
    <h2>섬기는이</h2>
    <div class="serveDivision">
      <h3>교역자</h3>
      <div class="leader">
        <p>이미지</p>
        <p class="name">황경화 전도사</p>
        <p class="team">우리는 청년부</p>
      </div>
      <div class="leader">
        <p>이미지</p>
        <p class="name">이선희 전도사</p>
        <p class="team">주일학교</p>
      </div>
      <div class="leader">
        <p>이미지</p>
        <p class="name">이한나 전도사</p>
        <p class="team">이단 상담</p>
      </div>
      <div class="leader">
        <div class="leaderLengthImgContainer">
          <img src="https://www.dropbox.com/scl/fi/dwuwxxa5mgd8cc3vp3ahm/cho_juniorpastor.jpg?rlkey=ce831gtim3zoz6yiov3x5wz49&st=puuxe8ca&raw=1" alt="">
        </div>
        <p class="name">조성찬 전도사</p>
        <p class="team">라온 학생부</p>
      </div>
      <div class="leader">
        <p>이미지</p>
        <p class="name">홍윤미 간사</p>
        <p class="team">우리는 청년부</p>
      </div>
    </div>
    <div class="serveDivision">
      <h3>중직자</h3>
      <h4>장로</h4>
      <div class="serveDiv">
        <div class="leader">
          <p>이미지</p>
          <p class="name">조강현 장로</p>
        </div>
        <div class="leader">
          <p>이미지</p>
          <p class="name">주명수 장로</p>
        </div>
      </div>
      <h4>안수집사</h4>
      <div class="serveDiv">
        <div class="leader">
          <p>이미지</p>
          <p class="name">김경원 안수집사</p>
        </div>
        <div class="leader">
          <p>이미지</p>
          <p class="name">장춘식 안수집사</p>
        </div>
      </div>
      <h4>권사</h4>
      <div class="serveDiv">
        <div class="leader">
          <p>이미지</p>
          <p class="name">김경숙 권사</p>
        </div>
        <div class="leader">
          <p>이미지</p>
          <p class="name">정맹숙 권사</p>
        </div>
      </div>
      <div class="serveDiv">
        <div class="leader">
          <p>이미지</p>
          <p class="name">정진희 권사</p>
        </div>
        <div class="leader">
          <p>이미지</p>
          <p class="name">모미화 권사</p>
        </div>
      </div>
      <div class="serveDiv">
        <div class="leader">
          <p>이미지</p>
          <p class="name">한민아 권사</p>
        </div>
        <div class="leader">
          <p>이미지</p>
          <p class="name">유수진 권사</p>
        </div>
      </div>
      <div class="leader">
        <p>이미지</p>
        <p class="name">유병수 권사</p>
      </div>
    </div>
    <div class="serveDivision">
      <h3>목장장</h3>
      <div class="serveDiv">
        <div class="leader">
          <p>이미지</p>
          <p class="name">사랑목장 조강현</p>
        </div>
        <div class="leader">
          <p>이미지</p>
          <p class="name">푸른목장 주명수</p>
        </div>
      </div>
      <div class="serveDiv">
        <div class="leader">
          <p>이미지</p>
          <p class="name">평강목장 장춘식</p>
        </div>
        <div class="leader">
          <p>이미지</p>
          <p class="name">OK목장 김경원</p>
        </div>
      </div>
      <div class="serveDiv">
        <div class="leader">
          <p>이미지</p>
          <p class="name">은혜목장 한성수</p>
        </div>
        <div class="leader">
          <p>이미지</p>
          <p class="name">쉴만한목장 신재섭</p>
        </div>
      </div>
      <div class="serveDiv">
        <div class="leader">
          <div class="leaderWidthImgContainer">
            <img src="https://www.dropbox.com/scl/fi/q4hiqebjes1ke1olplj5y/faith1.jpg?rlkey=i20ayz3a38gtj3kj72hs9mgo7&st=31pnkub5&raw=1" alt="">
          </div>
          <p class="name">믿음목장 김태환</p>
        </div>
        <div class="leader">
          <p>이미지</p>
          <p class="name">온유목장 이성웅</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 1025px) {
  .servePersonMain {
    padding: 8rem 2.5rem 150px 2.5rem;
    background-color: white;
    font-family: NanumSquareNeo-Variable-Bold, sans-serif;
    color: black;
    height: 100%;
  }
  .servePersonMain h2,
  .serveDivision h3,
  .serveDivision h4 {
    font-family: NanumSquareNeo-Variable-ExtraBold, sans-serif;
  }
  .servePersonMain h2 {
    font-size: 40px;
  }
  .serveDivision {
    padding-top: 30px;
    line-height: 1.8;
  }
  .serveDivision h3 {
    font-size: 35px;
    padding-left: 5px;
  }
  .serveDivision h4 {
    font-size: 30px;
    padding-left: 10px;
  }
  .leader {
    width: 62%;
    margin: 0 auto;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 15px;
  }
  .leaderWidthImgContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .leaderLengthImgContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .leaderWidthImgContainer img {
    width: 90%;
  }
  .leaderLengthImgContainer img {
    width: 70%;
  }
  .name {
    font-family: NanumSquareNeo-Variable-ExtraBold, sans-serif;
    font-size: 25px;
  }
  .team {
    font-size: 20px;
  }
  .serveDiv {
    display: flex;
  }
}
@media screen and (max-width: 768px) {
  .servePersonMain {
    padding: 100px 2.5rem 150px 2.5rem;
    background-color: white;
    font-family: NanumSquareNeo-Variable-Bold, sans-serif;
    color: black;
    height: 100%;
  }
  .servePersonMain h2,
  .serveDivision h3,
  .serveDivision h4 {
    font-family: NanumSquareNeo-Variable-ExtraBold, sans-serif;
  }
  .servePersonMain h2 {
    font-size: 25px;
  }
  .serveDivision {
    padding-top: 30px;
    line-height: 1.8;
  }
  .serveDivision h3 {
    font-size: 20px;
    padding-left: 5px;
  }
  .serveDivision h4 {
    font-size: 17px;
    padding-left: 10px;
  }
  .leader {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 15px;
  }
  .leaderWidthImgContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .leaderLengthImgContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .leaderWidthImgContainer img {
    width: 85%;
  }
  .leaderLengthImgContainer img {
    width: 60%;
  }
  .name {
    font-family: NanumSquareNeo-Variable-ExtraBold, sans-serif;
    font-size: 15px;
  }
  .team {
    font-size: 12px;
  }
  .serveDiv {
    display: block;
  }
}
</style>
