import{_ as i,c as s,I as r,U as e,o as n,D as l}from"./chunks/framework.aGaNZw_P.js";const t="/assets/api_rest.CYzbuppn.jpeg",o="/assets/api.Bmz4ok2b.png",q=JSON.parse('{"title":"Aide mémoire API","description":"Aide mémoire API","frontmatter":{"description":"Aide mémoire API"},"headers":[],"relativePath":"cheatsheets/api/index.md","filePath":"cheatsheets/api/index.md","lastUpdated":1704112852000}'),u={name:"cheatsheets/api/index.md"},p=e('<h1 id="aide-memoire-api" tabindex="-1">Aide mémoire API <a class="header-anchor" href="#aide-memoire-api" aria-label="Permalink to &quot;Aide mémoire API&quot;">​</a></h1><details class="details custom-block"><summary>Sommaire</summary><nav class="table-of-contents"><ul><li><a href="#un-echange-norme">Un échange normé</a></li><li><a href="#repose-sur-le-protocole-http">Repose sur le protocole HTTP</a></li><li><a href="#la-question-vers-le-serveur">La question vers le serveur</a><ul><li><a href="#verbes-http">Verbes HTTP</a></li><li><a href="#mais-egalement-des-ressources-attendues">Mais également des ressources attendues</a></li></ul></li><li><a href="#la-reponse-du-serveur">La Réponse du serveur</a><ul><li><a href="#un-code-une-signification">Un code une signification</a></li><li><a href="#un-format-de-retour">Un format de retour</a></li></ul></li><li><a href="#zoom-sur-le-json">Zoom sur le JSON</a><ul><li><a href="#un-tableau">Un tableau</a></li><li><a href="#un-dictionnaire">Un Dictionnaire</a></li></ul></li><li><a href="#decouper-pour-mieux-debugge-supervise-maintenir">Découper pour mieux débuggé / supervisé / maintenir</a></li><li><a href="#exemple-d-application-avec-api">Exemple d&#39;application avec API</a></li><li><a href="#normer-les-api">Normer les API</a></li></ul></nav></details><p>Une API REST (Representational State Transfer Application Program Interface) permet aux logiciels de communiquer entre eux sur un réseau ou sur un même appareil. Le plus souvent les développeurs utilisent des API REST pour créer des services web. Les API REST utilisent des méthodes HTTP (Verbe HTTP et Code de Retour) pour récupérer et publier des données entre <strong>un client</strong> et <strong>un serveur</strong>.</p><p>En utilisant le protocole HTTP, les API REST permettent aux logiciels d’un appareil de communiquer avec les logiciels d’un autre appareil (ou du même appareil) même s’ils utilisent des systèmes d’exploitation et des architectures différents.</p><p>La communication va reposer sur le protocole HTTP (Compris par le client et le serveur), le serveur renvoie la ressource avec un langage que le client accepte. La réponse du serveur peut-être de différent type :</p><ul><li>JSON (JavaScript Object Notation), le format JSON est le plus utilisé actuellement du fait de sa simplicité.</li><li>XML (Extensible Markup Language, comme le HTML par exemple).</li><li>texte.</li><li>…</li></ul><h2 id="un-echange-norme" tabindex="-1">Un échange normé <a class="header-anchor" href="#un-echange-norme" aria-label="Permalink to &quot;Un échange normé&quot;">​</a></h2><p>Une API repose sur un principe de questions / réponses normées. Cette liste est établie par le développeur. Elle peut être schématisée :</p><p><img src="'+t+'" alt="Question et Réponses" loading="lazy"></p><h2 id="repose-sur-le-protocole-http" tabindex="-1">Repose sur le protocole HTTP <a class="header-anchor" href="#repose-sur-le-protocole-http" aria-label="Permalink to &quot;Repose sur le protocole HTTP&quot;">​</a></h2><p><img src="'+o+`" alt="Archi" loading="lazy"></p><h2 id="la-question-vers-le-serveur" tabindex="-1">La question vers le serveur <a class="header-anchor" href="#la-question-vers-le-serveur" aria-label="Permalink to &quot;La question vers le serveur&quot;">​</a></h2><p>La question vers le serveur est définie par le développeur de l&#39;API. Celui-ci va prendre du temps pour la designer. Cette étape de « documentation technique » va passer par une utilisation cohérente :</p><ul><li>Des Verbes HTTP (une méthode === une action cohérente).</li><li>Un format de sortie adéquat (JSON, XML, Autre).</li><li>Un code HTTP (2xx, 3xx, 4xx, 5xx) en cohérence avec le traitement.</li></ul><p>Si cette étape est correctement réalisée, il sera même possible de réaliser une documentation automatique avec des outils tels que :</p><ul><li><a href="https://swagger.io/" target="_blank" rel="noreferrer">Swagger</a></li></ul><h3 id="verbes-http" tabindex="-1">Verbes HTTP <a class="header-anchor" href="#verbes-http" aria-label="Permalink to &quot;Verbes HTTP&quot;">​</a></h3><p>Les méthodes « HTTP » ?</p><ul><li>GET (<strong>Obtenir</strong> des données)</li><li>PUT (<strong>Ajouter</strong> des données)</li><li>POST (<strong>Ajouter</strong> des données)</li><li>PATCH (<strong>Modifier</strong> des données)</li><li>DELETE (<strong>Supprimer</strong> une données)</li></ul><h3 id="mais-egalement-des-ressources-attendues" tabindex="-1">Mais également des ressources attendues <a class="header-anchor" href="#mais-egalement-des-ressources-attendues" aria-label="Permalink to &quot;Mais également des ressources attendues&quot;">​</a></h3><ul><li><code>Accept</code></li><li><code>Content-Type</code></li><li><code>Authorization …</code></li><li>…</li></ul><p>Exemple :</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>GET /api.html HTTP/1.1</span></span>
<span class="line"><span>User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Chrome/90.0.4430.30</span></span>
<span class="line"><span>Host: cours.brosseau.ovh</span></span>
<span class="line"><span>Accept-Language: fr-fr</span></span>
<span class="line"><span>Accept-Encoding: gzip, deflate</span></span>
<span class="line"><span>Connection: Keep-Alive</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="la-reponse-du-serveur" tabindex="-1">La Réponse du serveur <a class="header-anchor" href="#la-reponse-du-serveur" aria-label="Permalink to &quot;La Réponse du serveur&quot;">​</a></h2><p>On répond avec un « HTTP Status Codes », un code « normé » qui signifie quelque chose</p><h3 id="un-code-une-signification" tabindex="-1">Un code une signification <a class="header-anchor" href="#un-code-une-signification" aria-label="Permalink to &quot;Un code une signification&quot;">​</a></h3><ul><li>200 OK</li><li>201 Created</li><li>301 Moved Permanently</li><li>400 Bad Request</li><li>403 Forbidden</li><li>404 Not Found</li><li>500 Internal Server Error</li><li>503 Service Unavailable</li></ul><p><a href="http://www.restapitutorial.com/httpstatuscodes.html" target="_blank" rel="noreferrer">Les d&#39;informations</a></p><h3 id="un-format-de-retour" tabindex="-1">Un format de retour <a class="header-anchor" href="#un-format-de-retour" aria-label="Permalink to &quot;Un format de retour&quot;">​</a></h3><ul><li>JSON (JavaScript Object Notation), le format JSON est celui le plus utilisé actuellement du fait de sa simplicité.</li><li>XML (Extensible Markup Language, comme le HTML par exemple).</li><li>texte.</li><li>…</li></ul><h2 id="zoom-sur-le-json" tabindex="-1">Zoom sur le JSON <a class="header-anchor" href="#zoom-sur-le-json" aria-label="Permalink to &quot;Zoom sur le JSON&quot;">​</a></h2><ul><li>Décodable simplement.</li><li>Léger.</li><li>Lisible par un humain.</li><li>Faiblement typé.</li></ul><h3 id="un-tableau" tabindex="-1">Un tableau <a class="header-anchor" href="#un-tableau" aria-label="Permalink to &quot;Un tableau&quot;">​</a></h3><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;b&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="un-dictionnaire" tabindex="-1">Un Dictionnaire <a class="header-anchor" href="#un-dictionnaire" aria-label="Permalink to &quot;Un Dictionnaire&quot;">​</a></h3><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;cle1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;valeur&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;cle2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;valeur&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="decouper-pour-mieux-debugge-supervise-maintenir" tabindex="-1">Découper pour mieux débuggé / supervisé / maintenir <a class="header-anchor" href="#decouper-pour-mieux-debugge-supervise-maintenir" aria-label="Permalink to &quot;Découper pour mieux débuggé / supervisé / maintenir&quot;">​</a></h2><p>L&#39;utilisation d&#39;API permet de découper la logique en différents « services » qui auront chacun un but précis (<a href="https://fr.wikipedia.org/wiki/Microservices" target="_blank" rel="noreferrer">Micro-Service</a>).</p><p>Chaque Micro-Service aura une tâche précise par exemple :</p><ul><li>Obtenir un utilisateur</li><li>Ajouter un utilisateur</li><li>Lister les utilisateurs</li><li>Envoyer un SMS</li><li>…</li></ul><p>Le découpage en API va permettre de découper <strong>la logique en différent tiers pour</strong> :</p><ul><li>Simplifier la maintenance.</li><li>Faciliter la supervision de chaque élément.</li><li>Simplifier l&#39;évolution du code.</li></ul><h2 id="exemple-d-application-avec-api" tabindex="-1">Exemple d&#39;application avec API <a class="header-anchor" href="#exemple-d-application-avec-api" aria-label="Permalink to &quot;Exemple d&#39;application avec API&quot;">​</a></h2>`,43),c=e('<div class="tip custom-block"><p class="custom-block-title">observer le fonctionnement</p><p>Pour observer le fonctionnement, vous devez utiliser<code>L&#39;inspecteur d&#39;éléments</code> de votre navigateur.</p><p>En développement, vous devez être acteur de votre analyse, ça passe par l&#39;utilisation des outils intégrés à votre navigateur.</p></div><h2 id="normer-les-api" tabindex="-1">Normer les API <a class="header-anchor" href="#normer-les-api" aria-label="Permalink to &quot;Normer les API&quot;">​</a></h2><p>Pour normer les API, il existe des outils tels que :</p><ul><li><a href="https://swagger.io/" target="_blank" rel="noreferrer">Swagger</a></li><li><a href="https://swagger.io/specification/" target="_blank" rel="noreferrer">Définition des API</a></li><li><a href="https://www.openapis.org/" target="_blank" rel="noreferrer">OpenAPI</a></li></ul><p>L&#39;idée est de générer une documentation technique à partir du code source. Cette documentation technique permettra de générer des clients pour les différents langages.</p>',5);function d(h,m,g,b,v,f){const a=l("Sample");return n(),s("div",null,[p,r(a,{src:"api/chat"}),c])}const P=i(u,[["render",d]]);export{q as __pageData,P as default};