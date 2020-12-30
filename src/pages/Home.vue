<template>
  <div>
    <div class="full-screen vertical-flex" style="overflow: hidden;">
      <img v-for="el in slider" :key="el" :src="'static/imgs/'+ el" style="position:absolute; width: 0px; height: 0px;" />
      <slider :indicators="false" class="flex-filler" style="pointer-events:none;">
        <tile v-for="el in slider" :key="el" class="flex-filler" :bkg="'static/imgs/'+ el">
        </tile>
      </slider>
      <div id="header" class="absolute-center-aligned vertical-flex center">
        <page-header :loaded="loaded" to="about" class="white-text text-important center-align">
          <template slot="title"><span v-html="text.title"></span></template>
          <template slot="subtitle">{{text.subtitle}}</template>
          <template slot="description">{{text.description}}</template>
        </page-header>
        <copyright class="white-text hide-on-small-only"></copyright>
        <div id="header-sidebar" class="hide-on-small-only flex-filler vertical-flex middle">
          <div class="vr white flex-filler"></div>
          <div class="flex-fixed hide-on-small-only">
            <a class="waves-effect waves-light" v-for="(link, social) in infos.socials" :key="social" :href="link" style="display:block; margin: 12px 0; padding: 12px; border-radius:100%;"><i :class="'fa-' + social" class="fa white-text"></i></a>
          </div>
          <div class="vr white flex-filler"></div>
        </div>
      </div>
    </div>
    <layer id="about" class="section">
      <div class="section" slot-scope="layer" style="margin-bottom: 0;">
        <div class="container center-align">
          <h2 class="grey-text text-darken-3 title text-important">{{text.sections.about.title}}</h2>
        </div>
        <div class="white center-align container">
          <a class="waves-effect" v-for="(link, social) in infos.socials" :key="social" :href="link" style="display:inline-block; margin: 0 12px; padding: 12px; border-radius:100%;"><i :class="'fa-' + social" class="fa grey-text"></i></a>
          <div class="flow-text" v-html="text.sections.about.description"></div>
        </div>
        <div class="row section">
          <div class="col col-margin s12 m4 center-align">
            <span class="btn-hm dark text-important" @click="(e) => layer.set(e, 'design', 'white')">VALUES</span>
          </div>
          <div class="col col-margin s12 m4 center-align">
            <span class="btn-hm dark text-important" @click="(e) => layer.set(e, 'renovation', 'white')">OBJECTIVES</span>
          </div>
          <div class="col col-margin s12 m4 center-align">
            <span class="btn-hm dark text-important" @click="(e) => layer.set(e, 'building', 'white')">PEOPLE</span>
          </div>
        </div>
      </div>
      <div class="center-align vertical-flex" slot="design" slot-scope="layer">
        <div class="card-padding flex-filler background-contain"> <!-- :style="'background-image: url(static/imgs/project1.png);'" -->
          <div class="section">
            <h4 class="text-important">Values</h4>
            <div class="grey" style="display: inline-block; width: 28px; height: 3px; margin:4px auto 16px auto;"></div>
            <div class="flow-text">
              We believe in treating everyone and the environment with dignity and respect and aim to champion the contribution of all towards achieving a greener and fairer world.  We stand against all forms of intolerance - be it racism, sexism, hostility towards religion and others - and we are against all forms of violence.
            </div>
          </div>
          <div style="margin: 0 auto;">
            <i class="material-icons close-arrow btn-hm dark waves-effect waves-light" @click="(e) => layer.set(e, null, 'white')">arrow_back</i>
          </div>
        </div>
      </div>
      <div class="center-align vertical-flex" slot="renovation" slot-scope="layer">
        <div class="card-padding flex-filler background-contain">
          <div class="section">
            <h4 class="text-important">Objectives</h4>
            <div class="grey" style="display: inline-block; width: 28px; height: 3px; margin:4px 0 16px 0;"></div>
            <div class="flow-text">
              We want governments to adopt a green and fair recovery from Covid-19. We provide access to research to raise awareness of the need to place tackling climate change at the centre of recovery plans.
            </div>
          </div>
          <div style="margin: 0 auto;">
            <i class="material-icons close-arrow btn-hm dark waves-effect waves-light" @click="(e) => layer.set(e, null, 'white')">arrow_back</i>
          </div>
        </div>
      </div>
      <div class="center-align vertical-flex" slot="building" slot-scope="layer">
        <div class="card-padding flex-filler background-contain">
          <div class="section">
            <h4 class="text-important">People</h4>
            <div class="grey" style="display: inline-block; width: 28px; height: 3px; margin:4px 0 16px 0;"></div>
            <div class="flow-text">
              We are a multicultural team of over 20 Oxford University students from over 10 countries, 5 continents and many academic disciplines, but with a shared determination to take action on climate change. Our team includes environmental scientists, social scientists, economists, development specialists and many more.
              The Covid-19 pandemic has brought us together in this common endeavour to fight for a green and fair recovery, to reduce inequalities within and between countries and to safeguard our futures and those of the future generations.
            </div>
          </div>
          <div style="margin: 0 auto;">
            <i class="material-icons close-arrow btn-hm dark waves-effect waves-light" @click="(e) => layer.set(e, null, 'white')">arrow_back</i>
          </div>
        </div>
      </div>
    </layer>
    <template v-if="cookie('youtube')">
      <iframe style="height: 600px; max-height: 120vw; display: block; max-width: 100vw; margin: 0 auto; width:600px;" src="https://www.youtube.com/embed/vnby3-4xN4U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="container center-align">
        <div class="row">
          <br>
          <p class="text-important"><span class="flow-text">Share on social media:</span>
            <ShareNetwork v-for="(link, social) in infos.socials" :key="social"
              :network="social"
              url="https://greenrecoverynow.org"
              title="Green Recovery Now"
              description="Green Recovery Now is an Oxford University student-led movement. We feel passionately that the climate crisis must be tackled urgently and we want to make use of research and our connections to support the argument for a global Green and Fair Recovery from Covid-19."
              hashtags="#greenrecoverynow"
            >
              <a class="circle-halo grey darken-3 white-text z-depth-3 waves-effect"><i class="fa" :class="'fa-' + social"></i></a>
            </ShareNetwork>
          </p>
        </div>
      </div>
    </template>
    <div id="infos" class="section">
      <div class="container center-align"><h2 class="grey-text text-darken-3 title text-important">{{text.sections.infos.title}}</h2></div>
      <div class="white container">
        <div class="flow-text" v-html="text.sections.infos.description">
        </div>
        <div class="flow-text">
          <p><b>Contacts:</b></p>
          <ul class="browser-default">
            <li>If you would like to know more about the movement or you would like to collaborate with us (as an individual, organization, university society etc.) please email us here: <b><a href="mailto:info@greenrecoverynow.org">info@greenrecoverynow.org</a></b></li>
            <li>If you are an Oxford University student and would like to commit some time to help (in outreach, website, research, social media etc.) please email us here: <b><a href="mailto:engage@greenrecoverynow.org">engage@greenrecoverynow.org</a></b></li>
          </ul>
        </div>
        <div class="container vertical-flex middle">
          <br><br>
          <iframe class="mj-w-res-iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://app.mailjet.com/widget/iframe/6dXB/GvW" width="100%" style="max-width: 780px;"></iframe>
        </div>
      </div>
    </div>
    <div id="news" class="section grey darken-3 z-depth-3">
      <div class="container center-align">
        <h2 class="white-text title text-important">
          {{text.sections.news.title}}
        </h2>
        <p class="flow-text white-text"><i>Explore the pictures to find out more about key resources!</i></p><br><br>
      </div>
      <masonry class="row container" ref="masonry" style="padding-bottom: 8rem;">
        <div v-for="article in images" :key="article.ID" class="border no-padding" :class="article.style">
          <tile
            class="z-depth-2"
            :bkg="article.img"
            :to="article.link">
            <div slot="title">{{article.title}}</div>
            <div slot="desc">
              <blockquote class="hide-on-med-and-down truncate" style="margin-top: 0;">{{article.subtitle}}</blockquote>
              <div v-for="(tag, index) in article.tags" :key="index" class="chip z-depth-1">
                {{tag}}
              </div>
            </div>
          </tile>
        </div>
      </masonry>
    </div>
  </div>
