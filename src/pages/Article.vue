<template>
    <div>
        <markdown/>
    </div>
</template>

<script>
import datas from '../datas'

export default {
    beforeCreate() {
        let articles = datas['articles'].filter(article => article.id == this.$route.params.id)[0]
        if (articles != undefined) {
            this.$options.components.markdown = () => import(`../articles/${this.$route.params.id}.md`)
        } else {
            this.$options.components.markdown = () => import(`../articles/default.md`)
        }
    }
}
</script>