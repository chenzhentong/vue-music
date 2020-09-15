<template>
  <div class="album-list">
    <div class="title-area">
      <img src="../../../static/images/blank.png" class="left-image">
      <h2 class="title">{{title}}</h2>
      <img src="../../../static/images/right3.png" class="right-image" :style="{visibility: show }">
    </div>
    <ul class="album-items">
      <li v-for="(album,index) in albumItems" :key="index" class="album-item">
        <img :src="album.image" class="image" >
        <span class="name">{{album.album_name}}</span>
        <span class="author">{{album.singer_name}}</span>
        <span class="price">￥{{album.price / 100}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AlbumList",
  props: {
    albumItems: {
      type: Array,
      default: function () {
        return /* [
          {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
          {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
          {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
          {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
          {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'},
          {name: 'Changes',author: 'Justin Bieber',price: '￥ 29',image: '../../../static/images/T002R300x300M000000nuo0F4LGM5s.jpg'}
        ]*/
        {}
      }
    },
    title: {
      type: String,
      default: '最新上架'
    },
    show: {
      type:String,
      default: 'hidden'
    }

  }
}
</script>

<style scoped lang="less">
  @fontsize750:50;
  .album-list{
    display: flex;
    flex-flow: column nowrap;
    .title-area{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 20rem /@fontsize750;
      .title{
        align-self: center;
        font-size: 21rem /@fontsize750;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60rem /@fontsize750;
        font-weight: normal;
        margin: 0;
        letter-spacing: 5rem /@fontsize750;/*设置字之间的间距*/
      }
      .right-image{
        width: 36rem /@fontsize750;
        height: 36rem /@fontsize750;

      }

      .left-image{
        width: 36rem /@fontsize750;
        height: 36rem /@fontsize750;



      }
    }


    .album-items{
      margin: 0;
      padding: 0;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      .album-item{
        margin: 0;
        padding: 0;
        width: 248rem /@fontsize750;
        flex: 1;
        display: flex;
        flex-flow: column nowrap;
        .image{
          width: 248rem /@fontsize750;
          height: 248rem /@fontsize750;
        }
        .author{
          color: #666;
          font-size: 15rem /@fontsize750;
        }
        .price{
          color: #666;
          font-size: 15rem /@fontsize750;
        }
        .name{
          font-size: 16rem /@fontsize750;
        }



      }

    }


  }

</style>
