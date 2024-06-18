<script>
export default {
  name: "AnnualEvent",
}
</script>

<template>
  <div class="annualEventMain">
    <h2>연간 행사들</h2>
    <div class="annualEvent-Container">
      <h3>1월</h3>
      <p>신년감사예배, 단기선교, 직분자 양육</p>
    </div>
    <div class="annualEvent-Container">
      <h3>2월</h3>
      <p>동계 수련회, 스키캠프</p>
    </div>
    <div class="annualEvent-Container">
      <h3>3월</h3>
      <p>전반기 양육반 개강, 한국 개혁신학원 1학기 개강</p>
    </div>
    <div class="annualEvent-Container">
      <h3>4월</h3>
      <p>부활주일감사예배, 행복나눔축제예배</p>
    </div>
    <div class="annualEvent-Container">
      <h3>5월</h3>
      <p>가정주간 감사예배(어린이주일, 어버이주일, 스승의주일, 가정주일), 야외예배</p>
    </div>
    <div class="annualEvent-Container">
      <h3>6월</h3>
      <p>설립기념감사예배, 양육반 종강, 한국 개혁신학원 1학기 종강</p>
    </div>
    <div class="annualEvent-Container">
      <h3>7월</h3>
      <p>여름성경학교</p>
    </div>
    <div class="annualEvent-Container">
      <h3>8월</h3>
      <p>전교인 여름수련회, 부서별 수련회</p>
    </div>
    <div class="annualEvent-Container">
      <h3>9월</h3>
      <p>야외예배, 후반기 양육반 개강, 한국 개혁신학원 2학기 개강</p>
    </div>
    <div class="annualEvent-Container">
      <h3>10월</h3>
      <p>전교인 가을 운동회</p>
    </div>
    <div class="annualEvent-Container">
      <h3>11월</h3>
      <p>추수감사예배, 행복나눔축제예배, 양육반 종강, 한국 개혁신학원 2학기 종강, 각부서별 총회</p>
    </div>
    <div class="annualEvent-Container">
      <h3>12월</h3>
      <p>성탄 전야제장기자랑, 성탄감사예배</p>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 1025px) {
  .annualEventMain {
    padding: 8rem 2.5rem 150px 4.5rem;
    background-color: white;
    font-family: NanumSquareNeo-Variable-Bold,sans-serif;
    color: black;
    height: 100%;
  }
  .annualEventMain h2 {
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
    font-size: 2.3rem;
  }
  .annualEvent-Container {
    margin-top: 20px;
    line-height: 1.8;
  }
  .annualEvent-Container h3 {
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
    font-size: 1.5rem;
  }
  .annualEvent-Container p {
    font-size: 1.3rem;
  }
}
@media screen and (max-width: 768px) {
  .annualEventMain {
    padding: 100px 2.5rem 150px 2.5rem;
    background-color: white;
    font-family: NanumSquareNeo-Variable-Bold,sans-serif;
    color: black;
    height: 100%;
  }
  .annualEventMain h2 {
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
    font-size: 1.7rem;
  }
  .annualEvent-Container {
    margin-top: 20px;
  }
  .annualEvent-Container h3 {
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
    font-size: 1.2rem;
  }
}
</style>