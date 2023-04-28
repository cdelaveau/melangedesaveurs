// On récupère l'élément HTML qui contiendra le texte animé
const animatedText = document.getElementById('animated-text');

// On récupère le texte à animer, puis on vide l'élément HTML
const text = animatedText.innerHTML;
animatedText.innerHTML = '';

// On initialise la variable qui va nous permettre de parcourir le texte lettre par lettre
let i = 0;

// On crée un intervalle qui va ajouter une lettre à chaque tour de boucle, toutes les 70 millisecondes
const interval = setInterval(() => {
    animatedText.innerHTML += text.charAt(i);
    i++;

    // Si on a parcouru tout le texte, on arrête l'interval
    if (i > text.length) {
        clearInterval(interval);
    }
}, 70);