import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: 'fr',
    messages: {
        en: {
            jumbo: 'A dev, you found',
            projects: 'Projects',
            about: 'About',
            description: 'I\'m a fullstack developper from France building the web since 2015. I love to create smart, beautiful and simple things. Less is more !',
            skilled: 'I\'m skilled with Vue.js and Symfony 5',
            back: 'back'
        },
        fr: {
            jumbo: 'Je suis un dev',
            projects: 'Projets',
            about: 'A Propos',
            description: 'Je suis un développeur fullstack français passionné par le web depuis 2015. J\'aime créer des choses simples, efficientes et agréable à regarder.',
            skilled: 'Je suis à l\'aise avec Vue.js et Symfony 5',
            back: 'retour',
        }
    }
})

export default i18n