 /* 1)
Demande à lutilisateur de saisir un jour de la semaine avec prompt.
Utilise un switch pour afficher un message différent pour chaque jour.
Par exemple, "Lundi" pourrait afficher "Début de la semaine !", "Samedi" et "Dimanche" pourraient afficher "Bon week-end !", etc. 
*/

let jour = prompt("Saisissez un jour de la semaine").toLowerCase();

switch (jour.trim()) {
    case "lundi":
        alert("Début de la semaine !");
        break;

        case"mardi":
        alert("Début de la semaine!")
        break;

    case "mercredi":
        alert("Début de la semaine");
        break;
    
    case "jeudi":
        alert("On y est presque")
        break;
    
    case "vendredi":
        alert("Encore un peu")
        break;
    
    case "samedi":
        alert("Bon weekend !")
        break;

    case "dimanche":
        alert("Bon weekend !")
        break;

    default:
        alert("Ce n'est pas un jour de la semaine")
        break;
}


 /*
Demande à l'utilisateur d'entrer un nombre entre 1 et 5 avec prompt.
Utilise un switch pour afficher ce nombre en toutes lettres ("un", "deux", etc.).
Si le nombre est en dehors de cette plage, utilise default pour afficher "Nombre hors limite".
*/
/* 3)
Demande à l’utilisateur de saisir un fruit ("pomme", "banane", "poire", "ananas", etc.).
Utilise un switch pour afficher "Fruit à pépins" pour "pomme" et "poire", "Fruit tropical" pour "banane" et "ananas", etc.
Regroupe les case pour les fruits de même catégorie, en utilisant le fall-through.
*/


let nombre = parseInt(prompt("Saisissez un nombre entre 1 et 5"));

switch (nombre) {

case 1:
    console.log("Un");
    break;

case 2:
    console.log("Deux");
    break;

case 3:
    console.log("Trois");
    break;

case 4:
    console.log("Quatre");
    break;

case 5:
    console.log("Cinq");
    break;



}





let fruit = prompt("Saisissez un fruit").toLowerCase();

switch (fruit.trim()) {
    case "pomme":
    case "poire":
        console.log("Fruit à pépins");
        break;

    case "banane":
    case "ananas":
        console.log("Fruit tropical");
        break;

    default:
        console.log("Ce n'est pas un fruit")
        break;
}



/* 4)
Demande à l’utilisateur de saisir deux nombres et une opération (+, -, *, /).
Utilise un switch pour exécuter l’opération saisie, puis affiche le résultat dans une alerte.
Utilise default pour afficher un message si l’utilisateur entre une opération non prise en charge.
*/
let nombre1 = parseFloat(prompt("Saisissez un nombre"));
let nombre2 = parseFloat(prompt("Saisissez un autre nombre"));
let operation = prompt("Saisissez une opération (+, -, *, /)");


switch (operation) {

    case "+":
        alert(nombre1 + nombre2);
        break;
    case "-":
        alert(nombre1 - nombre2);
        break;
    case "*":
        alert(nombre1 * nombre2);
        break;
    case "/":
        alert(nombre1 / nombre2);
        break;    
        default:
            alert("Opération non prise en charge");
            break;
}
 /* 5)
Demande à l’utilisateur de saisir une note (de "A" à "F").
Utilise un switch pour afficher un message basé sur la note : "Excellent" pour "A", "Bien" pour "B", etc.
Utilise default pour afficher "Note invalide" si la note est en dehors de la plage "A" à "F".

*/




let note = prompt("Saisissez une note (de A à F)").toUpperCase().trim();

switch (note) {

    case "A":
        alert("Excellent");
        break;
    case "B":
        alert("Bien");
        break;
    case "C":
        alert("Pas mal");
        break;
    case "D":
        alert("Peut mieux faire");
        break;
    case "E":
        alert("Insuffisant");
        break;
    case "F":
        alert("Catastrophique");
        break;
    default:
        alert("Note invalide");
        break;
}