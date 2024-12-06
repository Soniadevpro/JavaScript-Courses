// <!-- 1 Créez un formulaire avec un champ texte et un bouton. 
// Lorsque l'utilisateur clique sur le bouton, affichez la valeur du champ texte dans la console -->


const form = document.getElementById('formulaire');

form.addEventListener('submit', (event) => { // on écoute l'événement submit sur le formulaire
    event.preventDefault(); 
    console.log(form.elements[0].value); // on affiche la valeur du premier élément du formulaire (le champ texte) dans la console 
}

);









// <!-- 2 Créez un formulaire avec un champ texte. 
//  Si l'utilisateur clique sur le bouton sans rien écrire, affichez un message d'erreur sous le champ. -->



const form2 = document.getElementById("form2");
const champNom = document.getElementById("champNom");
const erreur = document.getElementById("erreur");

form2.addEventListener("submit", (event) => {
  event.preventDefault();

  if (champNom.value.trim() === "") {
    erreur.style.display = "block";
  } else {
    erreur.style.display = "none";
    console.log(`Nom : ${champNom.value}`);
  }
});




// <!-- 3 Créez un formulaire avec deux champs (nom et email) et un bouton. Lorsque le formulaire est soumis, affichez les valeurs des deux champs dans la console. -->


const form3 = document.getElementById('2champs');

form3.addEventListener('submit', (event) => { // on écoute l'événement submit sur le formulaire
    event.preventDefault(); 
    console.log(form3.elements[0].value); // on affiche la valeur du premier élément du formulaire (le champ texte) dans la console 
    console.log(`${email.value}`); // on affiche la valeur du deuxième élément du formulaire (le champ email) dans la console
}
);









// <!-- 4 réez un formulaire avec plusieurs champs (nom, email, téléphone). Utilisez FormData pour afficher toutes les valeurs. -->



const form4 = document.getElementById('multichamps');

form4.addEventListener('submit', (event) => { 
    event.preventDefault(); 


    const formData = new FormData(form4); // on crée un objet FormData à partir du formulaire
console.log(formData); 
    for (let [key, value] of formData) { // pour chaque paire clé/valeur dans l'objet FormData
        console.log(key, value); 
    }
});
