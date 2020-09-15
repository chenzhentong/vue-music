<template>
  <div class="song-list-detail">
    <div class="song-list-detail-header" id="song-list-detail-header">
      <div class="song-list-detail-header-top">
        <a href="/" class="return"><img src="../../../static/images/left2.png" class="leftImg"></a>
        <h2 class="title" id="topTitle">{{songList.desc}}</h2>
        <div class="right-image-area">
          <img src="../../../static/images/share2.png" class="shareImg">
          <img src="../../../static/images/operate2.png" class="operateImg">

        </div>
      </div>
      <div class="song-list-detail-header-content">
        <img :src="songList.image" class="banner-image">
        <div class="desc">
          <h2 class="title" >{{songList.desc}}</h2>
          <div class="user">
            <img :src="songList.user.image" class="image">
            <span class="name">{{songList.user.name}}</span>
            <div class="user-attention">
              <img src="../../../static/images/add.png" class="image">
              <span class="attention">关注</span>
            </div>
          </div>
          <span class="intro">{{songList.intro}}</span>
        </div>
      </div>
      <div class="song-list-detail-header-bottom">
        <div class="item">
          <img src="../../../static/images/like2.png" class="bottom-image">
          <span class="text">4123</span>
        </div>
        <div class="item">
          <img src="../../../static/images/comment.png" class="bottom-image">
          <span class="text">80</span>
        </div>
        <div class="item">
          <img src="../../../static/images/share2.png" class="bottom-image">
          <span class="text">分享</span>
        </div>


      </div>

    </div>
    <div class="fixed-control" id="fixed-control">
      <div class="control-left-area">
        <img src="../../../static/images/play3.png" class="play-image">
        <span class="text">全部播放(22)</span>
      </div>
      <div class="control-right-area">
        <img src="./../../../static/images/down3.png" class="list-image list-image-left">
        <img src="./../../../static/images/歌单.png" class="list-image">
      </div>
    </div>
    <div class="song-list-detail-content">

      <div class="search" id="search">
        <div class="search-content">
          <img src="../../../static/images/搜索.png" class="searchImg">
          <span class="text">搜索此歌单的歌曲</span>
        </div>
      </div>
      <div class="song-list">
        <div class="control" id="control">
          <div class="control-left-area">
            <img src="../../../static/images/play3.png" class="play-image">
            <span class="text">全部播放(22)</span>
          </div>
          <div class="control-right-area">
            <img src="./../../../static/images/down3.png" class="list-image list-image-left">
            <img src="./../../../static/images/歌单.png" class="list-image">
          </div>
        </div>
        <ul class="song-list-items" v-for="(song,index) in songList.songs" :key="index">
          <li class="song-list-item">
            <ul class="item-detail-info">
              <li class="item" @click="playSong(song.id)">
               <span class="left-area">
                 {{song.id}}
               </span>
                <div class="right-area">
                  <h4 class="title">{{song.name}}</h4>
                  <span class="quality">SQ</span>
                  <span class="album">{{song.album}}</span>
                </div>
              </li>
              <li class="item">

                <img src="../../../static/images/operate.png" class="operate-image">
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <PlayingSong :playing-song="playingSong"></PlayingSong>
  </div>
</template>

