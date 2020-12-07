<template>
    <div>
        <sidebar/>
        <div class="wrapper blog">
            <h1 class="main">Blog</h1>
            <ul>
                <li class="card" v-for="article in articles" :key="article.id">
                    <router-link :to="{ name: 'article', params: { id: article.id }}">{{ article.title }}</router-link>
                    <p class="date"><i class="icon-clock"></i> {{ article.date }}</p>
                    <p>{{ article.description }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import datas from '../datas'
import sidebar from '../components/Sidebar'

export default {
    components: {
        sidebar: sidebar
    },
    data () {
        return {
            articles: datas['articles']
        }
    }
}
</script>