<template>
  <div class="user">
    <MusicHeader :image="headerImage" :title="headerTitle"></MusicHeader>
    <div class="user-info">
      <img :src="user.image" class="user-image">
      <span class="user-name">{{user.name}}</span>
      <img :src="user.member.image" class="key-user-sign">
      <div class="user-email">
        <img :src="user.email.image" class="user-email-image">
      </div>
    </div>
    <div class="activity-items">
      <div v-for="(activity,index) in activities" :key="index">
        <div class="activity-item">

          <img :src="activity.image" class="image">

          <div class="text">
            <span class="name">{{activity.name}}</span>
            <span class="desc">{{activity.desc}}</span>
          </div>

        </div>
      </div>
    </div>
    <div class="user-activities2">
      <div v-for="(activity,index) in userActivities" :key="index">
        <div class="user-activity2">
          <img :src="activity.image" class="image"  @click="go(activity.url)">
          <span class="name">{{activity.name}}</span>
          <span class="num">{{activity.num}}</span>
        </div>
      </div>
    </div>
    <div class="user-sorts">
      <h2 class="title">智能分类</h2>
      <div class="sorts">
        <div v-for="(sort,index) in sorts" :key="index">
          <div class="sort">
            {{sort.name}}
          </div>

        </div>
        <span class="more">···</span>
      </div>
    </div>
    <div class="user-song-list">
      <div class="user-song-title">
        <div class="title-area">
          <h2 class="title">自建歌单7</h2>
          <h2 class="small-title">收藏歌单</h2>
        </div>
        <div class="image-area">
          <img :src="addImage" class="image">
          <img :src="songListImage" class="image">
        </div>
      </div>
      <div class="good-list-items">
        <div v-for="(list,index) in userSongList" :key="index">
          <div class="good-list-item">

            <div class="list">
              <img :src="list.image" class="list-image">
              <div class="info">
                <span class="name">{{list.name}}</span>
                <span class="num">{{list.num}}首</span>
              </div>
            </div>
            <img src="../../../static/images/右箭头.png" class="arrow">
          </div>
        </div>
      </div>
    </div>
    <div class="recommend-song-list">
      <div class="title-area">
        <h2 class="title">推荐歌单</h2>
        <div class="right-image-area">
          <img :src="refreshImage" class="image1">
          <img :src="closeImage" class="image2">
        </div>
      </div>
      <div class="song-items">
        <div v-for="(song,index) in recommendSongList" :key="index">
          <SongItem :song="song"></SongItem>
        </div>
      </div>

    </div>
    <MusicFooter :footerItemList="footerItemList"></MusicFooter>
  </div>
</template>

