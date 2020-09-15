<template>
  <div class="music-footer" >
    <div v-for="(item, index) in footerItemList" :key="index">
      <div class="music-footer-item">
        <a :href="item.url"><img :src="item.image" class="image">
          <span class="text">{{item.text}}</span></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicFooter",
  props: {
    footerItemList: {
      type: Array,
      default: function () {
        return  [
          {
            image: '../../../static/images/音乐.png',
            text: '音乐馆',
            url: '/'
          },
          {
            image: '../../../static/images/推荐.png',
            text: '推荐',
            url: '/recommend'
          },
          {
            image: '../../../static/images/动态.png',
            text: '动态',
            url: '/dynamics'
          },
          {
            image: '../../../static/images/我的.png',
            text: '我的',
            url: '/user'
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="less">
  @fontsize750: 50;
  .music-footer{

    position: fixed;
    bottom: 0;
    width: 750rem /@fontsize750;
    margin: 0 auto;
    display: flex;
    background-color: #ffffff;
    justify-content: center;
    /*align-items: center;*/
    height: 90rem /@fontsize750;

    .music-footer-item{
      height: 90rem /@fontsize750;
      flex: 1;
      display: flex;
      width: 187.5rem /@fontsize750;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
      /*padding-top: 10rem /@fontsize750;*/
/*      &:hover{
        cursor: pointer;
      }*/
      a{
        flex: 1;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: #666;
        .image{
          width: 50rem /@fontsize750;
          height: 50rem /@fontsize750;

        }
        .text{
          font-size: 14rem /@fontsize750;
        }
      }
    }
  }

</style>