<script>
import PlayingSong from "./PlayingSong";
export default {
  name: "SongListDetail",
  components: {PlayingSong},
  created() {
   /* console.log(this.$route.params.id)*/
  },
  data() {
    return {
      songList: {
        id: 1,
        desc: '[水逆退散]你的好运正在配送中',
        image: '../../../static/images/song1.jpg',
        listening: '45万',
        user: {
          id: 1,
          name: '允许部分冷信息',
          image: '../../../static/images/3b87e950352ac65cc55f0c230c72871792138a8b.jpeg'
        },
        intro: '在这里那些浅唱低吟的华语',
        songs: [
          {id: 1, name: '句号', album: 'G.E.M.邓紫棋.摩天动物园'},
          {id: 2, name: '摩天动物园', album: 'G.E.M.邓紫棋.摩天动物园'},
          {id: 3, name: '光年之外', album: 'G.E.M.邓紫棋.光年之外'},
          {id: 4, name: '来自天堂的魔鬼', album: 'G.E.M.邓紫棋.摩天动物园'},
          {id: 1, name: '画', album: 'G.E.M.邓紫棋.摩天动物园'},
          {id: 5, name: '透明', album: 'G.E.M.邓紫棋.摩天动物园'},
          {id: 6, name: '泡沫', album: 'G.E.M.邓紫棋.摩天动物园'},
          {id: 7, name: '倒数', album: 'G.E.M.邓紫棋.摩天动物园'},
          {id: 8, name: '喜欢你', album: 'G.E.M.邓紫棋.摩天动物园'},
          {id: 9, name: '差不多姑娘', album: 'G.E.M.邓紫棋.摩天动物园'},
          {id: 10, name: '我的秘密', album: 'G.E.M.邓紫棋.My Secret'},
          {id: 11, name: '攀登', album: 'G.E.M.邓紫棋.摩天动物园'},
          {id: 12, name: '桃花诺', album: 'G.E.M.邓紫棋.摩天动物园'},
          {id: 13, name: 'Flay Away', album: 'G.E.M.邓紫棋.摩天动物园'},
          {id: 14, name: '再见', album: 'G.E.M.邓紫棋.新的心跳'}
        ]
      },
      playingSong: {
        name: '光辉岁月',
        singer: 'Beyond',
        image: '../../../static/images/3927337324.jpg'
      }

    }
  },
  mounted() {
    var topTitle=document.getElementById('topTitle')

    var control=document.getElementById('control')
    var header=document.getElementById('song-list-detail-header')
    var search=document.getElementById('search')
    console.log(document.documentElement.scrollTop)
    console.log(topTitle.clientHeight +header.clientHeight + search.clientHeight)
    window.onscroll=function () {
      if (document.documentElement.scrollTop>=control.clientHeight){

        document.getElementById('topTitle').style.display='block'

      } else {

        document.getElementById('topTitle').style.display='none'
      }
      if (document.documentElement.scrollTop>=topTitle.clientHeight +header.clientHeight + search.clientHeight){
        document.getElementById('fixed-control').style.display='flex'


      } else {
        document.getElementById('fixed-control').style.display='none'
      }

    }

  },
  methods: {
    playSong (songId) {
      this.$router.push({name: 'SongDetail',params: {id: songId}})
    }
  }

}
</script>

