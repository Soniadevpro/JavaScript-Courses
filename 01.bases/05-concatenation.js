// Déclare une variable prenom et assigne-lui un prénom.
// Crée une nouvelle variable message qui contient une phrase de bienvenue 
// comme  suivie de la valeur de prenom.
// Affiche le message dans la console.

// Présentation d'une personne
// Déclare deux variables, nom et age, avec un nom et un âge.
// Utilise l'opérateur + pour créer une chaîne de caractères dans une variable presentation, contenant une phrase du type : "Je m'appelle [nom] et j'ai [age] ans."
// Affiche cette phrase dans la console.

// Addition dans une chaîne
// Déclare deux variables a et b avec des valeurs numériques.
// Utilise + pour créer une phrase qui dit : "Le résultat de a + b est : " suivi de la somme de a et b.
// Affiche cette phrase dans la console.

// Création d'une adresse complète
// Déclare trois variables : rue, ville, et codePostal, avec des valeurs de type chaîne pour une adresse.
// Utilise + pour concaténer ces variables et créer une phrase complète sous la forme : "Adresse : [rue], [codePostal] [ville]"
// Affiche l'adresse complète dans la console.


let prenom = "Jean";
let message = "Bienvenue " + prenom;
console.log(message);

let nom = "Dupont";
let age = 30;
let presentation = "Je m'appelle " + nom + " et j'ai " + age + " ans.";
console.log(presentation);


let a = 5;
let b = 7;
let somme = a + b;
let resultat = "Le résultat de" + "\n" + a + " + " + b + " est : " + somme;
console.log(resultat);


let rue = "rue de la paix";
let ville = "Paris";
let codePostal = "75000";
let adresse = "Adresse : " + rue + ", " + codePostal + " " + ville;
console.log(adresse);

