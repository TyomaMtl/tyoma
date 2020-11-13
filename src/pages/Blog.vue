<template>
    <div>
        <h1>Blog</h1>
        <ul>
            <li v-for="article in articles" :key="article.id">
                <router-link :to="{ name: 'article', params: { id: article.id }}">{{ article.title }}</router-link>
            </li>
        </ul>
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