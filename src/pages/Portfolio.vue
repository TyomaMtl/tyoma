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
                <div class="byside light">Who I am ?</div>
                <h1>{{ $t('jumbo') }}</h1>
            </div>
        </div>
        <div class="about">
            <div>
                <a href="mailto:hello@tyoma.co">hello@tyoma.co</a>
            </div>
            <div>
                <p>Je suis un <span>dev, front, back, fullstack…</span> a vrai dire je ne sais pas moi-même. Du moment que créer quelque chose ! 
                Mais je maîtrise plutôt bien <span>Vue.js</span> et <span>Symfony 5</span>. J’ai une mascotte aussi, c’est le merle noir. 
                Pourquoi ? Parce que je suis fasciné d'entendre cet oiseau chanter. Mais ça, vous vous en foutez ! Vous voulez savoir si je sais 
                coder. Normalement oui ! Mais tout ce que je fais ça bug ! Mais tant pis c’est comme ça que j’ai appris depuis que j’ai quinze ans. 
                Aujourd’hui je sais faire des applications web à-peu-près fonctionnelles avec du Symfony 5, du Vue.js et <span>Nuxt.js</span>. 
                Je bidouille des choses avec du JavaScript du Python lorsque je m’ennuie, donc pas souvent !</p>
            </div>
        </div>
        <footerbar :dark="true"/>
    </div>
</template>

<script>
import footer from '../components/Footer'
export default {
    components: {
        footerbar: footer
    }
}
</script>

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