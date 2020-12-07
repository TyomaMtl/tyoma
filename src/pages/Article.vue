<template>
    <div>
        <sidebar/>
        <div class="article-info">
            <router-link class="back" :to="{ name: 'blog' }"><i class="icon-back"></i> Back</router-link>
            <p><i class="icon-clock"></i> <em>{{ article.date }}</em><br>{{ article.lang == 'fr' ? 'Traine your french' : 'This article is in english'}}</p>
            <div class="tags">
                <span v-for="tag in article.tags" :key="tag">#{{ tag }}</span>
            </div>
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
import sidebar from '../components/Sidebar'

export default {
    components: {
        sidebar: sidebar
    },
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