saluer(); // Cela fonctionne car "saluer" est hoistée
function saluer() {
    console.log("Bonjour !");
}


// Créez une fonction nommée afficherMessage qui affiche "Bienvenue dans notre programme!" dans la console à chaque fois qu'elle est appelée.

afficherMessage(); // Bienvenue dans notre programme!

function afficherMessage() {
    console.log("Bienvenue dans notre programme!");
}

/*Créez une fonction nommée multiplier qui prend deux paramètres et retourne le produit de ces deux nombres.
*/

/*
Créez une fonction nommée concatener qui prend deux chaînes de caractères en paramètres 
et retourne la concaténation des deux avec un espace entre elles.
*/
/*
Créez une fonction nommée convertirEnMinutes qui prend un nombre d'heures en paramètre et retourne le nombre total de minutes. 
(Par exemple, si on passe 2, elle retourne 120).
*/

multiplier(5, 7); // 35

function multiplier(a, b) {
    return a * b;
   
}
console.log(multiplier(5, 7));


function concatener(a, b) {
   console.log(a + " " + b);
}

concatener("Hello", "World!"); // Hello World!


function convertirEnMinutes(heures) {
    console.log(heures * 60);
}

convertirEnMinutes(2); // 120