<script>
import MusicFooter from "../common/MusicFooter";
import MusicHeader from "../common/MusicHeader";
import SongItem from "../common/SongItem";
export default {
  name: 'User',
  components: {SongItem, MusicHeader, MusicFooter},
  data() {
    return {
      user: {
        image: 'static/images/g.jpg',
        name: '_',
        email: {
          image: 'static/images/email.png'
        },
        member: {
          image: 'static/images/钻石.png'
        }
      },
      headerTitle: '我的',
      headerImage: 'static/images/收起按钮icon.png',
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
      activities: [
        {
          image: 'static/images/活动.png',
          name: '活动中心',
          desc: '立即签到领积分'

        },
        {
          image: 'static/images/会员.png',
          name: '会员中心',
          desc: '新会员9元首开'

        }
      ],
      userActivities: [
        {
          name: '喜欢',
          image: 'static/images/喜欢.png',
          num: 12,
          url: '/user/liked'
        },
        {
          name: '最近',
          image: 'static/images/最近浏览.png',
          num: 10,
          url: '/recently/played'
        },
        {
          name: '本地',
          image: 'static/images/本地.png',
          num: 0,
          url: '#'
        },
        {
          name: '已购',
          image: 'static/images/已购应用.png',
          num: 0,
          url: '#'
        },
      ],
      sorts: [
        {name: '近年发行'},
        {name: '流行阵地'},
        {name: 'KTV唱什么'}
      ],
      addImage: 'static/images/添加.png',
      songListImage: 'static/images/歌单2.png',
      userSongList: [
        {
          name: '新建歌单1',
          image: 'static/images/空白页.png',

          num: 1
        },
        {
          name: '新建歌单2',
          image: 'static/images/空白页.png',

          num: 0
        }, {
          name: '新建歌单3',
          image: 'static/images/空白页.png',

          num: 0
        }, {
          name: '新建歌单4',
          image: 'static/images/空白页.png',

          num: 0
        }, {
          name: '新建歌单5',
          image: 'static/images/空白页.png',
          num: 0
        }
      ],
      recommendSongList: [
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
      refreshImage: 'static/images/刷新.png',
      closeImage: 'static/images/关闭.png'

    }
  },
  methods: {
    go (url) {
      this.$router.push({path: url })
    }
  }


}
</script>

<style scoped lang="less">
  @fontsize750: 50;
  .user {
    width: 750rem /@fontsize750;
    padding-top: 0.6rem;

    .user-info {
      width: 702rem /@fontsize750;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      border-radius: 15rem /@fontsize750 15rem /@fontsize750 0 0;
      background-color: #ffffff;
      margin: 20rem /@fontsize750 24rem /@fontsize750 0 24rem /@fontsize750;

      .user-image {
        width: 100rem /@fontsize750;
        height: 100rem /@fontsize750;
        border-radius: 50rem /@fontsize750;
      }

      .key-user-sign {
        width: 50rem /@fontsize750;
        height: 50rem /@fontsize750;
      }

      .user-name {
        /*   width: 500rem /@fontsize750;*/
        height: 30rem /@fontsize750;
        line-height: 30rem /@fontsize750;
        font-size: 21rem /@fontsize750;
      }

      .user-email {
        flex-grow: 1;
        /* width: 550rem /@fontsize750;*/
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;

        .user-email-image {
          width: 80rem /@fontsize750;
          height: 80rem /@fontsize750;
          margin-right: 10rem /@fontsize750;
        }
      }
    }

    .activity-items {
      margin: 0 auto;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      align-items: center;
      width: 702rem /@fontsize750;
      height: 100rem /@fontsize750;
      background-color: #ffffff;
      border-radius: 0 0 15rem /@fontsize750 15rem /@fontsize750;
      border-top: 1rem /@fontsize750 solid #F1F3F4;

      .activity-item {

        flex: 1;
        display: flex;

        .image {
          width: 50rem /@fontsize750;
          height: 50rem /@fontsize750;
        }

        .text {
          display: flex;
          flex-flow: column nowrap;

          .name {
            font-size: 20rem /@fontsize750;

          }

          .desc {
            font-size: 18rem /@fontsize750;
            color: #666666;
          }
        }

      }


    }

    .user-activities2 {

      width: 702rem /@fontsize750;
      margin: 0 auto;
      padding: 24rem /@fontsize750;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .user-activity2 {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;

        &:hover {
          cursor: pointer;
        }

        .image {
          width: 36rem /@fontsize750;
          height: 36rem /@fontsize750;
        }

        .name {
          font-size: 20rem /@fontsize750;

        }

        .num {
          font-size: 18rem /@fontsize750;
        }
      }
    }

    .user-sorts {
      width: 702rem /@fontsize750;
      margin: 0 auto;
      border-radius: 15rem /@fontsize750;
      background-color: #ffffff;
      display: flex;
      flex-flow: column nowrap;

      .title {
        padding-left: 10rem /@fontsize750;
        height: 30rem /@fontsize750;
        line-height: 30rem /@fontsize750;
        font-size: 21rem /@fontsize750;
        margin-bottom: 0;
      }

      .sorts {
        width: 702rem /@fontsize750;
        margin: 0 auto;
        display: flex;
        flex-flow: row nowrap;

        height: 50rem /@fontsize750;
        align-items: center;
        overflow: hidden;

        .title {
          display: block;
        }

        .sort {
          max-width: 200rem /@fontsize750;
          height: 20rem /@fontsize750;
          line-height: 20rem /@fontsize750;
          border: 1rem /@fontsize750 solid #666;
          margin: 10rem /@fontsize750;
          padding: 4rem /@fontsize750;

          font-size: 16rem /@fontsize750;
          border-radius: 10rem /@fontsize750;
          overflow: hidden;

          &:hover {
            cursor: pointer;
          }
        }

        .more {
          width: 25rem /@fontsize750;
          height: 25rem /@fontsize750;
          border: 1rem /@fontsize750 solid #666;
          border-radius: 30rem /@fontsize750;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5rem /@fontsize750;

          &:hover {
            cursor: pointer;
          }
        }

      }
    }

    .user-song-list {
      width: 702rem /@fontsize750;
      margin: 0 auto;

      .user-song-title {
        display: flex;
        justify-content: space-between;
        /*align-items: center;*/

        .title-area {
          display: flex;

          .title {
            font-size: 21rem /@fontsize750;
            &:hover {
              cursor: pointer;
            }
          }

          .small-title {
            font-size: 21rem /@fontsize750;
            color: #383838;
            margin-left: 20rem /@fontsize750;
            &:hover {
              cursor: pointer;
            }
          }
        }

        .image-area {
          display: flex;
          align-items: center;
          padding: 10rem /@fontsize750;

          .image {
            margin: 10rem /@fontsize750;
            width: 24rem /@fontsize750;
            height: 24rem /@fontsize750;
            &:hover {
              cursor: pointer;
            }
          }
        }

      }

      .good-list-items {
        display: flex;
        flex-flow: column nowrap;

        .good-list-item {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          align-items: center;

          .list {
            display: flex;

            .list-image {
              width: 100rem /@fontsize750;
              height: 100rem /@fontsize750;
              padding: 10rem /@fontsize750 10rem /@fontsize750 10rem /@fontsize750 0;
              border-radius: 20rem /@fontsize750;
              &:hover {
                cursor: pointer;
              }
            }

            .info {
              display: flex;
              flex-flow: column nowrap;


              .name {
                color: #000000;
                font-size: 21rem /@fontsize750;
                margin-top: 20rem /@fontsize750;
                &:hover {
                  cursor: pointer;
                }
              }

              .num {
                color: #6E6E60;
                font-size: 20rem /@fontsize750;
                &:hover {
                  cursor: pointer;
                }
              }
            }
          }

          .arrow {
            width: 36rem /@fontsize750;
            height: 36rem /@fontsize750;
            margin-right: 20rem /@fontsize750;
            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
    .recommend-song-list{
      width: 702rem /@fontsize750;
      margin: 0 auto;
      display: flex;
      flex-flow: column nowrap;
      .title-area{
        display: flex;

        .title{
          height: 40rem /@fontsize750;
          line-height: 40rem /@fontsize750;
          font-size: 21rem /@fontsize750;
        }
        .right-image-area{

          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          .image1{
            width:24rem /@fontsize750;
            height: 24rem /@fontsize750;

          }
          .image2{
            width: 24rem /@fontsize750;
            height: 24rem /@fontsize750;
            margin-left: 20rem /@fontsize750;

          }

        }
      }
      .song-items{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;


      }
    }

  }
</style>
