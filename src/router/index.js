import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'portfolio',
            component: require('../pages/Portfolio.vue').default
        },
        {
            path: '/blog',
            name: 'blog',
            component: require('../pages/Blog.vue').default
        },
        {
            path: '/blog/:id',
            name: 'article',
            component: require('../pages/Article.vue').default
        },
        {
            path: '/projects',
            name: 'projects',
            component: require('../pages/Projects.vue').default
        }
    ]
})

export default router