let nom = prompt("Quel est votre nom ?");
alert("Bonjour " + nom);

 
// 2) Recueillir l'âge de l'utilisateur : 
// Utilise prompt() pour demander à l'utilisateur son âge avec le message "Quel âge avez-vous ?". 
// Affiche ensuite un message indiquant son age en fonction de sa réponse.

// 3) Demander un nombre pour un calcul : 
// Utilise prompt() pour demander un nombre à l'utilisateur avec le message "Entrez un nombre". 
// Demande ensuite un deuxième nombre, additionne-les, et affiche le résultat dans une alerte avec "Le résultat de l'addition est : [résultat]".


let age = prompt("Quel âge avez-vous ?");
alert("Vous avez " + age + " ans.");

let nombre1 = prompt("Entrez un nombre");
let nombre2 = prompt("Entrez un deuxième nombre");

// let resultat  = parseInt(nombre1) + parseInt(nombre2);
// let resultat  = Number(nombre1) + Number(nombre2);
let resultat  = +nombre1 + +nombre2;

alert("Le résultat de l'addition est : " + resultat);





