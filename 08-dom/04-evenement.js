// 1 Crée un bouton qui affiche "Bouton cliqué !" dans la console lorsqu'il est cliqué

const bouton = document.getElementById('bouton')

bouton.addEventListener('click', () => {
console.log("bouton cliqué");

}) 





//   <!-- 2 Crée un carré <div> qui devient bleu lorsque la souris passe dessus, et revient rouge quand la souris sort. -->

const carreMouse = document.querySelector('.carre')
console.log(carreMouse)
carreMouse.addEventListener('mouseover', () => {

carreMouse.style.background = 'blue';

})

carreMouse.addEventListener('mouseleave',() => {
carreMouse.style.background = 'red'

} )


// <!-- 3 Crée un formulaire dont la soumission ne recharge pas la page, et affiche "Formulaire soumis !" dans la console. -->



const formulaire = document.getElementById('envoi')

formulaire.addEventListener('submit', buttonClick);

function buttonClick (e) {
e.preventDefault()
    console.log('formulaire soumis');
}





// <!-- 4 Crée un champ de saisie qui affiche dans la console la touche appuyée par l'utilisateur. -->




// <!-- 5 Crée un lien qui ne redirige pas vers son URL lorsqu'il est cliqué, et affiche "Lien désactivé" dans la console. -->






// <!-- 6 Crée un bouton qui affiche dans la console le nombre de clics réalisés dessus. -->