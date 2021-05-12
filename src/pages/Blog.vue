<template>
    <div>
        <navbar/>
        <div class="byside dark">Here I talk</div>
        <div class="wrapper blog">
            <h1 class="main">Blog</h1>
            <ul>
                <li class="card" v-for="article in articles" :key="article.id">
                    <p>Article nr. 001</p>
                    <router-link :to="{ name: 'article', params: { id: article.id }}">{{ article.title }}</router-link>
                    <p class="date"><i class="icon-clock"></i> {{ article.date }}</p>
                    <p>{{ article.description }}</p>
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