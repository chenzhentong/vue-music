<template>
  <div class="song-item">

    <img :src="song.image" class="songImage" @click="goSongListDetail(song.id)">
    <span v-if="song.icon">
      <img :src="song.icon" class="icon">
    </span>
    <img src="../../../static/images/cover_play.png" class="music-play">
    <img src="../../../static/images/耳机.png" class="music-earphone">
    <span class="name">{{song.name}}</span>
    <span class="music-listening">{{song.listening}}</span>
    <span v-if="song.desc">
      <span class="desc">{{song.desc}}</span>
    </span>

  </div>
</template>

<script>
export default {
  name: "SongItem",
  props: {
    song: {
      type: Object
    }
  },
  methods: {
    goSongListDetail (songListId) {

      this.$router.push({name: 'SongListDetail',params:{id:songListId}})
    }
  }
}
</script>

<style scoped lang="less">
  @fontsize750: 50;
  .song-item{
    position: relative;
    .songImage{
      width: 220rem /@fontsize750;
      height: 220rem /@fontsize750;
      border-radius: 15rem /@fontsize750;
      /*模糊*/
      /*filter: blur(5px);*/
      /*变灰*/
      /*filter: grayscale(50%);*/
      /*图片亮度变暗或变明*/
      filter: brightness(70%);
      /*调整图片对比度*/
      /*filter: contrast(120%);*/
      /*filter: drop-shadow(2rem /@fontsize750,2rem /@fontsize750,2rem /@fontsize750,red);*/
      /*转换为深褐色*/
      /*filter:sepia(100%);*/
      /*转换图像饱和度*/
      /*filter: saturate(200%);*/
      /*转换图像透明程度*/
      /*filter: opacity(20%);*/
      /*反转输入图形*/
      /*filter: invert(100%);*/
      /*给图像应用色相旋转*/
      /*filter: hue-rotate(90deg);*/
      transition: all 0.2s;

      &:hover{
        cursor: pointer;
        filter: none;
      }

    }
    .music-play{
      width: 36rem /@fontsize750;
      height: 36rem /@fontsize750;
      position: absolute;
      top: 175rem /@fontsize750;
      left: 170rem /@fontsize750;
      filter:contrast(200%);
    }
    .music-earphone{
      width: 36rem /@fontsize750;
      height: 36rem /@fontsize750;
      position: absolute;
      top: 175rem /@fontsize750;
      left: 10rem /@fontsize750;
    /*  filter:contrast(0%);*/

    }
    .music-listening{
      position: absolute;
      top: 185rem /@fontsize750;
      left: 46rem /@fontsize750;
      color: #ffffff;
      font-size: 16rem /@fontsize750;
    }
    .desc{
      font-size: 20rem /@fontsize750;
      display: block;
      overflow: hidden;
      height: 50rem /@fontsize750;
      line-height: 26rem /@fontsize750;
      width: 220rem /@fontsize750;
      &:hover{
        cursor: pointer;
      }
    }
    .name{
      display: block;
      position: absolute;
      top: 100rem /@fontsize750;
      left: 50rem /@fontsize750;
      color: #ffffff;
      font-size: 20rem /@fontsize750;
    }
    .icon{
      display: block;
      position: absolute;
      top: 70rem /@fontsize750;
      left: 80rem /@fontsize750;
      width: 36rem /@fontsize750;
      height: 36rem /@fontsize750;
    }


  }
</style>
