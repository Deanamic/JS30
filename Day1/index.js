function playkey(e) {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    if (!audio) return;

    key.classList.toggle('playing');
    audio.currentTime = 0; // we want to be able to play multiple times
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //we only select one transition
    console.log(e);
    e.target.classList.remove('playing');
}

let keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener("transitionend", removeTransition, false));
window.addEventListener('keydown', playkey);
