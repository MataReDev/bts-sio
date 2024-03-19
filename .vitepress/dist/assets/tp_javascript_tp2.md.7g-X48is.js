import{_ as s,c as i,o as a,U as e}from"./chunks/framework.aGaNZw_P.js";const t="/assets/bart-js.pjWp5YiJ.png",g=JSON.parse('{"title":"Le retour de Bart","description":"Vous vous souvenez du générateur de Bart écrit en PHP? Et bien cette fois-ci nous allons coder la version JavaScript du générateur de phrase.","frontmatter":{"description":"Vous vous souvenez du générateur de Bart écrit en PHP? Et bien cette fois-ci nous allons coder la version JavaScript du générateur de phrase."},"headers":[],"relativePath":"tp/javascript/tp2.md","filePath":"tp/javascript/tp2.md","lastUpdated":1640899309000}'),n={name:"tp/javascript/tp2.md"},l=e('<h1 id="le-retour-de-bart" tabindex="-1">Le retour de Bart <a class="header-anchor" href="#le-retour-de-bart" aria-label="Permalink to &quot;Le retour de Bart&quot;">​</a></h1><p><a href="/tp/php/tp1.1.html">Vous vous souvenez du générateur de Bart écrit en PHP?</a> Et bien cette fois-ci nous allons coder la version JavaScript du générateur de phrase.</p><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>Dans ce TP nous allons pratiquer la manipulation du DOM en JavaScript. Bien que je trouve que ça ne soit pas forcément la meilleure façon de faire (je préfère de loin l&#39;approche VueJS), il est complètement possible de créer, afficher, conditionner l&#39;affichage d&#39;éléments 100% avec du JavaScript. Dans ce TP vous allez écrire le code JavaScript afin de réaliser :</p><p><img src="'+t+`" alt="Bart en version JS" loading="lazy"></p><h2 id="creation-de-la-structure" tabindex="-1">Création de la structure <a class="header-anchor" href="#creation-de-la-structure" aria-label="Permalink to &quot;Création de la structure&quot;">​</a></h2><p>Nous l&#39;avons fait de multiple fois, je vous laisse mettre en place la structure de votre projet. J&#39;ai souhaite cependant que celle-ci respecte quelques règles :</p><ul><li>Votre fichier HTML doit s&#39;appeler <code>index.html</code>.</li><li>L&#39;ensemble de vos ressources <code>public</code> doivent être dans un dossier <code>public</code>.</li><li>La CSS doit être externalisée dans un dossier nommé <code>style</code>.</li><li>Le JavaScript doit être dans un fichier <code>main.js</code> dans un dossier nommé <code>js</code>.</li></ul><div class="tip custom-block"><p class="custom-block-title">La fainéantise ! La clé du succès 🔑</p><p>Nous en avons déjà parlé, un développeur doit être efficace (et fainéant)… Ne vous amusez donc pas à recoder l&#39;ensemble. Reprenez le code que vous avez réalisé lors de la création du <a href="/tp/php/tp1.1.html">Bart en version PHP</a></p></div><div class="danger custom-block"><p class="custom-block-title">Halt !</p><p>Quelques petits rappels…</p><div class="language-HTML vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">HTML</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- Inclure une CSS --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stylesheet&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;public/style/main.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- Inclure un fichier JS --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;public/js/main.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div><h2 id="le-html" tabindex="-1">Le HTML <a class="header-anchor" href="#le-html" aria-label="Permalink to &quot;Le HTML&quot;">​</a></h2><p>Voilà la structure de <strong>mon HTML</strong> :</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;!</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">DOCTYPE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;fr&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> charset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;UTF-8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;viewport&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Bart JS Générator&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stylesheet&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;public/style/main.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;public/js/main.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tableau&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="le-js" tabindex="-1">le JS <a class="header-anchor" href="#le-js" aria-label="Permalink to &quot;le JS&quot;">​</a></h2><p>Votre fichier JavaScript va contenir la logique de notre application. Pour rappel, celle-ci est très simple elle ne « fait que » afficher des phrases dans la <code>div</code> avec comme édentant <code>#tableau</code>.</p><p>Votre travail va donc se résumer à :</p><ul><li>Créer les variables (phrase et nombre de lignes).</li><li>Une boucle (type <code>for</code>, voir vos notes ou le cours).</li><li>Un sélecteur pour obtenir le tableau (<code>let tableau = document.getElementById(&#39;tableau&#39;);</code>)</li><li>L&#39;ajout d&#39;élément « dans la div tableau ». (<a href="/tp/javascript/support.html#creer-des-elements-dans-la-page">voir le support</a>)</li></ul><div class="tip custom-block"><p class="custom-block-title">réfléchir avant d&#39;agir</p><p>Écrire le code immédiatement est tentant ? Mais arrêtons-nous un instant pour réfléchir à notre code. Tenter d&#39;écrire votre code en français (ou via un diagramme)</p></div><h3 id="ou-placer-le-js" tabindex="-1">Où placer le JS ? <a class="header-anchor" href="#ou-placer-le-js" aria-label="Permalink to &quot;Où placer le JS ?&quot;">​</a></h3><p>Maintenant que vous avez votre code JavaScript, vous avez deux solutions :</p><ul><li>La première est de mettre votre JS à la fin de votre HTML. L&#39;objectif faire en sorte que celui-ci soit exécuté quand votre page est chargée. (À votre avis, est-ce une bonne idée ?)</li><li>La seconde est de mettre votre JS dans le <code>head</code> de votre site. Celui-ci sera donc chargé au plus tôt par contre le code sera lancé immédiatement… Alors, comment faire ?</li></ul><div class="tip custom-block"><p class="custom-block-title">La solution ?</p><p>Attendre que votre page « soit entièrement chargée » afin de déclencher votre JavaScript ! Cet évènement est appelé <code>Dom Ready</code> (il est très important), dès que cet évènement est « levé » vous pouvez exécuter votre JS.</p></div><p>Concrètement il faut écrire :</p><p><em>En pure JS :</em></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;DOMContentLoaded&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // Votre code ici</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> index </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; index </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10000000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; index</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Je m&#39;affiche quand la page est chargée entièrement.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><em>Avec jQuery :</em></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Je m&#39;affiche quand la page est chargée entièrement.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">Une petite remarque</p><p>Comme vous pouvez le constater jQuery est bien plus concis, on verra qu&#39;avec VueJS ça sera encore plus simple.</p></div><p>Je vous laisse écrire le code nécessaire au bon fonctionnement de votre site.</p><details class="details custom-block"><summary>Bloqué ?</summary><p>Besoin d&#39;aide ? <a href="/demo/js/bart/index.html">Voici ma version</a></p></details><h2 id="allons-plus-loin" tabindex="-1">Allons plus loin <a class="header-anchor" href="#allons-plus-loin" aria-label="Permalink to &quot;Allons plus loin&quot;">​</a></h2><p>Vous avez codé votre application en pure JS. Je vous laisse migrer votre code pour utiliser :</p><ul><li>Les sélecteurs <a href="https://jquery.com/" target="_blank" rel="noreferrer">jQuery</a>.</li><li>La création et la manipulation du DOM grace à jQuery.</li></ul><div class="tip custom-block"><p class="custom-block-title">Petit rappel</p><p>Inclure jQuery dans votre projet est aussi simple que d&#39;ajouter dans votre <code>head</code> :</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><p>C&#39;est à vous, je vous laisse travailler.</p>`,35),p=[l];function r(h,k,d,o,c,E){return a(),i("div",null,p)}const m=s(n,[["render",r]]);export{g as __pageData,m as default};