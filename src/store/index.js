import Vue from 'vue'
import Vuex from 'vuex'
import { module as app } from './modules/app'
import { module as pages } from './modules/pages'
import { module as scroll } from 'cmps/lib/ScrollWrap'
import { module as sourcedmng } from 'cmps/lib/sourced/SourcedMng'
import { module as filemanager } from 'cmps/site/Filemanager'

Vue.use(Vuex)
Vue.use(require('vue-cookies'))
Vue.$cookies.config('30d')

export default new Vuex.Store({
  state: {
    api: null,
    accessFlag: '',
    title: 'GreenRecoveryNow',
    supportedLangs: ['it'],
    lang: 'it',
    cookiePreferences: null
  },
  mutations: {
    changeLang(state, payload) {
      state.lang = state.supportedLangs[payload]
    },
    setCookiePreferences(state, payload) {
      Vue.$cookies.set('cookie_opt', payload)
      state.cookiePreferences = payload
    },
    loadCookiePreferences(state) {
      state.cookiePreferences = Vue.$cookies.get('cookie_opt')
      Vue.$cookies.set('cookie_opt', state.cookiePreferences)
    },
    resetCookiePreferences(state) {
      Vue.$cookies.remove('cookie_opt')
      location.reload()
    }
  },
  modules: {
    app,
    scroll,
    pages,
    filemanager,
    sourcedmng
  }
})
