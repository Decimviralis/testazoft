import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '../pages/main-page/main-page'
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
    }
  ],
   mode: 'history'
})