</template>

<script>
import { Layer, Map as GoogleMap, Masonry, Parallax, Slider, Paper, PaperContainer, TrSlideIn } from 'cmps/lib'
import { Card, Tile, Person, CardPerson, PageHeader, Copyright, CapitalizeOh, Preview } from 'cmps/site'

import Login from './home/Login'
import { mapState } from 'vuex'

import { ShareNetwork } from '../../node_modules/vue-social-sharing/dist/vue-social-sharing'
export default {
  props: {
    loaded: {
      default: false
    }
  },
  data: function() {
    return {
      slider: [
        'bkg1.jpeg',
        'bkg2.jpeg'
      ],
      // eslint-disable-next-line
      images: {"1":{"ID":"2","title":"Covid-19 fiscal recovery","subtitle":"Smith School","highlight":"1","description":"Will Covid-19 fiscal recovery packages accelerate or retard progress on climate change ?","img":"/static/imgs/proj1.jpg","style":"col s12 m6 l4 r1-1 ","tags":[], "link": "https://www.smithschool.ox.ac.uk/publications/wpapers/workingpaper20-02.pdf"},
        // eslint-disable-next-line
        "5":{"ID":"5","title":"Learning for a green recovery","subtitle":"UN Environment Programme","highlight":"1","description":"","img":"/static/imgs/proj2.jpg","style":"col s6 m4 l3 r1-1","tags":[], "link": "https://www.unenvironment.org/news-and-stories/story/learning-green-recovery"},
        // eslint-disable-next-line
        "6":{"ID":"7","title":"A Green Recovery","subtitle":"Greenpeace","highlight":"1","description":"","img":"/static/imgs/proj3.jpg","style":"col s6 m4 l3 r2-1","tags":[], "link": "https://www.greenpeace.org.uk/wp-content/uploads/2020/06/A-green-recovery-how-we-get-there-Greenpeace-UK.pdf"},
        // eslint-disable-next-line
        "7":{"ID":"6","title":"A Green and Just Recovery","subtitle":"WWF","highlight":"1","description":"","img":"/static/imgs/proj4.jpg","style":"col s6 m4 l3 r1-1","tags":[], "link": "https://www.wwf.eu/what_we_do/eu_affairs/green_just_recovery/"},
        // eslint-disable-next-line
        "4":{"ID":"4","title":"BBC: Green Recovery","subtitle":"BBC","highlight":"1","description":"","img":"/static/imgs/proj5.jpg","style":"col s6 m4 l3 r1-2","tags":[], "link": "https://www.youtube.com/watch?v=lH98_n_VdCM&feature=youtu.be"}},
      login: false
    }
  },
  methods: {
    sendRequest() {
      this.api.request('POST', 'info', { action: 'request-infos', mail: this.requestMail, msg: this.requestMsg, name: this.requestName, surname: this.requestSurname },
        (j) => {
          if (j.r === true) {
            M.toast({html: 'La tua richiesta è stata inviata'})
            this.requestMsg = null
          }
        }
      )
    }
  },
  mounted() {
    // eslint-disable-next-line
    iFrameResize({}, '.mj-w-res-iframe')
  },
  computed: {
    ...mapState(['api', 'title', 'accessFlag', 'cookiePreferences']),
    ...mapState('app', ['infos']),
    text() {
      return this.$store.getters['pages/home/text']
    },
    articles() {
      return this.$store.getters['pages/articles/listHighlights']
    },
    cookie() {
      return (name) => (this.cookiePreferences ? this.cookiePreferences[name] : null)
    }
  },
  components: {
    ShareNetwork,
    PageHeader,
    Masonry,
    Card,
    Parallax,
    Paper,
    Person,
    CardPerson,
    Slider,
    PaperContainer,
    CapitalizeOh,
    Copyright,
    Tile,
    GoogleMap,
    Layer,
    TrSlideIn,
    Login,
    Preview
  }
}
</script>

<style scoped>
.quote {
  padding:80px 0;
  box-shadow: inset 0px 30px 40px -30px rgba(0,0,0,1), inset 0px -30px 40px -30px rgba(0,0,0,1);
}

#header {
  background: rgba(0,0,0,0.5);
  overflow:hidden;
  padding-bottom: 4rem;
}

#header-sidebar {
  height:100%;
  position:absolute;
  top:0;
  right: 42px;
}

.cmp-login {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
}
.login-leave-active, .login-enter-active {
  transition: .75s;
}
.login-enter, .login-leave-to {
  transform: scale(0);
  top: 100%;
  left: 100%;
  opacity: 0;
}
</style>
