btnOpen.addEventListener("click", () => {
    title.setAttribute('style', 'transition: all 2s ease; font-size: 1.4em; ');
    msg.setAttribute('style', 'top: 50%; left: 50%;');
    heart.setAttribute('style', 'animation: heartBeat 1s ease-in-out infinite; color: red;');
});

btnClose.addEventListener("click", () => {
    msg.removeAttribute('style');
    title.removeAttribute('style');
});