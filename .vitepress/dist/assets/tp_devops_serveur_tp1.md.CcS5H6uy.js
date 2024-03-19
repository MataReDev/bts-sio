import{_ as a,a as s,b as t,c as i}from"./chunks/ferme-iso-3.CW2kr7J3.js";import{_ as o,c as l,o as n,U as r,k as e}from"./chunks/framework.aGaNZw_P.js";const u="/assets/ferme-connexion.DHmo1vk0.png",c="/assets/ferme-menu.DDkFtdID.jpg",d="/assets/ferme-creer-dossier.BhEdCCzX.jpg",p="/assets/ferme-creer-vm.DRte2rVD.jpg",m="/assets/ferme-etape1.kR_oRWyy.jpg",v="/assets/ferme-etape2._UJI9APf.jpg",h="/assets/ferme-etape3.B3qRhC74.jpg",f="/assets/ferme-etape4.Ce_n_A9a.jpg",g="/assets/ferme-etape6.CVDrvmvz.jpg",b="/assets/ferme-etape7-disque.B-1Twtbb.jpg",q="/assets/ferme-etape7-reseau.Cx7eRqU8.jpg",_="/assets/ferme-etape-fin.CNN-gqa3.jpg",V="/assets/ferme-demarrer.ctKN8z8X.jpg",M="/assets/ferme-acces-distant.CghQd_3G.jpg",P="/assets/ferme-acces-distant-2.CLkeYW95.jpg",k="/assets/ferme-supprimer.-wSvc8DI.jpg",w=JSON.parse('{"title":"TP1. Créer une VM sur la ferme","description":"Dans ce TP nous allons voir comment créer une VM (machine virtuelle) sur la ferme VMWare du BTS SIO à Angers.","frontmatter":{"description":"Dans ce TP nous allons voir comment créer une VM (machine virtuelle) sur la ferme VMWare du BTS SIO à Angers."},"headers":[],"relativePath":"tp/devops/serveur/tp1.md","filePath":"tp/devops/serveur/tp1.md","lastUpdated":1708685313000}'),x={name:"tp/devops/serveur/tp1.md"},S=r('<h1 id="tp1-creer-une-vm-sur-la-ferme" tabindex="-1">TP1. Créer une VM sur la ferme <a class="header-anchor" href="#tp1-creer-une-vm-sur-la-ferme" aria-label="Permalink to &quot;TP1. Créer une VM sur la ferme&quot;">​</a></h1><details class="details custom-block"><summary>Sommaire</summary><nav class="table-of-contents"><ul><li><a href="#objectifs">Objectifs</a></li><li><a href="#pre-requis">Pré-requis</a></li><li><a href="#un-peu-de-detail-sur-la-ferme">Un peu de détail sur la ferme</a></li><li><a href="#acces-a-la-ferme">Accès à la ferme</a></li><li><a href="#les-regles-a-respecter">Les règles à respecter</a></li><li><a href="#les-vmware-tools">Les VMWare Tools</a></li><li><a href="#creer-le-dossier-pour-ranger-vos-vm">Créer le dossier pour ranger vos VM</a></li><li><a href="#creer-une-vm">Créer une VM</a><ul><li><a href="#_1-type-de-creation">1. Type de création</a></li><li><a href="#_2-nommage-de-votre-machine">2. Nommage de votre machine</a></li><li><a href="#_3-ressource-de-calcul">3. Ressource de calcul</a></li><li><a href="#_4-l-espace-de-stockage">4. L&#39;espace de stockage</a></li><li><a href="#_5-compatibilite">5. Compatibilité</a></li><li><a href="#_6-choix-de-l-os">6. Choix de l&#39;OS</a></li><li><a href="#_7-configuration-de-votre-vm">7. Configuration de votre VM</a></li><li><a href="#fin-recap">Fin. Récap</a></li></ul></li><li><a href="#connecter-un-iso-pour-l-installation">Connecter un ISO pour l&#39;installation</a></li><li><a href="#demarer-votre-vm">Démarer votre VM</a></li><li><a href="#acceder-a-votre-vm-depuis-l-interface-web">Accéder à votre VM depuis l&#39;interface Web</a></li><li><a href="#supprimer-une-vm">Supprimer une VM</a></li><li><a href="#acces-a-vos-vm-apres-l-installation">Accès à vos VM après l&#39;installation</a></li><li><a href="#fiche-serveur">Fiche serveur</a></li><li><a href="#acces-a-la-ferme-depuis-chez-vous">Accès à la ferme depuis chez vous</a></li><li><a href="#conclusion">Conclusion</a></li><li><a href="#la-suite">La suite ?</a></li></ul></nav></details><h2 id="objectifs" tabindex="-1">Objectifs <a class="header-anchor" href="#objectifs" aria-label="Permalink to &quot;Objectifs&quot;">​</a></h2><p>Dans ce TP nous allons voir comment créer une VM (machine virtuelle) sur la ferme VMWare du BTS SIO à Angers. L&#39;idée de ce TP est de comprendre comment fonctionne la ferme, afin de la prendre en main.</p><div class="danger custom-block"><p class="custom-block-title">👋 Attention</p><p>La ferme est un équipement partagé par l&#39;ensemble des étudiants du BTS (1ère et 2ème année). Il est donc important de respecter quelques règles d&#39;utilisation pour une utilisation optimale de la ferme, et surtout <strong>dans l&#39;intérêt de tous</strong>.</p></div><p>Dans ce TP nous allons créer une VM à partir de zéro. Si vous souhaitez créer une VM depuis un modèle, vous pouvez suivre le <a href="./tp1alt.html">TP1 - Alternatif</a>.</p><h2 id="pre-requis" tabindex="-1">Pré-requis <a class="header-anchor" href="#pre-requis" aria-label="Permalink to &quot;Pré-requis&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">Uniquement disponible pour le Lycée / VPN</p><p>Pour réaliser ce TP vous devez :</p><ul><li>Être connecté à la ferme du BTS SIO à Angers (ou via le VPN).</li><li>Avoir un compte sur L&#39;AD.</li></ul></div><h2 id="un-peu-de-detail-sur-la-ferme" tabindex="-1">Un peu de détail sur la ferme <a class="header-anchor" href="#un-peu-de-detail-sur-la-ferme" aria-label="Permalink to &quot;Un peu de détail sur la ferme&quot;">​</a></h2><p>La ferme est un cluster de serveur uniquement accessible depuis le réseau du lycée (ou via le VPN). Ce cluster possède une puissance conséquente, à savoir deux serveurs avec comme configuration :</p><ul><li>Xeon avec 32 cœurs.</li><li>1,5To de ram.</li><li>25To de disque dur.</li></ul><p>Nous avons deux serveurs, ce qui donne :</p><ul><li>64 cœurs.</li><li>3To de ram.</li><li>25To de disque.</li></ul><div class="tip custom-block"><p class="custom-block-title">Un instant</p><p>beaucoup ou pas beaucoup ? Échangeons un peu sur ces spécifications.</p></div><h2 id="acces-a-la-ferme" tabindex="-1">Accès à la ferme <a class="header-anchor" href="#acces-a-la-ferme" aria-label="Permalink to &quot;Accès à la ferme&quot;">​</a></h2><p>Pour accéder à la ferme, vous devez :</p><p><a href="https://192.168.10.42" target="_blank" rel="noreferrer">192.168.10.42</a></p><ul><li>Cliquer sur « LANCER VSPHERE CLIENT (HTML5) ».</li><li>Entrer votre identifiant et mot de passe de l&#39;AD (ceux de votre compte Windows).</li></ul><div class="tip custom-block"><p class="custom-block-title">Format</p><p>Votre login doit être sous la forme suivante : <code>Dombtsig.local\\votrelogin</code>.</p></div><p><img src="'+u+'" alt="Connexion à la ferme" loading="lazy"></p><div class="tip custom-block"><p class="custom-block-title">Observons</p><p>Avant d&#39;aller plus loin, observez les options du site. Si vous êtes curieux, vous allez pouvoir voir l&#39;usage actuel de la ferme, ainsi que la puissance de celle-ci.</p><p><img src="'+c+'" alt="Menu de la ferme" loading="lazy"></p></div><h2 id="les-regles-a-respecter" tabindex="-1">Les règles à respecter <a class="header-anchor" href="#les-regles-a-respecter" aria-label="Permalink to &quot;Les règles à respecter&quot;">​</a></h2><p>L&#39;équipe pédagogique vous a attribué l&#39;accès une zone de travail :</p><div class="tip custom-block"><p class="custom-block-title">Quelle est votre Zone ?</p><table><thead><tr><th style="text-align:center;">1ère année</th><th style="text-align:center;">2nd année</th></tr></thead><tbody><tr><td style="text-align:center;">BREHAT</td><td style="text-align:center;">OUESSANT</td></tr></tbody></table></div><p>Avant de continuer, quelques règles <strong>sont importantes</strong> pour utiliser aux mieux cette espace de travail partagé :</p><ul><li>Ne pas créer de VM directement dans <strong>votre zone</strong>, mais dans un dossier à votre nom.</li><li>Nommer vos VM de la manière suivante : <code>&lt;votre-nom&gt;-&lt;utilité de la machine&gt;</code>. (Exemple: <code>vbrosseau-ap2ServeurDebianWeb</code>).</li><li>Choisir l&#39;allocation dynamique pour le disque dur.</li><li>Installer les VMWARE Tools une fois la machine installée.</li><li>Ne pas conserver les machines Linux allumées en dehors des heures de cours. Votre machine ne sert probablement pas la nuit… <strong>Faites comme les grands acteurs du cloud, éteignez vos machines la nuit</strong>.</li><li>Ne pas créer de machine avec une configuration trop importante. La ferme est un équipement partagé, il est donc important de ne pas surcharger les serveurs.</li><li>Supprimer régulièrement les VM qui ne vous sont plus utiles. (en utilisant l&#39;option <strong>« Supprimer du disque »</strong>).</li><li><strong>Sauvegarder vos identifiants et mots de passe de votre VM</strong>.</li></ul><div class="tip custom-block"><p class="custom-block-title">Comment ne pas perdre vos identifiants ?</p><p>Pour ne pas perdre vos identifiants vous <strong>devez</strong> créer une <code>fiche serveur</code>. Ce document va contenir toutes les informations de votre Machine Virtuelle :</p><ul><li>Nom.</li><li>Système d&#39;exploitation.</li><li>Adresse IP, Masque, Passerelle, adresse DNS.</li><li>Login et mot de passe administrateur.</li><li>Login et mot de passe utilisateur (s’il y en a).</li><li>La liste des services de votre machine.</li><li>Si les services ont également des accès spécifiques ajouter les dans votre <code>fiche serveur</code>.</li></ul></div>',27),C=e("div",{class:"danger custom-block"},[e("p",{class:"custom-block-title"},"🚨 Attention"),e("p",null,"Toutes les VM qui ne respectent pas ces exigences pourront être supprimées sans avertissement !"),e("p",null,"Ne jouez pas avec le feu, respectez les règles. Sinon vous risquez de vous brûler 🔥."),e("iframe",{src:"https://giphy.com/embed/dbtDDSvWErdf2",width:"480",height:"261",frameBorder:"0",class:"giphy-embed",allowFullScreen:""})],-1),y=r('<h2 id="les-vmware-tools" tabindex="-1">Les VMWare Tools <a class="header-anchor" href="#les-vmware-tools" aria-label="Permalink to &quot;Les VMWare Tools&quot;">​</a></h2><p>Les VMWare Tools sont un ensemble de logiciels qui vont permettre d&#39;optimiser l&#39;utilisation de votre machine virtuelle. Ces logiciels vont permettre d&#39;optimiser la gestion de la mémoire, de la carte réseau, de la carte graphique, du clavier, de la souris, etc.</p><p>Il est important de ne jamais les oublier, car ils sont vraiment une source d&#39;optimisation des performances. Pour votre VM mais également pour le cluster.</p><h2 id="creer-le-dossier-pour-ranger-vos-vm" tabindex="-1">Créer le dossier pour ranger vos VM <a class="header-anchor" href="#creer-le-dossier-pour-ranger-vos-vm" aria-label="Permalink to &quot;Créer le dossier pour ranger vos VM&quot;">​</a></h2><p>Première étape, rangez votre VM dans un dossier à votre nom. Pour cela :</p><ul><li>Cliquez droit sur le dossier qui correspond à votre zone (OUESSANT, BREHAT, …).</li><li>Cliquez sur <code>Nouveau dossier</code>.</li><li>Nommez le dossier avec votre nom (Exemple: <code>vbrosseau</code>).</li></ul><p><img src="'+d+'" alt="Création d&#39;un dossier" loading="lazy"></p><p>Cette étape est importante, car elle va vous permettre de ranger vos VM dans un dossier à votre nom. Cela va vous permettre de ne pas vous perdre dans les dossiers, et surtout de ne pas supprimer les VM d&#39;un autre étudiant.</p><h2 id="creer-une-vm" tabindex="-1">Créer une VM <a class="header-anchor" href="#creer-une-vm" aria-label="Permalink to &quot;Créer une VM&quot;">​</a></h2><p>Pour créer une VM, il faut :</p><ul><li>Sélectionner le dossier à votre nom.</li><li>Clique droit créer une VM.</li><li>Puis « Nouvelle machine virtuelle… ».</li></ul><p><img src="'+p+'" alt="Création d&#39;une VM" loading="lazy"></p><p>Cette action va ouvrir un assistant vous permettant de créer votre machine virtuelle.</p><h3 id="_1-type-de-creation" tabindex="-1">1. Type de création <a class="header-anchor" href="#_1-type-de-creation" aria-label="Permalink to &quot;1. Type de création&quot;">​</a></h3><p><img src="'+m+'" alt="Type de création" loading="lazy"></p><h3 id="_2-nommage-de-votre-machine" tabindex="-1">2. Nommage de votre machine <a class="header-anchor" href="#_2-nommage-de-votre-machine" aria-label="Permalink to &quot;2. Nommage de votre machine&quot;">​</a></h3><p>Ici vous allez choisir le nom de votre VM. Il est important de respecter la convention de nommage que nous avons définie plus haut.</p><p><img src="'+v+'" alt="Type de création" loading="lazy"></p><h3 id="_3-ressource-de-calcul" tabindex="-1">3. Ressource de calcul <a class="header-anchor" href="#_3-ressource-de-calcul" aria-label="Permalink to &quot;3. Ressource de calcul&quot;">​</a></h3><p><img src="'+h+'" alt="Ressource de calcul" loading="lazy"></p><div class="tip custom-block"><p class="custom-block-title">Quelle ressource de calcul ?</p><table><thead><tr><th style="text-align:center;">1ère année</th><th style="text-align:center;">2nd année</th></tr></thead><tbody><tr><td style="text-align:center;">BREHAT</td><td style="text-align:center;">OUESSANT</td></tr></tbody></table></div><h3 id="_4-l-espace-de-stockage" tabindex="-1">4. L&#39;espace de stockage <a class="header-anchor" href="#_4-l-espace-de-stockage" aria-label="Permalink to &quot;4. L&#39;espace de stockage&quot;">​</a></h3><p><img src="'+f+'" alt="Ressource de calcul" loading="lazy"></p><div class="tip custom-block"><p class="custom-block-title">Quelle est votre Zone ?</p><table><thead><tr><th style="text-align:center;">1ère année</th><th style="text-align:center;">2nd année</th></tr></thead><tbody><tr><td style="text-align:center;">BREHAT</td><td style="text-align:center;">OUESSANT</td></tr></tbody></table></div><h3 id="_5-compatibilite" tabindex="-1">5. Compatibilité <a class="header-anchor" href="#_5-compatibilite" aria-label="Permalink to &quot;5. Compatibilité&quot;">​</a></h3><p>Ne touchez à rien, et cliquez sur « Next ».</p><h3 id="_6-choix-de-l-os" tabindex="-1">6. Choix de l&#39;OS <a class="header-anchor" href="#_6-choix-de-l-os" aria-label="Permalink to &quot;6. Choix de l&#39;OS&quot;">​</a></h3><p>À cette étape vous allez indiquer à VMWare quel système d&#39;exploitation votre VM va avoir. En fonction de votre choix. La VM sera optimisée pour celui-ci.</p><p><img src="'+g+'" alt="Ressource de calcul" loading="lazy"></p><h3 id="_7-configuration-de-votre-vm" tabindex="-1">7. Configuration de votre VM <a class="header-anchor" href="#_7-configuration-de-votre-vm" aria-label="Permalink to &quot;7. Configuration de votre VM&quot;">​</a></h3><p>Comme pour un ordinateur physique, une VM possède une configuration matérielle. Cette configuration matérielle doit être en adéquation avec le système d&#39;exploitation que vous avez choisi :</p><h4 id="le-disque-dur-la-memoire-vive" tabindex="-1">Le disque dur &amp; la mémoire vive <a class="header-anchor" href="#le-disque-dur-la-memoire-vive" aria-label="Permalink to &quot;Le disque dur &amp; la mémoire vive&quot;">​</a></h4><ul><li>Windows : 60Go de disque dur, 4Go de mémoire vive.</li><li>Linux : 8Go de disque dur, 2Go de mémoire vive.</li></ul><p><img src="'+b+'" alt="Ressource de calcul" loading="lazy"></p><div class="tip custom-block"><p class="custom-block-title">Provisionnement du disque</p><p>Le provisionnement dynamique est une méthode qui optimise l&#39;utilisation du stockage en allouant un espace de stockage de manière flexible, à la demande.</p><p><a href="https://docs.vmware.com/fr/VMware-vSphere/6.7/com.vmware.vsphere.html.hostclient.doc/GUID-525C8814-C5B7-419E-852D-A396FF74C6DA.html" target="_blank" rel="noreferrer">En savoir plus</a></p></div><h4 id="le-reseau" tabindex="-1">Le réseau <a class="header-anchor" href="#le-reseau" aria-label="Permalink to &quot;Le réseau&quot;">​</a></h4><ul><li>Choisir votre VLAN (voir celui qui vous a été attribué).</li><li>Changer le type de l&#39;adaptateur : choisir VMXNET.</li></ul><p><img src="'+q+'" alt="Ressource de calcul" loading="lazy"></p><div class="tip custom-block"><p class="custom-block-title">Votre VLAN ?</p><p>Si vous ne connaissez plus votre VLAN, vous pouvez <a href="https://192.168.10.9/course/view.php?id=58" target="_blank" rel="noreferrer">le retrouver sur Moodle</a>.</p></div><h3 id="fin-recap" tabindex="-1">Fin. Récap <a class="header-anchor" href="#fin-recap" aria-label="Permalink to &quot;Fin. Récap&quot;">​</a></h3><p>La configuration de votre VM est complète. Vous pouvez maintenant cliquer sur « Finish » pour valider la création de celle-ci.</p><p><img src="'+_+'" alt="Fin" loading="lazy"></p><h2 id="connecter-un-iso-pour-l-installation" tabindex="-1">Connecter un ISO pour l&#39;installation <a class="header-anchor" href="#connecter-un-iso-pour-l-installation" aria-label="Permalink to &quot;Connecter un ISO pour l&#39;installation&quot;">​</a></h2><p>Pour installer votre système d&#39;exploitation, vous allez devoir connecter un ISO à votre VM.</p><div class="tip custom-block"><p class="custom-block-title">Un ISO ?</p><p>Un ISO est un fichier qui contient une image d&#39;un CD ou d&#39;un DVD. Il est possible de créer un ISO à partir d&#39;un CD ou d&#39;un DVD. Il est également possible de télécharger un ISO sur internet.</p><p>Le fichier ISO est une copie parfaite d&#39;un disque physique.</p></div><p>Pour connecter un ISO à votre VM :</p><ul><li>Clique droit sur votre VM et « Modifier les paramètres ».</li></ul><p><img src="'+a+'" alt="Modifier les paramètres" loading="lazy"></p><p><img src="'+s+'" alt="Choix de l&#39;ISO" loading="lazy"></p><ul><li>choisir l’image iso (liste déroulante) que vous souhaitez : Par exemple <code>debian-11.5.0-amd64-netinst.iso</code> qui se trouve dans la banque de données ISO puis répertoire <code>\\LINUX\\</code>.</li><li>N’oubliez pas de cocher la case « Connecter lors de la mise sous tension » sinon votre vm ne bootera pas sur votre iso/cd au démarrage.</li></ul><p><img src="'+t+'" alt="Choix de l&#39;ISO 2" loading="lazy"><img src="'+i+'" alt="Choix de l&#39;ISO 3" loading="lazy"></p><div class="tip custom-block"><p class="custom-block-title">Et voilà !</p><p>Vous venez de créer votre première VM. Celle-ci est prête à être démarrée et à être installé (comme un véritable ordinateur).</p></div><h2 id="demarer-votre-vm" tabindex="-1">Démarer votre VM <a class="header-anchor" href="#demarer-votre-vm" aria-label="Permalink to &quot;Démarer votre VM&quot;">​</a></h2><p>Pour démarrer votre VM, il suffit de cliquer sur « la flèche verte ».</p><p><img src="'+V+'" alt="Démarrer la VM" loading="lazy"></p><h2 id="acceder-a-votre-vm-depuis-l-interface-web" tabindex="-1">Accéder à votre VM depuis l&#39;interface Web <a class="header-anchor" href="#acceder-a-votre-vm-depuis-l-interface-web" aria-label="Permalink to &quot;Accéder à votre VM depuis l&#39;interface Web&quot;">​</a></h2><p>Maintenant que vous avez démarré votre VM. Il faut accéder à celle-ci.</p><p>Évidemment, nous n&#39;avons pas la possiblité de connecter un écran à la ferme. Nous allons utiliser un accès distant « web » (une sorte de VNC). Cette accès distant n&#39;est pas très pratique et est plutôt lent.</p><p>🔥 <strong>Il ne nous servira que pour l&#39;installation</strong></p><p><img src="'+M+'" alt="Accès distant" loading="lazy"></p><p><img src="'+P+'" alt="Accès distant 2" loading="lazy"></p><h2 id="supprimer-une-vm" tabindex="-1">Supprimer une VM <a class="header-anchor" href="#supprimer-une-vm" aria-label="Permalink to &quot;Supprimer une VM&quot;">​</a></h2><p>Il est important de régulièrement supprimer les VM qui ne sont plus utiles.</p><p>Pour supprimer une VM :</p><ul><li>Clique droit sur la machine à supprimer.</li><li>Supprimer du disque.</li></ul><p><img src="'+k+'" alt="Ferme supprimer" loading="lazy"></p><div class="danger custom-block"><p class="custom-block-title">Attention</p><p>Ne surtout pas cliquer sur « Supprimer de l’inventaire ». Cela supprime juste la vm de la liste en conservant tous les fichiers liés à la vm sur la ferme qui continuent donc d’occuper de la place inutilement !</p></div><h2 id="acces-a-vos-vm-apres-l-installation" tabindex="-1">Accès à vos VM après l&#39;installation <a class="header-anchor" href="#acces-a-vos-vm-apres-l-installation" aria-label="Permalink to &quot;Accès à vos VM après l&#39;installation&quot;">​</a></h2><p>Nous reviondrons sur ce point d&#39;ici quelques TP. Mais vous devez <strong>Obligatoirement</strong> vous connecter à vos machines virtuelles depuis :</p><ul><li>Windows : Bureau à distance.</li><li>Linux : SSH (Putty ou WSL2 ou GitBash).</li></ul><p>Le Bureau à distance ou le SSH sont les seules bonne façon par accèder à votre VM.</p><p>L&#39;accès Web de Vmware n&#39;offre pas une performance suffisante pour travailler dans de bonne condition.</p><p>En plus il ne permet pas de copier/coller entre votre machine et votre VM.</p><div class="tip custom-block"><p class="custom-block-title">👋 Un instant</p><p>Plus tard, nous verrons pourquoi l&#39;accès SSH est un incontournable en entreprise. Et surtout pourquoi, bien configuré il sera un allié pour gérer vos serveurs de manières optimisé.</p></div><h2 id="fiche-serveur" tabindex="-1">Fiche serveur <a class="header-anchor" href="#fiche-serveur" aria-label="Permalink to &quot;Fiche serveur&quot;">​</a></h2><p>Vous venez de créer votre première machine virtuelle. Comme vu en introduction, cette fiche doit contenir l&#39;ensemble des informations de votre serveurs. Par exemple :</p><ul><li>nom de la vm, mais surtout nom de la machine via le système d’exploitation</li><li>les comptes utilisateurs : identifiants et MOT DE PASSE</li><li>configuration IP</li><li>système d’exploitation installé</li><li>services installés avec mot de passe (compte)</li><li>outils installés avec mot de passe (compte)</li></ul>',77),z=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"L'objectif ?"),e("p",null,"Ici l'idée est de ne pas oublier la configuration de votre serveur. En effet, avec la multitude de serveurs et de cours, il n'est pas impossible que vous oubliez la configuration de votre machine. Pour éviter tout problème, créer dès le début votre fiche serveur."),e("iframe",{src:"https://giphy.com/embed/Od0QRnzwRBYmDU3eEO",width:"480",height:"480",frameBorder:"0",class:"giphy-embed",allowFullScreen:""})],-1),T=r('<h2 id="acces-a-la-ferme-depuis-chez-vous" tabindex="-1">Accès à la ferme depuis chez vous <a class="header-anchor" href="#acces-a-la-ferme-depuis-chez-vous" aria-label="Permalink to &quot;Accès à la ferme depuis chez vous&quot;">​</a></h2><p>Pour cela vous devez installer sur votre machine le logiciel OpenVPN.</p><p>Vous trouverez une procédure d’installation sur Moodle (192.168.10.9), ainsi que les fichiers de configuration nécessaires (certificats) pour autoriser votre connexion au lycée :</p><p><code>Moodle\\Info BTS SIO\\Accès VPN</code></p><p>Une fois connecté, vous êtes sur votre machine comme si vous étiez sur un poste d’une des salles informatiques du lycée.</p><h2 id="conclusion" tabindex="-1">Conclusion <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusion&quot;">​</a></h2><p>Dans ce TP nous avons vu comment créer un VM. Et surtout quelles sont les règles de bases à respecter pour que la ferme fonctionne bien dans la durée ? Nous avons aussi vu comment accéder à votre VM depuis chez vous. Et enfin, nous avons vu l&#39;importance de créer une fiche serveur.</p><p>Vous pouvez penser en SLAM que les serveurs ne font pas partie de votre option ? Détrompez-vous, pendant les deux années, nous vous demanderons de créer des serveurs. Et surtout de les gérer. C&#39;est pourquoi il est important de bien comprendre les bases de la création de VM.</p><p>De plus, il y a fort à parier qu&#39;en entreprise vous soyez amené à « gérer des serveurs », ou dans une moindre mesure vous connecter dessus pour y installer vos développements.</p><h2 id="la-suite" tabindex="-1">La suite ? <a class="header-anchor" href="#la-suite" aria-label="Permalink to &quot;La suite ?&quot;">​</a></h2><p>Dans le prochain TP, nous allons voir comment installer un système d&#39;exploitation sur une VM. <a href="./tp1b.html">Cliquez ici pour accéder au TP suivant</a></p>',11),A=[S,C,y,z,T];function L(N,I,D,E,O,R){return n(),l("div",null,A)}const W=o(x,[["render",L]]);export{w as __pageData,W as default};