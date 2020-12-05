# Créer un markdown blog avec Vue.js

Pour un site personnel, pourquoi s'embêter avec un back difficile à gérer en ajoutant un back-office vous permettant d'ajouter des articles à l'aide d'un éditeur wysiwing. Vous avez juste à apprendre la syntax du markdown, c'est tout !

Et c'est la particularité de ce site. Il ne possède pas de back-office ni de base de données. La liste des articles est enregistrée dans un basique fichier JSON et le contenu de l'article dans un fichier markdown (.md).

## Configurer un markdown loader
Le loader permet d'interpréter un fichier `.md` de la même manière que vue.js interprete les fichiers `.vue` comme des composants.

Grâce à [Vue markdown loader](https://github.com/QingWei-Li/vue-markdown-loader) nous pourrons charger nos fichiers `.md` pour les utiliser comme des composants `.vue`.

Dans un fichier `vue.config.js` à la racine du projet, on ajoute la configuration suivante :

```js
module.exports = {
    chainWebpack(config){
        config.module.rule('md')
            .test(/\.md/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use('vue-markdown-loader')
            .loader('vue-markdown-loader/lib/markdown-compiler')
            .options({
                raw: true
        })
    }
}
```

## Les articles

Dans un fichier `articles.json` j'enregistre les différentes données de mes articles. Un `id` et un `title`.

```json
{
    "articles": [
        {
            "id": "first-article",
            "title": "First article"
        }
    ]
}
```

Dans un dossier `/markdowns`, je vais stocker mes différents fichiers `.md`. Je créé un fichier `first-article.md` dans ce dossier. **Le nom du fichier correspond à l'id de l'article**.

## Lister les articles

Dans mon router, j'ajoute une nouvelle route `/blog` qui chargera ma page `Blog.vue`.

```js
{
    path: '/blog',
    name: 'blog',
    component: require('Blog.vue').default,
}
```

Dans mon fichier `Blog.vue` j'affiche simplement la liste des articles de mon fichier `articles.json`.

```html js
<template>
    <ul>
        <li v-for="article in articles" :key="article.id">
            <router-link :to="{ name: 'article', params: { id: article.id }}">
                {{ article.title }}
            </router-link>
        </li>
    </ul>
</template>

<script>
import data from 'articles.json'
export default {
    data: function () {
        return {
            articles: data['articles']
        }
    }
}
</script>
```

## Ouvrir l'article

Dans mon router, j'ajoute une nouvelle route `/article/:id` qui prend en parametre l'id d'un article et qui chargera ma page `Article.vue` avec le fichier markdown correspondant.

```js
{
    path: '/blog/:id',
    name: 'article',
    component: require('Article.vue').default
}
```

Pour afficher le contenu de l'article, j'importe mon fichier juste avant que le composant `Article.vue` soit créé. 

Pour cela, je recupère le paramètre d'url `this.$route.params.id` et je recherche l'article correspondant à l'id. Si il existe, j'importe le markdown comme composant que je pourrais ensuite utiliser dans mon `template` grâce à la balise `<markdown/>`. Si l'article n'existe pas, j'importe un fichier `default.md` qui annonce que l'article est introuvable.

```html js
<template>
    <markdown/>
</template>

<script>
export default {
    beforeCreate: function () {
        let articles = datas['articles'].filter(article => article.id == this.$route.params.id)[0]
        if (articles != undefined) {
            this.$options.components.markdown = () => import(`markdowns/${this.$route.params.id}.md`)
        } else {
            this.$options.components.markdown = () => import(`markdowns/default.md`)
        }
    }
}
</script>
```

## Code highlight

Le loader interprete les blocs de code grâce à [Highlight JS](https://highlightjs.org/). L'HTML est donc prêt pour la coloration syntaxique.

Il vous suffit simplement de [trouver une coloration](https://github.com/highlightjs/highlight.js/tree/master/src/styles) qui vous plaît et de l'importer dans votre projet.