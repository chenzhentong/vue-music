<template>
  <div class="song-list-category">
    <div class="song-list-header">
      <a href="/" class="return"><img src="../../../static/images/leftArrow.png" class="leftImg"></a>
      <h2 class="title">分类歌单</h2>
      <img src="../../../static/images/rightArrow.png" class="rightImg">
    </div>

  </div>
</template>

<script>
export default {
  name: "SongListCategory",
  data () {
    return {
      categories: {}

    }
  },
  methods: {
    getSongListCategories () {
      this.$axios({
        method: 'get',
        url: 'getSongListCategories'
      }).then(response => {
        console.log(response)

         this.categories= response.data.response.data.categories

        console.log(this.categories)
        this.categories.forEach(function (item,index) {
          console.log('categoryGroupName:' + item.categoryGroupName )

          item.items.forEach(function (item1,index1){
            /*console.log(item1.categoryId )*/
            /*this.getSongLists(item1.categoryId)*/

          })
          console.log('--')
        })
      }).catch(error => {
        console.log(error)
      })

    },
    getSongLists (categoryId) {
      this.$axios({
        method: 'get',
        url: 'getSongListCategories?categoryId=' +categoryId
      }).then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    }
  },
  mounted() {
    this.getSongListCategories()

  }
}
</script>

<style scoped lang="less">
  @fontsize750: 50;
  .song-list-category{

    .song-list-header{
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
  }

</style>
