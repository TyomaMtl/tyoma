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
        <div class="services">
            <h3>What I do ?</h3>
            <div class="service-container">
                <div class="service">
                    <i class="icon-html"></i>
                    <h4>HTML to PSD</h4>
                    <ul>
                        <li>Mockup integration</li>
                        <li>Responsive</li>
                    </ul>
                </div>
                <div class="service">
                    <i class="icon-consulting"></i>
                    <h4>Consulting</h4>
                    <ul>
                        <li>PHP Symfony 5 and 4</li>
                        <li>Vue.js</li>
                    </ul>
                </div>
                <div class="service">
                    <i class="icon-terminal"></i>
                    <h4>Tailored</h4>
                    <ul>
                        <li>Web application form scratch</li>
                        <li>E-commerce</li>
                        <li>Back-office</li>
                        <li>Personnal website</li>
                    </ul>
                </div>
                <div class="service">
                    <i class="icon-other"></i>
                    <h4>Others</h4>
                    <ul>
                        <li>Web housing</li>
                        <li>Top level domain reservation</li>
                    </ul>
                </div>
            </div>
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
    </div>
</template>