<template>
  <div class="container">
    <div class="nav">
      <img src="../../../static/images/down.png" class="downImage" v-on:click="returnSingerDetail(song.singer.id)">
      <ul class="list-items">
        <li class="list-item" v-for="(navItem,index) in  navItems" :key="index" :style="{color: index==currentTabIndex?'#fff': ''}" @click="changeTab(index)">
          {{navItem}}
          <span v-if="index!==navItems.length-1">
            &nbsp;|&nbsp;
          </span>
        </li>
      </ul>
      <img src="../../../static/images/share2.png" class="shareImg">
    </div>
    <div class="song-lyric-content" ref="tab2">
      <div class="top">
        <h2 class="title">{{this.audioList[this.currentAudioIndex].name}}</h2>
        <p class="author">{{this.audioList[this.currentAudioIndex].singer.name}}</p>
      </div>
      <div class="main">
        <div class="lyric-content">
          句号 - G.E.M. 邓紫棋<br>

          词：G.E.M. 邓紫棋<br>

          曲：G.E.M. 邓紫棋<br>

          编曲 Arranged by：G.E.M.邓紫棋/T-Ma 马敬恒<br>

          制作人 Producer：G.E.M.邓紫棋/T-Ma 马敬恒<br>

          和音 Bvox：G.E.M.邓紫棋<br>

          混音 Mixed by：Richard Furch<br>

          母带 Mastered by：Randy Merrill @ Sterling Sound<br>

          可惜我们终于来到 一个句号<br>

          窗外不愿飞的蜂鸟 也在哀悼<br>

          城市再也不会听到 我们争吵<br>

          你会不会少了一点烦恼<br>

          回到十二年前 回忆就在眼前<br>

          你带着帽子 而我样子 带着腼腆<br>

          不过第一次的见面 你说 你有先见<br>

          我的先天 被训练过 我能有片天<br>

          我当时天真 寡见鲜闻<br>

          不像成年人 有能力辨认<br>

          不是为了赚了有钱分<br>

          我为我的前程<br>

          希望我写的歌里面有更好的和弦声<br>

          时针滴滴答 你还记得吗<br>

          说句心里话 你还怀念吗<br>

          第一次发唱片 就一马当先<br>

          从此在大场面 我不再站旁边<br>

          我是真的感谢 佩服你的眼界<br>

          怎么想到和你是带着刺痛地完结<br>

          你看着一朵花慢慢萌芽<br>

          我却看着你意气慢慢风发<br>

          欲望聚沙成塔 价值慢慢分岔<br>

          太多失望让我对你的信任慢慢崩塌<br>

          可惜我们终于来到 一个句号<br>

          窗外不愿飞的蜂鸟 也在哀悼<br>

          城市再也不会听到 我们争吵<br>

          你会不会少了一点烦恼<br>

          时针滴滴答 你还记得吗<br>

          说句心里话 你还怀念吗<br>

          你说我是个商品<br>

          没有你我就不可以<br>

          这些扭曲的真理<br>

          差点毁掉我的自信<br>

          如今的我已觉醒 如今我不再哭泣<br>

          再不怕坚持自己<br>

          做你没做对的决定<br>

          你知道吗 这一辈子除了我的爸爸<br>

          你曾是我最信任的男人吧<br>

          但空白的娃娃 总会慢慢长大<br>

          抱歉我没法永远当你听话的傻瓜<br>

          可惜我们终于来到 一个句号<br>

          窗外不愿飞的蜂鸟 也在哀悼<br>

          城市再也不会听到 我们争吵<br>

          你会不会少了一点烦恼<br>

          多少年里 多少遍你<br>

          多少错却没多少歉意<br>

          但过去了就不再介意<br>

          把珍贵的放心里<br>

          把痛的伤的全都忘记<br>

          我青春的全部回忆<br>

          那爱的恨的全都是你<br>

          希望你偶尔也会想起<br>

          就让我真心真意<br>

          把歌唱完重新开始<br>

          时针滴滴答 你还记得吗<br>

          说句心里话 你还怀念吗<br>
        </div>
      </div>
      <div class="bottom">
        <div class="left-area">
          <img src="../../../static/images/barrage.png" class="image">
          <img src="../../../static/images/speech (2).png" class="image">
        </div>
        <img src="../../../static/images/play2.png" class="right-image">
      </div>
    </div>
    <div class="song-detail-content" ref="tab1">
      <img :src="audioList[currentAudioIndex].image" class="banner-image">
      <div class="song-detail-info">
            <span class="song-name">
              <h2 class="name">{{audioList[currentAudioIndex].name}}</h2>
              <img src="../../../static/images/like2.png" class="likeImage">
            </span>
            <span class="song-singer">
              <span class="name">{{audioList[currentAudioIndex].singer.name}}</span>
              <span class="desc">音效off</span>
              <span class="desc">视频off</span>
            </span>
        <span class="song-text">{{audioList[currentAudioIndex].text}}</span>
      </div>
      <div class="player">
        <div class="player-nav">
          <img src="../../../static/images/microphone.png" class="player-nav-img">
          <!--<img src="../../../static/images/download.png" class="player-nav-img">-->
          <a :href="audioList[currentAudioIndex].url" :download="audioList[currentAudioIndex].name"> <img
            src="../../../static/images/download.png" class="player-nav-img"></a>
          <img src="../../../static/images/comment.png" class="player-nav-img">
          <img src="../../../static/images/operate2.png" class="player-nav-img" style="transform: rotate(90deg)">
        </div>
        <div class="process">
          <!--@mousedown="forwardAudio"-->
          <div class="process-bar" id="process" ref="process"  @mousedown="forwardAudio">
            <div class="hasPlayed" id="hasPlayed" ref="hasPlayed" ></div>
          </div>

        </div>
        <div class="time">
          <span class="start-time" id="now-time">{{currentTime}}</span>
          <span class="end-time" id="all-time">{{duration}}</span>
        </div>
        <audio  class="my-audio" id="my-audio" ref="audio" @durationchange="getAudioInfo" @timeupdate="updateTime" >

          <source   :src="audioList[currentAudioIndex].url">
        </audio>
        <div class="control">
          <img :src="playWayUrl" class="controlImg" @click="changePlayWay" ref="playWay" :title="playWay">
          <img src="../../../static/images/上一首.png" class="controlImg" @click="lastAudio" title="上一首">
          <img src="../../../static/images/play2.png" class="controlImg playImg" id="playOrPause"
               @click="playOrPauseAudio" :title="playState">
          <img src="../../../static/images/nextSong.png" class="controlImg" @click="nextAudio" title="下一首">
          <img src="../../../static/images/songList.png" class="controlImg">

        </div>
      </div>
    </div>
    <div class="recommend-detail-content" ref="tab0">
      <div class="current-song-info">
        <h2 class="title">{{song.name}}</h2>
        <span class="desc">
          <span class="date">{{song.date}}</span>
          <span class="right-text">歌曲详情</span>
        </span>
        <div class="bottom-items">
          <div class="item">
            <img :src="song.image" class="image">
            <span class="name">歌手: {{song.name}}</span>
          </div>
          <div class="item">
            <img :src="song.singer.image" class="image">
            <span class="name">专辑: {{song.album}}</span>
          </div>

        </div>
      </div>
      <div class="related-song-info">
        <div class="title-area">
          <h2 class="title">相关歌曲</h2>
          <img src="../../../static/images/play2.png" class="image">
        </div>
        <div class="related-song-items">
          <div v-for="(item,index) in relatedSongItems" :key="index" class="related-song-item">
            {{item.name}} - {{item.author}}
          </div>
        </div>

      </div>
      <div class="other-version">
        <h2 class="title-area">
          <h2 class="title">其他版本</h2>
          <span class="num">3</span>
          <img src="../../../static/images/down.png" class="image">
        </h2>
        <div class="other-version-items">
          <div class="other-version-item" v-for="(item,index) in otherVersionItems" :key="index">
            <div class="left-area">
              <img :src="item.image" class="image">
              <div class="desc">
                <span class="name">{{item.name}}</span>
                <span class="album">{{item.author}} {{item.album}}</span>
              </div>
            </div>
            <img src="../../../static/images/operate2.png" class="right-image">
          </div>
        </div>
      </div>
      <div class="related-song-list">
        <div class="title-area">
          <h2 class="title">相关歌单</h2>
          <div class="right-area">
            <img src="../../../static/images/Refresh2.png" class="image">
            <span class="text">换一批</span>
          </div>
        </div>
        <div class="song-list-items">
          <div class="song-list-item" v-for="(songList,index) in relatedSongListItems" :key="index">
            <img :src="songList.image" class="image">
            <div class="desc">
              <h2 class="title">{{songList.title}}</h2>
              <span class="num">{{songList.num}}首</span>
            </div>
          </div>
        </div>


      </div>
      <div class="related-video">
        <div class="title-area">
          <h2 class="title">相关视频</h2>
        </div>
        <div class="related-video-items">
          <div class="related-video-item" v-for="(video,index) in relatedVideoItems" :key="index">
            <img src="../../../static/images/MV.png" class="mv-logo">
            <span class="play-times">{{video.playTimes}}</span>
            <img :src="video.image" class="image">

            <div class="desc">
              <h2 class="title">{{video.name}}</h2>
              <span class="name">{{video.author}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Test3",
  created() {

  },
  mounted() {
    document.documentElement.style.height='100%'
    document.body.style.height='100%'
    document.getElementById('app').style.height='100%'
    this.changeTab(1)

  },
  data () {
    return {
      currentTabIndex: 1,
      song: {
        id: 1,
        name: '句号',
        album: 'G.E.M.邓紫棋.摩天动物园',
        image: '../../../static/images/142532536.jpg',
        date: '2019年12月12日发行',
        singer: {id: 1, name: 'G.E.M.邓紫棋', image: '../../../static/images/T001R150x150M000001fNHEf1SFEFN.jpg'},
        text: '可惜了，我们终于来到一个句号',
        url: '../../../static/audio/唐嫣 - 天赋 (Live).mp3'

      },
      audioList: [
        {
          id: 1,
          name: '小幸运',
          album: '我的少女时代 电影原声带',
          image: '../../../static/images/T002R300x300M0000040aH1l3ykBRh.jpg',
          date: '2015-10-21发行',
          singer: {id: 2, name: '田馥甄', image: '../../../static/images/T001R300x300M000001ByAsv3XCdgm.jpg'},
          text: 'Oh 她会有多幸运',
          url: '../../../static/audio/小幸运 - 田馥甄.mp3'
        },
        {
          id: 2,
          name: '天赋',
          album: '锦绣未央 电视剧原声带',
          image: '../../../static/images/T002R300x300M000003ngbki4P4sVT.jpg',
          date: '2016年12月10日发行',
          singer: {id: 1, name: '唐嫣 / 罗晋', image: '../../../static/images/T001R300x300M000000NMBmn2NrEoz.jpg'},
          text: '天赋 (《锦绣未央》电视剧片尾曲) - 唐嫣 (Tiffany Tang)/罗晋',
          url: '../../../static/audio/唐嫣 - 天赋 (Live).mp3'
        },
        {
          id: 3,
          name: '独角戏',
          album: '如果云知道',
          image: '../../../static/images/T002R300x300M000001GISkp1Yzl4z.jpg',
          date: '1996-10-03发行',
          singer: {id: 2, name: '许茹芸', image: '../../../static/images/T001R300x300M0000031dOOZ1zyvZw.jpg'},
          text: '许茹芸 - 独角戏',
          url: '../../../static/audio/许茹芸 - 独角戏.mp3'
        }

      ],
      navItems: ['推荐', '歌曲', '歌词'],
      relatedSongItems: [
        {name: '这就是爱(温柔女生版)', author: '童珺'},
        {name: '这就是爱(温柔女生版)', author: '童珺'},
        {name: '这就是爱(温柔女生版)', author: '童珺'}
      ],
      otherVersionItems: [
        {
          name: '句号(cover:邓紫棋)',
          author: '郑逸凡',
          album: '郑逸凡的翻唱杂集',
          image: '../../../static/images/T002R300x300M000002NFEks3MQGJ4.jpg'
        },
        {
          name: '句号(cover:邓紫棋)',
          author: '郑逸凡',
          album: '郑逸凡的翻唱杂集',
          image: '../../../static/images/T002R300x300M000002NFEks3MQGJ4.jpg'
        },
        {
          name: '句号(cover:邓紫棋)',
          author: '郑逸凡',
          album: '郑逸凡的翻唱杂集',
          image: '../../../static/images/T002R300x300M000002NFEks3MQGJ4.jpg'
        }
      ],
      relatedSongListItems: [
        {title: '流量为王: 短视频热歌合集', image: '../../../static/images/1532535asgsgdshd.jpg', num: 504},
        {title: '流量为王: 短视频热歌合集', image: '../../../static/images/1532535asgsgdshd.jpg', num: 504},
        {title: '流量为王: 短视频热歌合集', image: '../../../static/images/1532535asgsgdshd.jpg', num: 504}
      ],
      relatedVideoItems: [
        {
          name: '句号',
          author: 'G.E.M.邓紫棋',
          image: '../../../static/images/T015R640x360M101003Fk1CR3u9pbX.jpg',
          playTimes: '852.4万'
        },
        {
          name: '句号',
          author: 'G.E.M.邓紫棋',
          image: '../../../static/images/T015R640x360M101003Fk1CR3u9pbX.jpg',
          playTimes: '852.4万'
        }
      ],
      currentAudioIndex: 0,
      duration: '99:99',
      currentTime: '00:00',
      myAudio: '',
      playWay: '顺序播放',
      playWayUrl: '../../../static/images/顺序播放2.png',
      playState: '播放'
    }
  },
  methods: {
    changeTab (index) {
      if (index == 0) {

        /*document.getElementById('app').style.height=''*/
        this.currentTabIndex = 0
        this.$refs.tab0.style.display='block'
        this.$refs.tab1.style.display='none'
        this.$refs.tab2.style.display='none'

      }
      else if (index == 1) {
        /*document.getElementById('app').style.height='100%'*/
        this.currentTabIndex = 1
        this.$refs.tab1.style.display='block'
        this.$refs.tab0.style.display='none'
        this.$refs.tab2.style.display='none'

      }
      else if (index ==2) {
        /*document.getElementById('app').style.height='100%'*/
        this.currentTabIndex = 2
        this.$refs.tab2.style.display='block'
        this.$refs.tab1.style.display='none'
        this.$refs.tab0.style.display='none'
      }


    },
    returnSingerDetail(singerId) {
      this.$router.push({name: 'SingerDetail', params: {id: singerId}})
    },
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
      this.$refs.audio.play()
    },
    pauseAudio() {
      /*const myAudio = document.getElementById('my-audio')
      myAudio.pause()*/
      this.$refs.audio.pause()
    },
    nextAudio() {
      if (this.currentAudioIndex < this.audioList.length - 1) {
        this.currentAudioIndex += 1
      }
      this.$refs.audio.load()
      /*console.log('currentAudioIndex:'+this.currentAudioIndex)*/
    },
    lastAudio() {
      if (this.currentAudioIndex > 0) {
        this.currentAudioIndex -= 1
      }
      this.$refs.audio.load()
      /*console.log('currentAudioIndex:'+this.currentAudioIndex)*/
    },
    getAudioInfo() {
      console.log('getAudioInfo')
      this.duration = Math.floor(this.$refs.audio.duration / 60) + ':' + parseInt(this.$refs.audio.duration % 60)
      /*console.log('this.$refs.audio:'+this.$refs.audio)*/
    },
    updateTime() {

      /*console.log('currentTime:')*/
      /*更改开始暂停图标*/
      if (this.$refs.audio.paused === false) {
        document.getElementById('playOrPause').src = '../../../static/images/暂停4.png'
        this.playState = '暂停'
      } else {
        document.getElementById('playOrPause').src = '../../../static/images/play2.png'
        this.playState = '播放'
      }
      /*设置当前播放的时间*/
      var currentMinute = Math.floor(this.$refs.audio.currentTime / 60)
      var currentSecond = parseInt(this.$refs.audio.currentTime % 60)
      this.currentTime = this.processTime(currentMinute, currentSecond)
      /*在指定区域显示播放的时间*/
      var allMinute = Math.floor(this.$refs.audio.duration / 60)
      var allSecond = parseInt(this.$refs.audio.duration % 60)
      this.duration = this.processTime(allMinute, allSecond)
      document.getElementById('now-time').innerHTML = this.currentTime
      /*Math.floor(this.$refs.audio[0].duration / 60) + ':' + parseInt(this.$refs.audio[0].duration % 60)*/
      document.getElementById('all-time').innerHTML = this.duration
      document.getElementById('hasPlayed').style.width = (this.$refs.audio.currentTime / this.$refs.audio.duration) * document.getElementById('process').clientWidth + 'px'
    },
    processTime(minute, second) {
      if (second < 10) {
        second = '0' + second
      }
      if (minute === 0) {
        minute = '00'
      }
      return minute + ':' + second

    },
    changePlayWay() {
      /*console.log(this.$refs.playWay.src)*/
      if (this.playWay === '顺序播放') {
        this.playWayUrl = '../../../static/images/单曲循环2.png'

        this.playWay = '单曲循环'
        /*alert('已切换到' + this.playWay)*/
      } else if (this.playWay === '单曲循环') {
        this.playWayUrl = '../../../static/images/随机播放2.png'

        this.playWay = '随机播放'
        /* alert('已切换到' + this.playWay)*/
      } else if (this.playWay === '随机播放') {
        this.playWayUrl = '../../../static/images/顺序播放2.png'

        this.playWay = '顺序播放'
        /*alert('已切换到' + this.playWay)*/
      }

    },
    forwardAudio() {

      var event = event || window.event

      console.log( event)
      this.$refs.audio.currentTime = parseInt((event.offsetX / this.$refs.process.clientWidth) * this.$refs.audio.duration)
      console.log('onmouseup')

    }
  }
}
</script>

