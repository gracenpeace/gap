<script>
export default {
  name: "PastorIntroduce",
}
</script>

<template>
  <div class="PastorIntroduceMain">
    <div class="image-container">
      <p>이미지</p>
      <h2>담임목사 주기수</h2>
    </div>
    <div class="profile-container">
      <h3>프로필</h3>
      <p>은혜와평강교회 담임목사</p>
      <p>경성노회 고시부장</p>
      <p>한국개혁신학원(서철원 박사/조직신학전공)</p>
      <p>합동총회 이단대책위원회 전문위원</p>
      <p>경인 기독교 이단상담소 소장</p>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 1025px) {
  .PastorIntroduceMain {
    padding: 8rem 2.5rem 150px 4.5rem;
    background-color: white;
    font-family: NanumSquareNeo-Variable-Bold,sans-serif;
    color: black;
    height: 900px;
  }
  .image-container{
    width:200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  .profile-container {
    margin-top: 2rem;
    line-height: 1.8;
  }
  .image-container h2, .profile-container h3 {
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
    font-size: 1.8rem;
  }
  .profile-container p {
    font-size: 1.3rem;
  }
}
@media screen and (max-width: 768px) {
  .PastorIntroduceMain {
    padding: 100px 2.5rem 150px 2.5rem;
    background-color: white;
    font-family: NanumSquareNeo-Variable-Bold,sans-serif;
    color: black;
    height: 900px;
  }
  .image-container{
    width:190px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  .profile-container {
    margin-top: 2rem;
  }
  .image-container h2, .profile-container h3 {
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
  }
}
</style>