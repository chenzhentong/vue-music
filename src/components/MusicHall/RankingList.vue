<template>
  <div class="ranking-list">
    <div class="ranking-list-header">
      <a href="/" class="return"><img :src="leftArrowImg" class="leftImg"></a>
      <h2 class="title">排行榜&nbsp;</h2>
      <span></span>
    </div>
    <div class="recommend-song-list">
      <h2 class="title">推荐</h2>
      <div class="recommend-song-items">
        <div v-for="(song,index) in recommendSongList" :key="index" class="recommend-song-item">
          <SongItem :song="song"></SongItem>
        </div>
      </div>
    </div>
    <!--<div class="top-song-list">
      <h2 class="title">巅峰榜</h2>
      <div class="top-song-items">
        <div v-for="(item,index) in topSongList" :key="index" class="top-song-item">
          <div class="left-song-area">
            <h3 class="title">{{item.name}}</h3>
            <div v-for="(song,index) in item.songs" :key="index" class="song-items-area">
              <ul class="song-item">
                <li>
                  <span class="no">{{song.no}}</span>
                  <span class="name">{{song.name}}</span>-
                  <span class="author">{{song.author}}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="right-image-area">

            <img :src="item.image" class="songImage">
            <img src="../../../static/images/cover_play.png" class="music-play">
            <img src="../../../static/images/耳机.png" class="music-earphone">
            <span class="music-listening">{{item.listening}}</span>
            <span class="refresh-time">{{item.refreshTime}}</span>
          </div>
        </div>

      </div>
    </div>-->
    <div class="top-song-list">
      <h2 class="title">{{groupList[0].groupName}}</h2>
      <div class="top-song-items">
        <div v-for="(item,index) in groupList[0].toplist" :key="index" class="top-song-item">
          <div class="left-song-area">
            <h3 class="title">{{item.AdShareContent}}</h3>
            <div v-for="(song,index) in item.song" :key="index" class="song-items-area">
              <ul class="song-item">
                <li>
                  <span class="no">{{index+1}}</span>
                  <span class="name">{{song.title}}</span>-
                  <span class="author">{{song.singerName}}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="right-image-area">

            <img :src="item.frontPicUrl" class="songImage">
            <img src="../../../static/images/cover_play.png" class="music-play">
            <img src="../../../static/images/earphone.png" class="music-earphone">
            <span class="music-listening">{{item.listenNum}}</span>
            <span class="refresh-time">{{item.updateTips}}&nbsp;</span>
          </div>
        </div>

      </div>
    </div>
    <div class="common-song-list" v-for="(group,index) in groupList" v-if="index!==0" :key="index">
      <h2 class="title">{{group.groupName}}</h2>
      <div class="common-song-items">
        <div v-for="(item,index) in group.toplist" :key="index" class="common-song-item">

          <div class="song-item">
            <img :src="item.frontPicUrl" class="songImage" @click="">
            <img src="../../../static/images/cover_play.png" class="music-play">
            <img src="../../../static/images/earphone.png" class="music-earphone">
           <!-- <span class="name">{{item.AdShareContent}}</span>-->
            <span class="music-listening">{{item.listenNum}}</span>
           </div>
        </div>
      </div>
    </div>

    <MusicFooter :footerItemList="footerItemList"></MusicFooter>
  </div>
</template>
<script>
import MusicFooter from "../common/MusicFooter";
import SongItem from "../common/SongItem";

