<script>
export default {
  name: 'Introduce',
  mounted() {
    this.loadYouTubeAPI()
  },
  methods: {
    loadYouTubeAPI() {
      this.player = new YT.Player('player', {
        height: '180',
        width: '320',
        videoId: 'YYgcq2RCIvQ',
        events: {
          onReady: this.onPlayerReady,
          onStateChange: this.onPlayerStateChange
        }
      })
    },
    onPlayerReady(event) {
      event.target.playVideo()
    }
  }
}
</script>

<template>
  <div class="introduce-container">
    교회 소개 페이지
    <div>
      <div id="player" class="player"></div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 1024px) {
  .introduce-container {
    padding: 1rem 2.5rem 0 2.5rem;
    background-color: white;
  }
}
@media screen and (max-width: 768px) {
  .introduce-container {
    padding: 1rem 2.5rem 0 2.5rem;
    background-color: white;
  }
  .player {
    width: 320;
    height: 180;
  }
}
</style>
