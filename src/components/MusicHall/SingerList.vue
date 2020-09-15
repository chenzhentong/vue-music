<template>
    <div class="singer-list">
      <div class="singer-list-header">
        <a href="/" class="return"><img :src="leftArrowImg" class="leftImg"></a>
        <h2 class="title">歌手</h2>
        <img :src="searchImg" class="rightImg">
      </div>
      <div class="user-attention">
        <a href="#" >
          <span class="content">关注歌手</span>
        <img src="../../../static/images/rightArrow.png" class="rightArrowImg"></a>
      </div>
      <div class="singer-sorts">
        <div v-for="(sort,index) in sorts" :key="index">
          <div class="sort">
            <div v-for="(tag,index) in sort" :key="index">
              <div v-if="index==0">
                <span class="tag tag-active">{{tag.name}}</span>
              </div>
              <div v-if="index!==0">
                <span class="tag">{{tag.name}}</span>
              </div>

            </div>

          </div>
        </div>

      </div>
      <div class="singer-sorts">

          <div class="sort">
            <div v-for="(tag,index) in singerList2.tags.area" :key="index">
              <div v-if="index==0">
                <span class="tag tag-active">{{tag.name}}</span>
              </div>
              <div v-if="index!==0">
                <span class="tag">{{tag.name}}</span>
              </div>
            </div>
          </div>
        <div class="sort">
          <div v-for="(tag,index) in singerList2.tags.sex" :key="index">
            <div v-if="index==0">
              <span class="tag tag-active">{{tag.name}}</span>
            </div>
            <div v-if="index!==0">
              <span class="tag">{{tag.name}}</span>
            </div>
          </div>
        </div>
        <div class="sort">
          <div v-for="(tag,index) in singerList2.tags.genre" :key="index">
            <div v-if="index==0">
              <span class="tag tag-active">{{tag.name}}</span>
            </div>
            <div v-if="index!==0">
              <span class="tag">{{tag.name}}</span>
            </div>
          </div>
        </div>


      </div>
      <div class="singer-list-items">
        <div v-for="(singer,index) in singerList2.singerlist" :key="index">
          <div class="signer-item">
            <div class="left-area">
              <img :src="singer.singer_pic" class="signer-image" @click="visitSingerDetail(singer.singer_mid)">
              <div class="info">
                <h3 class="name" @click="visitSingerDetail(singer.singer_mid)">{{singer.singer_name}}</h3>
                <!--<span class="fansNum">粉丝{{}}</span>-->
              </div>
            </div>
            <div class="right-area">
              <a href="#">
                <img src="../../../static/images/add.png" class="addImg">
                <span class="desc">关注</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <MusicFooter :footerItemList="footerItemList" ></MusicFooter>
    </div>
</template>

<script>
import MusicFooter from "../common/MusicFooter";
export default {
  name: "SingerList",
  components: {MusicFooter},
  data () {
    return {
      footerItemList: [
        {
          image: '../static/images/音乐.png',
          text: '音乐馆',
          url: '/'
        },
        {
          image: '../static/images/推荐.png',
          text: '推荐',
          url: '/recommend'
        },
        {
          image: '../static/images/动态.png',
          text: '动态',
          url: '/dynamics'
        },
        {
          image: '../static/images/我的.png',
          text: '我的',
          url: '/user'
        }
      ],
      leftArrowImg: '../static/images/leftArrow.png',
      searchImg: '../static/images/搜索.png',
      sorts: [
        [{name: '全部'},{name: '内地'},{name: '港台'},{name: '日本'},{name: '韩国'}],
        [{name: '全部'},{name: '男'},{name: '女'},{name: '组合'}],
        [{name: '全部'},{name: '流行'},{name: '摇滚'},{name: '嘻哈'},{name: '电子'}]
      ],
      singerList2: {}
    }
  },
  methods: {
    visitSingerDetail (singerId) {

      this.$router.push({name: 'SingerDetail',params: {id: singerId}})
    },
    getSingerList () {
      this.$axios({
        method: 'get',

        url: 'getSingerList',
        /*baseURI: 'http://127.0.0.1:3200'*/
      }).then(response => {
        console.log(response)
        this.data = response.data
        /*console.log(JSON.stringify(this.data))*/
        console.log(response.data.response)
        this.singerList2 = response.data.response.singerList.data
        console.log('singerList')
        console.log(this.singerList2)
      }).catch(error => {
        console.log(error)
      })


    }
  },
  mounted() {
    this.getSingerList()
  }
}
</script>

