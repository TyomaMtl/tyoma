<template>
    <div>
        <navbar/>
        <div class="byside dark">Here I talk</div>
        <div class="wrapper blog">
            <h1 class="main">Blog</h1>
            <ul>
                <li class="card" v-for="article in articles" :key="article.id">
                    <p class="number">Article nr. {{ article.number }}</p>
                    <router-link class="link" :to="{ name: 'article', params: { id: article.id }}">{{ article.title }}</router-link>
                    <p class="description">{{ article.description }}</p>
                    <router-link class="more" :to="{ name: 'article', params: { id: article.id }}">Read more</router-link>
                </li>
            </ul>
        </div>
        <footerbar/>
    </div>
</template>

<script>
import datas from '../datas'
import navbar from '../components/NavBar'
import footer from '../components/Footer'

export default {
    components: {
        navbar,
        footerbar: footer
    },
    data () {
        return {
            articles: datas['articles']
        }
    }
}
</script>