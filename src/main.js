import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import css from '../public/css/main.css'

Vue.config.productionTip = false

new Vue({
    router,
    css,
    i18n,
    render: h => h(App),
}).$mount('#app')
