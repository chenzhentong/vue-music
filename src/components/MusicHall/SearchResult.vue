<template>
  <div class="search-result">
    <div class="search-result-header">
      <img src="../../../static/images/leftArrow.png" class="leftImg" @click="returnSearch">
      <div class="search-image-area">
        <img src="../../../static/images/搜索.png" class="search-image">
      </div>
      <input type="text" placeholder="您要搜索的内容" v-model="searchContent" class="search-input" @keypress.enter="startSearch">
      <div class="clear-image-area">
        <img src="../../../static/images/chahao.png" class="clear-image">
      </div>

    </div>
    <div class="search-nav">
      <span v-for="(item,index) in navItems" :key="index" class="search-nav-item"  >
        {{item}}
      </span>
    </div>

    <div class="main-content">
      <div class="simple-info-items">
        <div class="simple-info" >
          <img :src="singer.singerPic" class="simple-info-image">
          <h4 class="simple-info-title">{{'歌手:' + singer.singername_hilight}}</h4>
          <span class="simple-info-desc">{{'歌曲:' + singer.songNum + '专辑:' +singer.albumNum + '视频:' +singer.mvNum}}</span>
        </div>
      </div>
      <div  class="single-song">
        <h2 class="single-song-title">
          <span class="title">单曲</span>
          <img src="../../../static/images/play3.png" class="image">
        </h2>

        <SongListItems :song-list="singleSongList"></SongListItems>

        <ViewMore :link="viewMoreSingleSongLink"></ViewMore>
      </div>
      <div class="video">
        <h2 class="video-title">
          <span class="title">视频</span>
        </h2>
        <div class="video-items">
          <div class="video-item" v-for="(item,index) in videoItems" :key="index">
            <img :src="item.image" class="video-image">
            <span class="video-name">{{item.name}}</span>
            <span class="video-desc">{{item.desc}}</span>
          </div>
        </div>
        <ViewMore :link="viewMoreVideosLink"></ViewMore>

      </div>
      <div class="song-list">
        <div class="song-list-title">
          <h2 class="title">歌单</h2>
        </div>
        <div class="song-list-items">
          <div v-for="(item,index) in songListItems" :key="index" class="song-list-item">
            <img :src="item.image" class="song-list-item-image">
            <div class="song-list-item-info">
              <h3 class="title">{{item.title}}</h3>
              <span class="desc">{{item.desc}}</span>
            </div>
            <img src="../../../static/images/right.png" class="right-image">
          </div>
        </div>
        <ViewMore :link="viewMoreSongListLink"></ViewMore>
      </div>
      <div class="hot-search">
        <div class="hot-search-title">
          <h2 class="title">大家还在搜</h2>
        </div>
        <div class="hot-search-items">
          <div v-for="(item,index) in hotSearchItems" :key="index" class="hot-search-item">
            {{item}}
          </div>
        </div>
      </div>
      <div class="special-album">
        <div class="special-album-title">
          <h2 class="title">专辑</h2>
        </div>
        <div class="special-album-items">
          <div v-for="(item,index) in singer.hotalbum" :key="index" class="special-album-item">
            <img :src="item.headPic" class="special-album-image">
            <div class="special-album-item-info">
              <h3 class="title">{{item.albumName}}</h3>
              <span class="desc">{{singer.singerName +' '+ item.aDate}}</span>
            </div>
            <img src="../../../static/images/right.png" class="right-image">
          </div>
        </div>
        <ViewMore :link="viewMoreAlbum"></ViewMore>
      </div>
      <div class="more-single-song">
        <h2 class="more-single-song-title">
          <span class="title">更多单曲</span>
          <img src="../../../static/images/play3.png" class="image">
        </h2>
        <SongListItems ></SongListItems>
      </div>
    </div>
    <PlayingSong></PlayingSong>


  </div>
</template>

