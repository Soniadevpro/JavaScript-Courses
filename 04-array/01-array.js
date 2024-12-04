// Crée un tableau nommé fruits contenant trois fruits, puis affiche le premier et le dernier élément avec console.log.

const fruits = ["pomme","banane","fraise","kiwi"];

console.log(fruits);
console.log(fruits[3]);
console.log(fruits.length);


// Déclare un tableau nombres avec [1, 2, 3, 4].
// Change le deuxième élément en 10 et affiche le tableau.


const number = [1, 2, 3, 4];
console.log(number[1]);
number[1] = 10;
console.log(number);

// 3)
// Crée un tableau vide. Ajoute trois éléments au début et deux à la fin en utilisant push et unshift, puis affiche le tableau.


const vide = [];

vide.unshift("prenom")
vide.push("nom", "adresse")


console.log(vide);



// Déclare un tableau ["A", "B", "C", "D"]. Supprime le premier élément avec shift et le dernier avec pop, puis affiche le tableau.

const a = ["A", "B", "C", "D"]

a.shift()
a.pop()

console.log(a);

// Crée un tableau avec cinq éléments et utilise la propriété length pour afficher le nombre d'éléments.


let couleurs = ["rouge", "bleu", "vert", "jaune", "noir"];

console.log(couleurs.length);

// Crée un tableau ["pomme", "banane", "poire"] et utilise une boucle for pour afficher chaque élément.


const fruits2 = ["pomme", "banane", "poire"]

for(let i = 0; i < fruits2.length; i++) {
    console.log(fruits2[i]);
} 

// Doubler les nombres avec map
// Déclare un tableau [1, 2, 3, 4]. Utilise map pour créer un nouveau tableau contenant les doubles des nombres et affiche le résultat.


const tab = [1, 2, 3, 4]

const tab2 = tab.map((x) => x *2)

console.log(tab2);