<template>
  <div class="header">
    <h2 class="title">{{title}}</h2>
    <input type="text" :placeholder="content" class="search-content" @click="goUserSearch">
    <img :src="image" class="listen-music-img">
  </div>
</template>

<script>
export default {
  name: "MusicHeader",
  props: {
    title: {
      type: String,
      default: '音乐馆'
    },
    content: {
      type: String,
      default: '您要搜索的歌曲',
    },
    image: {
      type:String,
      default: 'static/images/听歌识曲.jpg'
    }
  },
  methods: {
    goUserSearch () {
      console.log(1)
      this.$router.push({path: '/search'})
    }
  }

}
</script>

<style scoped lang="less">

  @fontsize750: 50;
  .header {
    width: 702rem /@fontsize750;
    height: 50rem /@fontsize750;
    /*background-color: pink;*/
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    /*background-color: deeppink;*/
    margin: 0 auto;


    .title {
      font-size: 30rem /@fontsize750;
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
      background-size: 40rem /@fontsize750 40rem /@fontsize750;
      background-color: #ffffff;
      font-size: 26rem /@fontsize750;
    }

    .listen-music-img {
      width: 36rem /@fontsize750;
      height: 36rem /@fontsize750;

    }

  }


</style>
