<template>
  <div class="user-header">
    <img :src="leftImage" class="left-image" @click="returnUser">
    <h2 class="title">{{title}}</h2>
    <img :src="rightImage" class="right-image">
  </div>
</template>

<script>
export default {
  name: "UserHeader",
  props: {
    title: {
      type: String,
      default: '最近播放'
    },
    leftImage: {
      type: String,
      default: '../../../static/images/left2.png'
    },
    rightImage: {
      type: String,
      default: '../../../static/images/left2.png'
    },


  },
  methods: {
    returnUser () {
      this.$router.push({path: '/user'})
    }
  }
}
</script>

<style scoped lang="less">
  @fontsize750:50;
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
    .right-image{
      width: 36rem /@fontsize750;
      height: 36rem /@fontsize750;
    }
    .title{
      padding: 0;
      margin: 0;
      font-size: 21rem /@fontsize750;
    }

  }

</style>
