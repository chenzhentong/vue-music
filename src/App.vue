<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Index from "./components/MusicHall/index";
export default {
  name: 'App',
  components: {Index},
}
</script>
<style lang="less">
  @import "common/css/normalize.less";
  @import "common/css/common.less";
  @fontsize750:50;
  #app{
    width: 750rem /50;

    font-size: 14px;
    line-height: 1.5;
    font-family: Arial,Helvetica,STHeiTi,sans-serif;
    background-color: #f2f2f2;
    margin-bottom: 90rem /@fontsize750;
    margin-right: auto;
    margin-left: auto;
    /*padding-top: 30rem /@fontsize750;*/
    overflow-x: hidden;
  }
</style>
