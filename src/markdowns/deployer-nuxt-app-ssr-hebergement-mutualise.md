# Déployer une app Nuxt.js SSR sur un hébergement mutualisé

En général, les hébergements mutualisés, serveurs partagés ou _share hosting_ en anglais, sont des serveurs _Apache_ avec des langages assez communs pour le serveur, notamment _PHP_. Alors quand on souhaite déployer une application qui fonctionne en _JavaScript_ pour le front mais aussi pour le back, les ennuies commences. Tel est le cas pour une application _Nuxt.js_.

Pour ma part, je possède un hébergement web standard chez [Infomaniak](https://infomaniak.com). Lorsque l'on cherche sur la FAQ d'Infomaniak concernant le support de _Node.js_ on peut lire [_"Pour le moment, Node.js n'est pas disponible avec un hébergement web"_](https://www.infomaniak.com/fr/support/faq/2052/support-de-nodejs).

Pour autant rien nous empêche d'installer _Node Version Manager_ (NVM) pour ensuite intaller `npm` comme ce qui suit

### Installer Node

Connectez-vous en SSH à votre serveur et executez la commande suivante :

```
wget -qO- https://cdn.rawgit.com/creationix/nvm/master/install.sh | bash
```

Lancez la commande suivante :

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

Tapez `npm -v` pour vérifier si node est bien installé. C'est tout bon !

### Déployer et lancer son application
Envoyer les fichiers de votre application sur votre serveur distant (via `ftp` ou `ssh`) puis :
```bash
npm run build
npm run start
```
Un serveur local devrait démmarer : `http://localhost:3000`.

Aucun interêt d'avoir un serveur local en prod, nous allons donc rediriger notre domain à ce serveur local. Pour cela il faut ajouter un fichier `.htaccess` dans lequel on va écrire quelques règles :

```htaccess
RewriteCond %{HTTPS} !on
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]

RewriteCond %{HTTP_HOST} ^mydomain.com$
RewriteRule "(.*.(jpg|gif|png|svg|js|css|woff2))$" "http://127.0.0.1:3000/$1" [P,NC]
RewriteRule ^(.*) "http://127.0.0.1:3000/$2" [P,L]
```

Maintenant, si nous fermons notre terminal, notre serveur s'arrête. Nous allons donc lancer le serveur avec la commande `pm2 start` plutôt que `npm run start`. On peut lire sur la doc (https://nuxtjs.org/docs/2.x/deployment/deployment-pm2) qu'il faut ajouter un fichier `ecosystem.config.js` dans lequel on ajoutera :

```js
module.exports = {
    apps: [
        {
            name: 'NuxtAppName',
            exec_mode: 'cluster',
            instances: 'max', // Or a number of instances
            script: './node_modules/nuxt/bin/nuxt.js',
            args: 'start'
        }
    ]
}
```

Nous pouvons lancer notre serveur : `pm2 start`.

### _All good !!_

### Sources :
- Node sur serveur partagé : https://stackoverflow.com/questions/33322946/install-nodejs-on-shared-server
- pm2 configuration : https://nuxtjs.org/docs/2.x/deployment/deployment-pm2
