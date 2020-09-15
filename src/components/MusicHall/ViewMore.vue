<template>
  <div class="view-more">
    <a :href="link.url" class="view-more-link">
      <span class="name">{{link.name}}</span>
      <img src="../../../static/images/right.png" class="right-image">
    </a>

  </div>
</template>

<script>
export default {
  name: "ViewMore",
  props: {
    link: {
      type: Object,
      default: function () {
        return {
          url: '#',
          name: '查看更多'
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
  @fontsize750:50;
  .view-more{
    width: 750rem /@fontsize750;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50rem /@fontsize750;
    .view-more-link{
      text-decoration: none;
      display: flex;
      align-items: center;
      &:hover{
        cursor: pointer;
      }

      .name{
        color: #666666;
        font-size: 14rem /@fontsize750;
      }
      .right-image{
        width: 24rem /@fontsize750;
        height: 24rem /@fontsize750;
      }

    }

  }
</style>
