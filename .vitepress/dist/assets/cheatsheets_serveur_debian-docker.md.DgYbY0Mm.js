import{_ as s,c as a,o as e,U as i}from"./chunks/framework.aGaNZw_P.js";const F=JSON.parse('{"title":"Installer Docker sur une debian","description":"Aide mémoire pour installer et configurer Docker sur une Debian.","frontmatter":{"description":"Aide mémoire pour installer et configurer Docker sur une Debian."},"headers":[],"relativePath":"cheatsheets/serveur/debian-docker.md","filePath":"cheatsheets/serveur/debian-docker.md","lastUpdated":1700207572000}'),n={name:"cheatsheets/serveur/debian-docker.md"},t=i(`<h1 id="installer-docker-sur-une-debian" tabindex="-1">Installer Docker sur une debian <a class="header-anchor" href="#installer-docker-sur-une-debian" aria-label="Permalink to &quot;Installer Docker sur une debian&quot;">​</a></h1><p>Dans cet aide-mémoire vous trouverez l&#39;ensemble des éléments de base pour installer Docker sur une machine Debian.</p><details class="details custom-block"><summary>Table des matières</summary><nav class="table-of-contents"><ul><li><a href="#introduction">Introduction</a></li><li><a href="#installation">Installation</a><ul><li><a href="#installation-de-docker">Installation de Docker</a></li><li><a href="#tester-le-bon-fonctionnement-de-docker">Tester le bon fonctionnement de Docker</a></li></ul></li><li><a href="#autoriser-un-utilisateur-a-utiliser-docker">Autoriser un utilisateur à utiliser Docker</a></li><li><a href="#demarrer-docker-au-demarrage-de-la-machine">Démarrer Docker au démarrage de la machine</a></li><li><a href="#sources">Sources</a></li></ul></nav></details><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>Docker est un outil qui permet de créer des conteneurs. Il ne faut pas le confondre avec une machine virtuelle. Un conteneur est un ensemble de processus qui partagent le même noyau. Il est donc plus léger qu&#39;une machine virtuelle.</p><p>Dans cette procédure, nous allons installer Docker sur une machine Debian 11.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>Je pars du principe que vous avez déjà une machine Debian 11. Si ce n&#39;est pas le cas, je vous invite à consulter l&#39;aide-mémoire <a href="/tp/devops/serveur/tp1.html">Installer Debian 11</a> (<a href="/tp/devops/serveur/tp1alt.html">ou via un modèle</a>).</p><h3 id="installation-de-docker" tabindex="-1">Installation de Docker <a class="header-anchor" href="#installation-de-docker" aria-label="Permalink to &quot;Installation de Docker&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Ajout des éléments nécessaire à l&#39;installation</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt-get</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    ca-certificates</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    gnupg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    lsb-release</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Ajout du dépôt permettant d&#39;installer Docker</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0755</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/apt/keyrings</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fsSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://download.docker.com/linux/debian/gpg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gpg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --dearmor</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/apt/keyrings/docker.gpg</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;deb [arch=&quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dpkg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --print-architecture</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)&quot; signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian &quot;$(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/os-release &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$VERSION_CODENAME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;)&quot; stable&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tee</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/apt/sources.list.d/docker.list</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/null</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Update la liste des packages et installation de Docker</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker-ce</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker-ce-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> containerd.io</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker-buildx-plugin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker-compose-plugin</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="tester-le-bon-fonctionnement-de-docker" tabindex="-1">Tester le bon fonctionnement de Docker <a class="header-anchor" href="#tester-le-bon-fonctionnement-de-docker" aria-label="Permalink to &quot;Tester le bon fonctionnement de Docker&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hello-world</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="autoriser-un-utilisateur-a-utiliser-docker" tabindex="-1">Autoriser un utilisateur à utiliser Docker <a class="header-anchor" href="#autoriser-un-utilisateur-a-utiliser-docker" aria-label="Permalink to &quot;Autoriser un utilisateur à utiliser Docker&quot;">​</a></h2><p>Par défaut, seul le compte <code>root</code> peut utiliser Docker. Pour autoriser un autre utilisateur à utiliser Docker, il faut ajouter ce compte dans le groupe <code>docker</code>.</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Ajout de l&#39;utilisateur dans le groupe docker</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">usermod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -aG</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">votre-utilisateu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">r</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Une fois l&#39;utilisateur ajouté au groupe <code>docker</code>, il faut se déconnecter et se reconnecter pour que les changements soient pris en compte.</p><h2 id="demarrer-docker-au-demarrage-de-la-machine" tabindex="-1">Démarrer Docker au démarrage de la machine <a class="header-anchor" href="#demarrer-docker-au-demarrage-de-la-machine" aria-label="Permalink to &quot;Démarrer Docker au démarrage de la machine&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker.service</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> containerd.service</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Cette commande permet de démarrer Docker au démarrage de la machine, et donc démarre automatiquement les conteneurs que vous avez spécifiés comme étant à démarrer au démarrage (exemple les conteneurs de type <code>nginx</code> ou <code>mysql</code>).</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><ul><li><a href="https://docs.docker.com/engine/install/debian/" target="_blank" rel="noreferrer">Docker - Installation</a></li></ul>`,21),l=[t];function r(p,h,d,o,k,c){return e(),a("div",null,l)}const m=s(n,[["render",r]]);export{F as __pageData,m as default};