const sr = ScrollReveal();
sr.reveal('li', {
    delay: 1000,
    origin: 'bottom',
    duration: 600
});
sr.reveal('div', {
    delay: 800,
    origin: 'bottom',
    duration: 200,
    scale: 0.85
});
sr.reveal('p', {
    delay: 1500,
    origin: 'bottom',
    duration: 400
});
sr.reveal('i', {
    delay: 1500,
    origin: 'bottom',
    duration: 400,
    scale: 0.85
});
sr.reveal('img', {
    delay: 500,
    origin: 'bottom',
    scale: 0.85
});
sr.reveal('article', {
    delay: 1000,
    origin: 'bottom',
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    distance: '0px',
    duration: 1000,
    easing: 'cubic-bezier(0.5, 1, 0, 1)',
    interval: 0,
    opacity: 0,
    origin: 'left',
    scale: 0.85
});