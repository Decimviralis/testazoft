import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '../pages/main-page/main-page'
import shufflePage from '../pages/shuffle/shuffle'
import infoPage from '../pages/info-page/info-page'
import investPage from '../pages/invest/invest'
import faqPage from '../pages/faq/faq'
//Чтобы подключить страницу (не забудь прописать страницу в routes)
//@import pageName from  'path to pageName'

//чтобы подключить компонент на какую-либо страницу, необходимо его создать или загрузить.
//После этого на нужной странице подключить через @import и после поля data написать - components: { componentName1, [componentName2, ...] }

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: mainPage,

    },
    {
      path: '/shuffle',
      name: 'shuffle',
      component: shufflePage
    },
    {
      path: '/how-it-works',
      name: 'info',
      component: infoPage
    },
    {
      path: '/faq',
      name: 'faq-page',
      component: faqPage
    },
    {
      path: '/invest',
      name: 'invest-page',
      component: investPage
    }
  ],
   mode: 'history'
})
