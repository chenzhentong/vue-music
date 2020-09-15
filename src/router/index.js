import Vue from 'vue'
import Router from 'vue-router'
import index from "../components/MusicHall/index";
import Recommend from "../components/recommend/Recommend";
import MusicDynamics from "../components/dynamics/MusicDynamics";
import User from "../components/user/User";
import SingerList from "../components/MusicHall/SingerList";
import RankingList from "../components/MusicHall/RankingList";
import SingerDetail from "../components/MusicHall/SingerDetail";
import SongDetail from "../components/MusicHall/SongDetail";
import Test1 from "../components/test/Test1";
import SongListDetail from "../components/MusicHall/SongListDetail";
import UserSearch from "../components/MusicHall/UserSearch";
import SearchResult from "../components/MusicHall/SearchResult";
import RecentlyPlayed from "../components/user/RecentlyPlayed";
import UserLiked from "../components/user/UserLiked";
import NewSong from "../components/MusicHall/NewSong";
import DigitalAlbum from "../components/MusicHall/DigitalAlbum";
import Test2 from "../components/test/Test2";
import Test3 from "../components/test/Test3";
import Test4 from "../components/test/Test4";
import SongListCategory from "../components/MusicHall/SongListCategory";
Vue.use(Router)

export default new Router({
  /*base: '/vue/',*/
  mode: 'history',
  routes: [

    {
      path: '/',

      component: index
    },
    {
      path: '/index',

      component: index
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/dynamics',
      name: 'MusicDynamics',
      component: MusicDynamics
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/signerlist',
      name: 'SignerList',
      component: SingerList
    },
    {
      path: '/ranklist',
      name: 'RankingList',
      component: RankingList
    },
    {
      path: '/singer/:id',
      name: 'SingerDetail',
      component: SingerDetail


    },
    {
      path: '/song/:id',
      name: 'SongDetail',
      component: SongDetail
    },
    {
      path: '/test1',
      name: 'Test1',
      component: Test1
    },
    {
      path: '/song/list/:id',
      name: 'SongListDetail',
      component: SongListDetail
    },
    {
      path: '/search',
      name: '/UserSearch',
      component: UserSearch
    },
    {
      path: '/result',
      name: '/SearchResult',
      component: SearchResult
    },
    {
      path: '/recently/played',
      name: 'RecentlyPlayed',
      component: RecentlyPlayed
    },
    {
      path: '/user/liked',
      name: 'UserLiked',
      component: UserLiked
    },
    {
      path: '/newSong',
      name: 'NewSong',
      component: NewSong
    },
    {
      path: '/digitalAlbum',
      name: 'DigitalAlbum',
      component: DigitalAlbum
    },
    {
      path: '/test2',
      name: 'Test2',
      component: Test2
    },
    {
      path: '/test3',
      name: 'Test3',
      component: Test3
    },
    {
      path: '/test4',
      name: 'Test4',
      component: Test4
    },
    {
      path: '/songlist/category',
      name: 'SongListCategory',
      component: SongListCategory
    }
  ]
})
