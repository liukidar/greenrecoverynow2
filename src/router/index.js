import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Articles from '../pages/Articles'
import Article from '../pages/Article'
import Newsletter from '../pages/Newsletter'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/:target?',
      name: 'Home',
      component: Home
    },
    {
      path: '/email-confirmation/:target?',
      name: 'Newsletter',
      component: Newsletter
    },
    {
      path: '/articles/:target?',
      name: 'Articles',
      component: Articles
    },
    {
      path: '/article/:id/:target?',
      name: 'Article',
      component: Article,
      props: true
    }
  ]
})
