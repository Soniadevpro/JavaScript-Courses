


//  <!-- 1 Affiche "Bonjour !" dans la console toutes les 2 secondes -->


// setInterval( () => {console.log("Bonjour !") }, 2000);


// <!-- 2 Déplace un carré de 10 pixels vers la droite toutes les 100ms. -->




const carre = document.getElementById('carre');

let position = 0;

setInterval( () => {
    position += 10; // position = position + 10
    carre.style.left = `${position}px`;
}, 100);



// <!-- 3 Crée un décompte de 10 à 0 qui s'affiche dans la console. Arrête le décompte à 0. -->

    let decompte = 10;
    const interval = setInterval( () => {
        console.log(decompte);
        decompte--;
        if(decompte === 0) {
            clearInterval(interval);
        }
    }, 1000);




// <!-- 4 Crée un carré qui clignote toutes les 500ms et disparaît complètement après 5 secondes. -->











