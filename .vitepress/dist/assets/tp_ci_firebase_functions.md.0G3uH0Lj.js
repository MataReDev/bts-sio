import{_ as s,c as i,o as a,U as n}from"./chunks/framework.aGaNZw_P.js";const b=JSON.parse(`{"title":"Déploiement continue d'un projet Firebase (function, web, …)","description":"Je vous propose de créer ici la configuration qui vous permettra de déployer en continue sur Firebase","frontmatter":{"description":"Je vous propose de créer ici la configuration qui vous permettra de déployer en continue sur Firebase"},"headers":[],"relativePath":"tp/ci/firebase/functions.md","filePath":"tp/ci/firebase/functions.md","lastUpdated":1640899309000}`),e={name:"tp/ci/firebase/functions.md"},l=n(`<h1 id="deploiement-continue-d-un-projet-firebase-function-web" tabindex="-1">Déploiement continue d&#39;un projet Firebase (function, web, …) <a class="header-anchor" href="#deploiement-continue-d-un-projet-firebase-function-web" aria-label="Permalink to &quot;Déploiement continue d&#39;un projet Firebase (function, web, …)&quot;">​</a></h1><p>Je vous propose de créer ici la configuration qui vous permettra de déployer en continue sur Firebase</p><h2 id="initialiser-un-projet-firebase-code-source" tabindex="-1">Initialiser un projet Firebase (code source) <a class="header-anchor" href="#initialiser-un-projet-firebase-code-source" aria-label="Permalink to &quot;Initialiser un projet Firebase (code source)&quot;">​</a></h2><p>Client Firebase :</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firebase-tools</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">firebase</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> login</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="creer-un-projet-sur-firebase" tabindex="-1">Créer un projet sur Firebase <a class="header-anchor" href="#creer-un-projet-sur-firebase" aria-label="Permalink to &quot;Créer un projet sur Firebase&quot;">​</a></h2><p>Nouveau projet API « vide » :</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">firebase</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> functions</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">Gratuit … Mais pas vraiment</p><p>Attention même si vous n&#39;allez pas payer pour utiliser le « free tier » Google à décidé de mettre en place l&#39;obligation de passer en pay as you go pour la partie fonction.</p></div><h2 id="autoriser-le-deploiement-depuis-gitlab-ci" tabindex="-1">Autoriser le déploiement depuis Gitlab-CI <a class="header-anchor" href="#autoriser-le-deploiement-depuis-gitlab-ci" aria-label="Permalink to &quot;Autoriser le déploiement depuis Gitlab-CI&quot;">​</a></h2><ul><li>Sur votre machine : <code>firebase login:ci</code></li><li>Dans les SETTINGS partie CI/CD de votre projet, ajouter une variable <code>FIREBASE_DEPLOY_KEY</code> avec le token obtenue</li></ul><h2 id="le-gitlab-ci" tabindex="-1">Le Gitlab-ci <a class="header-anchor" href="#le-gitlab-ci" aria-label="Permalink to &quot;Le Gitlab-ci&quot;">​</a></h2><p>Dans votre projet ajouter le fichier <code>.gitlab-ci.yml</code> avec le contenu suivant :</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">node:15.5.1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cache</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">node_modules/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">deploy_production</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  stage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">deploy</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Production</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  only</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tags</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cd functions/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm install -g firebase-tools</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm install</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">firebase deploy --token $FIREBASE_DEPLOY_KEY</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  stage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">test</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cd functions/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm install</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm run test</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,14),p=[l];function t(r,h,o,c,k,d){return a(),i("div",null,p)}const E=s(e,[["render",t]]);export{b as __pageData,E as default};