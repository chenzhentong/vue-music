<template>
  <div class="hot-song-list">
    <div class="song-list-title">
      <h2 class="title">{{title}}</h2>
      <a :href="more.url" class="more">{{more.name}}</a>
    </div>
    <div class="song-items">
      <div v-for="(song,index) in songList" :key="index">
        <!--<div class="song-item">
          <img src="../../../static/images/cover_play.png" class="music-play">
          <img src="../../../static/images/耳机.png" class="music-earphone">
          <img :src="song.image">
          <span class="music-listening">{{song.listening}}</span>
          <span class="desc">{{song.desc}}</span>
        </div>-->
        <SongItem :song="song"></SongItem>
      </div>
    </div>
  </div>
</template>

<script>
import SongItem from "../common/SongItem";
export default {
  name: "HotSongList",
  components: {SongItem},
  props: {
    title:{
      type: String
    },
    more: {
      type: Object
    },
    songList: {
      type: Array
    }
  }
}
</script>

<style scoped lang="less">
  @fontsize750:50;
  .hot-song-list{

    width: 702rem /@fontsize750;
    margin: 20rem /@fontsize750 24rem /@fontsize750 0 24rem /@fontsize750;
    display: flex;
    flex-flow: column nowrap;
    .song-list-title{

      height: 50rem /@fontsize750;
      line-height: 50rem /@fontsize750;
      display: flex;
      /*justify-content: space-around;*/
      .title{
        margin: 0;
        font-size: 21rem /@fontsize750;
        flex: 1;
      }
      .more{

        color: #000000;
        text-decoration: none;
        font-size: 20rem /@fontsize750;
      }
    }
    .song-items{
      display: flex;
      justify-content: space-around;
      flex-flow: row wrap;
      /*.song-item{
        position: relative;
        img{
          width: 220rem /@fontsize750;
          height: 220rem /@fontsize750;
          border-radius: 15rem /@fontsize750;

        }
        .music-play{
          width: 36rem /@fontsize750;
          height: 36rem /@fontsize750;
          position: absolute;
          top: 175rem /@fontsize750;
          left: 170rem /@fontsize750;
        }
        .music-earphone{
          width: 36rem /@fontsize750;
          height: 36rem /@fontsize750;
          position: absolute;
          top: 175rem /@fontsize750;
          left: 10rem /@fontsize750;
        }
        .music-listening{
          position: absolute;
          top: 175rem /@fontsize750;
          left: 46rem /@fontsize750;
          color: #ffffff;
        }
        .desc{
          font-size: 20rem /@fontsize750;
          display: block;
          overflow: hidden;
          height: 50rem /@fontsize750;
          line-height: 26rem /@fontsize750;
          width: 220rem /@fontsize750;

        }

      }*/
    }
  }
</style>
