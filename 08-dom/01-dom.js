
const number = 3;
const number2 = 3;

console.log(number + number2);




const box = document.getElementsByClassName("boite");
console.log(box);



// <!--3 Sélectionne tous les éléments <p> et affiche le nombre total de <p> présents. -->


const para = document.getElementsByTagName('p')
console.log(para.length);


// <!--4 sélectionne le premier <span> et affiche son contenu texte dans la console. -->

const span = document.querySelector(".conteneur span");
      console.log(span.textContent);


// <!--5 sélectionne tous les <li> et affiche leur contenu un par un dans la console. -->

// 5
const items = document.querySelectorAll("ul li");
items.forEach((item) => console.log(item.textContent));


// <!--6 Sélectionne le div class box  et modifie sa classe pour qu’il devienne "box active". 

const boxActive = document.querySelector('.box')
console.log(boxActive);
if (boxActive) {
    boxActive.classList.remove('inactive');
    boxActive.classList.add('active');
    console.log(boxActive);
}



// Affiche l'élément modifié dans la console. -->






// <!--7 Supprime le paragraphe <p>Texte à supprimer</p> . -->


const supp = document.querySelector('#supprimer p')
supp.remove()
console.log(supp);