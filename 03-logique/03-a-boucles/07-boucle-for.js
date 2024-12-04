// 1)
// Utilise une boucle for pour afficher chaque nombre de 1 à 10 dans la console.
// Objectif : Comprendre la structure de base de la boucle for avec un compteur.



// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

/* 2)
Demande à l'utilisateur de saisir un nombre avec prompt.
Utilise une boucle for pour afficher la table de multiplication de ce nombre (par exemple, pour un nombre 5, affiche 5 x 1 = 5, 5 x 2 = 10, etc., jusqu'à 5 x 10 = 50).
*/


// let nombre = +prompt("Saisissez un nombre");

// for (let a = 1; a <= 10; a++) {
//     console.log(`${nombre} x ${a} = ${nombre * a}`);
// }


/* 3
Demande à l'utilisateur de saisir un nombre N.
Utilise une boucle for pour calculer la somme de tous les nombres de 1 à N.
Affiche le résultat final dans la console.
*/

let N = parseInt(prompt("Entrez un nombre pour calculer la somme de 1 à ce nombre :"), 10);
let somme = 0;
for (let i = 1; i <= N; i++) {
    somme += i; // Ajoute chaque nombre à la somme
}
console.log(`La somme des nombres de 1 à ${N} est : ${somme}`);

    




