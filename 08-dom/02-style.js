// <!--1 Crée un élément <h1> et change la couleur de son texte en rouge   -->

const red = document.getElementById('red')
red.style.color = 'red';


const para = document.getElementsByTagName('p')[0]
para.style.fontSize = '24px';

// lorsque elements avec un s (pluriel) ceci comprend un groupe d'élément donc un tableau i lfaut donc préciser 'element' et son index [0]






// 3 Crée un élément <div> et applique la classe card définie dans un fichier CSS. 

const styleCard = document.getElementById('style')
styleCard.classList.add('card')



// <!-- 5 Crée un <div> carré en html css et applique un fond gris en js. -->


const carre = document.querySelector('.carre')
carre.style.backgroundColor = ('grey')
