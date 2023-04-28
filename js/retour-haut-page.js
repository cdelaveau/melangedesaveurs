// Déclenche la fonction "scrollFunction" lorsque l'utilisateur fait défiler la page
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    // Si la position verticale du scroll de la page est supérieure à 20 pixels, affiche le bouton "Retour en haut"
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btn-retour").style.display = "block";
    } else {
        // Sinon, cache le bouton "Retour en haut"
        document.getElementById("btn-retour").style.display = "none";
    }
}


function retourEnHaut() {
    // Fait remonter la page vers le haut avec un effet de défilement fluide
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