<style scoped lang="less">
  @fontsize750: 50;
  .singer-list{
    width: 750rem /@fontsize750;
    margin: 0 auto;
    .singer-list-header{
      position: fixed;
      top: 0;
      width: 750rem /@fontsize750;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      height: 50rem /@fontsize750;
      align-items: center;
      background-color: #ffffff;
      z-index: 100;//设置元素堆叠顺序
      .title{
        font-size: 26rem /@fontsize750;
        height: 50rem /@fontsize750;
        line-height:50rem /@fontsize750;
      }
      .return{
        display: flex;
        justify-content: center;
        .leftImg{
          margin-left: 10rem /@fontsize750;
          width: 36rem /@fontsize750;
          height: 36rem /@fontsize750;
        }
      }
      .rightImg{
        width: 36rem /@fontsize750;
        height: 36rem /@fontsize750;
        margin-right: 10rem /@fontsize750;
      }
    }
    .user-attention{
      width: 750rem /@fontsize750;
      display: flex;
      height: 40rem /@fontsize750;
      padding-right: 10rem /@fontsize750;
      flex-flow: row nowrap;
      justify-content: flex-end;
      align-items: center;
      margin-bottom: 20rem /@fontsize750;
      position: relative;
      margin-top: 50rem /@fontsize750;

      a{
        display: flex;
        align-items: center;
        text-decoration: none;
        .content{
          font-size: 18rem /@fontsize750;
          color: #666;
        }
        .rightArrowImg{
          width: 24remn /@fontsize750;
          height: 24rem /@fontsize750;
          margin-right: 10rem /@fontsize750;
        }
      }

    }
    .singer-sorts{
      width: 750rem /@fontsize750;
      display: flex;
      flex-flow: column nowrap;
      .sort{
        display: flex;
        height: 60rem /@fontsize750;
        align-items: center;
        flex-flow: row wrap;

        .tag{
          width: 45rem /@fontsize750;
          height: 32rem /@fontsize750;

          border-radius: 12rem /@fontsize750;
          background-color: #ffffff;
          padding: 10rem /@fontsize750;
          margin: 10rem /@fontsize750;
          font-size: 18rem /@fontsize750;
          &:hover{
            cursor: pointer;
          }
        }
        .tag-active{
          background-color: #1ECE9F;
        }
      }

    }
    .singer-list-items{
      width: 750rem /@fontsize750;
      display: flex;
      flex-flow: column nowrap;
      position: relative;
      .signer-item{
        width: 702rem /@fontsize750;
        height: 100rem /@fontsize750;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        margin: 0 24rem /@fontsize750;
        .left-area{
          display: flex;
          flex-flow: row nowrap;
          align-items: center;


          .signer-image{
            width: 48rem /@fontsize750;
            height: 48rem /@fontsize750;
            border-radius: 30rem /@fontsize750;
            &:hover{
              cursor: pointer;
            }
          }
          .info{
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            margin-left: 10rem /@fontsize750;
            .name{
              color: #000000;
              font-size: 20rem /@fontsize750;
              height: 30rem /@fontsize750;
              line-height: 30rem /@fontsize750;
              margin: 0;
              &:hover{
                cursor: pointer;
              }
            }
            .fansNum{
              color: #666666;
              font-size: 18rem /@fontsize750;
            }
          }
        }
        .right-area{
          border: 1rem /@fontsize750 solid #999;
          width: 70rem /@fontsize750;
          height: 25rem /@fontsize750;
          border-radius: 20rem /@fontsize750;
          a{
            width: 70rem /@fontsize750;
            height: 25rem /@fontsize750;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            .addImg{
              width: 12rem /@fontsize750;
              height: 12rem /@fontsize750;
            }
            .desc{
              font-size: 16rem /@fontsize750;
              color: #002;
              height: 25rem /@fontsize750;
              line-height: 25rem /@fontsize750;
            }
          }

        }

      }

    }
  }
</style>
