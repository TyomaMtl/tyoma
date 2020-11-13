<template>
    <div>
        <p>{{ article.title }}</p>
        <p>{{ id }}</p>
        <md/>
    </div>
</template>

<script>
import datas from '../datas'

export default {
    components: { md: () => import(`../articles/first-test-article.md`) },
    data() {
        return {
            id: this.$route.params.id,
        }
    },
    computed: {
        article() {
            return datas['articles'].filter(article => article.id == this.$route.params.id)[0]
        }
    }
}
</script>