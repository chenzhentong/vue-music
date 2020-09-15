import Vue from 'vue'
import Vuex from 'vuex'
// 使用vuex
Vue.use(Vuex)
// 创建vuex实例
const store = new Vuex.Store({
  state: {
    baseUrl: '/music_api'
  },
  getters: {
    getBaseUrl:function (state) {
      return state.baseUrl
    }
  },
  mutations: {
    changeBaseUrlToMusicApi2(state) {
      state.baseUrl = '/music_api2'
    },
    changeBaseUrlToMusicApi(state) {
      state.baseUrl = '/music_api'
    }
  },
  actions: {
    changeBaseUrlToMusicApi2Func (context) {
      context.commit('changeBaseUrlToMusicApi2')
    },
    changeBaseUrlToMusicApiFunc (context) {
      context.commit('changeBaseUrlToMusicApi')
    }
  }

})
export default store //导出store
