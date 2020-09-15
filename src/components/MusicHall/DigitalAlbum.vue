<template xmlns="http://www.w3.org/1999/html">
    <div class="digital-album">
      <div class="user-header">
        <img :src="leftImage" class="left-image" @click="returnIndex">
        <div class="middle-area">
          <h2 class="title title-active">{{title}}</h2>
          <h2 class="title2">{{title2}}</h2>
        </div>
        <span class="right-text">专辑库</span>
      </div>
      <img :src="digitalAlbumList.banner[currentBannerIndex].picurl" class="banner-image" >
      <ul class="banner-items">

        <li v-for="(bannerItem,index) in this.digitalAlbumList.banner" :key="index" class="banner-item" :style="{backgroundColor:currentBannerIndex==index?'green':''}"  @click="setCurrentBannerIndex(index)">
          <img src="../../../static/images/圆点.png" class="image">
        </li>
      </ul>
      <ul class="middle-nav-items">
        <li class="middle-nav-item" v-for="(item,index) in middleNavItems" :key="index">
          <img :src="item.image" class="image">
          <span class="name">{{item.name}}</span>
        </li>

      </ul>
      <AlbumList :album-items="digitalAlbumList.content[0].albumlist" :title="'最新上架'"></AlbumList>
      <AlbumList :album-items="digitalAlbumList.content[1].albumlist" :title="'本周热销'" ></AlbumList>
      <AlbumList :album-items="digitalAlbumList.content[2].albumlist" :title="'音乐人专区'" :show="'visible'"></AlbumList>
      <AlbumList :album-items="digitalAlbumList.content[3].albumlist" :title="'明星博物馆'"></AlbumList>
      <AlbumList :album-items="digitalAlbumList.content[4].albumlist" :title="'2019心声力量绽放'"></AlbumList>
      <AlbumList :album-items="digitalAlbumList.content[5].albumlist" :title="'2019内地专辑推荐'"></AlbumList>
      <AlbumList :album-items="digitalAlbumList.content[6].albumlist" :title="'2019欧美专辑推荐'"></AlbumList>
      <AlbumList :album-items="digitalAlbumList.content[7].albumlist" :title="'2019港台专辑推荐'"></AlbumList>
      <AlbumList :album-items="digitalAlbumList.content[8].albumlist" :title="'2019影视剧OST推荐'"></AlbumList>

      <PlayingSong></PlayingSong>
    </div>
</template>

<script>
import PlayingSong from "./PlayingSong";
import AlbumList from "../common/AlbumList";
export default {
  name: "DigitalAlbum",
  components: {AlbumList, PlayingSong},
  data () {
    return {
      title: '数字专辑',
      title2: '票务',
      leftImage: '../../../static/images/leftArrow.png',
      rightImage: '../../../static/images/appoint.png',
      bannerItems: [
        /*{image: '../../../static/images/timg.jpg',url: ''},*/
        {image: '../../../static/images/timg.jpg',url: ''}
      ],
      middleNavItems: [
        {name: '畅销榜',image: '../../../static/images/hotSell.png',url: ''},
        {name: '兑换中心',image: '../../../static/images/exchange.png',url: ''},
        {name: '分类',image: '../../../static/images/sort.png',url: ''},
        {name: '已购',image: '../../../static/images/hasBought.png',url: ''}
      ],
     /* recentUploadedAlbumItems: [
        {name: 'Changes1',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'}
      ],

      weekHotSellAlbumItems: [
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'}

      ],
      musicPersonAlbumItems: [
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'}
      ],
      starAlbumItems:[
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'}
      ],
      newAlbumItems: [
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'}
      ],
      innerAlbumItems:[
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'}
      ],
      eurepoAlbumItems: [
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
      ],
      hongkongAlbumItems: [
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},

      ],
      southKoreaAlbumItems:  [
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},

      ],
      movieAlbumItems:  [
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
        {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},

      ],*/
      digitalAlbumList: {},
      currentBannerIndex: 0
    }
  },
  methods: {
    returnIndex () {
      this.$router.push({path: '/'})
    },
    getDigitalAlbumLists () {
      this.$axios({
        method: 'get',
        url: 'getDigitalAlbumLists'
      }).then(response => {
        console.log(response.data.response.data)
        this.digitalAlbumList = response.data.response.data
      }).catch(error => {
        console.log(error)
      })
    },
    setCurrentBannerIndex (index) {
      this.currentBannerIndex=index
      /* this.$refs.roundImage.src=''*/
    },
    nextBannerIndex () {
      if (this.currentBannerIndex===this.digitalAlbumList.banner.length-1){
        return 0
      } else {

        return this.currentBannerIndex+1
      }
    }
  },
  mounted() {

    this.getDigitalAlbumLists()
    setInterval(() => {
      this.setCurrentBannerIndex(this.nextBannerIndex())
    },2000)
    this.getRecommend()
  }
}
</script>

<style scoped lang="less">
  @fontsize750:50;
  .digital-album{
    background-color: #ffffff;

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
      .right-text{
        font-size: 21rem /@fontsize750;
        color: #666;
      }
      .middle-area{
        display: flex;
        align-items: center;
        .title{
          margin: 0  0 0 20rem /@fontsize750;
          padding: 0;
          font-size: 21rem /@fontsize750;


        }
        .title2{
          margin: 0  0 0 20rem /@fontsize750;
          padding: 0;
          font-size: 21rem /@fontsize750;
          font-weight: normal;
          color: #666666;
        }
        .title-active{
          border-bottom: 1rem /@fontsize750 solid black;
          border-bottom-width: 2rem /@fontsize750;
        }
      }

    }
    .banner-image{
      /*height: 65%*/
      margin: 50rem /@fontsize750 0 0 0;
      width: 750rem /@fontsize750;
      height: 325rem /@fontsize750;

    }
    .banner-items{
      position: absolute;
      top: 335rem /@fontsize750;
      width: 750rem /@fontsize750;
      display: flex;
      margin: 0;
      padding: 0;
      justify-content: center;


      .banner-item{
        margin: 0;
        padding: 0;
        overflow: hidden;
        align-items: center;
        justify-content: center;
        .image{
          width: 20rem /@fontsize750;
          height: 20rem /@fontsize750;
        }

      }
    }
    .middle-nav-items{
      display: flex;
      margin: 0;
      padding: 0;
      list-style-type: none;
      align-items: center;
      justify-content: space-around;
      background-color: #ffffff;
      height: 100rem /@fontsize750;
      box-shadow: 0px  1px #888888;
      .middle-nav-item{
        margin: 0;
        padding: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        .image{
          width: 36rem /@fontsize750;
          height: 36rem /@fontsize750;
        }
        .name{
          font-size: 18rem /@fontsize750;
        }

      }
    }

  }

</style>
