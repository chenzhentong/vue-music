<template>
  <div class="recently-played">
    <UserHeader :title="headerTitle" :left-image="headerLeftImage" :right-image="headerRightImage"></UserHeader>
    <UserNav :items="navItems"></UserNav>
    <div class="recently-played-items">
      <SongListItems :isShowNo="false" :isShowListen="true"></SongListItems>
    </div>
    <div class="clear-played-history">
      <img src="../../../static/images/trash.png" class="clear-image">
      <span class="text">清除全部播放记录</span>
    </div>
    <PlayingSong></PlayingSong>
  </div>
</template>

<script>
import UserHeader from "../common/UserHeader";
import UserNav from "../common/UserNav";
import SongListItems from "../MusicHall/SongListItems";
import PlayingSong from "../MusicHall/PlayingSong";

export default {
  name: "RecentlyPlayed",
  components: {PlayingSong, SongListItems, UserNav, UserHeader},
  data() {
    return {
      headerTitle: '最近播放',
      headerLeftImage: '../../../static/images/leftArrow.png',
      headerRightImage: '../../../static/images/setting.png',
      navItems: [
        '歌曲', '专辑', '歌单', '电台'
      ]
    }
  }
}
</script>

<style scoped lang="less">
  @fontsize750: 50;
  .recently-played {


    .recently-played-items{
      margin: 95rem /@fontsize750 0rem /@fontsize750 0 0rem /@fontsize750;
    }
    .clear-played-history {
      display: flex;
      justify-content: center;
      align-items: center;

      .clear-image {
        width: 36rem /@fontsize750;
        height: 36rem /@fontsize750;

      }

      .text {
        font-size: 15rem /@fontsize750;
        color: #666666;
      }

    }


  }
</style>
