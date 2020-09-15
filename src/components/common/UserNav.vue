<template>
    <ul class="user-nav">
      <li v-for="(item,index) in items"  :key="index" class="user-nav-item">
        {{item.lan}}
      </li>
    </ul>
</template>

<script>
export default {
  name: "UserNav",
  props: {
    items: {
      type: Array,
      default: function () {
        return ['歌曲','专辑','歌单','视频']
      }
    }
  },
  methods: {
   /* getNewSongList () {
      this.$axios({
        method: 'get',
        url: 'getRecommend'
      }).then(response => {
        console.log(response.data.response)
        this.songList = response.data.response.new_song
        this.items = this.songList.data.lanlist
        console.log(this.songList.data)
      }).catch(error => {
        console.log(error)
      })
    }*/
  },
  mounted() {
   /* this.getNewSongList()*/
  }
}
</script>

<style scoped lang="less">
  @fontsize750:50;
  .user-nav{
    width: 750rem /@fontsize750;
    position: fixed;
    top: 50rem /@fontsize750;
    display: flex;
    background-color: #ffffff;
    height: 45rem /@fontsize750;
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: space-between;
    .user-nav-item{
      display: flex;
      justify-content: center;
      flex: 1;
      font-size: 15rem /@fontsize750;
      color:#666;
      font-weight: bold;
      &:hover{
        cursor: pointer;
      }


    }

  }
</style>
