<template>
    <div class="user-liked">
      <UserHeader :title="headerTitle" :left-image="headerLeftImage" :right-image="headerRightImage"></UserHeader>
      <UserNav></UserNav>
      <div class="user-liked-items">
        <SongListItems :isShowNo="false" :isShowListen="false"></SongListItems>
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
  name: "UserLiked",
  components: {PlayingSong, SongListItems, UserNav, UserHeader},
  data () {
    return {
      headerTitle: '我喜欢',
      headerLeftImage: '../../../static/images/leftArrow.png',
      headerRightImage: '../../../static/images/operate.png'
    }
  }
}
</script>

<style scoped lang="less">
  @fontsize750:50;
  .user-liked{
    .user-liked-items{
      margin: 95rem /@fontsize750 0rem /@fontsize750 0 0rem /@fontsize750;
    }
  }

</style>
