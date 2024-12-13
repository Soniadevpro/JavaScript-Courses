    /* 1)
Demande à l’utilisateur de saisir son âge avec prompt et assigne cette valeur à une variable age.
Utilise une condition if pour vérifier si age est supérieur ou égal à 18.
Si la condition est remplie, affiche une alerte avec "Vous êtes majeur.".

*/

let age = +prompt("Quel est votre âge ?");

if (age >= 18) {
    alert("Vous êtes majeur.");
}
console.log(age);


// Demande à l’utilisateur de saisir un nombre avec prompt et assigne cette valeur à une variable nombre.
// Utilise if...else pour vérifier si le nombre est pair ou impair.
// Affiche une alerte avec "Le nombre est pair" ou "Le nombre est impair" en fonction du résultat.


let nombre = prompt("Saisissez un nombre");

if (nombre % 2 === 0) {
    alert("Le nombre est pair");
} else {    
    alert("Le nombre est impair");
}           

console.log(nombre);


// 3)
// Demande à l’utilisateur de saisir deux nombres avec prompt, et assigne-les aux variables a et b.
// Utilise if...else pour afficher lequel des deux nombres est le plus grand, ou si les deux nombres sont égaux.
// Affiche le résultat avec alert.


let a = +prompt("Saisissez un nombre");
let b = +prompt("Saisissez un autre nombre");

if (a > b) {
alert("Le nombre le plus grand est" + a)
console.log(a);
} else if (b > a ) {
    alert("Le nombre le plus grand est" + b)
    console.log(b);
} else {
    alert("Les deux nombres sont égaux")
    console.log(a, b);
}


// 4)
// Demande à l’utilisateur de saisir une température avec prompt et assigne-la à la variable temperature.
// Utilise une condition pour afficher :
// "Il fait froid" si la température est inférieure à 10.
// "Il fait doux" si la température est entre 10 et 25.
// "Il fait chaud" si la température est supérieure à 25.
// Affiche le résultat avec alert.


let temperature = +prompt("Quelle est la température ?");

if (temperature < 10) {
    alert("Il fait froid");
} else if (temperature >= 10 && temperature <= 25) {
    alert("Il fait doux");
} else {
    alert("Il fait chaud");
}

console.log(temperature);

 /* 5)
Demande à l’utilisateur s’il est étudiant avec prompt (répondre "oui" ou "non") et stocke la réponse dans estEtudiant.
Demande également s’il possède une carte avec prompt (répondre "oui" ou "non") et stocke la réponse dans aCarte.
Utilise une condition if pour afficher "Réduction appliquée" seulement si les deux réponses sont "oui".
Affiche le résultat avec alert.
*/


let estEtudiant = prompt("Êtes-vous étudiant ? (oui ou non)");

let aCarte = prompt("Possédez-vous une carte ? (oui ou non)");

if (estEtudiant === "oui" && aCarte === "oui") {
    alert("Réduction appliquée");
} else {
    alert("Pas de réduction");
}

console.log(estEtudiant, aCarte);