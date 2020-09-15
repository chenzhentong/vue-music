<template>
  <div class="dynamics">
    <MusicFooter :footerItemList="footerItemList"></MusicFooter>
  </div>
</template>

<script>
import MusicFooter from "../common/MusicFooter";
export default {
  name: "MusicDynamics",
  components: {MusicFooter},
  data () {
    return {
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
      ]
    }
  }
}
</script>

<style scoped lang="less">
  @fontsize750: 50;
  .dynamics{
    width: 750rem /@fontsize750;

  }
</style>
