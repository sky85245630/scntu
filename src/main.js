import Vue from 'vue'
import App from './App.vue'
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'
import VueI18n from 'vue-i18n'

// 自訂語言檔
import en from './i18n/en'
import tw from './i18n/tw'

Vue.use(VueI18n)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


// 建立 VueI18n 實體
const i18n = new VueI18n({
  locale: 'tw',
  messages: {
    en,
    tw
  }
})

// this.$bus.$on("QQ", e => {
//   console.log("bus", e)
// })

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')

export default i18n