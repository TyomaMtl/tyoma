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
            <router-link class="link projects" :to=" { name: 'projects' }">Projects</router-link>
        </div>
        <div class="about">
            <div>
                <a href="mailto:hello@tyoma.co">hello@tyoma.co</a>
            </div>
            <div>
                <h3>About</h3>
                <p>My name is not Tyoma</p> 
                <p>I'm a fullstack developper from France. I create tailored website and help you turning your ideas into real digital project</p>
            </div>
        </div>
        <footer>&copy; 2020 - coded with love</footer>
    </div>
</template>