let confirmation = confirm("Voulez-vous continuer ?");
if (confirmation) {
    console.log("Vous avez confirmé !");
} else {
    console.log("Vous avez annulé !");
}

// 1) Demande de confirmation pour supprimer :
//     Utilise confirm() pour demander à l'utilisateur s'il souhaite supprimer un élément avec un message comme 
//     "Voulez-vous vraiment supprimer cet élément ?".

// 2) Vérification de déconnexion :
//     Demande à l'utilisateur de confirmer avec confirm() s'il souhaite se déconnecter, avec un message comme "Êtes-vous sûr de vouloir vous déconnecter ?".


confirm("Voulez-vous vraiment supprimer cet élément ?");
confirm("Êtes-vous sûr de vouloir vous déconnecter ?");