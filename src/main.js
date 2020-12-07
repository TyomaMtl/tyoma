import Vue from 'vue'
import App from './App.vue'
import router from './router'
import css from '../public/css/main.css'
import screen from '../public/css/screen.css'

Vue.config.productionTip = false

new Vue({
    router,
    css,
    screen,
    render: h => h(App),
}).$mount('#app')
