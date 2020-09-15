<template>
    <div class="everyday-recommend">
      <h2 class="everyday-recommend-title">{{title}}</h2>
      <div class="everyday-recommend-items">
        <div v-for="(item,index) in content" :key="index">
          <div class="everyday-recommend-item">
            <span class="name">{{item.name}}</span>
            <img :src="item.image" class="image">

            <span class="desc">{{item.desc}}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "EverydayRecommend",
  props: {
    content: {
      type: Array,
      default: []
    },
    title: {
      type:String
    }
  }
}
</script>

<style scoped lang="less">
  @fontsize750:50;
  .everyday-recommend{
    width: 702rem /@fontsize750;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    .everyday-recommend-title{

      height: 40rem /@fontsize750;
      line-height: 40rem /@fontsize750;
      font-size: 21rem /@fontsize750;
    }
    .everyday-recommend-items{
      width: 702rem /@fontsize750;
      align-self: flex-start;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      .everyday-recommend-item{
        position: relative;
        display: flex;
        flex-flow: column nowrap;

        .image{
          width: 220rem /@fontsize750;
          height: 220rem /@fontsize750;
          border-radius: 15rem /@fontsize750;
        }
        .name{
          display: block;
          position: absolute;
          top: 190rem /@fontsize750;
          left: 130rem /@fontsize750;
          overflow: hidden;
          width: 80rem /@fontsize750;
          height: 30rem /@fontsize750;
          line-height: 30rem /@fontsize750;
          font-size: 14rem /@fontsize750;
        }
        .desc{
          height: 40rem /@fontsize750;
          line-height: 40rem /@fontsize750;
          font-size: 14rem /@fontsize750;
        }
      }
    }
  }
</style>