<style scoped lang="less">
  @fontsize750: 50;
  .song-list-detail {
    .song-list-detail-header {
      background-color: #896C7C;

      .song-list-detail-header-top {
        position: fixed;
        top: 0;
        width: 750rem /@fontsize750;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        height: 50rem /@fontsize750;
        align-items: center;
        /*   background-color: #ffffff;*/
        z-index: 100; //设置元素堆叠顺序
        background-color: #896C7C;

        .title {
          font-size: 26rem /@fontsize750;
          height: 50rem /@fontsize750;
          line-height: 50rem /@fontsize750;
          display: none;
          color: #ffffff;
        }

        .return {
          display: flex;
          justify-content: center;

          .leftImg {
            margin-left: 10rem /@fontsize750;
            width: 30rem /@fontsize750;
            height: 30rem /@fontsize750;
          }
        }

        .right-image-area {

          .shareImg {
            width: 30rem /@fontsize750;
            height: 30rem /@fontsize750;
            margin-right: 10rem /@fontsize750;
          }

          .operateImg {
            width: 28rem /@fontsize750;
            height: 28rem /@fontsize750;
            margin-right: 10rem /@fontsize750;

          }
        }

      }

      .song-list-detail-header-content {
        margin-top: 50rem /@fontsize750;
        display: flex;

        .banner-image {
          width: 240rem /@fontsize750;
          height: 240rem /@fontsize750;
          border-radius: 15rem /@fontsize750;

          margin: 20rem /@fontsize750 20rem /@fontsize750 30rem /@fontsize750 30rem /@fontsize750;
        }

        .desc {
          display: flex;
          flex-flow: column nowrap;

          .title {

            margin: 20rem /@fontsize750 0 0 0;
            padding: 0;
            font-size: 24rem /@fontsize750;
            line-height: 60rem /@fontsize750;
            height: 60rem /@fontsize750;
            color: #ffffff;
          }

          .user {
            display: flex;

            align-items: center;
            height: 80rem /@fontsize750;

            .image {
              width: 36rem /@fontsize750;
              height: 36rem /@fontsize750;
              border-radius: 18rem /@fontsize750;
            }

            .user-attention {
              margin-left: 20rem /@fontsize750;
              color: #ffffff;
              padding: 4rem /@fontsize750;
              background-color: #E0DBD6;
              border-radius: 10rem /@fontsize750;
              display: flex;
              align-items: center;
              justify-content: center;

              .attention {
                font-size: 15rem /@fontsize750;

              }

              .image {
                width: 24rem /@fontsize750;
                height: 24rem /@fontsize750;
              }
            }

            .name {
              color: #ffffff;
              font-size: 17rem /@fontsize750;
            }

          }

          .intro {
            margin-top: 20rem /@fontsize750;
            font-size: 14rem /@fontsize750;
            color: #ffffff;

          }
        }

      }

      .song-list-detail-header-bottom {

        display: flex;
        justify-content: space-between;
        /* background-color: #1ECE9F;*/

        .item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 10rem /@fontsize750 30rem /@fontsize750;


          .bottom-image {
            width: 36rem /@fontsize750;
            height: 36rem /@fontsize750;

          }

          .text {
            font-size: 15rem /@fontsize750;
            color: #ffffff;
          }
        }
      }
    }
    .song-list-detail-content {
      .nav {
        width: 750rem /@fontsize750;
        margin: 0;
        display: flex;
        height: 50rem /@fontsize750;
        justify-content: center;
        align-items: center;
        padding: 0;

        .nav-item {
          flex: 1;
          display: flex;
          margin: 0;
          padding: 0;
          align-items: center;
          justify-content: center;
          height: 50rem /@fontsize750;
          width: 150rem /@fontsize750;

          .name {
            margin: 0;
            font-size: 21rem /@fontsize750;
            border-bottom: 2rem /@fontsize750 solid #000;

          }

          .num {
            margin-top: 5rem /@fontsize750;
            font-size: 14rem /@fontsize750;

          }
        }
      }

      .search {
        width: 650rem /@fontsize750;
        margin: 10rem /@fontsize750 auto 10rem /@fontsize750 auto;
        background-color: #ffffff;
        height: 30rem /@fontsize750;
        line-height: 30rem /@fontsize750;
        border-radius: 15rem /@fontsize750;
        display: flex;
        justify-content: space-around;

        .search-content {
          display: flex;
          align-items: center;

          .searchImg {
            width: 18rem /@fontsize750;
            height: 18rem /@fontsize750;
          }

          .text {
            font-size: 14rem /@fontsize750;
            color: #666;
          }

        }

      }

      .control {
        width: 702rem /@fontsize750;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        height: 50rem /@fontsize750;
        align-items: center;

        .control-left-area {
          display: flex;
          align-items: center;

          .play-image {
            width: 24rem /@fontsize750;
            height: 24rem /@fontsize750;

          }

          .text {
            font-size: 14rem /@fontsize750;
          }

        }

        .control-right-area {
          display: flex;
          align-items: center;

          .list-image {
            width: 24rem /@fontsize750;
            height: 24rem /@fontsize750;
          }
          .list-image-left{
            margin-right: 20rem /@fontsize750;
          }

          .most-hot {
            font-size: 14rem /@fontsize750;
            border: none;
            background-color: #F2F2F2;

            &:hover {
              cursor: pointer;
            }
          }

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

              .left-area{
                font-size: 20rem /@fontsize750;
                margin-right: 20rem /@fontsize750;

              }
              .right-area{
                .title {
                  font-size: 18rem /@fontsize750;
                  margin: 0;

                }

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
              }

              .play-image {
                width: 24rem /@fontsize750;
                height: 24rem /@fontsize750;

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
    .fixed-control{
      top: 50rem /@fontsize750;
      position: fixed;
      width: 750rem /@fontsize750;
      margin: 0 auto;
      display: none;
      justify-content: space-between;
      height: 50rem /@fontsize750;
      align-items: center;
      background-color: #ffffff;
      .control-left-area {
        display: flex;
        align-items: center;
        margin-left: 24rem /@fontsize750;
        .play-image {
          width: 24rem /@fontsize750;
          height: 24rem /@fontsize750;

        }

        .text {
          font-size: 14rem /@fontsize750;
        }

      }

      .control-right-area {
        display: flex;
        align-items: center;
        margin-right: 24rem /@fontsize750;
        .list-image {
          width: 24rem /@fontsize750;
          height: 24rem /@fontsize750;
        }
        .list-image-left{
          margin-right: 20rem /@fontsize750;
        }

        .most-hot {
          font-size: 14rem /@fontsize750;
          border: none;
          background-color: #F2F2F2;

          &:hover {
            cursor: pointer;
          }
        }

      }

    }
  }
</style>
