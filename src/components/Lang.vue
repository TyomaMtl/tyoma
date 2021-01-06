<template>
    <div>
        <ul>
            <li :class="{ active: this.$i18n.locale == 'fr' ? true : false }" v-on:click="switchFr()">FR</li>
            <li :class="{ active: this.$i18n.locale == 'en' ? true : false }" v-on:click="switchEn()">EN</li>
        </ul>
    </div>
</template>

<script>
export default {
    methods: {
        switchFr: function () {
            this.$i18n.locale = 'fr'
        },
        switchEn: function () {
            this.$i18n.locale = 'en'
        }
    }
}
</script>

<style scoped>
    ul {
        position: absolute;
        top: 50px;
        right: 120px;
        color: white;
    }
    li {
        display: inline-block;
        margin-right: 10px;
        font-family: 'Heebo';
        font-size: 14px;
        letter-spacing: 1.5px;
        cursor: pointer;
    }
    li.active {
        border-bottom: 1px solid white;
    }
</style>