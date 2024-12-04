/* 1

Addition (+)
Addition de nombres simples :
    Déclare deux variables avec des valeurs numériques, additionne-les, et affiche le résultat.

Addition de chaîne et nombre :
    Déclare une variable contenant un nombre et une autre contenant une chaîne de caractères. Additionne-les et observe le résultat .
*/


let a = 3;

let b = 5;

a + b ;
console.log(a+b);
// ------------------------
let c = 3;
let d = "soleil";

c + d;
console.log(c + d);


/*3
Soustraction (-)
Soustraction simple :
    Déclare deux variables avec des valeurs numériques, soustrais-les, et affiche le résultat.
*/

let e = 10;
let f = 5;

e - f;
console.log(e - f);

/*4
// Soustraction avec une chaîne vide :
//     Soustrais une chaîne vide "" d'un nombre, et observe le résultat.
// Contrairement à l'addition, la soustraction avec des chaînes vides convertit la chaîne en Number, donc "10" - "" donne 10 et non une string. */


let g = 10;
let h = "5";

g - h;
console.log(g - h);



/* 5
Multiplication (*)
    Multiplie deux nombres et affiche le résultat.
    Multiplie une chaîne numérique comme "5" par un nombre.
    Multiplie une chaîne numérique comme "5ok" par un nombre.
*/


let i = 5;
let j = 3;

i * j;
console.log("résultat multiplication classique" + i * j);


let k = 5;

let l = "5";

k * l;
console.log( "résultat multiplication chaine de caractere" + k * l);

let m = "5ok";
let n = 3;

m * n;
console.log( "résultat multiplication chaine num" + m * n);




/* 6
Division (/)
Divise deux nombres et affiche le résultat.
Divise un nombre par 0 et observe le résultat. 
Divise 0 par un nombre non nul pour observer le résultat.
*/


let o = 10;
let p = 2;

o / p;
console.log( "résultat division" +  o / p);

let q = 10;
let r = 0;

q / r;
console.log( "résultat division par 0" + q / r);

let s = 0;
let t = 10;

s / t;
console.log( "résultat division de 0" + s / t);


/* 7
Modulo (%)

--------
Utilise le modulo pour vérifier si un nombre est pair ou impair.

let nombre = 8;
console.log(nombre % 2); // Affiche 0 pour un nombre pair
*/

let nombre = 8;
console.log(nombre % 2); // Affiche 0 pour un nombre pair

/* 8  Utilise le modulo avec un nombre négatif pour voir comment JavaScript gère le signe du résultat. */

let nombre2 = -8;
console.log(nombre % 2); // Affiche 0 pour un nombre pair


// 9
// Exponentiation (**)
// Calcule une puissance comme 5 ** 2 et affiche le résultat.


let u = 5 ** 2;
console.log(u);

