<template>
    <div class="navbar">
        <router-link :to="{ name: 'blog' }">Blog.</router-link>
        <router-link class="logo" :to="{ name: 'portfolio' }">Tyoma</router-link>
        <router-link :to="{ name: 'projects' }">Projects.</router-link>
    </div>
</template>

<style scoped>
.navbar {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    padding: 50px 80px 50px 80px;
    width: 100%;
}
.navbar > .logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-family: 'Megrim';
    font-size: 30px;
    text-transform: uppercase;
    text-decoration: none;
    color: #000;
}
.navbar > a:first-child, .navbar > a:last-child {
    font-family: 'Heebo';
    font-size: 14px;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--dark);
}
.navbar > a:first-child:after, .navbar > a:last-child:after {
    content: '';
    display: block;
    width: 30px;
    height: 1px;
    background: var(--dark);
    transition: ease-out 0.2s;
}
.navbar > a:first-child:hover:after, .navbar > a:last-child:hover:after { width: 100%; }
.navbar > a:last-child{ text-align: right; }
</style>