/*
Crée une fonction presentation qui prend deux paramètres : prenom et age, avec une valeur par défaut de 18 pour age. 
La fonction doit afficher une phrase comme "Je m'appelle [prenom] et j'ai [age] ans.".
Objectif : Utiliser un paramètre par défaut pour une donnée optionnelle (l'âge).

Crée une fonction calculerAireRectangle qui prend deux paramètres : longueur et largeur, avec une valeur par défaut de 1 pour largeur. 
La fonction doit retourner l'aire du rectangle calculée 

Crée une fonction creerPhrase qui prend deux paramètres : mot1 et mot2, avec une valeur par défaut de "génial" pour mot2. 
La fonction doit retourner une phrase formée en combinant les deux mots.

*/


function presentation(prenom, age = 18) {
    console.log(`Je m'appelle ${prenom} et j'ai ${age} ans.`);
}
presentation("Alice"); // Je m'appelle Alice et j'ai 25 ans.
presentation("Alice", 25); // Je m'appelle Alice et j'ai 25 ans.
presentation("BOB"); // Je m'appelle Alice et j'ai 25 ans.



function calculerAireRectangle(longueur, largeur = 1) {
    return longueur * largeur;
}

console.log(calculerAireRectangle(5)); 
console.log(calculerAireRectangle(5, 5)); 
console.log(calculerAireRectangle(5, 10)); 


function creerPhrase(mot1, mot2 = "génial") {
    return `${mot1} est ${mot2}`;
}

console.log(creerPhrase("JavaScript")); // JavaScript est super
console.log(creerPhrase("JavaScript", "super")); // JavaScript est super
console.log(creerPhrase("Python")); // JavaScript est super


