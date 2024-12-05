// 1 Crée un élément <p> avec le texte "Bonjour, monde !" et ajoute-le dans un <div> existant. 
const container = document.querySelector('.container')
console.log(container);

const paragraphe = document.createElement('p');
paragraphe.textContent = "hello, world"
container.append(paragraphe);


// 2 Supprime un paragraphe <p> ayant l’id texte-a-supprimer -->

const parasuppr = document.getElementById("texte-a-supprimer")

parasuppr.remove();


// 3 Change le texte d’un paragraphe <p> existant avec l’id texte-a-modifier


const modifpara = document.getElementById("texte-a-modifier")
modifpara.textContent = 'lol'

console.log(modifpara);


