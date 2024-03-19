import{_ as e,c as a,o as s,U as n}from"./chunks/framework.aGaNZw_P.js";const b=JSON.parse(`{"title":"Fake LED Api","description":"Cette documentation décrit le fonctionnement de l'API « Fake LED »","frontmatter":{"description":"Cette documentation décrit le fonctionnement de l'API « Fake LED »"},"headers":[],"relativePath":"tp/api/doc_api_led.md","filePath":"tp/api/doc_api_led.md","lastUpdated":1640899309000}`),t={name:"tp/api/doc_api_led.md"},i=n(`<h1 id="fake-led-api" tabindex="-1">Fake LED Api <a class="header-anchor" href="#fake-led-api" aria-label="Permalink to &quot;Fake LED Api&quot;">​</a></h1><p>Cette documentation décrit le fonctionnement de l&#39;API « Fake LED »</p><h2 id="modele" tabindex="-1">Modèle <a class="header-anchor" href="#modele" aria-label="Permalink to &quot;Modèle&quot;">​</a></h2><p>Voilà le modèle des données renvoyé par le serveur.</p><h2 id="status" tabindex="-1">Status <a class="header-anchor" href="#status" aria-label="Permalink to &quot;Status&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;Salon&quot;,</span></span>
<span class="line"><span>  &quot;status&quot;: true,</span></span>
<span class="line"><span>  &quot;update&quot;: &quot;Tue, 19 Mar 2019 12:31:36 GMT&quot;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="allumer" tabindex="-1">Allumer <a class="header-anchor" href="#allumer" aria-label="Permalink to &quot;Allumer&quot;">​</a></h3><p>GET</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>https://[SERVER]/setStatus?name=[NAME]&amp;status=true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="eteindre" tabindex="-1">Éteindre <a class="header-anchor" href="#eteindre" aria-label="Permalink to &quot;Éteindre&quot;">​</a></h3><p>GET</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>https://[SERVER]/setStatus?name=[NAME]&amp;status=false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="obtenir-le-status" tabindex="-1">Obtenir le status <a class="header-anchor" href="#obtenir-le-status" aria-label="Permalink to &quot;Obtenir le status&quot;">​</a></h3><p>GET</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>https://[SERVER]/getStatus?name=[NAME]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="obtenir-l-ensemble-des-etats" tabindex="-1">Obtenir l&#39;ensemble des états <a class="header-anchor" href="#obtenir-l-ensemble-des-etats" aria-label="Permalink to &quot;Obtenir l&#39;ensemble des états&quot;">​</a></h3><p>GET</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>https://[SERVER]/getAll</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="allumer-eteindre-en-indiquant-la-position" tabindex="-1">Allumer &amp; Éteindre en indiquant la position <a class="header-anchor" href="#allumer-eteindre-en-indiquant-la-position" aria-label="Permalink to &quot;Allumer &amp; Éteindre en indiquant la position&quot;">​</a></h3><p>GET</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>https://[SERVER]/setStatus?name=[NAME]&amp;status=true&amp;lat=[LATITUDE]&amp;lng=[LONGITUDE]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,22),l=[i];function p(r,d,o,u,c,h){return s(),a("div",null,l)}const v=e(t,[["render",p]]);export{b as __pageData,v as default};