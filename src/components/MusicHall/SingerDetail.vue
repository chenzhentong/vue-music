<template>
  <div class="singer-detail">
    <div class="singer-detail-header">
      <div class="singer-detail-header-top">
        <a href="/" class="return"><img src="../../../static/images/leftArrow.png" class="leftImg"></a>
        <h2 class="title" id="topTitle">{{singer.singer_info.name}}</h2>
        <div class="right-image-area">
          <img src="../../../static/images/operate.png" class="shareImg" >
          <img src="../../../static/images/share.png" class="operateImg">
        </div>
      </div>
      <div class="singer-detail-header-bottom">
        <h2 class="name">{{singer.singer_info.name}}</h2>
        <div class="desc">

          <span class="attention"> {{singer.attention}}关注</span>
          <span class="user-attention"> {{singer.singer_info.fans}}粉丝</span>
        </div>
        <div class="other">
          <div class="left-area">
            <img src="../../../static/images/商家入驻.png" class="enterImg">
            <span class="type">{{singer.type}}</span>
          </div>
          <div class="operate">
            <div class="hasAttention">已关注</div>
            <div class="contract">私信</div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-content">
      <ul class="nav">
        <li class="nav-item" @click="changeNavTabIndex(0)">
          <h2 class="name" :style="{borderBottom: navTabIndex === 0 ? '0.04rem solid black': '' }">歌曲</h2>
          <span class="num" >{{singer.total_song}}</span>
        </li>
        <li class="nav-item" @click="changeNavTabIndex(1)">
          <h2 class="name" :style="{borderBottom: navTabIndex === 1 ? '0.04rem solid black': '' }">专辑</h2>
          <span class="num">{{singer.total_album}}</span>
        </li>
        <li class="nav-item" @click="changeNavTabIndex(2)">
          <h2 class="name" :style="{borderBottom: navTabIndex === 2 ? '0.04rem solid black': '' }">视频</h2>
          <span class="num">{{singer.total_mv}}</span>
        </li>
        <li class="nav-item" @click="changeNavTabIndex(3)">
          <h2 class="name" :style="{borderBottom: navTabIndex === 3 ? '0.04rem solid black': '' }">动态</h2>
          <span class="num">338</span>
        </li>
        <li class="nav-item" @click="changeNavTabIndex(4)">
          <h2 class="name" :style="{borderBottom: navTabIndex === 4 ? '0.04rem solid black': '' }">关于TA</h2>
          <span class="num">338</span>
        </li>
      </ul>

      <div class="song-list" ref="songList">
        <div class="search">
          <div class="search-content">
            <img src="../../../static/images/搜索.png" class="searchImg">
            <span class="text">搜索该歌手的歌曲</span>
          </div>
        </div>
        <div class="control">
          <div class="control-left-area">
            <img src="../../../static/images/play3.png" class="play-image">
            <span class="text">全部播放(12)</span>
          </div>
          <div class="control-right-area">
            <select class="most-hot">
              <option>最热</option>
            </select>
            <img src="./../../../static/images/歌单.png" class="list-image">
          </div>
        </div>
        <ul class="singer-songs-items" v-for="(song,index) in singer.songlist" :key="index">
          <li class="singer-songs-item">
            <ul class="item-detail-info">
              <li class="item" @click="playSong(song.mid)">

                <h4 class="title">{{song.name}}</h4>
                <span class="quality">SQ</span>
                <span class="album">{{song.album.name}}</span>
              </li>
              <li class="item">
                <img src="../../../static/images/Play.png" class="play-image">
                <img src="../../../static/images/operate.png" class="operate-image">
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="singer-album" ref="singerAlbum">

          <div class="singer-album-item" v-for="album in singerAlbumList" :key="i">
           <div class="left-area">
             <img :src="album.pic" class="left-image">
             <div class="desc">
               <h3 class="title">{{album.title}}</h3>
               <span class="text">{{album.date}} 13首</span>
             </div>
           </div>
            <img src="../../../static/images/rightArrow.png" class="right-image">
          </div>
      </div>
      <div class="singer-video" ref="singerVideo">
        <div class="control">
          <select>
            <option>筛选</option>
          </select>
          <select>
            <option>最新</option>
          </select>
        </div>
        <div class="video-items">
          <div class="video-item" v-for="i in 10" :key="i">
            <img src="../../../static/images/T001R150x150M000001fNHEf1SFEFN.jpg" class="image">
            <span class="text">平凡天使</span>
            <span class="date">2020-02-02</span>
            <span class="num">25452</span>
            <img src="../../../static/images/video.png" class="video-image">
          </div>
        </div>
      </div>
      <div class="singer-dynamic" ref="singerDynamic">
        <div class="dynamic-item" v-for="i in 3" :key="i">
          <div class="title-wrapper">
            <img src="../../../static/images/T001R150x150M000001fNHEf1SFEFN.jpg" class="image">
            <span class="name">G.E.E.邓紫棋</span>
          </div>
          <span class="desc">[差不多姑娘] Resl Talk版来了!差不多的虚荣如果能够看破，只是差不多的那个 泡沫  这首歌</span>
          <div class="song-wrapper">
            <img src="../../../static/images/T001R150x150M000001fNHEf1SFEFN.jpg" class="song-image">
            <img src="../../../static/images/play2.png" class="play-image">
            <div class="song-content-wrapper">
              <div class="desc">
                <h3 class="title">差不多姑娘</h3>
                <span class="name">G.E.M.邓紫棋</span>
              </div>
              <img src="../../../static/images/like2.png" class="like-image">
            </div>

          </div>
          <div class="other-info">
            <span class="date">2019-07-21</span>
            <div class="right-content-wrapper">
              <div class="comment-wrapper">
                <img src="../../../static/images/comment3.png" class="comment-image">
                <span class="num">1555</span>
              </div>
              <div class="agree-wrapper">
                <img src="../../../static/images/agree.png" class="agree-image">
                <span class="num">1555</span>
              </div>
              <img src="../../../static/images/operate4.png" class="operate-image">
            </div>
          </div>
        </div>
      </div>
      <div class="about-singer" ref="aboutSinger">
        <div class="singer-desc">
          <div class="title-area">
            <h3 class="title">
              歌手资料
            </h3>
            <a href="#" class="more">更多<img src="../../../static/images/htb－Arrow right02.png" class="image"></a>
          </div>
          <div class="desc">{{this.singerDesc}}</div>
        </div>
        <div class="singer-music-store">
          <h2 class="title">TA的乐库</h2>
          <div class="content">
            <div class="left-area">
              <img src="../../../static/images/T001R150x150M000001fNHEf1SFEFN.jpg" class="image">
              <div class="desc">
                <h2 class="title">评论</h2>
                <span class="num">8条评论</span>
              </div>
            </div>
            <img src="../../../static/images/rightArrow.png" class="right-image">
          </div>

        </div>
        <div class="related-article">
          <div class="title-area">
            <h2 class="title">相关文章</h2>
            <a href="#" class="more">更多<img src="../../../static/images/htb－Arrow right02.png" class="image"></a>
          </div>
         <div class="article-items">
           <div class="article-item" v-for="i in 2" :key="i">
             <img src="../../../static/images/T001R150x150M000001fNHEf1SFEFN.jpg" class="left-image">
             <div class="desc">
               <h3 class="title">从解约到年度歌手，2019邓紫棋经历了什么？</h3>
               <span class="text">淘漉音乐,阅读 6025</span>
             </div>
           </div>
         </div>
        </div>
        <div class="similar-singer">
          <h2 class="title">相似歌手</h2>
          <div class="similar-singer-items">
            <div class="similar-singer-item" v-for="(singer,index) in similarSingerList" :key="index">
              <img :src="singer.pic" class="image" @click="visitSingerDetail(singer.mid)">
              <span class="name" @click="visitSingerDetail(singer.mid)">{{singer.name}}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
    <MusicFooter ></MusicFooter>
  </div>
