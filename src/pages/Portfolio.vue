<template>
    <div>
        <div class="portfolio">
            <div class="navbar">
                <div class="logo">Tyoma</div>
                <div class="navigation">
                    <router-link :to="{ name: 'blog' }">Blog.</router-link>
                    <router-link :to="{ name: 'projects' }">Projects.</router-link>
                    <div class="socials">
                        <ul>
                            <li><a target="_blank" href="https://twitter.com/TyomaMtl"><i class="icon-twitter"></i></a></li>
                            <li><a target="_blank" href="https://github.com/TyomaMtl"><i class="icon-github"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="jumbo">
                <h1>{{ $t('jumbo') }}</h1>
            </div>
        </div>
        <div class="about">
            <div>
                <a href="mailto:hello@tyoma.co">hello@tyoma.co</a>
            </div>
            <div>
                <h3>{{ $t('about') }}</h3>
                <p>{{ $t('description') }}</p>
                <p>{{ $t('skilled') }}</p>
            </div>
        </div>
        <footer>&copy; 2020-2021 - coded with love</footer>
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
.navbar > .navigation {
    display: flex;
    align-items: center;
}
.navbar > .navigation li { display: inline-block; }
.navbar > .navigation > a {
    margin-right: 30px;
    font-family: 'Heebo';
    font-size: 14px;
    text-transform: uppercase;
    text-decoration: none;
    color: #FFF;
}
.navbar > .navigation > a:after {
    content: '';
    display: block;
    width: 30px;
    height: 1px;
    background: #FFF;
    transition: ease-out 0.2s;
}
.navbar > .navigation > a:hover:after { width: 100%; }
.navbar > .navigation > .socials a {
    font-size: 20px;
    margin-right: 10px;
    text-decoration: none;
    color: #FFF;
}
.navbar > .logo {
    font-family: 'Megrim';
    font-size: 30px;
    text-transform: uppercase;
    color: #FFF;
}
</style>