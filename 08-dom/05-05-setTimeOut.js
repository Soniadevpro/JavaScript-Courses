



// <!-- 1 Affiche "Bonjour, monde !" dans la console après 2 secondes. -->

function saluer() {
    console.log("Bonjour !");
}
setTimeout(saluer, 2000);



// <!-- 2  Ajoute un paragraphe avec le texte "Chargement terminé" après 3 secondes. -->



setTimeout(() => {

    const paragraph = document.createElement('p'); 

    paragraph.textContent = 'Chargement terminé !'; 

    document.body.appendChild(paragraph); 
    
}, 3000);


// <!-- 3 
// Crée une fonction qui affiche un message "Bonjour, [Nom] !" avec un délai de 2 secondes. 
// Passe "Alice" comme paramètre. 
// -->

function bonjour (nom) {
    setTimeout(()=> {
        document.body.innerHTML = `<p>Bonjour, ${nom} !</p>`;
        console.log(`Bonjour ${nom}`)
    },2000)
}

bonjour("Alice")



// <!-- 4 Planifie un message pour s'afficher après 5 secondes, mais annule l'affichage avant qu'il ne se produise. -->

const id = setTimeout(() => {
    console.log("Ce message ne sera pas affiché.");
  }, 5000);
  //   console.log(id);
  clearTimeout(id); // Annule le message


// <!-- 5 Crée une fonction qui affiche un décompte de 5 à 0 dans la console avec une seconde d’écart. -->

function decompte(i) {
    if (i < 0) return; 

    console.log(i); 
   
    setTimeout(() => decompte(i - 1), 1000);
}

decompte(5);

// <!-- 6 Crée un cercle <div> qui change de position (de gauche à droite) après 3 secondes. -->




setTimeout(() => {
    const cercle = document.getElementById("cercle");
    cercle.style.right = "300px";
  }, 3000);