<script>
import Index from "./index";
import PlayingSong from "./PlayingSong";
import SongListItems from "./SongListItems";
import ViewMore from "./ViewMore";
import axios from 'axios'
export default {
  name: "SearchResult",
  components: {ViewMore, SongListItems, PlayingSong, Index},
  created() {
    console.log(this.$route.query.keyword)

  },
  data () {
    return {
      navItems: [
          '综合','歌曲','视频','专辑','歌单'/*,'歌手','用户','歌词'*/
      ],
     /* simpleInfoItems: [
        {image: '../../../static/images/T001R150x150M000001fNHEf1SFEFN.jpg',title: '歌手:G.E.M. 邓紫棋',desc: '歌曲:338 专辑：49 视频:778'},
        {image: '../../../static/images/T001R150x150M000001fNHEf1SFEFN.jpg',title: '歌手:G.E.M. 邓紫棋',desc: '歌曲:338 专辑：49 视频:778'}
      ],*/
      /*singleSongList:[
        {id: 1, name: '句号', album: 'G.E.M.邓紫棋.摩天动物园'},
        {id: 2, name: '摩天动物园', album: 'G.E.M.邓紫棋.摩天动物园'},
        {id: 3, name: '光年之外', album: 'G.E.M.邓紫棋.光年之外'},
        {id: 4, name: '来自天堂的魔鬼', album: 'G.E.M.邓紫棋.摩天动物园'},
        ],*/
      singleSongList:{},
      viewMoreSingleSongLink: {
        name: '查看更多单曲',
        href: '#'
      },
      viewMoreVideosLink: {
        name: '查看更多视频',
        href: '#'
      },
      viewMoreAlbum: {
        name: '查看更多专辑',
        href: '#'
      },
      viewMoreSongListLink: {
        name: '查看更多歌单',
        href: '#'
      },
      videoItems: [
        {name: '平凡天使',image: '../../../static/images/video1.jpg',url: '#',desc: '来自 G.E.M.邓紫棋'},
        {name: '#bilibili跨年演唱会,邓紫棋演出《光年之外》 《句号》引发全场大合唱!!!!!!!',image: '../../../static/images/video1.jpg',url: '#',desc: '来自 G.E.M.邓紫棋'}
      ],
      songListItems: [
        {title: '最·邓紫棋',image: '../../../static/images/T001R150x150M000001fNHEf1SFEFN.jpg',desc: '44首 QQ音乐官方歌单 3838.9万人播放'},
        {title: '最·邓紫棋',image: '../../../static/images/T001R150x150M000001fNHEf1SFEFN.jpg',desc: '44首 QQ音乐官方歌单 3838.9万人播放'},
        {title: '最·邓紫棋',image: '../../../static/images/T001R150x150M000001fNHEf1SFEFN.jpg',desc: '44首 QQ音乐官方歌单 3838.9万人播放'},
        {title: '最·邓紫棋',image: '../../../static/images/T001R150x150M000001fNHEf1SFEFN.jpg',desc: '44首 QQ音乐官方歌单 3838.9万人播放'},
        {title: '最·邓紫棋',image: '../../../static/images/T001R150x150M000001fNHEf1SFEFN.jpg',desc: '44首 QQ音乐官方歌单 3838.9万人播放'}
      ],
      albumListItems: [
        {title: '摩天动物园',image: '../../../static/images/T001R150x150M000001fNHEf1SFEFN.jpg',desc: 'G.W.E.邓紫棋 2018-12-02'},
        {title: '新的心跳',image: '../../../static/images/T001R150x150M000001fNHEf1SFEFN.jpg',desc: 'G.W.E.邓紫棋 2018-12-02'},
        {title: '另一个童话',image: '../../../static/images/T001R150x150M000001fNHEf1SFEFN.jpg',desc: 'G.W.E.邓紫棋 2018-12-02'},

      ],
      hotSearchItems: [
        '林俊杰','周杰伦','邓紫棋 平凡天使','华晨宇','薛之谦','张杰', '李荣浩'
      ],
      searchContent: this.$route.query.keyword,
      singer: {}
    }
  },
  methods: {
    returnSearch() {
      this.$router.push({path: '/search'})
    },
    startSearch (){
      this.$router.push({path: '/result?keyword=' + this.searchContent})
    },
    getSearchByKey () {
      axios({
        method: 'get',
        url: 'getSearchByKey?key=' + this.$route.query.keyword

      }).then(response => {
        console.log(response.data.response.data)
        this.singer=response.data.response.data.zhida.zhida_singer
        this.singleSongList = response.data.response.data.song.list

        console.log(this.singer)

      }).catch(error => {
        console.log(error)
      }).finally( () => {
        this.getAlbumInfo()
      })

    },
    getAlbumInfo () {
      this.singer.hotalbum.forEach(function(album,index){
      /*  console.log( album.albumMID)
        console.log('album:'  + 'index'+index)*/
        axios({
          method: 'get',
          url: '/getAlbumInfo?albummid=' + album.albumMID
        }).then(response => {
          console.log(response.data.response.data)
          /*console.log(response.data.response.data.company_new.headPic)*/
          album.headPic = response.data.response.data.company_new.headPic
          album.aDate = response.data.response.data.aDate
          /*console.log( album.aDate)
          console.log(album.headPic)*/

        }).catch(error => {
          console.log(error)
        })
      })
    }
  },
  mounted() {
    this.getSearchByKey()

  }
}
</script>

