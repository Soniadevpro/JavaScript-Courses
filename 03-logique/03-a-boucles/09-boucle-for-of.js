/* 1)
Afficher chaque élément d’un tableau en majuscule.
['chat', 'chien', 'lapin', 'oiseau'];
*/
const animaux = ['chat', 'chien', 'lapin', 'oiseau'];

for (const animal of animaux) {
    console.log(animal.toUpperCase());
}
// 2)
//  Calcule la somme des nombres d’un tableau.
 [5, 10, 15, 20]
 const nombres = [5, 10, 15, 20];
let somme = 0;

for (const nombre of nombres) {
    somme += nombre;
}

console.log(somme); // Résultat : 50

// 3)
// La méthode includes() est utilisée pour vérifier si une valeur donnée est présente dans un tableau ou une chaîne de caractères
// Parcourir une chaîne et afficher uniquement les voyelles.


const phrase = 'Bonjour tout le monde';

const voyelles = 'aeiouyAEIOUY'


for (const lettre of phrase) {
if (voyelles.includes(lettre)) {
    console.log(lettre);
}
   
}



// 4)
// À partir d’un tableau de mots, créer un nouveau tableau contenant la longueur de chaque mot
const mots = ['pomme', 'banane', 'cerise', 'abricot'];

const longueurs = []

for (const mot of mots){
    longueurs.push(mot.length)
}

console.log(longueurs);



