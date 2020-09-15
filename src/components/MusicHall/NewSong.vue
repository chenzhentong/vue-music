<template>
    <div class="new-song">
      <div class="user-header">
        <img :src="leftImage" class="left-image" @click="returnIndex">
        <div class="middle-area">
          <h2 class="title">{{title}}</h2> |
          <h2 class="title2">{{title2}}</h2>
        </div>
        <img :src="rightImage" class="right-image" >
      </div>
      <UserNav :items="navItems"></UserNav>
      <div class="new-song-items">
        <SongListItems :song-list="songList"></SongListItems>
      </div>
      <PlayingSong></PlayingSong>
    </div>
</template>

<script>
import SongListItems from "./SongListItems";
import PlayingSong from "./PlayingSong";
import UserHeader from "../common/UserHeader";
import UserNav from "../common/UserNav";
export default {
  name: "NewSong",
  components: {UserNav, UserHeader, PlayingSong, SongListItems},
  data () {
    return {
      title: '新歌',
      title2: '新碟',
      leftImage: '../../../static/images/leftArrow.png',
      rightImage: '../../../static/images/appoint.png',
      navItems:{},
      songList: {}
    }
  },
  methods: {
    returnIndex () {
      this.$router.push({path:'/'})
    },
    getNewSongList () {
      this.$axios({
        method: 'get',
        url: 'getRecommend'
      }).then(response => {
        console.log(response.data.response.new_song)
        this.songList = response.data.response.new_song.data.songlist
        this.navItems = this.songList.data.lanlist
        console.log(this.songList.data)
      }).catch(error => {
        console.log(error)
      })
    }
  },
  mounted() {
    this.getNewSongList()
  }
}
</script>

<style scoped lang="less">
  @fontsize750: 50;
  .new-song{
    .user-header{
      position: fixed;
      top: 0;
      width: 730rem /@fontsize750;
      display: flex;
      justify-content: space-between;
      height: 50rem /@fontsize750;
      align-items: center;
      background-color: #ffffff;
      padding: 0 10rem /@fontsize750;
      .left-image{
        width: 36rem /@fontsize750;
        height: 36rem /@fontsize750;
        &:hover{
          cursor: pointer;
        }
      }
      .right-image{
        width: 36rem /@fontsize750;
        height: 36rem /@fontsize750;
      }
      .middle-area{
        display: flex;
        align-items: center;
        .title{
          padding: 0 10rem /@fontsize750 0 0;
          margin: 0;
          font-size: 21rem /@fontsize750;
        }
        .title2{
          padding: 0  0 0 10rem /@fontsize750;
          margin: 0;
          font-size: 21rem /@fontsize750;
          font-weight: normal;
          color: #666666;
        }
      }

    }
    .new-song-items{
      margin: 95rem /@fontsize750 0rem /@fontsize750 0 0rem /@fontsize750;
    }
  }
</style>
