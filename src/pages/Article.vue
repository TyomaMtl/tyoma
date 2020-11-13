<template>
    <div>
        <p>{{ article.title }}</p>
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
            return datas['articles'].filter(article => article.id == this.id)[0]
        }
    }
}
</script>