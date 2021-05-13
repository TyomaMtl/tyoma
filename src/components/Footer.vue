<template>
    <footer :class="dark ? 'dark' : 'light'">&copy; 2020-2021 - coded with love</footer>
</template>

<script>
export default {
    props: {
        dark: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
footer {
    padding: 50px 80px 50px 80px;
    font-family: "Heebo";
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #999;
}
footer.dark { background: var(--dark); }
footer.light { background: #FFF; }
@media screen and (max-width: 480px) {
    footer {
        padding: 20px 20px 20px 20px;
        text-align: center;
    }
}
</style>