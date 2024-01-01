---
description: Exercice d'entrainement lecture d'UML.
aside: false
---

# Exercices d'entraînement à la lecture d'UML

Pour progresser, il faut pratiquer, vous trouverez ici des exercices permettant de vous entraîner à la lecture d'UML. La lecture d'UML est un élément important pour comprendre les études de cas, celles-ci étant à réaliser sur papier, je vous conseille vivement de travailler les exercices sur feuilles.

Cette page a été conçue dans le but de réaliser un exercice par jour.

Je suis à disposition pour les corrections via Slack ou par [email](./contact.md).

<ClientOnly>
<Urdle />
</ClientOnly>

_(Les Getters et les Setters ne sont pas représentés dans l’UML)_

::: tip Rappels

Écriture d'un constructeur :

```php
function __construct($nom, $prenom){
    $this->nom = $nom;
    $this->prenom = $prenom;
}
```

Appeler une méthode :

```php
class Exemple {
    function helloWorld(){
        echo "Bonjour Monde";
    }
}

$exemple = new Exemple();

$exemple->helloWorld();
```

Utiliser une liste :

```php
$monObjet = new Objet();

// Créer un tableau
$maListe = [];

// Ajouter dans un tableau
array_push($maListe, $monObjet);

// Parcourir une liste
foreach ($maListe as $maValeur){
    echo $maValeur->laMethode();
}

// Taille d'un tableau
echo sizeOf($maListe);
```

Vous souhaitez plus d'aide ?

- [Aide mémoire POO](/cheatsheets/poo/)
- [Aide mémoire UML](/cheatsheets/poo-uml/)


:::