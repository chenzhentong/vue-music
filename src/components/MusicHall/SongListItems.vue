<template>
  <div class="song-list-items-content">
    <div class="control">
      <div class="control-left-area">
        <img src="../../../static/images/play4.png" class="play-image">
        <span class="text">全部播放(32)</span>
      </div>
      <img src="../../../static/images/list.png" class="song-list-image">
    </div>
    <ul class="song-list-items" v-for="(song,index) in songList" :key="index">
      <li class="song-list-item">
        <ul class="item-detail-info">
          <li class="item">

            <span class="left-area" v-show="isShowNo==true">{{song.id}}</span>
            <div class="right-area">
              <h4 class="title">{{song.name}}</h4>
              <div class="info">
                <span class="quality">SQ</span>
                <div class="singer" v-for="(singer,index) in song.singer" :key="index">
                  <span>&nbsp;{{singer.name}}</span>
                  <span v-if="index !== song.singer.length-1">
                  /
                </span>
                </div>
                <span class="album">·{{song.album.name}}</span>
                <span class="album" v-if="song.subtitle">·{{song.subtitle}}</span>
              </div>
            </div>
          </li>
          <li class="item">
            <img src="../../../static/images/listen.png" class="listen-image" v-show="isShowListen==true">
            <span class="listen-num" v-show="isShowListen==true"> 5</span>
            <img src="../../../static/images/operate.png" class="operate-image">
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SongListItems",
  props: {
    songList: {
      type: Object
    },
    isShowNo: false,
    isShowListen: false
  },
  created() {
    console.log('songlist')
    console.log(this.songList)
  },
  methods: {
    /*getNewSongList () {
      this.$axios({
        method: 'get',
        url: 'getRecommend'
      }).then(response => {
        console.log(response.data.response.new_song)
        this.songList = response.data.response.new_song
        console.log(this.songList.data)
      }).catch(error => {
        console.log(error)
      })
    }*/
  },
  mounted() {
    /*this.getNewSongList()*/
  }
}
</script>

<style scoped lang="less">
  @fontsize750: 50;
  .song-list-items-content {
    .control {

      display: flex;
      height: 50rem /@fontsize750;
      align-items: center;
      justify-content: space-between;
      margin: 0 20rem /@fontsize750;


      .control-left-area {
        display: flex;
        align-items: center;

        .play-image {
          width: 36rem /@fontsize750;
          height: 36rem /@fontsize750;
        }

        .text {
          font-size: 19rem /@fontsize750;

        }
      }

      .song-list-image {
        width: 36rem /@fontsize750;
        height: 36rem /@fontsize750;

      }
    }
    .song-list-items {
      width: 750rem /@fontsize750;
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;

      .song-list-item {
        width: 750rem /@fontsize750;

        .item-detail-info {
          width: 750rem /@fontsize750;
          height: 80rem /@fontsize750;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .item {

            margin: 0 25rem /@fontsize750 0 25rem /@fontsize750;
            list-style-type: none;
            display: flex;
            align-items: center;

            &:hover {
              cursor: pointer;
            }

            .left-area {
              font-size: 20rem /@fontsize750;
              margin-right: 20rem /@fontsize750;

            }

            .right-area {
              display: flex;
              flex-flow: column nowrap;
              .title {
                font-size: 18rem /@fontsize750;
                margin: 0;
              }
              .info{
                display: flex;
                .quality {
                  display: inline-block;

                  color: #D2691E;

                  height: 15rem /@fontsize750;
                  line-height: 15rem /@fontsize750;
                  border: 1rem /@fontsize750 solid #D2691E;
                  border-radius: 8rem /@fontsize750;
                  font-size: 14rem /@fontsize750;
                  align-items: center;
                  padding: 2rem /@fontsize750 5rem /@fontsize750;


                }

                .album {
                  font-size: 17rem /@fontsize750;

                }
                .singer {
                  font-size: 17rem /@fontsize750;
                }
              }


            }

            .play-image {
              width: 24rem /@fontsize750;
              height: 24rem /@fontsize750;

            }
            .listen-image{
              width: 18rem /@fontsize750;
              height: 18rem /@fontsize750;
              margin-bottom: 4rem /@fontsize750;
              margin-left: 20rem /@fontsize750;
            }
            .listen-num{
              font-size: 14rem /@fontsize750;
              margin-left: 8rem /@fontsize750;
            }

            .operate-image {
              width: 18rem /@fontsize750;
              height: 18rem /@fontsize750;
              margin-bottom: 4rem /@fontsize750;
              margin-left: 20rem /@fontsize750;

            }
          }
        }

      }
    }
  }

</style>
