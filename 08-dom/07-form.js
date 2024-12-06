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


const form2 = document.getElementById('texte');

form2.addEventListener('submit', (event) => { // on écoute l'événement submit sur le formulaire
    event.preventDefault(); 
    if (form2.elements[0].value === '') { 
        form2.elements[0].insertAdjacentHTML('afterend', '<p style="color: red;">Veuillez remplir ce champ</p>'); // on affiche un message d'erreur
    } else {
        console.log(form2.elements[0].value); 
    }
}
);





// <!-- 3 Créez un formulaire avec deux champs (nom et email) et un bouton. Lorsque le formulaire est soumis, affichez les valeurs des deux champs dans la console. -->


const form3 = document.getElementById('2champs');

form3.addEventListener('submit', (event) => { // on écoute l'événement submit sur le formulaire
    event.preventDefault(); 
    console.log(form3.elements[0].value); // on affiche la valeur du premier élément du formulaire (le champ texte) dans la console 
    console.log(form3.elements[1].value); 
}
);









// <!-- 4 réez un formulaire avec plusieurs champs (nom, email, téléphone). Utilisez FormData pour afficher toutes les valeurs. -->



const form4 = document.getElementById('multichamps');

form4.addEventListener('submit', (event) => { 
    event.preventDefault(); 


    const formData = new FormData(form4); // on crée un objet FormData à partir du formulaire

    for (let [key, value] of formData) { // pour chaque paire clé/valeur dans l'objet FormData
        console.log(key, value); // on affiche la clé et la valeur dans la console
    }
});
