<template>
    <div>
        <p>{{ article.title }}</p>
        <p>{{ id }}</p>
        <markdown/>
    </div>
</template>

<script>
import datas from '../datas'

export default {
    data() {
        return {
            id: this.$route.params.id,
        }
    },
    computed: {
        article() {
            return datas['articles'].filter(article => article.id == this.$route.params.id)[0]
        }
    },
    beforeMount() {
        this.$options.components.markdown = () => import(`../articles/${this.$route.params.id}.md`)
    }
}
</script>