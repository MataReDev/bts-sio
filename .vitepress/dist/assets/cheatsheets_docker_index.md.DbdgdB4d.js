import{_ as s,c as e,o as a,U as i}from"./chunks/framework.aGaNZw_P.js";const g=JSON.parse('{"title":"Aide mémoire Docker","description":"Aide mémoire Docker","frontmatter":{"description":"Aide mémoire Docker"},"headers":[],"relativePath":"cheatsheets/docker/index.md","filePath":"cheatsheets/docker/index.md","lastUpdated":1704112852000}'),n={name:"cheatsheets/docker/index.md"},l=i(`<h1 id="aide-memoire-docker" tabindex="-1">Aide mémoire Docker <a class="header-anchor" href="#aide-memoire-docker" aria-label="Permalink to &quot;Aide mémoire Docker&quot;">​</a></h1><p>Vous trouverez ici les commandes de base pour utiliser Docker et Docker Compose.</p><details class="details custom-block"><summary>Sommaire</summary><nav class="table-of-contents"><ul><li><a href="#installation">Installation</a><ul><li><a href="#windows">Windows</a></li><li><a href="#macos">MacOS</a></li><li><a href="#linux-debian-ubuntu">Linux (Debian/Ubuntu)</a></li></ul></li><li><a href="#les-images">Les images</a><ul><li><a href="#recherche">Recherche</a></li><li><a href="#recuperer-une-image">Récupérer une image</a></li></ul></li><li><a href="#lancer-un-conteneur">Lancer un conteneur</a></li><li><a href="#quelques-parametres-de-la-ligne-de-commande">Quelques paramètres de la ligne de commande</a></li><li><a href="#les-logs">Les Logs</a><ul><li><a href="#afficher-les-logs">Afficher les logs</a></li><li><a href="#afficher-et-suivre-les-logs">Afficher et suivre les logs</a></li></ul></li><li><a href="#statistiques-configuration">Statistiques / Configuration</a><ul><li><a href="#statistique-du-conteuner">Statistique du conteuner</a></li><li><a href="#les-processus-du-conteneur">Les processus du conteneur</a></li><li><a href="#le-s-port-s-expose-s">Le(s) port(s) exposé(s)</a></li><li><a href="#voir-les-changements-dans-le-conteneur">Voir les changements dans le conteneur</a></li><li><a href="#supprimer-les-images-container-plus-utilisees">Supprimer les images / container plus utilisées</a></li></ul></li><li><a href="#les-images-1">Les images</a><ul><li><a href="#liste">Liste</a></li><li><a href="#suppression">Suppression</a></li><li><a href="#creer-une-image-depuis-un-conteneur">Créer une image depuis un conteneur</a></li><li><a href="#le-dockerfile">Le Dockerfile</a></li></ul></li><li><a href="#nettoyage">Nettoyage</a><ul><li><a href="#suppression-des-image-s-conteneur-s-non-utilise-s">Suppression des image(s), conteneur(s) non utilisé(s)</a></li></ul></li><li><a href="#docker-compose">Docker Compose</a><ul><li><a href="#lancer-une-stack">Lancer une stack</a></li><li><a href="#afficher-les-stacks">Afficher les stacks</a></li><li><a href="#afficher-les-logs-1">Afficher les logs</a></li><li><a href="#afficher-et-suivre-les-logs-1">Afficher et suivre les logs</a></li><li><a href="#afficher-les-logs-d-un-service">Afficher les logs d&#39;un service</a></li><li><a href="#arreter-une-stack">Arrêter une stack</a></li><li><a href="#arreter-et-supprimer-les-volumes">Arrêter et supprimer les volumes</a></li></ul></li></ul></nav></details><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><h3 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">https://www.docker.com/products/docker-desktop</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="macos" tabindex="-1">MacOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;MacOS&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">https://www.docker.com/products/docker-desktop</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="linux-debian-ubuntu" tabindex="-1">Linux (Debian/Ubuntu) <a class="header-anchor" href="#linux-debian-ubuntu" aria-label="Permalink to &quot;Linux (Debian/Ubuntu)&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://get.docker.com/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sh</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="les-images" tabindex="-1">Les images <a class="header-anchor" href="#les-images" aria-label="Permalink to &quot;Les images&quot;">​</a></h2><h3 id="recherche" tabindex="-1">Recherche <a class="header-anchor" href="#recherche" aria-label="Permalink to &quot;Recherche&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> search</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="recuperer-une-image" tabindex="-1">Récupérer une image <a class="header-anchor" href="#recuperer-une-image" aria-label="Permalink to &quot;Récupérer une image&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="lancer-un-conteneur" tabindex="-1">Lancer un conteneur <a class="header-anchor" href="#lancer-un-conteneur" aria-label="Permalink to &quot;Lancer un conteneur&quot;">​</a></h2><ul><li>Démarre l’image ubuntu:latest</li><li><code>--rm</code> supprime le container avant de le relancer.</li><li>Déclare le port <code>80</code> du conteneur sur le port 3000 de votre machine.</li><li>Monte le dossier courant dans le dossier <code>/data</code> du conteneur</li><li>Note: Sur Windows vous devez remplacer <code>-v \${PWD}:/data</code> par <code>-v &quot;C:\\Data&quot;:/data</code></li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *nix</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> monConteneur</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -it</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3000</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:80</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \${PWD}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:/data</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ubuntu:latest</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Windows</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> monConteneur</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -it</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3000</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:80</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> %cd%:/data</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ubuntu:latest</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="quelques-parametres-de-la-ligne-de-commande" tabindex="-1">Quelques paramètres de la ligne de commande <a class="header-anchor" href="#quelques-parametres-de-la-ligne-de-commande" aria-label="Permalink to &quot;Quelques paramètres de la ligne de commande&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Paramètre</th><th style="text-align:left;">action</th></tr></thead><tbody><tr><td style="text-align:left;">-p portLocal:portContainer</td><td style="text-align:left;">Permet de rendre visible un port dans le container sur votre machine (ex. -p 8080:80)</td></tr><tr><td style="text-align:left;">-v dossierLocal:dossierContainer</td><td style="text-align:left;">Permet d&#39;exposer un dossier local à l&#39;intérieur du container (ex -v ./vosSource:/data)</td></tr></tbody></table><h2 id="les-logs" tabindex="-1">Les Logs <a class="header-anchor" href="#les-logs" aria-label="Permalink to &quot;Les Logs&quot;">​</a></h2><h3 id="afficher-les-logs" tabindex="-1">Afficher les logs <a class="header-anchor" href="#afficher-les-logs" aria-label="Permalink to &quot;Afficher les logs&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> logs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> monConteneur</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="afficher-et-suivre-les-logs" tabindex="-1">Afficher et suivre les logs <a class="header-anchor" href="#afficher-et-suivre-les-logs" aria-label="Permalink to &quot;Afficher et suivre les logs&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> logs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> monConteneur</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="statistiques-configuration" tabindex="-1">Statistiques / Configuration <a class="header-anchor" href="#statistiques-configuration" aria-label="Permalink to &quot;Statistiques / Configuration&quot;">​</a></h2><h3 id="statistique-du-conteuner" tabindex="-1">Statistique du conteuner <a class="header-anchor" href="#statistique-du-conteuner" aria-label="Permalink to &quot;Statistique du conteuner&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stats</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> monConteneur</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="les-processus-du-conteneur" tabindex="-1">Les processus du conteneur <a class="header-anchor" href="#les-processus-du-conteneur" aria-label="Permalink to &quot;Les processus du conteneur&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> top</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> monConteneur</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="le-s-port-s-expose-s" tabindex="-1">Le(s) port(s) exposé(s) <a class="header-anchor" href="#le-s-port-s-expose-s" aria-label="Permalink to &quot;Le(s) port(s) exposé(s)&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> port</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> monConteneur</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="voir-les-changements-dans-le-conteneur" tabindex="-1">Voir les changements dans le conteneur <a class="header-anchor" href="#voir-les-changements-dans-le-conteneur" aria-label="Permalink to &quot;Voir les changements dans le conteneur&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> monConteneur</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="supprimer-les-images-container-plus-utilisees" tabindex="-1">Supprimer les images / container plus utilisées <a class="header-anchor" href="#supprimer-les-images-container-plus-utilisees" aria-label="Permalink to &quot;Supprimer les images / container plus utilisées&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> system</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prune</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> volume</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prune</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="les-images-1" tabindex="-1">Les images <a class="header-anchor" href="#les-images-1" aria-label="Permalink to &quot;Les images&quot;">​</a></h2><h3 id="liste" tabindex="-1">Liste <a class="header-anchor" href="#liste" aria-label="Permalink to &quot;Liste&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> images</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="suppression" tabindex="-1">Suppression <a class="header-anchor" href="#suppression" aria-label="Permalink to &quot;Suppression&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rmi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="creer-une-image-depuis-un-conteneur" tabindex="-1">Créer une image depuis un conteneur <a class="header-anchor" href="#creer-une-image-depuis-un-conteneur" aria-label="Permalink to &quot;Créer une image depuis un conteneur&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="le-dockerfile" tabindex="-1">Le Dockerfile <a class="header-anchor" href="#le-dockerfile" aria-label="Permalink to &quot;Le Dockerfile&quot;">​</a></h3><h4 id="dockerfile" tabindex="-1">Dockerfile <a class="header-anchor" href="#dockerfile" aria-label="Permalink to &quot;Dockerfile&quot;">​</a></h4><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> debian:latest</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RUN</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> python-pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Ajout Yasb</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RUN</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://github.com/c4software/YASB/archive/master.zip</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RUN</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /sources/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">WORKDIR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /sources/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="build" tabindex="-1">Build <a class="header-anchor" href="#build" aria-label="Permalink to &quot;Build&quot;">​</a></h4><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> exemple/yasb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="nettoyage" tabindex="-1">Nettoyage <a class="header-anchor" href="#nettoyage" aria-label="Permalink to &quot;Nettoyage&quot;">​</a></h2><h3 id="suppression-des-image-s-conteneur-s-non-utilise-s" tabindex="-1">Suppression des image(s), conteneur(s) non utilisé(s) <a class="header-anchor" href="#suppression-des-image-s-conteneur-s-non-utilise-s" aria-label="Permalink to &quot;Suppression des image(s), conteneur(s) non utilisé(s)&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> system</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prune</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> volume</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prune</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="docker-compose" tabindex="-1">Docker Compose <a class="header-anchor" href="#docker-compose" aria-label="Permalink to &quot;Docker Compose&quot;">​</a></h2><h3 id="lancer-une-stack" tabindex="-1">Lancer une stack <a class="header-anchor" href="#lancer-une-stack" aria-label="Permalink to &quot;Lancer une stack&quot;">​</a></h3><p>Au premier plan :</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> up</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>En arrière plan :</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> up</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="afficher-les-stacks" tabindex="-1">Afficher les stacks <a class="header-anchor" href="#afficher-les-stacks" aria-label="Permalink to &quot;Afficher les stacks&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ps</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="afficher-les-logs-1" tabindex="-1">Afficher les logs <a class="header-anchor" href="#afficher-les-logs-1" aria-label="Permalink to &quot;Afficher les logs&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> logs</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="afficher-et-suivre-les-logs-1" tabindex="-1">Afficher et suivre les logs <a class="header-anchor" href="#afficher-et-suivre-les-logs-1" aria-label="Permalink to &quot;Afficher et suivre les logs&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> logs</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="afficher-les-logs-d-un-service" tabindex="-1">Afficher les logs d&#39;un service <a class="header-anchor" href="#afficher-les-logs-d-un-service" aria-label="Permalink to &quot;Afficher les logs d&#39;un service&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> logs</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> NomDuService</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="arreter-une-stack" tabindex="-1">Arrêter une stack <a class="header-anchor" href="#arreter-une-stack" aria-label="Permalink to &quot;Arrêter une stack&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> down</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="arreter-et-supprimer-les-volumes" tabindex="-1">Arrêter et supprimer les volumes <a class="header-anchor" href="#arreter-et-supprimer-les-volumes" aria-label="Permalink to &quot;Arrêter et supprimer les volumes&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> down</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,69),t=[l];function r(h,p,d,o,c,u){return a(),e("div",null,t)}const m=s(n,[["render",r]]);export{g as __pageData,m as default};