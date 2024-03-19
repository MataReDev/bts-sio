import{_ as e,c as a,o as s,U as n}from"./chunks/framework.aGaNZw_P.js";const v=JSON.parse('{"title":"","description":"Aide mémoire Cordova","frontmatter":{"description":"Aide mémoire Cordova"},"headers":[],"relativePath":"cheatsheets/cordova/index.md","filePath":"cheatsheets/cordova/index.md","lastUpdated":1704112852000}'),i={name:"cheatsheets/cordova/index.md"},l=n(`<h2 id="aide-memoire-cordova" tabindex="-1">Aide mémoire Cordova <a class="header-anchor" href="#aide-memoire-cordova" aria-label="Permalink to &quot;Aide mémoire Cordova&quot;">​</a></h2><details class="details custom-block"><summary>Table des matières</summary><nav class="table-of-contents"><ul><li><a href="#aide-memoire-cordova">Aide mémoire Cordova</a><ul><li><a href="#installation">Installation</a></li><li><a href="#creer">Créer</a></li><li><a href="#les-plateformes">Les plateformes</a></li><li><a href="#les-plugins">Les plugins</a></li><li><a href="#compilation">Compilation</a></li><li><a href="#tester-dans-son-navigateur">Tester dans son navigateur</a></li></ul></li></ul></nav></details><h3 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h3><p>Installer Cordova de manière « globale » sur l’ordinateur :</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ npm install -g cordova</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="creer" tabindex="-1">Créer <a class="header-anchor" href="#creer" aria-label="Permalink to &quot;Créer&quot;">​</a></h3><p>Créer un nouveau projet</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ cordova create demo com.vbrosseau.demo Demo</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>Créer un nouveau projet dans le dossier « demo » avec comme namespace « com.vbrosseau.demo . Le namespace doit être unique sur le périphérique de destination.</p></blockquote><h3 id="les-plateformes" tabindex="-1">Les plateformes <a class="header-anchor" href="#les-plateformes" aria-label="Permalink to &quot;Les plateformes&quot;">​</a></h3><p>Lister les plateformes actuellement installé pour le projet</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ cordova platform ls</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Ajouter une plateforme</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ cordova platform add android</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Mettre à jour une plateforme</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ cordova platform update android</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="les-plugins" tabindex="-1">Les plugins <a class="header-anchor" href="#les-plugins" aria-label="Permalink to &quot;Les plugins&quot;">​</a></h3><p>Lister les plugins actuellement installés</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ cordova plugin ls</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Rechercher un plugin (dans l’annuaire officiel)</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ cordova plugin search device</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Ajouter un plugin</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ cordova plugin add cordova-plugin-device</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Supprimer un plugin</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ cordova plugin rm cordova-plugin-device</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="compilation" tabindex="-1">Compilation <a class="header-anchor" href="#compilation" aria-label="Permalink to &quot;Compilation&quot;">​</a></h3><p>Création de l’APK Android</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ cordova build android</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Lancement de l’application en mode « debug ». Une fois lancer l’application est visible dans <a href="chrome://inspect/#devices" target="_blank" rel="noreferrer">Chrome Inspect</a></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ cordova run android</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="tester-dans-son-navigateur" tabindex="-1">Tester dans son navigateur <a class="header-anchor" href="#tester-dans-son-navigateur" aria-label="Permalink to &quot;Tester dans son navigateur&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ cordova platform add browser</span></span>
<span class="line"><span>$ cordova run browser</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,32),r=[l];function t(o,p,d,c,u,h){return s(),a("div",null,r)}const b=e(i,[["render",t]]);export{v as __pageData,b as default};