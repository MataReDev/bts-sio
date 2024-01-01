---
description: Dans cette mise en pratique, nous allons voir comment déclarer et utiliser des classes abstraites.
---

# Classe abstraite : Mise en pratique

Dans cette mise en pratique, nous allons voir comment déclarer et utiliser des `Classes Abstraites en PHP`. Les classes abstraites sont un élément important de la programmation-objet, pour rappel :

- Sers de base à d'autres classes dérivées (héritées).
- Ne peut pas être instanciée (pas de new).
- Permets de factoriser du code.
- Les classes abstraites ne sont pas instanciable
- Dois être héritée depuis une classe fille.

::: details Sommaire
[[toc]]
:::

## Ressources disponibles :

- [Aide mémoire POO](/cheatsheets/poo/)
- [Aide mémoire POO-UML](/cheatsheets/poo-uml/)
- [Cours POO](/cours/poo.md)

## Mise en situation

![UML](./res/abstract_uml.png)

```php
abstract class EtudiantAbstrait
{
    // Force les classes filles à définir cette méthode
    abstract protected function getSpecificite();
    abstract protected function setSpecificite($valeur);

    // méthode commune
    public function parler() {
        print "Je suis " . $this->getSpecificite() . "\n";
    }
}
```

::: tip Questionnement

- Une classe`abstraite` est définie avec le mot clé :
- Identifier les particularités de la classe `EtudiantAbstrait`
  - **Particularité 1 :**
  - **Particularité 2 :**
  - **Particularité 3 :**
- D'un point de vue sécurité, qu'apporte cette organisation ? (Une piste, encapsulation…)
- Selon vous, pourquoi la classe abstraite ne possède-t-elle pas de constructeur ?

::::

## Déclarer les classes

Pour utiliser une classe abstraite, nous allons devoir « **hériter** » de celle-ci avec les mots clés que vous connaissez déjà :

- `extends` en php et en java.
- `:` en C#.

La différence avec un simple héritage, c'est que vous devrez « implémenter » / « écrire » les deux méthodes :

- `getSpecificite()`
- `setSpecificite($valeur)`

Et la méthode parler ?

Pour la méthode `parler()` c'est au choix. Vous pouvez :

- La redéfinir dans votre classe pour en changer le comportement.
- Ne pas la redéfinir et bénéficier du comportement de « base de la classe abstraite ».

::: tip Questionnement

- Écrire la définition de la classe pour `EtudiantSIO`.
- Écrire la définition de la classe pour `EtudiantSEN`.
- Quelle différence majeure observez-vous entre la classe abstraite `EtudiantAbstrait` et les classes filles ?

:::

## Utilisation

Je souhaite créer **6 étudiants** (3 SEN et 3 SIO).

Pour les SEN ils doivent avoir les compétences suivantes

- La sécurité.
- La soudure.
- Le réseau.

Pour le SIO ils doivent avoir les options suivantes :

- SLAM
- SISR
- SLAM

Vous placerez ces étudiants dans **une liste**. Puis pour chacun d'entre eux, vous appellerez la méthode `parler()`.

::: tip Questionnement

- Identifier l'avantage d'une classe abstraite VS un simple héritage.
- Faire évoluer le code pour ajouter le `nom` et le `prenom` de l'étudiant.
  - Quelle(s) classe(s) seront impactées ?
  - Et de quelle manière ?

:::

## Redéfinir une méthode

Après réflexion, vous souhaitez changer le comportement de la méthode `parler()` pour les étudiants de la classe `EtudiantSIO`.

Vous souhaitez que le message soit le suivant :

```php
Je suis un étudiant SIO et je suis spécialisé en sécurité.
```

::: tip Questionnement

- Identifier les modifications à apporter au code.
- Écrire le code pour la classe `EtudiantSIO`.

:::

## Évolution du code

Vous souhaitez ajouter l'identifiant de l'étudiant :

- nom
- prénom

::: tip Questionnement

- Quelles classe(s) seront impactée(s) ?
- Quelles modifications apporter au code ?
- Écrire le code permettant d'ajouter ces informations.
- Devez-vous modifier la méthode `parler()` ?

:::

## Analyser une erreur

Un développeur souhaite créer un Étudiant, il a donc écrit le code suivant :

```php
$etudiant = new EtudiantAbstrait();
```

En exécutant ce code, vous obtenez l'erreur suivante :

```php
Cannot instantiate abstract class EtudiantAbstrait
```

::: tip Questionnement

- Identifier la raison de cette erreur.
- Identifier la solution pour contourner cette erreur.

:::
