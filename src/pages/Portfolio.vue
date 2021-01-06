<template>
    <div>
        <div class="portfolio">
            <div class="logo">Tyoma</div>
            <div class="socials">
                <ul>
                    <li><a target="_blank" href="https://twitter.com/TyomaMtl"><i class="icon-twitter"></i></a></li>
                    <li><a target="_blank" href="https://github.com/TyomaMtl"><i class="icon-github"></i></a></li>
                </ul>
            </div>
            <div class="jumbo">
                <h1>{{ $t('jumbo') }}</h1>
            </div>
            <router-link class="link blog" :to=" { name: 'blog' }">Blog</router-link>
            <router-link class="link projects" :to=" { name: 'projects' }">{{ $t('projects') }}</router-link>
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