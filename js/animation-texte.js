const animatedText = document.getElementById('animated-text');
const text = animatedText.innerHTML;
animatedText.innerHTML = '';

let i = 0;
const interval = setInterval(() => {
    animatedText.innerHTML += text.charAt(i);
    i++;
    if (i > text.length) {
        clearInterval(interval);
    }
}, 70);