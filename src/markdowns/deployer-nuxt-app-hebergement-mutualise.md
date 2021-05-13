# Déployer une application Nuxt.js sur un hébergement mutualisé

En général, les hébergements mutualisés, serveurs partagés ou _share hosting_ en anglais, sont des serveurs _Apache_ avec _PHP_ installé par défaut. Lorsqu'on souhaite déployer une application qui fonctionne entièrement en _JavaScript_, côté client et côté serveur, les choses se compliquent. Tel est le cas pour une application _Nuxt.js_.

Pour ma part, je possède un hébergement web standard chez [Infomaniak](https://infomaniak.com).

Lorsqu'on cherche sur la FAQ d'Infomaniak concernant le support de _Node.js_ on peut lire : [_"Pour le moment, Node.js n'est pas disponible avec un hébergement web"_](https://www.infomaniak.com/fr/support/faq/2052/support-de-nodejs).

Pour autant rien nous empêche d'installer _Node Version Manager_ (NVM) pour ensuite installer `npm` comme ce qui suit.

## Installer Node
Connectez-vous en SSH à votre serveur et exécutez la commande suivante :

```
wget -qO- https://cdn.rawgit.com/creationix/nvm/master/install.sh | bash
```

Exportez la commande `nvm` dans le bash :

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```

Puis,

```
nvm install node
nvm use node
```

Tapez `npm -v` pour vérifier si node est bien installé. Si c'est le cas, tout est bon !

## Déployer l'application
Envoyez les fichiers de votre application sur votre serveur distant (via `ftp` ou `ssh`). N'oubliez pas d'installer les dépendances. Puis compilez et démarrez l'application :
```bash
npm run build
npm run start
```
Un serveur local devrait démarrer : `http://localhost:3000`.

Aucun intérêt d'avoir un serveur local en production, nous allons donc rediriger notre nom de domaine vers `localhost`. Pour cela il faut ajouter un fichier `.htaccess` dans lequel nous allons écrire les règles suivantes :

```htaccess
RewriteCond %{HTTP_HOST} ^exemple.com$
RewriteRule "(.*.(jpg|gif|png|svg|js|css|woff2))$" "http://127.0.0.1:3000/$1" [P,NC]
RewriteRule ^(.*) "http://127.0.0.1:3000/$2" [P,L]
```

## Lancer l'application avec pm2
Si nous fermons notre terminal, notre serveur s'arrête. Nous allons donc lancer le serveur avec la commande `pm2 start` plutôt que `npm run start`. On peut lire sur la [documentation](https://nuxtjs.org/docs/2.x/deployment/deployment-pm2) qu'il faut ajouter un fichier `ecosystem.config.js` dans lequel on ajoutera :

```js
module.exports = {
    apps: [
        {
            name: 'NuxtAppName',
            exec_mode: 'cluster',
            instances: 'max',
            script: './node_modules/nuxt/bin/nuxt.js',
            args: 'start'
        }
    ]
}
```

Nous pouvons lancer notre serveur avec la commande suivante : `pm2 start`.

### _All good !!_

### Sources
- [Node sur serveur partagé](https://stackoverflow.com/questions/33322946/install-nodejs-on-shared-server])
- [Redirection locahost](https://stackoverflow.com/questions/56054713/nuxt-js-server-deployment-how-to-redirect-url-to-localhost3000-using-htaccess)
- [pm2 configuration](https://nuxtjs.org/docs/2.x/deployment/deployment-pm2)
