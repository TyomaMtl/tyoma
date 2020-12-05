import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'portfolio',
            component: require('../pages/Portfolio.vue').default,
            meta: {
                title: 'Portfolio - Tyoma Fullstack Developper'
            }
        },
        {
            path: '/blog',
            name: 'blog',
            component: require('../pages/Blog.vue').default,
            meta: {
                title: 'Blog - Tyoma'
            }
        },
        {
            path: '/blog/:id',
            name: 'article',
            component: require('../pages/Article.vue').default
        },
        {
            path: '/projects',
            name: 'projects',
            component: require('../pages/Projects.vue').default,
            meta: {
                title: 'Projects - Tyoma Fullstack Developper'
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title ?? 'Tyoma'
    next()
})

export default router