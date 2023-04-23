// Fonction qui affiche le bouton de retour en haut de page lorsque l'utilisateur a fait défiler la page
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btn-retour").style.display = "block";
    } else {
        document.getElementById("btn-retour").style.display = "none";
    }
}

// Fonction qui renvoie l'utilisateur en haut de page lorsqu'il clique sur le bouton de retour en haut de page
// Fonction qui renvoie l'utilisateur en haut de page lorsqu'il clique sur le bouton de retour en haut de page
function retourEnHaut() {
    // Ajouter une transition en douceur
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