<style scoped lang="less">
  @fontsize750:50;
  .search-result{

    .search-result-header{

      width: 730rem /@fontsize750;
      position: fixed;
      top: 0;
      display: flex;
      padding: 30rem /@fontsize750 10rem /@fontsize750 10rem /@fontsize750 10rem /@fontsize750;
      background-color: #f7f7f7;
      .leftImg{
        width: 36rem /@fontsize750;
        height: 36rem /@fontsize750;
      }
      .search-image-area{
        margin-left: 10rem /@fontsize750;
        border-radius:   20rem /@fontsize750 0  0  20rem /@fontsize750 ;
        padding:0 10rem /@fontsize750;
        background-color: #ffffff;
        display: flex;
        align-items: center;
        .search-image{
          width: 24rem /@fontsize750;
          height: 24rem /@fontsize750;
        }
      }
      .search-input{
        flex: 1;
        border:none;
        outline: none;
        font-size: 14rem /@fontsize750;
        height: 40rem /@fontsize750;

      }
      .clear-image-area{
        /*border: 1rem /@fontsize750 solid black;
        border-left: none;*/
        border-radius:  0  20rem /@fontsize750 20rem /@fontsize750 0;
        padding: 0 10rem /@fontsize750;
        background-color: #ffffff;
        display: flex;
        align-items: center;
        .clear-image{
          width: 24rem /@fontsize750;
          height: 24rem /@fontsize750;
        }
      }

    }
    .search-nav{
      width: 750rem /@fontsize750;
      position: fixed;

      display: flex;
      top: 75rem /@fontsize750;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      /*margin-top: 20rem /@fontsize750;*/
      height: 60rem /@fontsize750;
      background-color: #f7f7f7;
      .search-nav-item{
        width: 250rem /@fontsize750;
        height: 50rem /@fontsize750;
        color: #666;
        font-size: 20rem /@fontsize750;
        display: flex;
        justify-content: center;
        align-items: center;

      }

    }
    .main-content{
      margin-top: 130rem /@fontsize750;
      .simple-info-items{
        display: flex;
        .simple-info{
          width: 250rem /@fontsize750;
          display: flex;
          flex-flow: column nowrap;
          background-color: #ffffff;
          border-radius: 15rem /@fontsize750;
          margin: 20rem /@fontsize750 10rem /@fontsize750;
          padding: 20rem /@fontsize750 10rem /@fontsize750;
          justify-content: center;
          align-items: center;
          .simple-info-image{
            width: 100rem /@fontsize750;
            height: 100rem /@fontsize750;
            border-radius: 50rem /@fontsize750;
          }
          .simple-info-title{
            margin: 30rem /@fontsize750 0 0 0;
            padding: 0;
            font-size: 18rem /@fontsize750;
            height: 40rem /@fontsize750;
            line-height: 40rem /@fontsize750;


          }
          .simple-info-desc{
            font-size: 14rem /@fontsize750;
            color: #666666;
            height: 30rem /@fontsize750;
            line-height: 30rem /@fontsize750;


          }

        }
      }
      .single-song{
        display: flex;
        flex-flow: column nowrap;
        .single-song-title{
          display: flex;
          align-items: center;
          margin-left: 20rem /@fontsize750;
          .title{
            margin: 0;
            padding: 0;
            font-size: 21rem /@fontsize750;

          }
          .image{
            margin-left: 10rem /@fontsize750;
            width: 36rem /@fontsize750;
            height: 36rem /@fontsize750;
          }
        }


      }
      .video{
        display: flex;
        flex-flow: column nowrap;
        .video-title{
          display: flex;
          align-items: center;
          margin-left: 20rem /@fontsize750;
          margin-bottom: 5rem /@fontsize750;
          .title{
            margin: 0;
            padding: 0;
            font-size: 21rem /@fontsize750;

          }
        }
        .video-items{
          display: flex;
          margin-left: 20rem /@fontsize750;
          .video-item{
            display: flex;
            flex-flow: column nowrap;
            .video-image{
              width: 300rem /@fontsize750;
              height: 150rem /@fontsize750;
              border-radius: 15rem /@fontsize750;
              margin-right: 20rem /@fontsize750;
            }
            .video-name{
              font-size: 18rem /@fontsize750;
              width: 300rem /@fontsize750;
              max-height: 50rem /@fontsize750;
              display:block;
              overflow: hidden;
            }
            .video-desc{
              display: block;
              width: 300rem /@fontsize750;
              font-size: 14rem /@fontsize750;
              line-height: 30rem /@fontsize750;
              height: 30rem /@fontsize750;
            }
          }

        }
      }
      .more-single-song{
        display: flex;
        flex-flow: column nowrap;
        .more-single-song-title{
          display: flex;
          align-items: center;
          margin-left: 20rem /@fontsize750;
          .title{
            margin: 0;
            padding: 0;
            font-size: 21rem /@fontsize750;

          }
          .image{
            margin-left: 10rem /@fontsize750;
            width: 36rem /@fontsize750;
            height: 36rem /@fontsize750;
          }
        }

      }
      .song-list{
        .song-list-title{
          display: flex;
          align-items: center;
          margin-left: 20rem /@fontsize750;
          .title{
            margin: 0;
            padding: 0;
            font-size: 21rem /@fontsize750;

          }
        }
        .song-list-items{
          width: 710rem /@fontsize750;
          margin: 0 20rem /@fontsize750;
          display: flex;
          flex-flow: column nowrap;

          .song-list-item{
            display: flex;
            justify-content: space-between;
            height: 120rem /@fontsize750;
            .song-list-item-image{
              width: 100rem /@fontsize750;
              height: 100rem /@fontsize750;
              border-radius: 15rem /@fontsize750;
            }
            .song-list-item-info{
              flex-grow: 1;
              margin-left: 20rem /@fontsize750;
              display: flex;
              flex-flow: column nowrap;
              justify-content: center;
              .title{
                margin: 0;
                padding: 0;
                font-size: 17rem /@fontsize750;
                height: 30rem /@fontsize750;

              }
              .desc{
                font-size: 14rem /@fontsize750;
              }


            }
            .right-image{
              width: 36rem /@fontsize750;
              height: 36rem /@fontsize750;
              align-self: center;
            }


          }
        }
      }
      .special-album{
        .special-album-title{
          display: flex;
          align-items: center;
          margin-left: 20rem /@fontsize750;
          .title{
            margin: 0;
            padding: 0;
            font-size: 21rem /@fontsize750;

          }
        }
        .special-album-items{
          width: 710rem /@fontsize750;
          margin: 0 20rem /@fontsize750;
          display: flex;
          flex-flow: column nowrap;

          .special-album-item{
            display: flex;
            justify-content: space-between;
            height: 120rem /@fontsize750;
            .special-album-image{
              width: 100rem /@fontsize750;
              height: 100rem /@fontsize750;
              border-radius: 15rem /@fontsize750;
            }
            .special-album-item-info{
              flex-grow: 1;
              margin-left: 20rem /@fontsize750;
              display: flex;
              flex-flow: column nowrap;
              justify-content: center;
              .title{
                margin: 0;
                padding: 0;
                font-size: 17rem /@fontsize750;
                height: 30rem /@fontsize750;

              }
              .desc{
                font-size: 14rem /@fontsize750;
              }


            }
            .right-image{
              width: 36rem /@fontsize750;
              height: 36rem /@fontsize750;
              align-self: center;
            }


          }
        }
      }
      .hot-search{
        .hot-search-title{
          display: flex;
          align-items: center;
          margin-left: 20rem /@fontsize750;
          .title{
            margin: 0;
            padding: 0;
            font-size: 21rem /@fontsize750;

          }
        }
        .hot-search-items{
          width: 450rem /@fontsize750;

          margin: 10rem /@fontsize750 10rem /@fontsize750 10rem /@fontsize750 20rem /@fontsize750;
          display: flex;
          flex-flow: row wrap;

          .hot-search-item{
            overflow: hidden;
          /*  width: 50rem /@fontsize750;*/
            height: 20rem /@fontsize750;
            margin-right: 10rem /@fontsize750;
            margin-bottom: 10rem /@fontsize750;

            background-color: #ffffff;
            display: block;
            padding: 5rem /@fontsize750;
            font-size: 15rem /@fontsize750;
            border-radius: 10rem /@fontsize750;

          }
        }
      }
    }
  }
</style>
