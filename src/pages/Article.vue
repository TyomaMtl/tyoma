<template>
    <div>
        <div class="topbar">
            <router-link class="logo" :to="{ name: 'portfolio' }">Tyoma</router-link>
        </div>
        <div class="article-info">
            <router-link class="back" :to="{ name: 'blog' }"><i class="icon-back"></i> Back</router-link>
            <p>Publié le <em>{{ article.date }}</em><br>{{ article.lang == 'fr' ? 'Traine your french' : 'This article is in english'}}</p>
            <div class="tags">
                <span v-for="tag in article.tags" :key="tag">#{{ tag }}</span>
            </div>
            <h4>Follow Me</h4>
            <ul>
                <li><a target="_blank" href="https://twitter.com/TyomaMtl"><i class="icon-twitter"></i> Twitter</a></li>
                <li><a target="_blank" href="https://github.com/TyomaMtl"><i class="icon-github"></i> Github</a></li>
            </ul>
        </div>
        <div class="wrapper article">
            <markdown/>
        </div>
    </div>
</template>

<style scoped>
    @import '../../public/css/hljs/mono-blue.css';
</style>

<script>
import datas from '../datas'

export default {
    beforeCreate: function () {
        let articles = datas['articles'].filter(article => article.id == this.$route.params.id)[0]
        if (articles != undefined) {
            this.$options.components.markdown = () => import(`../markdowns/${this.$route.params.id}.md`)
            document.title = articles.title + ' - Tyoma'
        } else {
            this.$options.components.markdown = () => import(`../markdowns/default.md`)
        }
    },
    data: function () {
        return {
            article: datas['articles'].filter(article => article.id == this.$route.params.id)[0]
        }
    }
}
</script>