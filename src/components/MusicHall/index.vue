<template>
  <div class="index">
    <MusicHeader></MusicHeader>
    <div class="banner-images">

      <img :src="focusImageList[currentBannerIndex].pic_info.url" class="image" >
      <ul class="items">
        <li v-for="(data,index) in focusImageList" :key="index" @click="setCurrentBannerIndex(index)" :style="{backgroundColor:currentBannerIndex==index?'green':''}" class="item">
          <img src="../../../static/images/圆点.png" class="image" :ref="roundImage">
        </li>
      </ul>
    </div>
    <div class="middle-nav">
      <div v-for="(item, index) in navItems" :key="index">
        <div class="nav-item">

          <a :href="item.url">
            <img :src="item.image">
            <span>{{item.name}}</span>
          </a>
        </div>
      </div>
    </div>
    <div class="new-items">
      <div v-for="(item,index) in musicItems" :key="index">
        <div class="new-item" :style="{backgroundColor: item.bgcolor}">
          <div v-if="index==0">
            <img :src="item.image" @click="go('/newSong')">
          </div>
          <div v-if="index==1">
            <img :src="item.image" @click="go('/digitalAlbum')">
          </div>

          <div class="content">
            <span class="name">{{item.name}}</span>
            <span class="desc">{{item.desc}}</span>
          </div>
        </div>
      </div>
    </div>
    <HotSongList :title="hotSongListTitle" :more="hotSongListMore" :song-list="hotSongList"></HotSongList>
    <GoodSongList :title="goodSongListTitle" :more="goodSongListMore" :song-list="goodSongList"></GoodSongList>
    <MusicFooter :footerItemList="footerItemList"></MusicFooter>
  </div>
</template>
<script>
import MusicHeader from "../common/MusicHeader";



import HotSongList from "./HotSongList";
import GoodSongList from "./GoodSongList";
import MusicFooter from "../common/MusicFooter";

export default {
  name: "index",
  components: {MusicFooter, GoodSongList, HotSongList, MusicHeader},
  created() {
    console.log("index")
  },
  mounted() {
    setInterval(() => {
      this.setCurrentBannerIndex(this.nextBannerIndex())
    },2000)
    this.getRecommend()
  },
  data() {
    return {
      navItems: [
        {
          name: '歌手',
          url: '/signerlist',
          image: 'static/images/歌手.png'
        },
        {
          name: '排行',
          url: '/ranklist',
          image: 'static/images/排行.png'


        },
        {
          name: '分类歌单',
          url: '/songlist/category',
          image: 'static/images/分类歌单.png'

        },
        {
          name: '电台',
          url: '#',
          image: 'static/images/电台.png'
        },
        {
          name: '一起听',
          url: '#',
          image: 'static/images/一起听.png'
        }
      ],
      musicItems: [
        {
          image: 'static/images/新歌新碟.jpg',
          name: '新歌新碟',
          desc: '胖鼠神秘异域',
          bgcolor: 'green'
        },
        {
          image: 'static/images/数字专辑.jpg',
          name: '数字专辑',
          desc: 'iKon霸气回归了',
          bgcolor: 'orange'
        }
      ],
      hotSongListTitle: '超热歌单',
      hotSongListMore: {
        url: '#',
        name: '更多>'
      },
      hotSongList: [
        {
          id:1,
          desc: '[水逆退散]你的好运正在配送中',
          image: 'static/images/song1.jpg',
          listening: '45万',
          user: {
            id:1,
            name: '允许部分冷信息',
            image: ''
          },
          intro: '在这里那些浅唱低吟的华语'
        },
        {
          id:2,
          desc: '何必念念不忘，还嫌自己不够愚蠢',
          image: 'static/images/song2.jpg',
          listening: '421万',
          user: {
            id:1,
            name: '允许部分冷信息',
            image: ''
          },
          intro: '在这里那些浅唱低吟的华语'
        },
        {
          id:3,
          desc: '遇到你后，不想独自看夜色寂寥',
          image: 'static/images/song3.jpg',
          listening: '235万',
          user: {
            id:1,
            name: '允许部分冷信息',
            image: ''
          },
          intro: '在这里那些浅唱低吟的华语'
        },
        {
          id:4,
          desc: '何必念念不忘，还嫌自己不够愚蠢',
          image: 'static/images/song2.jpg',
          listening: '421万',
          user: {
            id:1,
            name: '允许部分冷信息',
            image: ''
          },
          intro: '在这里那些浅唱低吟的华语'
        },
        {
          id:5,
          desc: '遇到你后，不想独自看夜色寂寥',
          image: 'static/images/song3.jpg',
          listening: '235万',
          user: {
            id:1,
            name: '允许部分冷信息',
            image: ''
          },
          intro: '在这里那些浅唱低吟的华语'
        },
        {
          id:6,
          desc: '遇到你后，不想独自看夜色寂寥',
          image: 'static/images/song3.jpg',
          listening: '235万',
          user: {
            id:1,
            name: '允许部分冷信息',
            image: ''
          },
          intro: '在这里那些浅唱低吟的华语'
        }
      ],
      goodSongListTitle: '值得一听的好歌',
      goodSongListMore: {
        url: '#',
        name: '更多>'
      },
      goodSongList: [
        {
          id:7,
          name: '桥边姑娘',
          image: 'static/images/hotSong1.jpg',

          author: '海伦'
        },
        {
          id:8,
          name: '百花香',
          image: 'static/images/hotSong2.jpg',

          author: '魏新雨'
        }, {
          id:9,
          name: '百花香',
          image: 'static/images/hotSong2.jpg',

          author: '魏新雨'
        }, {
          id:9,
          name: '百花香',
          image: 'static/images/hotSong2.jpg',

          author: '魏新雨'
        }, {
          id:10,
          name: '百花香',
          image: 'static/images/hotSong2.jpg',
          author: '魏新雨'
        }
      ],
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
      focusImageList: {},
      currentBannerIndex: 0
    }
  },
  methods:{
    go(url){
      this.$router.push({path:url})
    },
    getRecommend () {
      this.$axios({
        method: 'get',
        url: 'getRecommend'
      }).then(response => {
        console.log('data')
        console.log(response.data.response)
        this.focusImageList = response.data.response.focus.data.content
      }).catch(error => {
        console.log(error)
      })
    },
    setCurrentBannerIndex (index) {
      this.currentBannerIndex=index
     /* this.$refs.roundImage.src=''*/
    },
    nextBannerIndex () {
      if (this.currentBannerIndex===this.focusImageList.length-1){
        return 0
      } else {

        return this.currentBannerIndex+1
      }
    }
  }
}
</script>
<style scoped lang="less">
  @import "../../common/css/index.less";
</style>
