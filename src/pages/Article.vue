<template>
    <div>
        <navbar/>
        <div class="byside dark">Here I talk</div>
        <div class="wrapper article">
            <div class="date">{{ article.date }}</div>
            <markdown/>
        </div>
        <footerbar/>
    </div>
</template>

<style scoped>
    @import '../../public/css/hljs/mono-blue.css';
</style>

<script>
import datas from '../datas'
import navbar from '../components/NavBar'
import footer from '../components/Footer'

export default {
    components: {
        navbar,
        footerbar: footer
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