export default {
  name: "RankingList",
  components: {SongItem, MusicFooter},
  data() {
    return {
      leftArrowImg: '../static/images/leftArrow.png',
      footerItemList: [
        {
          image: '../static/images/音乐.png',
          text: '音乐馆',
          url: '/'
        },
        {
          image: '../static/images/推荐.png',
          text: '推荐',
          url: '/recommend'
        },
        {
          image: '../static/images/动态.png',
          text: '动态',
          url: '/dynamics'
        },
        {
          image: '../static/images/我的.png',
          text: '我的',
          url: '/user'
        }
      ],
      recommendSongList: [
        {
          name: '本地热歌榜',
          image: '../static/images/song1.jpg',
          listening: '13万'
        },
        {
          name: '抖音排行榜',
          image: '../static/images/300.jpg',
          listening: '1950万'
        },
        {
          name: '抖音排行榜',
          image: '../static/images/301.jpg',
          listening: '网络歌曲榜'
        }
      ],
      groupList: {}
    }
  },
  mounted() {
    this.getTopList()
  },
  methods: {
    getTopList() {
      console.log(11111)
      this.$axios({
        method: 'get',
        url: 'getRecommend',
        dataType: 'json'
      }).then(response => {
        console.log('data')
        console.log(response.data.response.toplist.data.group)
        this.groupList = response.data.response.toplist.data.group

      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped lang="less">
  @fontsize750: 50;
  .ranking-list {
    width: 750rem /@fontsize750;
    margin: 0 auto;

    .ranking-list-header {
      position: fixed;
      top: 0;
      width: 750rem /@fontsize750;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      height: 50rem /@fontsize750;
      align-items: center;
      background-color: #ffffff;
      z-index: 100;

      .title {
        font-size: 26rem /@fontsize750;
        height: 50rem /@fontsize750;
        line-height: 50rem /@fontsize750;
      }

      .return {
        display: flex;
        justify-content: center;

        .leftImg {
          margin-left: 10rem /@fontsize750;
          width: 36rem /@fontsize750;
          height: 36rem /@fontsize750;
        }
      }
    }

    .recommend-song-list {
      overflow: hidden;
      margin-top: 50rem /@fontsize750;
      width: 702rem /@fontsize750;
      margin-left: auto;
      margin-right: auto;

      .title {
        height: 40rem /@fontsize750;
        line-height: 40rem /@fontsize750;
        font-size: 21rem /@fontsize750;
      }

      .recommend-song-items {
        display: flex;
        flex-flow: row nowrap;
        width: 702rem /@fontsize750;
        margin: 0 auto;

        .recommend-song-item {
          margin-right: 10rem /@fontsize750;
        }

      }
    }

    .common-song-list {
      overflow: hidden;
      width: 702rem /@fontsize750;
      margin: 0 auto;

      .title {
        height: 40rem /@fontsize750;
        line-height: 40rem /@fontsize750;
        font-size: 21rem /@fontsize750;
      }

      .common-song-items {
        display: flex;
        flex-flow: row wrap;
        width: 702rem /@fontsize750;
        margin: 0 auto;


        .common-song-item {
          margin-right: 10rem /@fontsize750;
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
            /*  filter: brightness(70%);*/
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
        }

      }
    }

    .top-song-list {
      overflow: hidden;
      width: 702rem /@fontsize750;
      margin: 0 auto;

      .title {
        height: 40rem /@fontsize750;
        line-height: 40rem /@fontsize750;
        font-size: 21rem /@fontsize750;
      }

      .top-song-items {
        display: flex;
        flex-flow: row wrap;
        width: 702rem /@fontsize750;
        margin: 0 auto;

        .top-song-item {
          background-color: #ffffff;
          width: 702rem /@fontsize750;
          height: 150rem /@fontsize750;
          margin: 0 auto 20rem /@fontsize750 auto;
          border-radius: 15rem /@fontsize750;
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;

          .left-song-area {
            height: 30rem /@fontsize750;
            padding-left: 25rem /@fontsize750;

            .title {
              height: 30rem /@fontsize750;
              line-height: 30rem /@fontsize750;
              font-size: 20rem /@fontsize750;

            }

            .song-items-area {

              /* display: flex;
               flex-flow: column nowrap;*/
              margin: 0;

              .song-item {

                margin: 0;
                padding: 0;
                list-style-type: none;
                font-size: 14rem /@fontsize750;

                .no {
                  color: #000000;
                }

                .name {
                  color: #000022;
                }

                .author {
                  color: #666666;
                }

              }
            }

          }

          .right-image-area {
            position: relative;

            .songImage {
              height: 150rem /@fontsize750;
              width: 150rem /@fontsize750;
              border-radius: 0 15rem /@fontsize750 15rem /@fontsize750 0;
              filter: brightness(70%);

              &:hover {
                cursor: pointer;
                filter: none;
              }
            }

            .music-play {
              width: 36rem /@fontsize750;
              height: 36rem /@fontsize750;
              position: absolute;
              top: 100rem /@fontsize750;
              left: 108rem /@fontsize750;
              filter: contrast(200%);
            }

            .music-earphone {
              width: 36rem /@fontsize750;
              height: 36rem /@fontsize750;
              position: absolute;
              top: 100rem /@fontsize750;
              left: 5rem /@fontsize750;
              /*  filter:contrast(0%);*/

            }

            .music-listening {
              position: absolute;
              top: 110rem /@fontsize750;
              left: 40rem /@fontsize750;
              color: #ffffff;
              font-size: 15rem /@fontsize750;
            }

            .refresh-time {
              display: block;
              position: absolute;
              overflow: hidden;
              top: 10rem /@fontsize750;
              left: 50rem /@fontsize750;
              width: 100rem /@fontsize750;
              color: #ffffff;
              font-size: 15rem /@fontsize750;
              text-align: right;

            }


          }
        }
      }
    }

  }
</style>
