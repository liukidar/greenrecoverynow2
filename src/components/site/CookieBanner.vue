<template>
  <transition name="fade">
    <div v-if="this.cookiePreferences == null" class="cmp-cookie-banner card-panel bkg-main-color-dark white-text">
      <div class="flow-text">
        <b>This site uses cookies</b>
        <br>
        <small class="grey-text text-lighten-2">
          We only use essential cookies to allow visitors to access our website; we do not use any additional analytical or marketing cookies.
          <br><br>
          Youtube uses third-party cookies on our website to enable video embedding; these are third-party cookies which you may opt-out of below:
        </small>
        <p style="padding-left: 16px;">
          <a>
            <label>
              <input type="checkbox" value="true" class="filled-in" v-model="options.youtube" />
              <span><big class="white-text">I consent to use of third-party cookies by Youtube.</big></span>
            </label>
          </a>
        </p>
        <div><small class="grey-text text-lighten-2">For more info consult our <a download="privacy-policy.pdf" href="/static/privacy-policy.pdf" style="text-decoration:underline;">privacy policy</a>.</small></div>
        <div class="right-align">
          <a @click="savePreferences()" class="learn-more btn-hm waves-effect">
            CONFIRM SELECTION
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

import { mapState } from 'vuex'

export default {
  data: function() {
    return {
      options: {
        youtube: true
      }
    }
  },
  computed: {
    ...mapState(['cookiePreferences'])
  },
  beforeCreate() {
    this.$store.commit('loadCookiePreferences')
  },
  methods: {
    savePreferences: function() {
      this.$store.commit('setCookiePreferences', this.options)
      window.dispatchEvent(new Event('resize'))
    }
  }
}
</script>

<style scoped>

.cmp-cookie-banner {
  z-index: 990;
  position: fixed;
  bottom: 32px;
  left: 32px;
  max-width: 680px;
}

@media only screen and (max-width: 601px) {
  .cmp-cookie-banner {
    width: 100vw;
    bottom: 0;
    left: 0;
    margin-bottom: 0;
  }
}

.fade-leave-active {
  transition: opacity .5s;
}
.fade-enter-active {
  position: relative;
  transition: opacity .5s;
}
.fade-enter {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}

</style>
