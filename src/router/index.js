import Vue from 'vue'
import Router from 'vue-router'
import newAddress from '../pages/new-address-page/new-address-page'
import changeAddress from '../pages/address-change-page/address-change-page'
import addressList from '../pages/address-list-page/address-list-page'
//Чтобы подключить страницу (не забудь прописать страницу в routes)
//@import pageName from  'path to pageName'

//чтобы подключить компонент на какую-либо страницу, необходимо его создать или загрузить.
//После этого на нужной странице подключить через @import и после поля data написать - components: { componentName1, [componentName2, ...] }

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'new-address',
      component: newAddress,

    },
    {
      path: '/address-change/:id',
      name: 'address-change',
      component: changeAddress
    },
    {
      path: '/address-list',
      name: 'address-list',
      component: addressList
    }
  ],
   mode: 'history'
})
