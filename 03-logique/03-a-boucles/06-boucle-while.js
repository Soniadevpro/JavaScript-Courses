/* 1)
Crée une variable compteur et initialise-la à 1.
Utilise une boucle while pour afficher chaque nombre de 1 à 10.
Incrémente compteur à chaque itération pour éviter une boucle infinie
*/


// let compteur = 1 ;
// while (compteur <=10) {
//     console.log(compteur);
//     compteur++;
// }

/* 2)
Demande à l’utilisateur de saisir un mot de passe en utilisant prompt.
Continue de demander le mot de passe tant que l’utilisateur ne saisit pas "secret".
Une fois le bon mot de passe saisi, affiche un message "Accès autorisé".

*/

// let mdp = "";
// while (mdp !== "secret") {
//     mdp = prompt("Saisissez votre mot de passe");
// }
// console.log("Accès autorisé");


/* 3)
Demande à l’utilisateur de saisir des nombres à additionner (utilise prompt pour chaque nombre).
Continue d’additionner les nombres tant que l’utilisateur ne saisit pas 0.
Une fois 0 saisi, affiche le résultat total de l’addition.
*/

// let total = 0;
// let nombre;
// while (nombre !== 0) {
//     nombre = parseInt(prompt("Saisissez un nombre"));
//     total += nombre;
// }

// console.log(`Le total est de ${total}`);






/* 4)

Crée une variable nombre et initialise-la à 0.
Utilise une boucle while pour afficher les nombres pairs entre 0 et 20.
Incrémente nombre de 2 à chaque itération pour ne prendre que les nombres pairs.
*/

// let number = 0;

// while (number <= 20) {
//     console.log(number);
//     number += 2;
// }


/* 5)
Générez un nombre aléatoire entre 1 et 10 (en utilisant Math.floor(Math.random() * 10) + 1).
Demande à l’utilisateur de deviner le nombre en utilisant prompt.
Continue de demander jusqu'à ce que l’utilisateur devine correctement le nombre.
Affiche le nombre de tentatives nécessaires.
*/






let nombreAleatoire = Math.floor(Math.random() * 10) + 1;
let nombreUtilisateur = 0;
console.log(nombreAleatoire);

let tentatives = 0;

while (nombreUtilisateur !== nombreAleatoire) {
    nombreUtilisateur = parseInt(prompt("Devinez le nombre"));
    tentatives++;
}

console.log(`Bravo, vous avez trouvé le nombre aléatoire ${nombreAleatoire} en ${tentatives} tentatives`);