</template>

<script>
import MusicFooter from "../common/MusicFooter";


export default {
  name: "SingerDetail",
  components: {MusicFooter},
  data() {
    return {
      singer: {},
      singerId: '',
      singerDesc: '',
      navTabIndex: 0,
      similarSingerList: {},
      singerAlbumList: {}
    }
  },
  created() {



  },
  methods: {
    playSong(songId) {
      this.$router.push({name: 'SongDetail', params: {id: songId}})
    },
    getSingerStarNum() {
      this.$axios({
        method: 'get',
        url: 'getSingerStarNum?singermid=' + this.singerId
      }).then(response => {
        console.log(response)
        this.singer.fansNum = response.data.response.num
      }).catch(error => {
        console.log(error)
      })
    },
    getSingerDesc() {
      this.$axios({
        method: 'get',
        url: 'getSingerDesc?singermid=' + this.singerId
      }).then(response => {
        /*console.log(response.data.response)
        console.log(typeof response.data.response)*/
        this.singer.fansNum = response.data.response.num
        const xmlDoc = this.stringToXml(response.data.response)
       /* console.log(xmlDoc)*/

        /*    console.log(xmlDoc.getElementsByTagName('desc')[0].innerHTML)*/
        this.singerDesc = xmlDoc.getElementsByTagName('desc')[0].innerHTML.slice(9).replace('&', '&amp;').replace('<', ' ').replace('>', '').replace('[',' ').replace(']',' ')
       /* console.log(this.singerDesc)*/
      }).catch(error => {
        console.log(error)
      })
    },
    stringToXml(xmlString) {
      var xmlDoc
      if (typeof xmlString == 'string') {
        if (document.implementation.createDocument) {
          var parser = new DOMParser()
          xmlDoc = parser.parseFromString(xmlString, 'text/xml')
        } else if (window.ActiveXObject) {
          xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
          xmlDoc.async = false;
          xmlDoc.loadXML(xmlString);
        }
      } else {
        xmlDoc = xmlString;
      }

      return xmlDoc;

    },
    changeNavTabIndex(index) {
      this.navTabIndex = index
      console.log(this.$refs.songList.style.display)

      if (this.navTabIndex == 0) {
        this.$refs.songList.style.display = 'block'

        this.$refs.singerAlbum.style.display = 'none'
        this.$refs.singerVideo.style.display = 'none'
        this.$refs.singerDynamic.style.display = 'none'
        this.$refs.aboutSinger.style.display = 'none'
      } else if (this.navTabIndex == 1) {
        this.$refs.songList.style.display = 'none'

        this.$refs.singerAlbum.style.display = 'block'
        this.$refs.singerVideo.style.display = 'none'
        this.$refs.singerDynamic.style.display = 'none'
        this.$refs.aboutSinger.style.display = 'none'
      } else if (this.navTabIndex == 2) {
        this.$refs.songList.style.display = 'none'

        this.$refs.singerAlbum.style.display = 'none'
        this.$refs.singerVideo.style.display = 'block'
        this.$refs.singerDynamic.style.display = 'none'
        this.$refs.aboutSinger.style.display = 'none'
      } else if (index == 3) {
        this.$refs.songList.style.display = 'none'

        this.$refs.singerAlbum.style.display = 'none'
        this.$refs.singerVideo.style.display = 'none'
        this.$refs.singerDynamic.style.display = 'block'
        this.$refs.aboutSinger.style.display = 'none'
      } else if (this.navTabIndex == 4) {
        this.$refs.songList.style.display = 'none'

        this.$refs.singerAlbum.style.display = 'none'
        this.$refs.singerVideo.style.display = 'none'
        this.$refs.singerDynamic.style.display = 'none'
        this.$refs.aboutSinger.style.display = 'block'
      }

    },
    getSimilarSinger () {
      this.$axios({
        method: 'get',

        url: 'getSimilarSinger?singermid=' + this.singerId
      }).then(response => {
        console.log(response)
        this.data = response.data
        /*console.log(JSON.stringify(this.data))*/
        /*console.log(response.data.response.singers.items)*/
        this.similarSingerList = response.data.response.singers.items
      }).catch(error => {
        console.log(error)
      })
    },
    visitSingerDetail (singerMid) {
      console.log(singerMid)
      this.$router.push({name: 'SingerDetail',params: {id: singerMid}})

    },
    getSingerAlbum () {
      this.$axios({
        method: 'get',
        url: 'getSingerAlbum?singermid=' + this.singerId
      }).then(response => {
        console.log(response)
        this.singer = response.data.response.singer.data
        /*console.log(this.singer)*/
        /*this.singerAlbumList = response.data.response.data.list*/

      }).catch(error => {
        console.log(error)
      })
    },
    getAlbumInfo (albummid) {
      this.$axios({
        method: 'get',

        url: 'getAlbumInfo?albummid=' + albummid
      }).then(response => {
        console.log(response)

        /*console.log(JSON.stringify(this.data))*/
     /*   console.log(response.data.response)*/
      }).catch(error => {
        console.log(error)
      })

    }

  },
  mounted() {
   this.singerId = this.$route.params.id


    setTimeout(() => {
      this.$nextTick( () => {
        console.log( 'topTitle:'+document.getElementById('topTitle'))
        this.changeNavTabIndex(this.navTabIndex)

        var top = document.getElementsByClassName('singer-detail-header-top')[0]
        /* var currentWindow = document.getElementsByClassName('singer-detail')[0]*/
        var topTitle = document.getElementById('topTitle')
        window.onscroll = function () {
          /*  console.log(document.documentElement.scrollTop)*/
          if (document.documentElement.scrollTop > top.clientHeight) {
            /*  console.log(1)*/
            top.style.backgroundColor = '#C9C9CB'
            topTitle.style.display = 'block'
          } else {
            top.style.backgroundColor = ''
            topTitle.style.display = 'none'
          }
        }
      })
    })
    this.getSingerAlbum()
    this.getSingerDesc()
    this.getSimilarSinger()
    this.getSingerStarNum()
  },
  watch: {
    $route:function (to,from) {
      if (to.path !== from.path) {
        this.$router.go(0)

      }
    }
  },
  updated() {

    this.changeNavTabIndex(this.navTabIndex)
/*    var top = document.getElementsByClassName('singer-detail-header-top')[0]
    /!* var currentWindow = document.getElementsByClassName('singer-detail')[0]*!/
    var topTitle = document.getElementById('topTitle')
    window.onscroll = function () {
      /!*  console.log(document.documentElement.scrollTop)*!/
      if (document.documentElement.scrollTop > top.clientHeight) {
        /!*  console.log(1)*!/
        top.style.backgroundColor = '#C9C9CB'
        topTitle.style.display = 'block'
      } else {
        top.style.backgroundColor = ''
        topTitle.style.display = 'none'
      }
    }*/
  }
}
</script>

