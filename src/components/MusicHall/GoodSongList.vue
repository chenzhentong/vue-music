<template>
    <div class="good-song-list">
      <div class="good-song-list-title">
        <h2 class="title">{{title}}</h2>
        <a :href="more.url" class="more">{{more.name}}</a>
      </div>
      <div class="good-song-items">
        <div v-for="(song,index) in songList" :key="index">
          <div class="good-song-item">

            <div class="song">
              <img :src="song.image" class="song-img" @click="goSongListDetail(song.id)">
              <div class="info">
                <span class="name">{{song.name}}</span>
                <span class="author">{{song.author}}</span>
              </div>
            </div>
            <img src="../../../static/images/播放.png" class="song-play">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "GoodSongList",
  props: {
    title:{
      type: String
    },
    more: {
      type: Object
    },
    songList: {
      type: Array
    }
  },
  methods: {
    goSongListDetail (songListId) {

      this.$router.push({name: 'SongListDetail',params:{id:songListId}})
    }
  }
}
</script>

<style scoped lang="less">
  @fontsize750: 50;
  .good-song-list{
    width: 702rem /@fontsize750;
    margin: 0 auto;
    .good-song-list-title{
      height: 50rem /@fontsize750;
      line-height: 50rem /@fontsize750;
      display: flex;
      /*justify-content: space-around;*/
      .title{
        margin: 0;
        font-size: 21rem /@fontsize750;
        flex: 1;
      }
      .more{

        color: #000000;
        text-decoration: none;
        font-size: 20rem /@fontsize750;
      }

    }
    .good-song-items{
       display: flex;
       flex-flow: column nowrap;
       .good-song-item{
         display: flex;
         flex-flow: row nowrap;
         justify-content: space-between;
         align-items: center;
         .song{
           display: flex;
           .song-img{
             width: 100rem /@fontsize750;
             height: 100rem /@fontsize750;
             padding: 10rem /@fontsize750;
             border-radius: 20rem /@fontsize750;
           }
           .info{
             display: flex;
             flex-flow: column nowrap;


             .name{
               color: #000000;
               font-size: 21rem /@fontsize750;
               margin-top: 20rem /@fontsize750;
             }
             .author{
               color: #6E6E60;
               font-size: 20rem /@fontsize750;
             }
           }
         }
         .song-play{
           width: 36rem /@fontsize750;
           height: 36rem /@fontsize750;
           margin-right: 20rem /@fontsize750;
         }
       }
     }

  }
</style>
