<template>
 <div class="banner">

    <div class="item">
      <img :src="dataList[currentIndex]">

    </div>
   <ul>
     <li v-for="(data,index) in dataList" :key="index" @click="setCurrentIndex(index)" :style="{backgroundColor:currentIndex==index?'green':''}">
       第{{index+1}}张
     </li>
   </ul>
  <!-- <div class="item">
     <img :src="focusImageList[currentIndex].pic_info.url">

   </div>
   <ul>
     <li v-for="(data,index) in focusImageList" :key="index" @click="setCurrentIndex(index)" :style="{backgroundColor:currentIndex==index?'green':''}">
       第{{index+1}}张
     </li>
   </ul>-->
 </div>

</template>

<script>
export default {
  name: "Test1",
  data () {
    return {
      dataList:['../../static/images/300.jpg','../../static/images/301.jpg'],
      currentIndex:0,
      focusImageList: {}
    }
  },
  methods: {
    setCurrentIndex (index) {
      this.currentIndex=index
    },
    getFocus() {
      console.log(11111)
      this.$axios({
        method: 'get',
        url: 'music_api/getRecommend',
        dataType: 'json'
      }).then(response => {
        console.log('data')
        console.log(response.data.response.focus.data.content)
        this.focusImageList = response.data.response.focus.data.content
      }).catch(error => {
        console.log(error)
      })
    }

  },
  created() {
    console.log( this.dataList.length)
  },

  computed: {
    nextIndex () {
      if (this.currentIndex==this.dataList.length-1){
        return 0
      } else {

        return this.currentIndex+1
      }
      console.log('currentIndex:' + this.currentIndex)
      return this.currentIndex
    }
  },
  mounted() {


    this.getFocus()
    setInterval(() => {
      this.setCurrentIndex(this.nextIndex)
    },3000)
  }
}
</script>

<style scoped lang="less">
  @fontsize750:50;
  ul{
    list-style-type: none;
    display: flex;

    li{
      width: 50rem /@fontsize750;
      &:hover{
        cursor: pointer;
      }
    }
  }

</style>
