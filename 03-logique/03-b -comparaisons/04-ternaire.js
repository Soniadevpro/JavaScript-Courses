 /* 1)
Demande à l'utilisateur de saisir son âge avec prompt.
Utilise un opérateur ternaire pour affecter à une variable statut la valeur "Majeur" si l'âge est supérieur ou égal à 18, ou "Mineur" sinon.
Affiche statut avec console.log.
*/

// let age = prompt("Quel est votre âge ?");

// let statut = (age >= 18) ? "Majeur" : "Mineur";
// console.log(statut);

 /* 2)
Demande à l'utilisateur de saisir un nombre avec prompt.
Utilise un opérateur ternaire pour afficher "Le nombre est pair" si le nombre est pair, ou "Le nombre est impair" s’il est impair.

*/


// let nombre = Number(prompt("Saisissez un nombre"));

// let pair = (nombre % 2 === 0) ? "le nombre est pair" : "le nombre est impair";

// console.log(pair);


  /* 3)
Demande à l'utilisateur de saisir une température.
Utilise un opérateur ternaire pour afficher "Il fait chaud" si la température est supérieure à 30, sinon "Il fait frais"      

      let temperature = Number(prompt("Entrez la température :"));
      let message = temperature > 30 ? "Il fait chaud" : "Il fait frais";
      console.log(message); // Affiche "Il fait chaud" ou "Il fait frais"
  -------------
  /* 4)
Demande à l'utilisateur de saisir un prix.
Utilise un opérateur ternaire pour appliquer une remise de 20 % si le prix est supérieur ou égal à 100, sinon applique une remise de 10 %.
Affiche le nouveau prix calculé
*/


// let temperature = Number(prompt("Entrez la température :"));

// let message = temperature > 30 ? "Il fait chaud" : "Il fait frais";
// console.log(message); // Affiche "Il fait chaud" ou "Il fait frais"
/* ------------------------------------------------------------------------------------- */



let prix = +prompt("Entrez le prix :");

// let remise = prix >= 100 ? 0.8 : 0.9;
// let nouveauPrix = prix * remise;
// console.log(nouveauPrix);
prix = prix >= 100 ? prix * 0.8 : prix * 0.9;
console.log(prix.toFixed(2)); // Affiche le prix avec 2 décimales

/* ------------------------------------------------------------------------------------- */

/* 5)
Demande à l'utilisateur de saisir une note (entre 0 et 100).
Utilise des opérateurs ternaires imbriqués pour évaluer la note :
Si la note est supérieure ou égale à 90, affiche "Excellent".
Si la note est supérieure ou égale à 75, affiche "Bien".
Si la note est supérieure ou égale à 50, affiche "Passable".
Sinon, affiche "Échec".
*/
let note = +prompt("Entrez la note :");

let evaluation = note >= 90
  ? "Excellent" : note >= 75
  ? "Bien" : note >= 50 
  ? "Passable" : "Échec";


console.log(evaluation); // Affiche "Excellent", "Bien", "Passable" ou "Échec"
