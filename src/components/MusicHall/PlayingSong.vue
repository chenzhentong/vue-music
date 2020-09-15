<template>
  <div class="playing-song">
    <div class="left-area">
      <img :src="playingSong.image" class="playing-song-image" @click="playSong(1)">
      <span class="name">{{playingSong.name}} - {{playingSong.singer}}</span>
    </div>
    <div class="right-area">
      <img src="../../../static/images/play3.png" class="play-image">
      <img src="../../../static/images/歌单.png" class="play-image">
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayingSong",
  props: {
    playingSong: {
      type: Object,
      default: function () {
        return  {
          name: '光辉岁月',
          singer: 'Beyond',
          image: '../../../static/images/3927337324.jpg'
        }
      }

    }
  },
  methods: {
    playSong (id) {
      this.$router.push({path: '/song/' + id })

    }
  }
}
</script>

<style scoped lang="less">
  @fontsize750: 50;
  .playing-song {
    width: 750rem /@fontsize750;
    height: 50rem /@fontsize750;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    background-color: #ffffff;

    .left-area {

      display: flex;
      align-items: center;
      margin-left: 20rem /@fontsize750;

      .playing-song-image {

        width: 48rem /@fontsize750;
        height: 48rem /@fontsize750;
        border-radius: 24rem /@fontsize750;


      }

      .name {
        margin-left: 10rem /@fontsize750;
        font-size: 15rem /@fontsize750;
      }


    }

    .right-area {
      display: flex;
      justify-content: space-around;
      align-items: center;

      .play-image {
        width: 32rem /@fontsize750;
        height: 32rem /@fontsize750;
        margin-right: 20rem /@fontsize750;
      }

    }

  }

</style>