<style scoped lang="less">
  @fontsize750: 50;
  .singer-detail {
    width: 750rem /@fontsize750;
    overflow: hidden;

    .singer-detail-header {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      width: 750rem /@fontsize750;
      margin: 0 auto;
      background-image: url('../../../static/images/T001R150x150M000001fNHEf1SFEFN.jpg');
      background-repeat: no-repeat;
      background-size: 350rem /@fontsize750;
      height: 350rem /@fontsize750;
      z-index: 1000;
      background-position: center;
      background-color: #C9C9CB;
      border-radius: 10rem /@fontsize750;

      .singer-detail-header-top {
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
        /*background-color: #C9C9CB;*/

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
            width: 36rem /@fontsize750;
            height: 36rem /@fontsize750;
          }
        }

        .right-image-area {

          .shareImg {
            width: 36rem /@fontsize750;
            height: 36rem /@fontsize750;
            margin-right: 10rem /@fontsize750;
          }

          .operateImg {
            width: 28rem /@fontsize750;
            height: 28rem /@fontsize750;
            margin-right: 10rem /@fontsize750;
            margin-bottom: 3rem /@fontsize750;
          }
        }
      }

      .singer-detail-header-bottom {
        width: 702rem /@fontsize750;
        margin-left: auto;
        margin-right: auto;
        align-self: flex-end;
        display: flex;
        flex-flow: column nowrap;
        margin-bottom: 10rem /@fontsize750;

        .name {
          width: 702rem /@fontsize750;
          height: 30rem /@fontsize750;
          line-height: 30rem /@fontsize750;
          font-size: 21rem /@fontsize750;
          color: #ffffff;
          margin-bottom: 10rem /@fontsize750;
        }

        .desc {
          display: flex;
          color: #ffffff;
          height: 30rem /@fontsize750;
          line-height: 30rem /@fontsize750;
          font-size: 14rem /@fontsize750;

          .attention {
            margin-right: 20rem /@fontsize750;
          }


        }

        .other {
          display: flex;
          justify-content: space-between;

          .left-area {
            color: #ffffff;
            display: flex;
            align-items: center;

            .enterImg {
              width: 24rem /@fontsize750;
              height: 24rem /@fontsize750;

            }

            .type {
              height: 30rem /@fontsize750;
              line-height: 30rem /@fontsize750;
              font-size: 15rem /@fontsize750;
            }
          }

          .operate {
            display: flex;

            .hasAttention {

              border-radius: 10rem /@fontsize750;
              color: #fffffe;
              background-color: #000000;
              filter: opacity(100%);

              width: 55rem /@fontsize750;
              height: 30rem /@fontsize750;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-right: 20rem /@fontsize750;
              font-size: 14rem /@fontsize750;
              line-height: 25rem /@fontsize750;


            }

            .contract {
              border-radius: 10rem /@fontsize750;
              color: #ffffff;
              background-color: #000000;
              width: 55rem /@fontsize750;
              height: 30rem /@fontsize750;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 14rem /@fontsize750;
              line-height: 25rem /@fontsize750;
            }
          }
        }

      }
    }

    .main-content {
      width: 750rem /@fontsize750;

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


          }

          .num {
            margin-top: 5rem /@fontsize750;
            font-size: 14rem /@fontsize750;

          }
        }
      }



      .song-list {
        display: none;
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

        .singer-songs-items {
          width: 750rem /@fontsize750;
          list-style-type: none;
          margin: 0;
          padding: 0;
          display: flex;

          .singer-songs-item {
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

                &:hover {
                  cursor: pointer;
                }

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

      .about-singer {
        display: none;
        width: 702rem /@fontsize750;
        margin: 0 24rem /@fontsize750;

        .singer-desc {
          display: flex;
          flex-flow: column nowrap;
          margin-top: 10rem /@fontsize750;
          .title-area {

            display: flex;
            height: 40rem /@fontsize750;
            align-items: center;
            justify-content: space-between;

            .title {
              margin: 0;
              padding: 0;
              font-size: 21rem /@fontsize750;
            }

            .more {
              font-size: 15rem /@fontsize750;
              display: flex;
              align-items: center;
              color: #666666;
              text-decoration: none;
              .image{
                width: 12rem /@fontsize750;
                height: 12rem /@fontsize750;
              }
            }

          }
          .desc{
            font-size: 14rem /@fontsize750;

          }

        }
        .singer-music-store{
          .title{
            font-size: 21rem /@fontsize750;
            margin: 0;
            padding: 0;
            height: 40rem /@fontsize750;
            align-items: center;
            display: flex;

          }
          .content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .left-area{
              display: flex;
              align-items: center;
              .image{
                width: 50rem /@fontsize750;
                height: 50rem /@fontsize750;
                border-radius: 10rem /@fontsize750;
              }
              .desc{
                display: flex;
                flex-flow: column nowrap;
                justify-content: center;
                margin-left: 20rem /@fontsize750;

                .title{

                  margin: 0;
                  padding: 0;
                  font-size: 16rem /@fontsize750;

                }
                .num{
                  font-size: 14rem /@fontsize750;
                }

              }
            }
            .right-image{
              width: 12rem /@fontsize750;
              height: 12rem /@fontsize750;
            }
          }


        }
        .related-article{
          .title-area {

            display: flex;
            height: 40rem /@fontsize750;
            align-items: center;
            justify-content: space-between;

            .title {
              margin: 0;
              padding: 0;
              font-size: 21rem /@fontsize750;
            }

            .more {
              font-size: 15rem /@fontsize750;
              display: flex;
              align-items: center;
              color: #666666;
              text-decoration: none;
              .image{
                width: 12rem /@fontsize750;
                height: 12rem /@fontsize750;
              }
            }

          }
          .article-items{
            display: flex;
            flex-flow: column nowrap;
            .article-item{
              height: 100rem /@fontsize750;
              display: flex;
              .left-image{
                width: 80rem /@fontsize750;
                height: 80rem /@fontsize750;
              }
              .desc{
                margin-left: 20rem /@fontsize750;

                .title{

                  margin: 0;
                  padding: 0;
                  font-size: 16rem /@fontsize750;

                }
                .text{
                  font-size: 14rem /@fontsize750;
                }

              }

            }
          }
        }
        .similar-singer{
          .title{
            margin: 0;
            padding: 0;
            font-size: 21rem /@fontsize750;
            height: 40rem /@fontsize750;
          }
          .similar-singer-items{
            display: flex;
            align-items: center;
            .similar-singer-item{
              display: flex;
              flex-flow: column nowrap;
              align-items: center;
              margin-right: 10rem /@fontsize750;


              .image{
                width: 70rem /@fontsize750;
                height: 70rem /@fontsize750;
                border-radius: 35rem /@fontsize750;
                &:hover{
                  cursor: pointer;
                }

              }
              .name{
                font-size: 14rem /@fontsize750;
                &:hover{
                  cursor: pointer;
                }
              }

            }
          }
        }
      }

      .singer-video {
        display: none;
        width: 702rem /@fontsize750;
        margin: 0 24rem /@fontsize750;
        .control{
          margin-top: 20rem /@fontsize750;
          display: flex;
          justify-content: space-between;
          font-size: 14rem /@fontsize750;
          height: 30rem /@fontsize750;
          align-items: center;
        }
        .video-items{
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
          .video-item{
            width: 340rem /@fontsize750;
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            justify-content: center;
            position: relative;
            .image{
              width: 340rem /@fontsize750;
              height: 170rem /@fontsize750;
            }
            .text{
              font-size: 14rem /@fontsize750;
              height: 50rem /@fontsize750;
            }
            .date{
              position: absolute;
              top: 145rem /@fontsize750;
              left:5rem /@fontsize750;
              width: 100rem /@fontsize750;
              font-size: 14rem /@fontsize750;
              color: #ffffff;
            }
            .video-image{
              position: absolute;
              top: 145rem /@fontsize750;
              left: 270rem /@fontsize750;
              width: 10rem /@fontsize750;
              height: 10rem /@fontsize750;
            }
            .num{
              position: absolute;
              top: 140rem /@fontsize750;
              left: 290rem /@fontsize750;
              font-size: 14rem /@fontsize750;
              color: #ffffff;

            }

          }
        }

      }

      .singer-album {
        width: 702rem /@fontsize750;
        margin: 0 24rem /@fontsize750;
        display: none;
        .singer-album-item{
          height: 100rem /@fontsize750;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .left-area{
            display: flex;
            .left-image{
              width: 80rem /@fontsize750;
              height: 80rem /@fontsize750;
              border-radius: 12rem /@fontsize750;
            }
            .desc{
              margin-left: 20rem /@fontsize750;

              .title{

                margin: 0;
                padding: 0;
                font-size: 16rem /@fontsize750;

              }
              .text{
                font-size: 14rem /@fontsize750;
              }

            }
          }
          .right-image{
            width: 12rem /@fontsize750;
            height: 12rem /@fontsize750;
          }

        }
      }

      .singer-dynamic {
        width: 702rem /@fontsize750;
        margin: 0 24rem /@fontsize750;
        display: none;

        .dynamic-item{
          display: flex;
          flex-flow: column nowrap;
          .title-wrapper{
            height: 60rem /@fontsize750;
            display: flex;
            align-items: center;
            .image{
              width: 48rem /@fontsize750;
              height: 48rem /@fontsize750;
              border-radius: 24rem /@fontsize750;

            }
            .name{
              margin-left: 10rem /@fontsize750;
              font-size: 20rem /@fontsize750;
            }

          }
          .desc{
            height: 30rem /@fontsize750;
            font-size: 14rem /@fontsize750;
            letter-spacing: 3rem /@fontsize750;
            overflow: hidden;
            padding: 0 0 20rem /@fontsize750 0;

          }
          .song-wrapper{
            position: relative;
            background-color: rgba(0,0,0,0.1);
            height: 120rem /@fontsize750;
            display: flex;

            border-radius: 15rem /@fontsize750;
            .song-image{
              width: 120rem /@fontsize750;
              height: 120rem /@fontsize750;
              border-radius: 15rem /@fontsize750;
            }
            .play-image{
              position: absolute;
              top: 90rem /@fontsize750;
              left: 90rem /@fontsize750;
              width: 24rem /@fontsize750;
              height: 24rem /@fontsize750;
            }
            .song-content-wrapper{
              margin: 0 10rem /@fontsize750 0 20rem /@fontsize750;
              flex: 1;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .desc{
                .title{
                  margin: 0;
                  padding: 0;
                  font-size: 20rem /@fontsize750;
                }
                .name{
                  color: #666666;
                  font-size: 15rem /@fontsize750;
                }
              }
              .like-image{
                width: 48rem /@fontsize750;
                height: 48rem /@fontsize750;
              }
            }


          }
          .other-info{
            display: flex;
            font-size: 0;
            justify-content: space-between;
            align-items: center;
            height: 50rem /@fontsize750;
            .date{
              font-size: 14rem /@fontsize750;
              color: #666666;
            }
            .right-content-wrapper{
              display: flex;
              align-items: center;
              .comment-wrapper{
                display: flex;
                align-items: center;
                margin-left: 10rem /@fontsize750;
                .comment-image{
                  width: 36rem /@fontsize750;
                  height: 36rem /@fontsize750;
                }
                .num{
                  font-size: 14rem /@fontsize750;
                  color: #666666;
                }


              }
              .agree-wrapper{
                margin-left: 10rem /@fontsize750;
                display: flex;
                align-items: center;
                font-size: 0;
                .agree-image{
                  width: 36rem /@fontsize750;
                  height: 36rem /@fontsize750;


                }
                .num{
                  font-size: 14rem /@fontsize750;
                  color: #666666;
                }
              }
              .operate-image{
                margin-left: 10rem /@fontsize750;
                width: 30rem /@fontsize750;
                height: 30rem /@fontsize750;
              }
            }
          }


        }
      }
    }


  }
</style>
