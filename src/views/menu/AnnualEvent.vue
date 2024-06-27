<script>
export default {
  name: "AnnualEvent",
  data() {
    return {
      modalStates: Array(37).fill(false) // 초기화: 7개의 false 값
    }
  },
  methods: {
    toggleModal(index) {
      // 현재 인덱스의 모달 상태를 반전
      const newState = !this.modalStates[index];
      // 모든 모달 상태를 false로 초기화
      this.modalStates = this.modalStates.map(() => false);
      // 클릭된 모달의 상태를 설정
      this.modalStates[index] = newState;

      if(window.innerWidth >= 1025 && this.modalStates[index] === true) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    },
    modalOut(index) {
      if(window.innerWidth >= 1025) {
        this.modalStates[index] = false;

        document.body.style.overflow = ''
        document.body.style.backgroundColor = 'white';
      }
    }
  }
}
</script>

<template>
  <div class="annualEventMain">
    <p class="division">교회소개 > 연간 행사</p>
    <h2>연간 행사</h2>
    <div class="annualEvent-Container">
      <h3>1월</h3>
      <p>신년감사예배, 단기선교, 직분자 양육</p>
      <div class="eventImgBox" >
        <div class="imgContainer" @click="toggleModal(0)" :class="{ active: modalStates[0] }">
          <img src="https://www.dropbox.com/scl/fi/rast0n1q99trd1eqn0vyn/2024-57234991078.jpg?rlkey=8h5su9d53wri81bzoni3aaggs&st=v687bw2h&raw=1" alt="">
          <strong>2024 단기선교</strong>
        </div>
        <div class="imgContainer" @click="toggleModal(1)" :class="{ active: modalStates[1] }">
          <img src="https://www.dropbox.com/scl/fi/s1hk2pmwag37z4zseo0ng/2024-57234991083.jpg?rlkey=38glnezi4x27axj51lnxqebpu&st=unupvped&raw=1" alt="">
          <strong>2024 단기선교</strong>
        </div>
      </div>
      <div class="click">
        <strong>click시 확대</strong>
      </div>
      <div class="bigImg" v-if="modalStates[0]" @click="modalOut(0)">
        <img src="https://www.dropbox.com/scl/fi/rast0n1q99trd1eqn0vyn/2024-57234991078.jpg?rlkey=8h5su9d53wri81bzoni3aaggs&st=v687bw2h&raw=1" alt="">
      </div>
      <div class="bigImg" v-if="modalStates[1]" @click="modalOut(1)">
        <img src="https://www.dropbox.com/scl/fi/s1hk2pmwag37z4zseo0ng/2024-57234991083.jpg?rlkey=38glnezi4x27axj51lnxqebpu&st=unupvped&raw=1" alt="">
      </div>
    </div>
    <div class="annualEvent-Container">
      <h3>2월</h3>
      <p>전교인 겨울 수련회, 스키캠프</p>
      <div class="eventImgBox" >
        <div class="imgContainer" @click="toggleModal(2)" :class="{ active: modalStates[2] }" >
          <img src="https://www.dropbox.com/scl/fi/e7d433icvmj7x54qw92r6/20240301-240303-58649710673.jpg?rlkey=xidhc3his2iloxfwmmtvdncyi&st=5hkcn053&raw=1" alt="">
          <strong>2024 전교인 겨울 수련회</strong>
        </div>
        <div class="imgContainer" @click="toggleModal(3)" :class="{ active: modalStates[3] }">
          <img src="https://www.dropbox.com/scl/fi/65mbh2z7q18nekso77wsm/20240301-240303-58649639747.jpg?rlkey=c1qq6r06yl316ljhlm5hdxpk8&st=uflz657j&raw=1" alt="">
          <strong>2024 전교인 겨울 수련회</strong>
        </div>
      </div>
      <div class="eventImgBox" >
        <div class="imgContainer" @click="toggleModal(4)" :class="{ active: modalStates[4] }">
          <img src="https://www.dropbox.com/scl/fi/r1ybaum1p0dw40pxlhewk/2024-2_15-2_17-57543759716.jpg?rlkey=g9pvng71tn1fyphfgecs7mtxo&st=a4brxbt2&raw=1" alt="">
          <strong>2024 스키캠프</strong>
        </div>
        <div class="imgContainer" @click="toggleModal(5)" :class="{ active: modalStates[5] }">
          <img src="https://www.dropbox.com/scl/fi/iao0g51v7gbidxnobk5i3/2024-2_15-2_17-57540335014.jpg?rlkey=7ulau2j4utcsaea72j7gcesny&st=obxvp648&raw=1" alt="">
          <strong>2024 스키캠프</strong>
        </div>
      </div>
      <div class="click">
        <strong>click시 확대</strong>
      </div>
      <div class="bigImg" v-if="modalStates[2]" @click="modalOut(2)">
        <img src="https://www.dropbox.com/scl/fi/e7d433icvmj7x54qw92r6/20240301-240303-58649710673.jpg?rlkey=xidhc3his2iloxfwmmtvdncyi&st=5hkcn053&raw=1" alt="">
      </div>
      <div class="bigImg" v-if="modalStates[3]" @click="modalOut(3)">
        <img src="https://www.dropbox.com/scl/fi/65mbh2z7q18nekso77wsm/20240301-240303-58649639747.jpg?rlkey=c1qq6r06yl316ljhlm5hdxpk8&st=uflz657j&raw=1" alt="">
      </div>
      <div class="bigImg" v-if="modalStates[4]" @click="modalOut(4)">
        <img src="https://www.dropbox.com/scl/fi/r1ybaum1p0dw40pxlhewk/2024-2_15-2_17-57543759716.jpg?rlkey=g9pvng71tn1fyphfgecs7mtxo&st=a4brxbt2&raw=1" alt="">
      </div>
      <div class="bigImg" v-if="modalStates[5]" @click="modalOut(5)">
        <img src="https://www.dropbox.com/scl/fi/iao0g51v7gbidxnobk5i3/2024-2_15-2_17-57540335014.jpg?rlkey=7ulau2j4utcsaea72j7gcesny&st=obxvp648&raw=1" alt="">
      </div>
    </div>
    <div class="annualEvent-Container">
      <h3>3월</h3>
      <p>전반기 양육반 개강, 한국 개혁신학원 1학기 개강</p>
    </div>
    <div class="annualEvent-Container">
      <h3>4월</h3>
      <p>부활주일감사예배, 행복나눔축제예배</p>
      <div class="eventImgBox" >
        <div class="imgContainer" @click="toggleModal(6)" :class="{ active: modalStates[6] }">
          <img src="https://www.dropbox.com/scl/fi/11j5rpo3ku6e6sry2j51z/240331-58597321641.jpg?rlkey=k2qh94dwl4c0ybsdzn43j3zdz&st=1ikitr8u&raw=1" alt="">
          <strong>2024 부활 감사 찬양 축제</strong>
        </div>
        <div class="imgContainer" @click="toggleModal(7)" :class="{ active: modalStates[7] }">
          <img src="https://www.dropbox.com/scl/fi/jwx46iz8gf81zxudv769z/240331-58896946761.jpg?rlkey=rpu0rt326ig3n8pzm0jw4ah6r&st=bmmpenle&raw=1" alt="">
          <strong>2024 부활 감사 찬양 축제</strong>
        </div>
      </div>
      <div class="eventImgBox" >
        <div class="imgContainer" @click="toggleModal(8)" :class="{ active: modalStates[8] }">
          <img src="https://www.dropbox.com/scl/fi/8jnkepkdhqvfvttkx6zj3/240331-58896972309.jpg?rlkey=upee8jy44n6soxkyv2ozh3ezz&st=yqg6dsxr&raw=1" alt="">
          <strong>2024 부활 감사 찬양 축제</strong>
        </div>
      </div>
      <div class="click">
        <strong>click시 확대</strong>
      </div>
      <div class="bigImg" v-if="modalStates[6]" @click="modalOut(6)">
        <img src="https://www.dropbox.com/scl/fi/11j5rpo3ku6e6sry2j51z/240331-58597321641.jpg?rlkey=k2qh94dwl4c0ybsdzn43j3zdz&st=1ikitr8u&raw=1" alt="">
      </div>
      <div class="bigImg" v-if="modalStates[7]" @click="modalOut(7)">
        <img src="https://www.dropbox.com/scl/fi/jwx46iz8gf81zxudv769z/240331-58896946761.jpg?rlkey=rpu0rt326ig3n8pzm0jw4ah6r&st=bmmpenle&raw=1" alt="">
      </div>
      <div class="bigImg" v-if="modalStates[8]" @click="modalOut(8)">
        <img src="https://www.dropbox.com/scl/fi/8jnkepkdhqvfvttkx6zj3/240331-58896972309.jpg?rlkey=upee8jy44n6soxkyv2ozh3ezz&st=yqg6dsxr&raw=1" alt="">
      </div>
    </div>
    <div class="annualEvent-Container">
      <h3>5월</h3>
      <p>가정주간 감사예배(어린이주일, 어버이주일, 스승의주일, 가정주일), 야외예배</p>
      <div class="eventImgBox" >
        <div class="imgContainer" @click="toggleModal(9)" :class="{ active: modalStates[9] }">
          <img src="https://www.dropbox.com/scl/fi/fj6bcx1fk0x2kngjmp8li/20240512-59700382513.jpg?rlkey=9r22ih9gqf7rt1lyy1ruwg02v&st=ex1bje7i&raw=1" alt="">
          <strong>2024 야외예배</strong>
        </div>
        <div class="imgContainer" @click="toggleModal(10)" :class="{ active: modalStates[10] }">
          <img src="https://www.dropbox.com/scl/fi/a05zm8n1foam7rpp9oqk1/20240512-59700382502.jpg?rlkey=1tpmh86ejmt4yn4h108k82ynj&st=fifwbxse&raw=1" alt="">
          <strong>2024 야외예배</strong>
        </div>
      </div>
      <div class="eventImgBox" >
        <div class="imgContainer" @click="toggleModal(11)" :class="{ active: modalStates[11] }">
          <img src="https://www.dropbox.com/scl/fi/s7xppqw7puh2kc2x3dupe/20220515-41124348732.jpg?rlkey=vnx7fp7ny60fopidywg8l8y2l&st=u7c92lue&raw=1" alt="">
          <strong>2022 스승의주일</strong>
        </div>
        <div class="imgContainer" @click="toggleModal(12)" :class="{ active: modalStates[12] }">
          <img src="https://www.dropbox.com/scl/fi/gx649s90pycp9ijy0gmh7/20220515-41124348653.jpg?rlkey=689etjjqcp5vwg5rs3o3e94b0&st=ua8geurc&raw=1" alt="">
          <strong>2022 스승의주일</strong>
        </div>
      </div>
      <div class="click">
        <strong>click시 확대</strong>
      </div>
      <div class="bigImg" v-if="modalStates[9]" @click="modalOut(9)">
        <img src="https://www.dropbox.com/scl/fi/fj6bcx1fk0x2kngjmp8li/20240512-59700382513.jpg?rlkey=9r22ih9gqf7rt1lyy1ruwg02v&st=ex1bje7i&raw=1" alt="">
      </div>
      <div class="bigImg" v-if="modalStates[10]" @click="modalOut(10)">
        <img src="https://www.dropbox.com/scl/fi/a05zm8n1foam7rpp9oqk1/20240512-59700382502.jpg?rlkey=1tpmh86ejmt4yn4h108k82ynj&st=fifwbxse&raw=1" alt="">
      </div>
      <div class="bigImg" v-if="modalStates[11]" @click="modalOut(11)">
        <img src="https://www.dropbox.com/scl/fi/s7xppqw7puh2kc2x3dupe/20220515-41124348732.jpg?rlkey=vnx7fp7ny60fopidywg8l8y2l&st=u7c92lue&raw=1" alt="">
      </div>
      <div class="bigImg" v-if="modalStates[12]" @click="modalOut(12)">
        <img src="https://www.dropbox.com/scl/fi/gx649s90pycp9ijy0gmh7/20220515-41124348653.jpg?rlkey=689etjjqcp5vwg5rs3o3e94b0&st=ua8geurc&raw=1" alt="">
      </div>
    </div>
    <div class="annualEvent-Container">
      <h3>6월</h3>
      <p>설립기념감사예배, 양육반 종강, 한국 개혁신학원 1학기 종강</p>
      <div class="eventImgBox" >
        <div class="imgContainer" @click="toggleModal(13)" :class="{ active: modalStates[13] }">
          <img src="https://www.dropbox.com/scl/fi/fri5q1szsb6h7xmkwm5cy/2024-20240609-16-60536967590.jpg?rlkey=n7hdjjnxqqkqjnsly3lzagwax&st=4bmcxyjw&raw=1" alt="">
          <strong>2024 설립기념감사예배</strong>
        </div>
        <div class="imgContainer" @click="toggleModal(14)" :class="{ active: modalStates[14] }">
          <img src="https://www.dropbox.com/scl/fi/dc6qp12ssxphbp7fojmqm/2024-20240609-16-60619676087.jpg?rlkey=iwkt2a147veqoxrcpvchczyj1&st=nzfvculz&raw=1" alt="">
          <strong>2024 설립기념감사예배</strong>
        </div>
      </div>
      <div class="eventImgBox" >
        <div class="imgContainer" @click="toggleModal(15)" :class="{ active: modalStates[15] }">
          <img src="https://www.dropbox.com/scl/fi/0ao141myom9x1t7upbxsg/2024-20240609-16-60619676152.jpg?rlkey=9v11w3m3zzlfm77qgvobolkp7&st=2tuvfwr4&raw=1" alt="">
          <strong>2024 설립기념감사예배</strong>
        </div>
        <div class="imgContainer" @click="toggleModal(16)" :class="{ active: modalStates[16] }">
          <img src="https://www.dropbox.com/scl/fi/86sm5eyzv39pidqsorz7l/2024-20240609-16-60619676199.jpg?rlkey=kgd7ospjz18ibkym6k7e98yyz&st=txsi164k&raw=1" alt="">
          <strong>2024 설립기념감사예배</strong>
        </div>
      </div>
      <div class="click">
        <strong>click시 확대</strong>
      </div>
      <div class="bigImg" v-if="modalStates[13]" @click="modalOut(13)">
        <img src="https://www.dropbox.com/scl/fi/fri5q1szsb6h7xmkwm5cy/2024-20240609-16-60536967590.jpg?rlkey=n7hdjjnxqqkqjnsly3lzagwax&st=4bmcxyjw&raw=1" alt="">
      </div>
      <div class="bigImg" v-if="modalStates[14]" @click="modalOut(14)">
        <img src="https://www.dropbox.com/scl/fi/dc6qp12ssxphbp7fojmqm/2024-20240609-16-60619676087.jpg?rlkey=iwkt2a147veqoxrcpvchczyj1&st=nzfvculz&raw=1" alt="">
      </div>
      <div class="bigImg" v-if="modalStates[15]" @click="modalOut(15)">
        <img src="https://www.dropbox.com/scl/fi/0ao141myom9x1t7upbxsg/2024-20240609-16-60619676152.jpg?rlkey=9v11w3m3zzlfm77qgvobolkp7&st=2tuvfwr4&raw=1" alt="">
      </div>
      <div class="bigImg" v-if="modalStates[16]" @click="modalOut(16)">
        <img src="https://www.dropbox.com/scl/fi/86sm5eyzv39pidqsorz7l/2024-20240609-16-60619676199.jpg?rlkey=kgd7ospjz18ibkym6k7e98yyz&st=txsi164k&raw=1" alt="">
      </div>
    </div>
    <div class="annualEvent-Container">
      <h3>7월</h3>
      <p>주일학교 여름성경학교</p>
      <div class="eventImgBox" >
        <div class="imgContainer" @click="toggleModal(17)" :class="{ active: modalStates[17] }">
          <img src="https://www.dropbox.com/scl/fi/oatibklsjl5udb8qz7utk/2023-54084410734.jpg?rlkey=t3ldizadg837rnbfarqpdjelk&st=n38thxhi&raw=1" alt="">
          <strong>2023 여름성경학교</strong>
        </div>
        <div class="imgContainer" @click="toggleModal(18)" :class="{ active: modalStates[18] }">
          <img src="https://www.dropbox.com/scl/fi/96miqo2kb112dw4k4id4p/2023-54084410749.jpg?rlkey=27anfq5gntkr5p7tbp86cxwq8&st=bpx8kjcd&raw=1" alt="">
          <strong>2023 여름성경학교</strong>
        </div>
      </div>
      <div class="eventImgBox" >
        <div class="imgContainer" @click="toggleModal(19)" :class="{ active: modalStates[19] }">
          <img src="https://www.dropbox.com/scl/fi/ruqsdzvwds3zushyzixyn/2023-54084410654.jpg?rlkey=hjq953n8wfwcozn9u1qh6s1ej&st=wxxyx6p3&raw=1" alt="">
          <strong>2023 여름성경학교</strong>
        </div>
        <div class="imgContainer" @click="toggleModal(20)" :class="{ active: modalStates[20] }">
          <img src="https://www.dropbox.com/scl/fi/tbvs3h49lof32dy06wdx9/2023-54084347986.jpg?rlkey=fer3p3opwqkqmxm8x4e89xmut&st=o7uq10gy&raw=1" alt="">
          <strong>2023 여름성경학교</strong>
        </div>
      </div>
      <div class="click">
        <strong>click시 확대</strong>
      </div>
      <div class="bigImg" v-if="modalStates[17]" @click="modalOut(17)">
        <img src="https://www.dropbox.com/scl/fi/oatibklsjl5udb8qz7utk/2023-54084410734.jpg?rlkey=t3ldizadg837rnbfarqpdjelk&st=n38thxhi&raw=1" alt="">
      </div>
      <div class="bigImg" v-if="modalStates[18]" @click="modalOut(18)">
        <img src="https://www.dropbox.com/scl/fi/96miqo2kb112dw4k4id4p/2023-54084410749.jpg?rlkey=27anfq5gntkr5p7tbp86cxwq8&st=bpx8kjcd&raw=1" alt="">
      </div>
      <div class="bigImg" v-if="modalStates[19]" @click="modalOut(19)">
        <img src="https://www.dropbox.com/scl/fi/ruqsdzvwds3zushyzixyn/2023-54084410654.jpg?rlkey=hjq953n8wfwcozn9u1qh6s1ej&st=wxxyx6p3&raw=1" alt="">
      </div>
      <div class="bigImg" v-if="modalStates[20]" @click="modalOut(20)">
        <img src="https://www.dropbox.com/scl/fi/tbvs3h49lof32dy06wdx9/2023-54084347986.jpg?rlkey=fer3p3opwqkqmxm8x4e89xmut&st=o7uq10gy&raw=1" alt="">
      </div>
    </div>
    <div class="annualEvent-Container">
      <h3>8월</h3>
      <p>전교인 여름 수련회, 부서별 수련회</p>
      <div class="eventImgBox" >
        <div class="imgContainer" @click="toggleModal(21)" :class="{ active: modalStates[21] }">
          <img src="https://www.dropbox.com/scl/fi/n76is4oqcfwriqptdwtb7/2023-53251775956.jpg?rlkey=ks55m9n0r496k2kwxnqf0q3fu&st=t3zzgo66&raw=1" alt="">
          <strong>2023 전교인 여름 수련회</strong>
        </div>
        <div class="imgContainer" @click="toggleModal(22)" :class="{ active: modalStates[22] }">
          <img src="https://www.dropbox.com/scl/fi/2v450ll994t6skhhvcjkg/2023-53251583484.jpg?rlkey=vyyqi1l9i80fliunkba3in1n1&st=nlyvjrci&raw=1" alt="">
          <strong>2023 전교인 여름 수련회</strong>
        </div>
      </div>
      <div class="eventImgBox" >
        <div class="imgContainer" @click="toggleModal(23)" :class="{ active: modalStates[23] }">
          <img src="https://www.dropbox.com/scl/fi/dzwx578xsvois3r84wf7g/2023-53245754642.jpg?rlkey=boojvplfstmtumyqcf1obefpf&st=sap76oxd&raw=1" alt="">
          <strong>2023 우리는 청년부 수련회</strong>
        </div>
        <div class="imgContainer" @click="toggleModal(24)" :class="{ active: modalStates[24] }">
          <img src="https://www.dropbox.com/scl/fi/bg0emt8nzhumj3gi5uy00/2023-53250032831.jpg?rlkey=d44z6o94zjnvu9n80bwasva74&st=ndl7wx71&raw=1" alt="">
          <strong>2023 우리는 청년부 수련회</strong>
        </div>
      </div>
      <div class="eventImgBox" >
        <div class="imgContainer" @click="toggleModal(25)" :class="{ active: modalStates[25] }">
          <img src="https://www.dropbox.com/scl/fi/6dvimpzeglchumtllyo72/2023-53085670594.jpg?rlkey=iaxbi410zle3o5rhwkaxpueu7&st=p75jh4sz&raw=1" alt="">
          <strong>2023 라온 학생부 수련회</strong>
        </div>
        <div class="imgContainer" @click="toggleModal(26)" :class="{ active: modalStates[26] }">
          <img src="https://www.dropbox.com/scl/fi/2iitsqnepwu1rc8odxlvt/2023-53232784050.jpg?rlkey=w9pv49m3ad0c5uhaj6gmnl5br&st=gjpsqg41&raw=1" alt="">
          <strong>2023 라온 학생부 수련회</strong>
        </div>
      </div>
      <div class="click">
        <strong>click시 확대</strong>
      </div>
      <div class="bigImg" v-if="modalStates[21]" @click="modalOut(21)">
        <img src="https://www.dropbox.com/scl/fi/n76is4oqcfwriqptdwtb7/2023-53251775956.jpg?rlkey=ks55m9n0r496k2kwxnqf0q3fu&st=t3zzgo66&raw=1" alt="">
      </div>
      <div class="bigImg" v-if="modalStates[22]" @click="modalOut(22)">
        <img src="https://www.dropbox.com/scl/fi/2v450ll994t6skhhvcjkg/2023-53251583484.jpg?rlkey=vyyqi1l9i80fliunkba3in1n1&st=nlyvjrci&raw=1" alt="">
      </div>
      <div class="bigImg" v-if="modalStates[23]" @click="modalOut(23)">
        <img src="https://www.dropbox.com/scl/fi/dzwx578xsvois3r84wf7g/2023-53245754642.jpg?rlkey=boojvplfstmtumyqcf1obefpf&st=sap76oxd&raw=1" alt="">
      </div>
      <div class="bigImg" v-if="modalStates[24]" @click="modalOut(24)">
        <img src="https://www.dropbox.com/scl/fi/bg0emt8nzhumj3gi5uy00/2023-53250032831.jpg?rlkey=d44z6o94zjnvu9n80bwasva74&st=ndl7wx71&raw=1" alt="">
      </div>
      <div class="bigImg" v-if="modalStates[25]" @click="modalOut(25)">
        <img src="https://www.dropbox.com/scl/fi/6dvimpzeglchumtllyo72/2023-53085670594.jpg?rlkey=iaxbi410zle3o5rhwkaxpueu7&st=p75jh4sz&raw=1" alt="">
      </div>
      <div class="bigImg" v-if="modalStates[26]" @click="modalOut(26)">
        <img src="https://www.dropbox.com/scl/fi/2iitsqnepwu1rc8odxlvt/2023-53232784050.jpg?rlkey=w9pv49m3ad0c5uhaj6gmnl5br&st=gjpsqg41&raw=1" alt="">
      </div>
    </div>
    <div class="annualEvent-Container">
      <h3>9월</h3>
      <p>야외예배, 후반기 양육반 개강, 한국 개혁신학원 2학기 개강</p>
    </div>
    <div class="annualEvent-Container">
      <h3>10월</h3>
      <p>전교인 가을 운동회</p>
      <div class="eventImgBox" >
        <div class="imgContainer" @click="toggleModal(27)" :class="{ active: modalStates[27] }">
          <img src="https://www.dropbox.com/scl/fi/wtfvau72y37yi2v60eiq7/20231009-54552423657.jpg?rlkey=bolguunpmefp21fyo4tzrh8jw&st=zl77rhj5&raw=1" alt="">
          <strong>2023 전교인 가을 운동회</strong>
        </div>
        <div class="imgContainer" @click="toggleModal(28)" :class="{ active: modalStates[28] }">
          <img src="https://www.dropbox.com/scl/fi/7fpjdl0hrifdki1ebnago/20221002-45316798730.jpg?rlkey=h8hvxfelfmiwpupx1tsrjgnei&st=rw2uuc9s&raw=1" alt="">
          <strong>2022 전교인 가을 운동회</strong>
        </div>
      </div>
      <div class="click">
        <strong>click시 확대</strong>
      </div>
      <div class="bigImg" v-if="modalStates[27]" @click="modalOut(27)">
        <img src="https://www.dropbox.com/scl/fi/wtfvau72y37yi2v60eiq7/20231009-54552423657.jpg?rlkey=bolguunpmefp21fyo4tzrh8jw&st=zl77rhj5&raw=1" alt="">
      </div>
      <div class="bigImg" v-if="modalStates[28]" @click="modalOut(28)">
        <img src="https://www.dropbox.com/scl/fi/7fpjdl0hrifdki1ebnago/20221002-45316798730.jpg?rlkey=h8hvxfelfmiwpupx1tsrjgnei&st=rw2uuc9s&raw=1" alt="">
      </div>
    </div>
    <div class="annualEvent-Container">
      <h3>11월</h3>
      <p>추수감사예배, 행복나눔축제예배, 양육반 종강, 한국 개혁신학원 2학기 종강, 각부서별 총회</p>
      <div class="eventImgBox" >
        <div class="imgContainer" @click="toggleModal(29)" :class="{ active: modalStates[29] }">
          <img src="https://www.dropbox.com/scl/fi/1m65nt73jpf6yrm0mttm1/231119-57184708740.jpg?rlkey=1kd3ibwrdt2astxxdncys26ny&st=q5iwhu7t&raw=1" alt="">
          <strong>2023 추수감사예배</strong>
        </div>
        <div class="imgContainer" @click="toggleModal(30)" :class="{ active: modalStates[30] }">
          <img src="https://www.dropbox.com/scl/fi/g1k4wsdfkxtpq8qacmp1b/231119-57184775285.jpg?rlkey=85klcuu6lv2ov6dod62vr5hkj&st=jw41b31y&raw=1" alt="">
          <strong>2023 추수감사예배</strong>
        </div>
      </div>
      <div class="click">
        <strong>click시 확대</strong>
      </div>
      <div class="bigImg" v-if="modalStates[29]" @click="modalOut(29)">
        <img src="https://www.dropbox.com/scl/fi/1m65nt73jpf6yrm0mttm1/231119-57184708740.jpg?rlkey=1kd3ibwrdt2astxxdncys26ny&st=q5iwhu7t&raw=1" alt="">
      </div>
      <div class="bigImg" v-if="modalStates[30]" @click="modalOut(30)">
        <img src="https://www.dropbox.com/scl/fi/g1k4wsdfkxtpq8qacmp1b/231119-57184775285.jpg?rlkey=85klcuu6lv2ov6dod62vr5hkj&st=jw41b31y&raw=1" alt="">
      </div>
    </div>
    <div class="annualEvent-Container">
      <h3>12월</h3>
      <p>성탄 전야제 장기자랑, 성탄감사예배</p>
      <div class="eventImgBox" >
        <div class="imgContainer" @click="toggleModal(31)" :class="{ active: modalStates[31] }">
          <img src="https://www.dropbox.com/scl/fi/xr9c4y08onlnrzxyvwto4/231224-56337548341.jpg?rlkey=qpba2nk0xk5klzn2y2ewdad1f&st=88ma5qgh&raw=1" alt="">
          <strong>2023 성탄 전야제 장기자랑</strong>
        </div>
        <div class="imgContainer" @click="toggleModal(32)" :class="{ active: modalStates[32] }">
          <img src="https://www.dropbox.com/scl/fi/1camgtdx66rickk7el55q/231224-56365988022.jpg?rlkey=2y776jrtl98l59ybu1snkyl99&st=wpqy7mqe&raw=1" alt="">
          <strong>2023 성탄 전야제 장기자랑</strong>
        </div>
      </div>
      <div class="eventImgBox" >
        <div class="imgContainer" @click="toggleModal(33)" :class="{ active: modalStates[33] }">
          <img src="https://www.dropbox.com/scl/fi/zazttbliqdssrp7y4rr66/231225-56353458591.jpg?rlkey=84s9ltygzrrorxpqnvro7x8e6&st=fwd6c170&raw=1" alt="">
          <strong>2023 성탄감사예배</strong>
        </div>
        <div class="imgContainer" @click="toggleModal(34)" :class="{ active: modalStates[34] }">
          <img src="https://www.dropbox.com/scl/fi/260nkgtihrr7y3usopdqs/231225-57232635700.jpg?rlkey=pbvbiirkxkva6f7glsbst0lfi&st=cmqp4o2g&raw=1" alt="">
          <strong>2023 성탄감사예배</strong>
        </div>
      </div>
      <div class="click">
        <strong>click시 확대</strong>
      </div>
      <div class="bigImg" v-if="modalStates[31]" @click="modalOut(31)">
        <img src="https://www.dropbox.com/scl/fi/xr9c4y08onlnrzxyvwto4/231224-56337548341.jpg?rlkey=qpba2nk0xk5klzn2y2ewdad1f&st=88ma5qgh&raw=1" alt="">
      </div>
      <div class="bigImg" v-if="modalStates[32]" @click="modalOut(32)">
        <img src="https://www.dropbox.com/scl/fi/1camgtdx66rickk7el55q/231224-56365988022.jpg?rlkey=2y776jrtl98l59ybu1snkyl99&st=wpqy7mqe&raw=1" alt="">
      </div>
      <div class="bigImg" v-if="modalStates[33]" @click="modalOut(33)">
        <img src="https://www.dropbox.com/scl/fi/zazttbliqdssrp7y4rr66/231225-56353458591.jpg?rlkey=84s9ltygzrrorxpqnvro7x8e6&st=fwd6c170&raw=1" alt="">
      </div>
      <div class="bigImg" v-if="modalStates[34]" @click="modalOut(34)">
        <img src="https://www.dropbox.com/scl/fi/260nkgtihrr7y3usopdqs/231225-57232635700.jpg?rlkey=pbvbiirkxkva6f7glsbst0lfi&st=cmqp4o2g&raw=1" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 1025px) {
  .annualEventMain {
    padding: 8rem 2.5rem 150px 2.5rem;
    background-color: white;
    font-family: NanumSquareNeo-Variable-Bold,sans-serif;
    color: black;
    height: 100%;
  }
  .click {
    text-align: center;
    font-size: 1rem;
    padding-top: 10px;
    padding-bottom: 15px;
  }
  .eventImgBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .bigImg {
    width: 100%;

  }
  .bigImg img {
    width: 100%;
    border-radius: 15px;
  }
  .imgContainer {
    width: 50%;
    text-align: center;
    line-height: 1;
    padding-top: 15px;
  }
  .imgContainer strong {
    font-size: 1rem;
  }
  .eventImgBox img {
    width: 95%;
  }
  .annualEventMain h2 {
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
    font-size: 2.5rem;
    padding-left: 10px;
  }
  .annualEvent-Container {
    margin-top: 20px;
    line-height: 1.8;
  }
  .annualEvent-Container h3 {
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
    font-size: 2rem;
    padding-left: 10px;
  }
  .annualEvent-Container p {
    font-size: 1.5rem;
    padding-left: 10px;
  }
  .imgContainer.active img {
    border: 3px solid red; /* 원하는 border 스타일 */
  }
  .division {
    display: none;
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
  .click {
    text-align: center;
    font-size: 0.8rem;
  }
  .eventImgBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .bigImg {
    width: 100%;
    
  }
  .bigImg img {
    width: 100%;
    border-radius: 15px;
  }
  .imgContainer {
    width: 50%;
    text-align: center;
    line-height: 1;
    padding-top: 15px;
  }
  .imgContainer strong {
    font-size: 0.7rem;
  }
  .eventImgBox img {
    width: 95%;
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
    font-size: 20px;
  }
  .annualEvent-Container p {
    font-size: 16px;
  }
  .imgContainer.active img {
    border: 3px solid red; /* 원하는 border 스타일 */
  }
  .click {
    padding-top: 10px;
    padding-bottom: 15px;
  }
  .division {
    display: none;
  }
}
@media screen and (min-width: 1025px) {
  .annualEventMain {
    padding: 30px 6% 150px 8%;
    background-color: white;
    font-family: NanumSquareNeo-Variable-Bold,sans-serif;
    color: black;
    height: 100%;
    width: 1200px;
    margin: 0 auto;
  }
  .click {
    text-align: center;
    font-size: 1rem;
    padding-top: 10px;
    padding-bottom: 15px;
    width: 90%;
    margin: 0 auto;
  }
  .eventImgBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 0 auto;
  }
  .eventImgBox img {
    width: 95%;
  }
  .bigImg {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(128, 128, 128, 0.7);
    z-index: 9999;
  }
  .bigImg img {
    width: 60%;
    border-radius: 15px;
  }
  .imgContainer {
    width: 50%;
    text-align: center;
    line-height: 1;
    padding-top: 15px;
  }
  .imgContainer strong {
    font-size: 1rem;
  }
  .annualEventMain h2 {
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
    font-size: 30px;
    padding-left: 45px;
    padding-top: 30px;
  }
  .annualEvent-Container {
    margin-top: 20px;
    line-height: 1.8;
  }
  .annualEvent-Container h3 {
    font-family: NanumSquareNeo-Variable-ExtraBold,sans-serif;
    font-size: 23px;
    padding-left: 45px;
  }
  .annualEvent-Container p {
    font-size: 18px;
    padding-left: 45px;
  }
  .imgContainer.active img {
    border: 3px solid red; /* 원하는 border 스타일 */
  }
  .division {
    padding-left: 4%;
  }
}
</style>