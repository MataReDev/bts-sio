import{_ as s}from"./chunks/php_base.CCLKaUU7.js";import{_ as i,c as a,o as n,U as e}from"./chunks/framework.aGaNZw_P.js";const l="/assets/php_base2.CFSEuzIH.png",p="/assets/php_demo2.By1SAFSi.png",y=JSON.parse('{"title":"Créer ma première page PHP","description":"Dans ce TP nous allons créer votre première page PHP. Rassurez-vous, elle sera très simple, pas très jolie… Mais elle nous permettra de voir les concepts de bases.","frontmatter":{"description":"Dans ce TP nous allons créer votre première page PHP. Rassurez-vous, elle sera très simple, pas très jolie… Mais elle nous permettra de voir les concepts de bases."},"headers":[],"relativePath":"tp/php/tp1.md","filePath":"tp/php/tp1.md","lastUpdated":1640899309000}'),t={name:"tp/php/tp1.md"},h=e(`<h1 id="creer-ma-premiere-page-php" tabindex="-1">Créer ma première page PHP <a class="header-anchor" href="#creer-ma-premiere-page-php" aria-label="Permalink to &quot;Créer ma première page PHP&quot;">​</a></h1><p>Dans ce TP nous allons créer votre première page PHP. Rassurez-vous, elle sera très simple, pas très jolie… Mais elle nous permettra de voir les concepts de bases.</p><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>Je vous disais <a href="./support.html#et-le-php-dans-tout-ca">tout à l&#39;heure</a> que nous avions un texte « à trou », c&#39;est littéralement le cas. Nous allons pouvoir mettre du PHP <strong>partout</strong> dans notre page pour rendre certaines parties <strong>dynamique</strong></p><p>Exemple avec le script de démo (le même que tout à l&#39;heure):</p><div class="language-php vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;!</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DOCTYPE</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> html</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">html</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> lang</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;fr&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">head</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">title</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Exemple</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> PHP</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">title</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">head</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">body</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">h1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Bonjour</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> vous</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">h1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">p</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Nous</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> sommes</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> le</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> echo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;d/m/Y&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?&gt;&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">p</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">body</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">html</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>Nous pouvons donc le visualiser tels que :</p><p><img src="`+l+'" alt="Un texte à trou" loading="lazy"></p><p>Ce qui donnera après traitement de la part de votre serveur :</p><p><img src="'+s+`" alt="Le rendu" loading="lazy"></p><h2 id="c-est-a-vous" tabindex="-1">C&#39;est à vous <a class="header-anchor" href="#c-est-a-vous" aria-label="Permalink to &quot;C&#39;est à vous&quot;">​</a></h2><p>Je vous laisse tester le code précédent dans votre navigateur :</p><ul><li>Créer un nouveau fichier dans le dossier <code>www</code> de wamp nommée <code>index.php</code>. (✋ noté que le fichier n&#39;est plus un <code>.html</code> mais un fichier <code>.php</code>)</li><li>Accéder à votre serveur web : <a href="http://localhost/index.php" target="_blank" rel="noreferrer">http://localhost/index.php</a></li></ul><h2 id="les-balises" tabindex="-1">Les balises <a class="header-anchor" href="#les-balises" aria-label="Permalink to &quot;Les balises&quot;">​</a></h2><p>En regardant le code nous avons plusieurs, nouveaux éléments :</p><ul><li>Les balises PHP : <code>&lt;?php … ?&gt;</code>.</li><li>Un mot <code>echo</code>.</li><li>Une fonction Date.</li></ul><h3 id="les-balises-php" tabindex="-1">Les balises PHP <a class="header-anchor" href="#les-balises-php" aria-label="Permalink to &quot;Les balises PHP&quot;">​</a></h3><p>Les balises PHP ont pour but d&#39;indiquer « au moteur PHP » les endroits qu&#39;il doit exécuter. Lors de la lecture de fichier, partout ou vous avez mis des <code>&lt;?php /* … */ ?&gt;</code> sera remplacé par « une exécution de code.</p><p>Vous allez donc pouvoir mettre dans votre code :</p><div class="language-php vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ?&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>ou encore</p><div class="language-php vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * Votre code ICI</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Il n&#39;y a pas de limite à la longueur de votre code PHP.</p><div class="tip custom-block"><p class="custom-block-title">Astuce de pro</p><p>Nous avons la possibilité de mettre du code en commentaires en PHP. Du code en commentaire est du code qui ne sera <strong>pas exécuté par notre serveur</strong>. En PHP plusieurs notations sont possibles:</p><div class="language-php vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Commentaire sur une seule ligne</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ou</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Votre commentaire à placer n&#39;importe où */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ou</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * Votre commentaire</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * sur plusieurs lignes</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * Pratique pour donner le but d&#39;un fichier par exemple.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> **/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></div><h3 id="echo-sierra-tango-papa" tabindex="-1">echo ? sierra tango papa <a class="header-anchor" href="#echo-sierra-tango-papa" aria-label="Permalink to &quot;echo ? sierra tango papa&quot;">​</a></h3><p>Aaah le mot-clé <code>echo</code> vous allez l&#39;aimer ! Sans celui-ci votre code PHP n&#39;affichera rien à l&#39;utilisateur.</p><p>Exemple concret sans le echo:</p><div class="language-php vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;!</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DOCTYPE</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> html</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">html</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> lang</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;en&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">head</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">title</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Exemple</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> PHP</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">title</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">head</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">body</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">p</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Nous</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> sommes</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> le</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;d/m/Y&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?&gt;&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">p</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">body</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">html</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">Je vous laisse tester</p><p>Tester le code suivant, vous allez voir… sans le echo aucun signe de la date</p></div><h3 id="la-fonction-date" tabindex="-1">La fonction date <a class="header-anchor" href="#la-fonction-date" aria-label="Permalink to &quot;La fonction date&quot;">​</a></h3><p>La fonction date est l&#39;une des nombreuses fonctions disponibles <strong>de base</strong> dans PHP. Cette fonction permet de formater la date que nous lui passons en paramètre. Si il n&#39;y a aucun paramètre ? Et bien ça prend <strong>now()</strong> soit <strong>maintenant</strong>.</p><p>Dans notre cas : <code>date(&quot;d/m/Y&quot;)</code> affiche la date actuelle avec un format « français ».</p><p><a href="https://www.php.net/manual/en/function.date.php" target="_blank" rel="noreferrer">En savoir plus sur la fonction date</a></p><h3 id="a-faire" tabindex="-1">À faire <a class="header-anchor" href="#a-faire" aria-label="Permalink to &quot;À faire&quot;">​</a></h3><p>Dans l&#39;exemple, je vous laisse modifier la date pour en changer le format <strong>et</strong> ajouter l&#39;heure.</p><h2 id="allons-plus-loin" tabindex="-1">Allons plus loin <a class="header-anchor" href="#allons-plus-loin" aria-label="Permalink to &quot;Allons plus loin&quot;">​</a></h2><p>Je vous le disais au début… Nous pouvons mettre du PHP partout dans notre code. La seule contrainte pour que celui-ci soit affiché? Qu&#39;il contienne une ou plusieurs fois le mot echo.</p><div class="warning custom-block"><p class="custom-block-title">Attention au « ; »</p><p>Attention en PHP chaque instruction doit-être terminé par un <code>;</code>. Si vous l&#39;oubliez votre script sera en <code>erreur</code>.</p></div><p>Voilà le code source d&#39;un second script PHP :</p><div class="language-php vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;!</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DOCTYPE</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> html</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">html</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> lang</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;en&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">head</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">title</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> echo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;H:i:s&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?&gt;&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">title</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">head</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">body</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">h1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Bonjour</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;valentin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?&gt;&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">h1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    &lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         * J&#39;affiche du code HTML depuis le PHP</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         **/</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Je suis une page écrite en PHP, &lt;strong&gt;avec du texte statique&lt;/strong&gt;, mais dynamique&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ?&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">body</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">html</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p><img src="`+p+`" alt="Démo du rendu" loading="lazy"></p><p>Nous avons donc un code HTML et du code PHP entremêlé. Il possible de mettre du texte dans du code PHP, du texte sans fonction PHP rien… <strong>Je vous déconseille vivement</strong> de le faire ! Ça n&#39;a aucun intérêt et en plus vous faites travailler inutilement votre serveur PHP.</p><p>✋ Réservé vos balises PHP pour du code dynamique.</p><div class="tip custom-block"><p class="custom-block-title">Astuce de pro</p><p>Votre code PHP ne sera jamais envoyé au client. Il est exécuté sur le serveur, seul le résultat est reçu par votre client.</p></div><h3 id="c-est-a-vous-1" tabindex="-1">C&#39;est à vous <a class="header-anchor" href="#c-est-a-vous-1" aria-label="Permalink to &quot;C&#39;est à vous&quot;">​</a></h3><p>Je vous laisse tester le code précédent. Modifiez-le pour y mettre vos informations.</p><p>👁️ Regarder à l&#39;aide de votre navigateur le code reçu du serveur 👁️</p><div class="danger custom-block"><p class="custom-block-title">Ha oui j&#39;oubliai</p><p>Il est possible également de faire un fichier entièrement en PHP qui ne retourne que du HTML :</p><div class="language-php vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;head&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;title&gt;Ma page&lt;/title&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;/head&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;body&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;h1&gt;Bonjour Valentin&lt;/h1&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;/body&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;/html&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>Bien évidement en</p><p><strong>AUCUN CAS VOUS NE DEVEZ FAIRE ÇA !</strong></p></div>`,48),r=[h];function k(d,o,c,u,g,F){return n(),a("div",null,r)}const C=i(t,[["render",k]]);export{y as __pageData,C as default};