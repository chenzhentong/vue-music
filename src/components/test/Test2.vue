<template>
  <div class="player">
    <div v-for="(audio,index) in audioList" :key="index">
      <div v-if="index===currentAudioIndex">
        <audio  controls  class="my-audio"  id="my-audio" ref="audio" @durationchange="getAduioInfo" @timeupdate="updateTime">
          <!--@canplay="getDuration" @timeupdate="updateTime"-->
          <!-- <source src="../../../static/audio/唐嫣 - 天赋 (Live).mp3" type="audio/mpeg" id="my-audio-source1">-->

          <source :src="audio.url" type="audio/mpeg">
        </audio>
      </div>
    </div>
  <!--  <button @click="playAudio">开始播放</button>
    <button @click="pauseAudio">暂停播放</button>
    <button @click="setMuted">静音</button>
    <button @click="increaseVolume">调高音量</button>
    <button @click="decreaseVolume">调低音量</button>
    <button @click="forwardAudio">快进</button>
    <button @click="remindAudio">后退</button>-->
    <div class="process" id="process" ref="process" @click="forwardAudio">
      <div class="hasPlayed" id="hasPlayed" ref="hasPlayed" >
      </div>
    </div>
    <div class="time">
      <div class="now-time" id="now-time" >{{this.currentTime}}</div>
      <div class="all-time" id="all-time">{{duration}}</div>
    </div>
    <div class="control">
      <a :href="audioList[currentAudioIndex].url" :download="audioList[currentAudioIndex].name"> <img src="../../../static/images/download2.png" class="image" ></a>
      <img src="../../../static/images/download2.png" class="image" >
      <img src="../../../static/images/顺序播放.png" class="image" @click="changePlayWay" ref="playWay">
      <img src="../../../static/images/后退.png" class="image" @click="lastAudio">
      <img src="../../../static/images/play4.png" class="image" id="playOrPause" @click="playOrPauseAudio">
      <img src="../../../static/images/前进.png" class="image" @click="nextAudio">


    </div>

    <div class="song-info">
       <span v-if="currentAudioIndex > 0">
        上一首: {{audioList[currentAudioIndex-1].name}}
      </span>
      <span v-if="currentAudioIndex == 0">
         没有上一首了
      </span>
      <span>当前歌曲:{{audioList[currentAudioIndex].name}}</span>
      <span v-if="currentAudioIndex < audioList.length-1">
        下一首: {{audioList[currentAudioIndex+1].name}}
      </span>
      <span v-if="currentAudioIndex == audioList.length-1">
        没有下一首了
      </span>
      {{this.$store.state.baseUrl}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Test2",
  data() {
    return {
      audioList: [
        {url: '../../../static/audio/唐嫣 - 天赋 (Live).mp3', name: '唐嫣 - 天赋 (Live)'},
        {url: '../../../static/audio/王菲 - 清平调.mp3', name: '王菲 - 清平调'},
        {url: '../../../static/audio/小幸运 - 田馥甄.mp3', name: '小幸运 - 田馥甄'},
        {url: '../../../static/audio/许茹芸 - 独角戏.mp3', name: '许茹芸 - 独角戏'},
        {url: '../../../static/audio/艾辰 - 可不可以.mp3', name: '艾辰 - 可不可以'},
        {url: '../../../static/audio/庄心妍 - 一万个舍不得.mp3', name: '庄心妍 - 一万个舍不得'},
        {url: '../../../static/audio/张杰 - 剑心 (《古剑奇谭》电视剧主题曲).mp3', name: '张杰 - 剑心 (《古剑奇谭》电视剧主题曲)'},
        {url: '../../../static/audio/追梦人-凤飞飞.mp3', name: '追梦人-凤飞飞'},
        {url: '../../../static/audio/绿色-陈香凝.mp3', name: '绿色-陈香凝'},
      ],
      currentAudioIndex: 0,
      duration: '',
      currentTime: '00:00',
      myAudio: '',
      playWay: '顺序播放'

    }
  },
  mounted() {
    window.addEventListener('mousedown',function () {
    })
  },
  methods: {
    playOrPauseAudio() {

      const myAudio = document.getElementById('my-audio')
      console.log(myAudio.paused)
      if (myAudio.paused === true) {
        this.playAudio()
      } else if (myAudio.paused === false) {
        this.pauseAudio()
      }
    },
    playAudio() {
      /*const myAudio = document.getElementById('my-audio')
      myAudio.play()*/
      this.$refs.audio[0].play()
    },
    pauseAudio() {
      /*const myAudio = document.getElementById('my-audio')
      myAudio.pause()*/
      this.$refs.audio[0].pause()
    },
    setMuted() {
      const myAudio = document.getElementById('my-audio')
      if (myAudio.muted == true) {
        myAudio.muted = false
      } else {
        myAudio.muted = true
      }
    },
    increaseVolume() {
      const myAudio = document.getElementById('my-audio')
      if (myAudio.volume < 1.0) {
        myAudio.volume = myAudio.volume + 0.1;
      }
    },
    decreaseVolume() {

      const myAudio = document.getElementById('my-audio')
      if (myAudio.volume >= 0.1) {
        myAudio.volume = myAudio.volume - 0.1;
      }
    },
    forwardAudio() {
      var event = event || window.event
      console.log(event.screenX)
      this.$refs.hasPlayed.style.width = event.screenX + 'px'
      console.log(this.$refs.hasPlayed.clientWidth)
      this.$refs.audio[0].currentTime = parseInt((this.$refs.hasPlayed.clientWidth / this.$refs.process.clientWidth) * this.$refs.audio[0].duration)
    },
    remindAudio() {
      const myAudio = document.getElementById('my-audio')

      if (myAudio.currentTime - 0.5 >= 0) {
        myAudio.currentTime = myAudio.currentTime - 0.5
      }


    },
    nextAudio() {

      if (this.currentAudioIndex < this.audioList.length - 1) {
        this.currentAudioIndex += 1
      }
    },
    lastAudio() {
      if (this.currentAudioIndex > 0) {
        this.currentAudioIndex -= 1
      }
    },
    getAduioInfo () {
      this.duration =Math.floor(this.$refs.audio[0].duration / 60) + ':' + parseInt(this.$refs.audio[0].duration % 60)

      console.log(this.$refs.audio )
    },
    updateTime () {
      /*this.getDuration()*/
      /*更改开始暂停图标*/
      if (this.$refs.audio[0].paused===false) {
        document.getElementById('playOrPause').src = '../../../static/images/暂停 停止.png'
      } else {
        document.getElementById('playOrPause').src = '../../../static/images/play4.png'
      }
      /*设置当前播放的时间*/
      var currentMinute = Math.floor(this.$refs.audio[0].currentTime / 60)
      var currentSecond= parseInt(this.$refs.audio[0].currentTime % 60)
      this.currentTime = this.processTime(currentMinute,currentSecond)
      /*在指定区域显示播放的时间*/
      var allMinute = Math.floor(this.$refs.audio[0].duration / 60)
      var  allSecond= parseInt(this.$refs.audio[0].duration % 60)
      this.duration = this.processTime(allMinute,allSecond)
      document.getElementById('now-time').innerHTML=this.currentTime
      /*Math.floor(this.$refs.audio[0].duration / 60) + ':' + parseInt(this.$refs.audio[0].duration % 60)*/
      document.getElementById('all-time').innerHTML= this.duration
      document.getElementById('hasPlayed').style.width= (this.$refs.audio[0].currentTime / this.$refs.audio[0].duration) * document.getElementById('process').clientWidth + 'px'
    },
    processTime (minute,second) {
      if (second <10) {
        second = '0' + second
      }
      if (minute === 0) {
        minute = '00'
      }
      return minute + ':'+ second

    },
    changePlayWay () {
      /*console.log(this.$refs.playWay.src)*/
      if (this.playWay=== '顺序播放') {
        this.$refs.playWay.src='../../../static/images/单曲循环.png'
        this.playWay = '单曲循环'
        alert('已切换到'+this.playWay)
      } else if (this.playWay=== '单曲循环') {
        this.$refs.playWay.src='../../../static/images/随机播放.png'
        this.playWay = '随机播放'
        alert('已切换到'+this.playWay)
      }else if (this.playWay=== '随机播放') {
        this.$refs.playWay.src='../../../static/images/顺序播放.png'
        this.playWay = '顺序播放'
        alert('已切换到'+this.playWay)
      }

    },

  }


}
</script>

<style scoped lang="less">
  @fontsize750: 50;
  .player {
    width: 750rem /@fontsize750;
    display: flex;
    flex-flow: column nowrap;

    .my-audio {
      width: 750rem /@fontsize750;

    }

    .control {
      display: flex;
      justify-content: center;

      .image {
        width: 40rem /@fontsize750;
        height: 40rem /@fontsize750;

        &:hover {
          cursor: pointer;
        }
      }
    }
    .song-info{
      display: flex;
      justify-content: space-between;
    }
    .process{
      margin-top: 100rem /@fontsize750;
      width: 700rem /@fontsize750;
      height: 10rem /@fontsize750;
      background-color: #ffffff;
      .hasPlayed{
        width: 0rem /@fontsize750;
        height: 10rem /@fontsize750;
        background-color: #D2691E;
      }

    }
    .time{
      display: flex;
      justify-content: space-between;
      width: 700rem /@fontsize750;
      height: 30rem /@fontsize750;
      /*background-color: #1ece9f;*/
      .now-time{
        color: #666666;
        font-size: 14rem /@fontsize750;
      }
      .all-time{
        color: #666666;
        font-size: 14rem /@fontsize750;
      }
    }
  }
</style>
