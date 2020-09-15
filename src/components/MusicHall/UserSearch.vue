<template>
  <div class="search">
    <div class="search-content">
      <img src="../../../static/images/leftArrow.png" class="leftImg" @click="returnIndex">
      <input type="text" placeholder="您要搜索的歌曲" class="search-content" v-model="searchContent" @keypress.enter="startSearch">
      <img src="../../../static/images/听歌识曲.jpg" class="listen-music-img">
    </div>
    <div class="search-history">
      <div class="title-area">
        <h2 class="title">搜索历史</h2>
        <img src="../../../static/images/trash.png" class="deleteImg">
      </div>
      <div class="search-tags">
        <span v-for="(searchTag,index) in searchTags" :key="searchTag" class="search-tag">
          {{searchTag}}
        </span>
      </div>
    </div>
    <div class="hot-search">
      <h2 class="title">搜索热词</h2>
      <div class="hot-search-content">
        <div v-for="(item,index) in hotKeys" :key="index" class="hot-search-item">

          <div class="left-area">
            <span v-if="(index+1)<=3" :style="{color: 'red'}" class="no">
              {{(index+1)}}
            </span>
            <span v-if="(index+1)>3" class="no">
              {{(index+1)}}
            </span>
            <div class="info">
              <span class="name">{{item.k}}</span>
            <!--  <span class="desc">{{item.k}}</span>-->
            </div>
          </div>
          <span class="num">{{item.n}}</span>
        </div>
      </div>
    </div>
    <PlayingSong :playing-song="playingSong"></PlayingSong>
  </div>
</template>

<script>
import PlayingSong from "./PlayingSong";
export default {
  name: "UserSearch",
  components: {PlayingSong},

  data() {
    return {
      searchTags: [
        '泡沫', '追光者', '小幸运'
      ],
      hotKeys: [],
      playingSong: {
        name: '光辉岁月',
        singer: 'Beyond',
        image: '../../../static/images/3927337324.jpg'
      },
      searchContent: ''
    }
  },
  methods: {
    returnIndex() {

      this.$router.push({path: '/'})
    },
    startSearch (){
      this.$router.push({path: '/result?keyword=' + this.searchContent})
    },
    getHotKeys () {
      var _this = this

      this.$axios
          .get('getHotkey')
          .then(response => {
            console.log( response.data.response.data.hotkey.length)
            this.hotKeys = response.data.response.data.hotkey
            console.log(this.hotKeys)
          }).catch(error => {
        console.log(error)
      })
      console.log('hotKeys:')
      console.log()

    }
  },
  created() {

  },
  mounted() {
    this.getHotKeys()
  }
}
</script>

<style scoped lang="less">
  @fontsize750: 50;
  .search {
    width: 750rem /@fontsize750;
    padding-top: 30rem /@fontsize750;

    .search-content {
      /*background-color: #D2691E;*/
      display: flex;
      justify-content: space-between;

      .leftImg {
        margin-left: 10rem /@fontsize750;
        width: 36rem /@fontsize750;
        height: 36rem /@fontsize750;
      }

      .listen-music-img {
        width: 36rem /@fontsize750;
        height: 36rem /@fontsize750;
        margin-right: 10rem /@fontsize750;

      }
      .search-content {
        flex: 1;
        margin: 0 20rem /@fontsize750;
        border-radius: 20rem /@fontsize750;
        height: 40rem /@fontsize750;
        border: 1px;
        outline: none;
        text-indent: 40rem /@fontsize750;
        background-image: url("../../common/images/搜索.png");
        background-repeat: no-repeat;
        background-size: 30rem /@fontsize750 30rem /@fontsize750;
        background-position-y: center;
        background-position-x: 10rem /@fontsize750;
        background-color: #ffffff;
        font-size: 14rem /@fontsize750;

      }
    }

    .search-history {
      width: 750rem /@fontsize750;
      display: flex;
      flex-flow: column nowrap;

      .title-area {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .title {
          font-size: 21rem /@fontsize750;

          padding: 0;
          margin: 20rem /@fontsize750 0 10rem /@fontsize750 20rem /@fontsize750;

        }

        .deleteImg {
          width: 36rem /@fontsize750;
          height: 36rem /@fontsize750;
          margin-right: 20rem /@fontsize750;
        }
      }

      .search-tags {
        width: 702rem /@fontsize750;
        margin: 0 24rem /@fontsize750;
        display: flex;

        .search-tag {
          display: block;
          min-width: 30rem /@fontsize750;
          height: 25rem /@fontsize750;
          margin: 5rem /@fontsize750;
          background-color: #ffffff;
          padding: 4rem /@fontsize750;

          border-radius: 10rem /@fontsize750;
          font-size: 16rem /@fontsize750;
        }
      }


    }

    .hot-search {
      .title {
        font-size: 21rem /@fontsize750;

        padding: 0;
        margin: 20rem /@fontsize750 0 10rem /@fontsize750 20rem /@fontsize750;
      }

      .hot-search-content {
        display: flex;
        flex-flow: column nowrap;

        .hot-search-item {
          display: flex;
          justify-content: space-between;
          margin: 0 20rem /@fontsize750;
          height: 70rem /@fontsize750;
          align-items: center;

          .left-area {
            display: flex;
            align-items: center;

            .no {
              color: #666666;
            }

            .info {
              margin-left: 20rem /@fontsize750;
              display: flex;
              flex-flow: column nowrap;

              .name {
                height: 20rem /@fontsize750;
                font-size: 16rem /@fontsize750;
              }

              .desc {
                height: 20rem /@fontsize750;
                font-size: 15rem /@fontsize750;
                color: #666666;
              }
            }
          }

          .num {
            font-size: 15rem /@fontsize750;
          }

        }

      }
    }


  }
</style>
