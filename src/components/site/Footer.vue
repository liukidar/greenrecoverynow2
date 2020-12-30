<template>
  <footer id="page-footer" class="page-footer grey darken-4">
    <div class="row">
      <div class="col m4 offset-m1 s12 grey-text text-lighten-2" style="padding:0 .5rem 2rem .5rem">
        <div class="left-align no-wrap" style="margin-top:1rem;display:inline-flex; flex-flow: column; align-items:space-between;">
          <p>
            <i class="left material-icons circle-halo-white">info</i><span class="flow-text"><div>{{infos.infomail}}</div></span>
          </p>
          <p>
            <i class="left material-icons circle-halo-white">email</i><span class="flow-text"><div>{{infos.engagemail}}</div></span>
          </p>
          <div class="card-panel grey lighten-2 z-depth-3">
            <p class="text-important grey-text text-darken-3 flow-text"><small>Supported by: </small><br><br></p>
            <p class="row">
              <img src="/static/imgs/gtc-logo.png" class="col s12 m6">
              <img src="/static/imgs/smith-logo.png" class="col s12 m6">
            </p>
          </div>
        </div>
      </div>
      <div class="col m5 offset-m1 s12 center-align">
        <div class="left-align container">
          <p>
            <span class="flow-text" style="border-left: 4px solid #aaa; padding-left: 12px;">Green Recovery Now</span>
            <span class="flow-text grey-text text-lighten-2">
              <p v-html="text.sections.about.description"></p>
            </span>
          </p>
          <p class="no-wrap">
            <a v-for="(link, social) in infos.socials" :key="social" :href="link" style="display:inline-block; margin-right: 4px;"><i :class="'fa-' + social" class="fa square-halo-white highlight-oh dark"></i></a>
          </p>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        © 2020 - <a download="privacy-policy.pdf" href="/static/privacy-policy.pdf" style="text-decoration: underline;">Privacy Policy</a> - <span @click="$store.commit('resetCookiePreferences')" style="text-decoration: underline;">Reset cookies</span>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('app', ['infos']),
    links() { return this.$store.state.pages.pages },
    text() {
      return this.$store.getters['pages/home/text']
    }
  }
}
</script>

<style>
footer {
  margin-top: auto;
}
.footer-copyright {
  padding-bottom: 4px;
}
</style>
