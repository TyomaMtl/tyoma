<template>
    <div>
        <div class="topbar">
            <router-link class="logo" :to="{ name: 'portfolio' }">Tyoma</router-link>
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
    beforeCreate() {
        let articles = datas['articles'].filter(article => article.id == this.$route.params.id)[0]
        if (articles != undefined) {
            this.$options.components.markdown = () => import(`../markdowns/${this.$route.params.id}.md`)
        } else {
            this.$options.components.markdown = () => import(`../markdowns/default.md`)
        }
    }
}
</script>