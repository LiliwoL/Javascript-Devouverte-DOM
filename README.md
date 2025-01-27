<!-- TOC -->
* [Objectifs pédagogiques](#objectifs-pédagogiques)
* [Mise en situation](#mise-en-situation)
* [Fichiers fournis](#fichiers-fournis)
* [Exercices](#exercices)
  * [Partie 1 : Sélection des éléments](#partie-1--sélection-des-éléments)
  * [Partie 2 : Première interactivité](#partie-2--première-interactivité)
  * [Partie 3 : Nourrir les animaux](#partie-3--nourrir-les-animaux)
  * [Partie 4 : Améliorations](#partie-4--améliorations)
* [Exercices Bonus](#exercices-bonus)
* [Conseils](#conseils)
* [Documentation utile](#documentation-utile)
<!-- TOC -->

v0.1

---
**Durée : 2 heures**

# Objectifs pédagogiques
- Comprendre ce qu'est le DOM
- Apprendre à sélectionner des éléments HTML via JavaScript
- Manipuler le contenu et les styles des éléments
- Gérer les événements utilisateur

---

# Mise en situation
Vous êtes développeur junior dans une start-up qui crée des sites web éducatifs pour enfants. Votre mission est de créer une page interactive sur le thème du zoo.

# Fichiers fournis
Créez un nouveau dossier avec les fichiers suivants :

**index.html** :
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Le Zoo Interactif</title>
    <style>
        .animal {
            width: 200px;
            height: 200px;
            border: 2px solid #333;
            margin: 10px;
            display: inline-block;
            text-align: center;
            cursor: pointer;
        }
        .animal img {
            width: 150px;
            height: 150px;
            margin-top: 10px;
        }
        .selected {
            border: 3px solid #ff0000;
        }
        #nourriture {
            margin: 20px;
            padding: 10px;
            background-color: #f0f0f0;
        }
    </style>
</head>
<body>
    <h1>Mon Zoo Interactif</h1>
    
    <div id="zoo">
        <div class="animal" id="lion">
            <img src="https://cdn-icons-png.flaticon.com/512/2938/2938995.png" alt="Lion">
            <p>Lion</p>
        </div>
        <div class="animal" id="elephant">
            <img src="https://cdn-icons-png.flaticon.com/512/2938/2938985.png" alt="Éléphant">
            <p>Éléphant</p>
        </div>
        <div class="animal" id="girafe">
            <img src="https://cdn-icons-png.flaticon.com/512/2938/2938989.png" alt="Girafe">
            <p>Girafe</p>
        </div>
    </div>

    <div id="nourriture">
        <h2>Nourriture disponible : <span id="compteur">3</span></h2>
        <button id="ajouterNourriture">Ajouter de la nourriture</button>
    </div>

    <div id="infos">
        <h2>Informations</h2>
        <p id="message">Cliquez sur un animal pour le nourrir !</p>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

**script.js** :
```javascript
// C'est ici que vous écrirez votre code JavaScript
```

---
# Exercices

## Partie 1 : Sélection des éléments
1. Dans le fichier **script.js**, sélectionnez et stockez dans des variables :
    - Tous les éléments avec la classe "animal"
    - L'élément avec l'id "compteur"
    - Le bouton "ajouterNourriture"
    - L'élément avec l'id "message"

2. Pour vérifier vos sélections, affichez-les dans la console.

<div class="correction">

```javascript
// - Tous les éléments avec la classe "animal"
console.log("---------------------------------");
console.info("1. Tous les éléments avec la classe 'animal'");
const animaux = document.getElementsByClassName('animal');
console.log(animaux);
console.log("---------------------------------");

// - L'élément avec l'id "compteur"
console.log("---------------------------------");
console.info("2. L'élément avec l'id 'compteur'");
const compteur = document.getElementById('compteur');
console.log(compteur);
console.log("---------------------------------");

// - Le bouton "ajouterNourriture"
console.log("---------------------------------");
console.info("3. Le bouton 'ajouterNourriture'");
const ajouterNourriture = document.getElementById('ajouterNourriture');
console.log(ajouterNourriture);
console.log("---------------------------------");

// - L'élément avec l'id "message"
console.log("---------------------------------");
console.info("4. L'élément avec l'id 'message'");
const message = document.getElementById('message');
console.log(message);
console.log("---------------------------------");
```

</div>

## Partie 2 : Première interactivité

1. Ajoutez un écouteur d'événement **click** sur le bouton **ajouterNourriture** :
    - Récupérez la valeur actuelle du compteur
    - Augmentez-la de 1
    - Mettez à jour l'affichage

<div class="correction">

```javascript
function incrementerCompteur() {
    // Récupération de la valeur actuelle du compteur (on doit faire parseInt!)
    let valeurActuelle = parseInt(compteur.textContent);
    // Augmentation de la valeur de 1
    compteur.textContent = valeurActuelle + 1;
}
// Ecouteur d'événement
ajouterNourriture.addEventListener('click', incrementerCompteur);
```

</div>

2. Ajoutez un écouteur d'événement sur **chaque** animal :
    - Lorsqu'on clique sur un animal, ajoutez-lui la classe **selected**
    - Si on clique à nouveau, retirez la classe **selected**

<div class="correction">

```javascript
for (let animal of animaux)
{
    console.log("Animal en cours: " + animal.id);
    animal.addEventListener('click', function() {
        // Ajout de la classe 'selected' à l'élément
        animal.classList.toggle('selected');
    });
}
```

</div>

---

## Partie 3 : Nourrir les animaux

1. Modifiez l'événement click sur les animaux :
    - Si le compteur est supérieur à 0 :
        - Diminuez le compteur de 1
        - Affichez un message "Le [nom de l'animal] a été nourri !"
    - Sinon :
        - Affichez "Plus de nourriture disponible !"

<div class="correction">

```javascript
function nourrirAnimal() {
    if (parseInt(compteur.textContent) > 0) {
        // Diminution du compteur de 1
        compteur.textContent = parseInt(compteur.textContent) - 1;
        // Affichage du message
        message.textContent = `Le ${this.id} a été nourri !`;
    } else {
        // Affichage du message
        message.textContent = "Plus de nourriture disponible !";
    }
}
for (let animal of animaux){
    animal.addEventListener('click', nourrirAnimal);
}
```

</div>

2. Bonus : Ajoutez une animation CSS quand l'animal est nourri

<div class="correction">

On ajoute une classe CSS
```css
.nourri{
	background-color: #00ff00;
}
```

```javascript
function nourrirAnimalBonus() {
    if (parseInt(compteur.textContent) > 0) {
        // Diminution du compteur de 1
        compteur.textContent = parseInt(compteur.textContent) - 1;
        // Affichage du message
        message.textContent = `Le ${this.id} a été nourri !`;
        // Animation CSS
        this.classList.add('nourri');
        setTimeout(() => {
            this.classList.remove('nourri');
        }, 1000);
    } else {
        // Affichage du message
        message.textContent = "Plus de nourriture disponible !";
    }
}
for (let animal of animaux){
    animal.addEventListener('click', nourrirAnimalBonus);
}
```

</div>

---
## Partie 4 : Améliorations

1. Ajoutez un son lorsqu'un animal est nourri
2. Créez une fonction qui vérifie si tous les animaux ont été nourris
3. Ajoutez un compteur de clics pour chaque animal

---

# Exercices Bonus

1. Ajoutez un système de score
2. Créez un formulaire pour ajouter de nouveaux animaux
3. Ajoutez des informations spécifiques pour chaque animal qui s'affichent au survol

---

# Conseils
- Utilisez la console du navigateur pour déboguer
- N'hésitez pas à consulter la documentation sur MDN
- Découpez chaque problème en petites étapes

---

# Documentation utile

- `document.getElementById()`
- `document.getElementsByClassName()`
- `document.querySelector()`
- `element.addEventListener()`
- `element.classList`