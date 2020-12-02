<template>
    <div>
        <div class="topbar">
            <router-link class="logo" :to="{ name: 'portfolio' }">Tyoma</router-link>
        </div>
        <div class="wrapper blog">
            <h1 class="main">Blog</h1>
            <ul>
                <li class="card" v-for="article in articles" :key="article.id">
                    <router-link :to="{ name: 'article', params: { id: article.id }}">{{ article.title }}</router-link>
                    <p class="date">Publié le : {{ article.date }}</p>
                    <p>{{ article.description }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import datas from '../datas'
export default {
    data () {
        return {
            articles: datas['articles']
        }
    }
}
</script>