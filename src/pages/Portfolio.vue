<template>
    <div>
        <div class="portfolio">
            <div class="logo">Tyoma</div>
            <div class="socials">
                <ul>
                    <li><a target="_blank" href="https://github.com/TyomaMtl"><i class="icon-github"></i></a></li>
                </ul>
            </div>
            <div class="jumbo">
                <h1>My name is not Tyoma</h1>
            </div>
            <router-link class="link blog" :to=" { name: 'blog' }">Blog</router-link>
            <router-link class="link projects" :to=" { name: 'blog' }">Projects</router-link>
        </div>
    </div>
</template>