<template>
  <div class="recommend">
    <MusicHeader :title="headerTitle" :content="headerContent"></MusicHeader>
    <EverydayRecommend :content="everydayRecommendContent" :title="everydayRecommendTitle"></EverydayRecommend>
    <div class="recentListeningSongs">
      <h2 class="title">符合你最近收听的音乐</h2>
      <div class="song-items">
        <div v-for="(song,index) in recentListeningSongs" :key="index">
          <SongItem :song="song"></SongItem>
        </div>
      </div>
    </div>
    <GoodSongList :title="goodSongListTitle" :more="goodSongListMore" :song-list="goodSongList"></GoodSongList>
    <MusicFooter :footerItemList="footerItemList"></MusicFooter>
  </div>
</template>
<script>
import MusicHeader from "../common/MusicHeader";
import EverydayRecommend from "./EverydayRecommend";
import MusicFooter from "../common/MusicFooter";
import SongItem from "../common/SongItem";
import GoodSongList from "../MusicHall/GoodSongList";
export default {
  name: "recommend",
  components: {GoodSongList, SongItem, MusicFooter, EverydayRecommend, MusicHeader},
  data () {
    return {
      headerTitle: '推荐',
      headerContent: '你不要担心 李笛',
      everydayRecommendContent: [
        {name: '个性电台',desc: '根据你的口味定制',image: 'static/images/everydayRecommend1.jpg'},
        {name: '每日三十首',desc: '每日专属推荐',image:'static/images/everydayRecommend2.jpg'},
        {name: '新发风向',desc: '每周专属新歌',image:'static/images/everydayRecommend3.jpg'},
        /*{name: '新发风向',desc: '每周专属新歌',image:'static/images/everydayRecommend3.jpg'}*/
      ],
      everydayRecommendTitle: 'Hi,今日为您打造',
      footerItemList: [
        {
          image: 'static/images/音乐.png',
          text: '音乐馆',
          url: '/'
        },
        {
          image: 'static/images/推荐.png',
          text: '推荐',
          url: '/recommend'
        },
        {
          image: 'static/images/动态.png',
          text: '动态',
          url: '/dynamics'
        },
        {
          image: 'static/images/我的.png',
          text: '我的',
          url: '/user'
        }
      ],
      recentListeningSongs: [
        {
          desc: '[水逆退散]你的好运正在配送中',
          image: 'static/images/song1.jpg',
          listening: '45万'
        },
        {
          desc: '何必念念不忘，还嫌自己不够愚蠢',
          image: 'static/images/song2.jpg',
          listening: '421万'
        },
        {
          desc: '遇到你后，不想独自看夜色寂寥',
          image: 'static/images/song3.jpg',
          listening: '235万'
        },
        {
          desc: '何必念念不忘，还嫌自己不够愚蠢',
          image: 'static/images/song2.jpg',
          listening: '421万'
        },
        {
          desc: '遇到你后，不想独自看夜色寂寥',
          image: 'static/images/song3.jpg',
          listening: '235万'
        },
        {
          desc: '遇到你后，不想独自看夜色寂寥',
          image: 'static/images/song3.jpg',
          listening: '235万'
        }
      ],
      goodSongListTitle: '更多为你推荐',
      goodSongListMore: {
        url: '#',
        name: '更多>'
      },
      goodSongList: [
        {
          name: '桥边姑娘',
          image: 'static/images/hotSong1.jpg',

          author: '海伦'
        },
        {
          name: '百花香',
          image: 'static/images/hotSong2.jpg',

          author: '魏新雨'
        }, {
          name: '百花香',
          image: 'static/images/hotSong2.jpg',

          author: '魏新雨'
        }, {
          name: '百花香',
          image: 'static/images/hotSong2.jpg',

          author: '魏新雨'
        }, {
          name: '百花香',
          image: 'static/images/hotSong2.jpg',
          author: '魏新雨'
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
  @fontsize750: 50;
  .recommend{
    width: 750rem /@fontsize750;
    padding-top: 0.6rem;

  /*  line-height: 50rem /@fontsize750;*/
    /*background-color: #2c3e50;*/
    .recentListeningSongs{
      width: 702rem /@fontsize750;
      margin: 0 auto;
      display: flex;
      flex-flow: column nowrap;
      .title{
        height: 40rem /@fontsize750;
        line-height: 40rem /@fontsize750;
        font-size: 21rem /@fontsize750;
      }
      .song-items{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;


      }
    }
  }

</style>
