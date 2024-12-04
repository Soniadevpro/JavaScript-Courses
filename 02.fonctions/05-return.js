// Exercice 1 : Retour simple

// Crée une fonction qui retourne une valeur fixe, par exemple "Bonjour". 
// Appelle cette fonction et affiche le résultat dans la console.
// (Objectif : Voir comment return renvoie une valeur simple.)


function bonjour() {
    return "Bonjour";
}

console.log(bonjour());



// Exercice 2 : Calcul et retour

// Crée une fonction qui prend deux nombres en paramètres, les additionne et retourne le résultat. 
// Utilise ensuite le résultat retourné pour faire une autre opération. 
// (Objectif : Pratiquer le retour d'une valeur calculée et son utilisation dans une expression.)
function addition(x, y) {
    return x + y;
}

let resultat = addition(5, 3);

let resultat2 = resultat * 2;

addition(5, 3);

console.log(resultat);
console.log(resultat2);


// Exercice 3 : Arrêt de la fonction avec return

// Crée une fonction qui affiche un texte, avant le return et place une autre instruction qui affiche un texte après return. 
// Appelle la fonction et observe l'exécution. (Objectif : Comprendre que return interrompt l'exécution de la fonction après son appel.)





function afficheTexte() {
    console.log("Avant le return");
    return;
    console.log("Après le return");
}

afficheTexte();