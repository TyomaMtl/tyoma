<template>
    <div id="app">
        <router-view></router-view>
        <lang/>
    </div>
</template>

<script>
import lang from './components/Lang'
export default {
    components: {
        lang: lang
    }
}
</script>