<style scoped lang="less">
  @fontsize750:50;
  .container{
    height: 100%;
    background-color: rgb(70,61,79);

    .nav{
      height: 5%;
      display: flex;
      justify-content: space-between;
     /* background-color: #000022;*/
      align-items: center;
      padding: 0 24rem /@fontsize750;

      .downImage{
        width: 36rem /@fontsize750;
        height: 36rem /@fontsize750;
      }
      .shareImg{
        width: 36rem /@fontsize750;
        height: 36rem /@fontsize750;
      }
      .list-items{
        margin: 0;
        padding: 0;
        color: rgba(255,255,255,0.8);

        list-style-type: none;
        display: flex;
        .list-item{

        }

      }

    }
    .song-lyric-content{
      width: 100%;
      height: 95%;
      display: flex;
      flex-flow: column nowrap;
      overflow: hidden;

      .top{
        color: rgba(255,255,255,0.8);
        /*background-color: #1ece9f;*/
        height: 8%;
        width: 100%;
        display: flex;
        padding: 0 24rem /@fontsize750;
    /*    align-items: center;*/
        flex-flow: column nowrap;
        .title{
          margin: 0;
          padding: 0;
          font-size: 20rem /@fontsize750;
          height: 50rem /@fontsize750;
          display: flex;
          align-items: center;

        }
        .author{
          flex: 1;
          margin: 0;
          padding: 0;
          font-size: 16rem /@fontsize750;

        }


      }
      .main{
        height: 82%;
        color: rgba(255,255,255,0.8);
        width: 100%;
        overflow-x: auto;
        padding: 0 24rem /@fontsize750;
        background-color: rgb(70,61,79);


      }
      .bottom{


        height: 10%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left-area {
          margin-left: 24rem /@fontsize750;

          .image {
            width: 36rem /@fontsize750;
            height: 36rem /@fontsize750;
            margin-left: 20rem /@fontsize750;
          }


        }

        .right-image {
          width: 36rem /@fontsize750;
          height: 36rem /@fontsize750;
          margin-right: 24rem /@fontsize750;
        }
      }
    }
    .song-detail-content{
      width: 100%;

      display: none;
      height: 95%;
      overflow-y: hidden;

      .banner-image{
        padding: 4% 0;
        width: 90%;
        height: auto;
        max-height: 50%;
        margin: 0 5% ;
        border-radius: 30rem /@fontsize750;

      }
      .song-detail-info{
        height: 20%;

        .song-name {
          width: 90%;
          height: 30%;
          margin: 0 5%;
          display: flex;


          align-items: center;
          justify-content: space-between;

          .name {
            width: 60%;
            margin: 0 ;
            padding: 0;
            color: #ffffff;
            /* height: 50rem /@fontsize750;*/
            /*line-height: 50rem /@fontsize750;*/
          }

          .likeImage {
            width: 48rem /@fontsize750;
            height: 48rem /@fontsize750;

            &:hover {
              cursor: pointer;
            }
          }
        }

        .song-singer {
          height: 25%;
          width: 90%;
          margin: 0 5%;
          /*  height: 30rem /@fontsize750;*/
          /* line-height: 30rem /@fontsize750;*/
          display: flex;
          align-items: center;

          .name {
            color: #dfdcdf;
            font-size: 18rem /@fontsize750;

          }

          .desc {
            padding: 2rem /@fontsize750;
            background-color: #ffffff;
            color: #000022;
            font-size: 14rem /@fontsize750;
            border-radius: 5rem /@fontsize750;
            margin-left: 10rem /@fontsize750;
          }


        }

        .song-text {
          height: 45%;
          width: 90%;
          margin: 0 5%;
          color: #dcdedf;
          font-size: 18rem /@fontsize750;
        }

      }
      .player{
        height: auto;
        .player-nav {
          height: 30%;
          width: 90%;
          margin: 0 5%;
          display: flex;
          justify-content: space-between;

          align-items: center;
          .player-nav-img {
            width: 48rem /@fontsize750;
            height: 48rem /@fontsize750;
            &:hover {
              cursor: pointer;
            }
          }
        }
        .process {
          height: 12.5%;
          width: 90%;
          margin: 4% 2% 1%  5%;
          .process-bar {
            display: flex;

            width: 100%;

            background-color: rgba(0, 0, 0);
            border-radius: 13rem /@fontsize750;

            .hasPlayed {
              width: 0%;
              height: 10rem /@fontsize750;
              background-color: #ffffff;
              border-radius: 13rem /@fontsize750;
            }

          }

        }
        .time {
          height: 12.5%;
          width: 90%;
          margin: 1% 2% 1%  5%;
          align-items: center;
          display: flex;
          justify-content: space-between;

          .start-time {
            color: #ffffff;
            font-size: 14rem /@fontsize750;
          }

          .end-time {
            color: #ffffff;
            font-size: 14rem /@fontsize750;
          }
        }

        .control {
          width: 90%;
          margin: 0 5%;
          height: 45%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .controlImg {
            width: 36rem /@fontsize750;
            height: 36rem /@fontsize750;
            &:hover {
              cursor: pointer;
            }
          }
          .playImg {
            width: 72rem /@fontsize750;
            height: 72rem /@fontsize750;

            &:hover {
              cursor: pointer;
            }
          }

        }

      }



    }
    .recommend-detail-content {
      height: 95%;
      overflow-y: auto;
      width: 702rem /@fontsize750;
      margin: 0 24rem /@fontsize750 0 24rem /@fontsize750;
      position: relative;
     /* background-color: rgb(49, 40, 62);*/
      display: flex;
      flex-flow: column wrap;
      .current-song-info {

       /* background-color: #888;*/
        border: 1rem /@fontsize750 solid #666;
        background-color: #666666;
        width: 700rem /@fontsize750;
        margin: 24rem /@fontsize750 0;
        border-radius: 15rem /@fontsize750;

        .title {
          color: #ffffff;
          font-size: 20rem /@fontsize750;
          margin: 0 0 0 20rem /@fontsize750;
          padding: 0;
          height: 80rem /@fontsize750;
          line-height: 80rem /@fontsize750;

        }

        .desc {
          color: #ffffff;
          font-size: 14rem /@fontsize750;
          height: 50rem /@fontsize750;
          align-items: center;
          display: flex;
          margin: 0 0 0 20rem /@fontsize750;

          .date {
            color: #ffffff;
          }

          .right-text {
            color: #ffffff;
            margin-left: 20rem /@fontsize750;
          }
        }

        .bottom-items {
          margin: 0  20rem /@fontsize750;

          display: flex;
          color: #ffffff;
          width: 662rem /@fontsize750;
          border-top: 1rem /@fontsize750 solid #F1F3F4;

          .item {
            flex: 1;
            display: flex;
            height: 100rem /@fontsize750;
            align-items: center;

            .image {
              width: 36rem /@fontsize750;
              height: 36rem /@fontsize750;
              border-radius: 18rem /@fontsize750;
            }

            .name {
              margin-left: 20rem /@fontsize750;
              font-size: 15rem /@fontsize750;
            }
          }
        }
      }

      .related-song-info {

        border: 1rem /@fontsize750 solid #666;
        background-color: #666666;
        width: 700rem /@fontsize750;
        margin: 22rem /@fontsize750 0;
        border-radius: 15rem /@fontsize750;
        display: flex;
        flex-flow: column wrap;

        .title-area {
          margin: 0 22rem /@fontsize750;
          width: 680rem /@fontsize750;
          display: flex;
          justify-content: space-between;
          align-items: center;

          /*  width: 702rem /@fontsize750;*/

          .title {

            font-size: 20rem /@fontsize750;
            height: 40rem /@fontsize750;
            color: #ffffff;
          }

          .image {
            width: 48rem /@fontsize750;
            height: 48rem /@fontsize750;
            margin-right: 10rem /@fontsize750;
            margin-top: 10rem /@fontsize750;
          }
        }

        .related-song-items {
          margin: 0 22rem /@fontsize750;
          width: 680rem /@fontsize750;
          display: flex;
          flex-flow: column wrap;
          justify-content: center;

          .related-song-item {
            height: 30rem /@fontsize750;
            color: #ffffff;
            font-size: 14rem /@fontsize750;
          }
        }
      }

      .other-version {

        border: 1rem /@fontsize750 solid #666;
        background-color: #666666;
        width: 700rem /@fontsize750;
        margin: 22rem /@fontsize750 0;
        border-radius: 15rem /@fontsize750;
        display: flex;
        flex-flow: column wrap;

        .title-area {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;

          .title {
            color: #ffffff;
            font-size: 20rem /@fontsize750;

            margin: 0 0 0  20rem /@fontsize750;
            padding: 0;

            &:hover {
              cursor: pointer;
            }
          }

          .num {
            color: #ffffff;
            font-size: 20rem /@fontsize750;
            margin-left: 10rem /@fontsize750;

            &:hover {
              cursor: pointer;
            }
          }

          .image {
            width: 20rem /@fontsize750;
            height: 20rem /@fontsize750;
            margin-left: 10rem /@fontsize750;

            &:hover {
              cursor: pointer;
            }
          }
        }

        .other-version-items {
          display: flex;
          flex-flow: column wrap;

          .other-version-item {
            display: flex;
            justify-content: space-between;

            .left-area {
              display: flex;
              align-items: center;
              margin-left: 20rem /@fontsize750;
              height: 120rem /@fontsize750;

              .image {
                width: 100rem /@fontsize750;
                height: 100rem /@fontsize750;
                border-radius: 15rem /@fontsize750;

              }

              .desc {
                display: flex;
                flex-flow: column wrap;
                color: #ffffff;
                margin-left: 20rem /@fontsize750;

                .name {
                  font-size: 18rem /@fontsize750;
                  height: 30rem /@fontsize750;
                }

                .album {
                  font-size: 14rem /@fontsize750;
                  height: 30rem /@fontsize750;
                }


              }
            }

            .right-image {
              width: 18rem /@fontsize750;
              height: 18rem /@fontsize750;
              margin-right: 20rem /@fontsize750;
            }


          }
        }

      }

      .related-song-list {

        border: 1rem /@fontsize750 solid #666;
        background-color: #666666;
        width: 702rem /@fontsize750;
        margin: 22rem /@fontsize750 0;
        border-radius: 15rem /@fontsize750;
        display: flex;
        flex-flow: column wrap;

        .title-area {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .title {
            color: #ffffff;
            font-size: 21rem /@fontsize750;
            margin-left: 20rem /@fontsize750;
          }

          .right-area {
            display: flex;
            align-items: center;
            margin-right: 20rem /@fontsize750;

            .image {
              width: 24rem /@fontsize750;
              height: 24rem /@fontsize750;
            }

            .text {
              margin-left: 10rem /@fontsize750;
              color: #ffffff;
              font-size: 17rem /@fontsize750;
            }
          }
        }

        .song-list-items {
          display: flex;
          flex-flow: column nowrap;

          .song-list-item {
            display: flex;
            height: 135rem /@fontsize750;

            .image {
              width: 120rem /@fontsize750;
              height: 120rem /@fontsize750;
              margin-left: 20rem /@fontsize750;
              border-radius: 15rem /@fontsize750;
            }
          }

          .desc {
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            color: #ffffff;
            margin-left: 20rem /@fontsize750;

            .title {
              margin: 0;
              padding: 0;
              height: 40rem /@fontsize750;

              font-size: 18rem /@fontsize750;
            }

            .num {
              height: 30rem /@fontsize750;
              font-size: 14rem /@fontsize750;
            }
          }
        }


      }

      .related-video {

        border: 1rem /@fontsize750 solid #666;
        background-color: #666666;
        width: 702rem /@fontsize750;
        margin: 22rem /@fontsize750 0;
        border-radius: 15rem /@fontsize750;
        display: flex;
        flex-flow: column wrap;

        .title-area {
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: space-between;

          .title {
            color: #ffffff;
            font-size: 21rem /@fontsize750;
            margin-left: 20rem /@fontsize750;
          }

        }

        .related-video-items {
          display: flex;
          flex-flow: column nowrap;

          .related-video-item {
            display: flex;
            height: 135rem /@fontsize750;
            position: relative;

            .image {
              width: 180rem /@fontsize750;
              height: 120rem /@fontsize750;
              margin-left: 20rem /@fontsize750;
              border-radius: 15rem /@fontsize750;
            }

            .play-times {
              color: #ffffff;
              position: absolute;
              top: 102rem /@fontsize750;
              left: 42rem /@fontsize750;
              font-size: 12rem /@fontsize750;
            }

            .mv-logo {
              position: absolute;
              width: 18rem /@fontsize750;
              height: 18rem /@fontsize750;
              top: 100rem /@fontsize750;
              left: 24rem /@fontsize750;
            }

            .desc {
              display: flex;
              flex-flow: column nowrap;
              color: #ffffff;
              margin-left: 20rem /@fontsize750;

              .title {
                font-size: 21rem /@fontsize750;
                height: 50rem /@fontsize750;
              }

              .name {
                font-size: 14rem /@fontsize750;
                height: 30rem /@fontsize750;
              }
            }
          }


        }


      }

    }
  }
</style>
