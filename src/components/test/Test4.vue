<template>
  <div>
    data: {{data}}
    {{this.$store.state.baseUrl}}
    {{this.$store.getters.getBaseUrl}}
    <button @click="changeBaseUrlToMusicApi2">changeBaseUrlToMusicApi2</button>
    <button @click="changeBaseUrlToMusicApi">changeBaseUrlToMusicApi</button>
  </div>
</template>

<script>

export default {
  name: "Test4",
  created() {
    this.getData()

  },
  data() {
    return {
      data: []
    }
  },
  methods: {
    getData() {
      this.$axios({
        method: 'get',

        url: 'getSongListCategories',
      }).then(response => {
        console.log(response)
        this.data = response.data
        /*console.log(JSON.stringify(this.data))*/
        console.log(response.data.response)
      }).catch(error => {
        console.log(error)
      })

    },
    changeBaseUrlToMusicApi2 () {
      this.$store.dispatch('changeBaseUrlToMusicApi2Func')
     /* this.$store.commit('changeBaseUrlToMusicApi2')*/
    },
    changeBaseUrlToMusicApi () {
      this.$store.dispatch('changeBaseUrlToMusicApiFunc')
    /*  this.$store.commit('changeBaseUrlToMusicApi')*/
    }
  }
}
</script>

<style scoped lang="less">

</style>
