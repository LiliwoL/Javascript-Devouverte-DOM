console.clear();
/**
 * Partie 1
 */

/**
 * 1. Dans le fichier **script.js**, sélectionnez et stockez dans des variables :
 *    - Tous les éléments avec la classe "animal"
 *    - L'élément avec l'id "compteur"
 *    - Le bouton "ajouterNourriture"
 *    - L'élément avec l'id "message"
 */

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

// *********************************************************************************************

/**
 * Partie 2
 */

/**
 *  Ajoutez un écouteur d'événement 'click' sur le bouton "ajouterNourriture" :
 *    - Récupérez la valeur actuelle du compteur
 *    - Augmentez-la de 1
 *    - Mettez à jour l'affichage
 */
function incrementerCompteur() {
    // Récupération de la valeur actuelle du compteur (on doit faire parseInt!)
    let valeurActuelle = parseInt(compteur.textContent);
    // Augmentation de la valeur de 1
    compteur.textContent = valeurActuelle + 1;
}
// Ecouteur d'événement
ajouterNourriture.addEventListener('click', incrementerCompteur);

/**
 * Ajoutez un écouteur d'événement sur chaque animal :
 *    - Lorsqu'on clique sur un animal, ajoutez-lui la classe **selected**
 *    - Si on clique à nouveau, retirez la classe **selected**
 */
// Parcours de tous les animaux (HTMLCollection)
for (let animal of animaux)
{
    console.log("Animal en cours: " + animal.id);
    animal.addEventListener('click', function() {
        // Ajout de la classe 'selected' à l'élément
        animal.classList.toggle('selected');
    });
}

// *********************************************************************************************

/**
 * Partie 3
 */

/**
 * 1. Modifiez l'événement click sur les animaux :
 *    - Si le compteur est supérieur à 0 :
 *      - Diminuez le compteur de 1
 *      - Affichez un message "Le [nom de l'animal] a été nourri !"
 *    - Sinon :
 *      - Affichez "Plus de nourriture disponible !"
 */
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
    //animal.addEventListener('click', nourrirAnimal);
}

/**
 * 2. Bonus : Ajoutez une animation CSS quand l'animal est nourri
 */
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

// *********************************************************************************************

/**
 * Partie 4
 */

/**
 * 1. Ajoutez un son lorsqu'un animal est nourri
 * 2. Créez une fonction qui vérifie si tous les animaux ont été nourris
 * 3. Ajoutez un compteur de clics pour chaque animal
 */

