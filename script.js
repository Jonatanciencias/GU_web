//Activate menu button//

let menuBtn = document.querySelector('#menu-btn');
let menuBar = document.querySelector('.menu-bar');

menuBtn.onclick = () => {
  menuBtn.classList.toggle('bx-x');
  menuBar.classList.toggle('active');
}

//Remove menu-bar on scroll//

window.onscroll = () => {
  menuBtn.classList.remove('bx-x');
  menuBar.classList.remove('active');

}

//Scroll Reveal//

ScrollReveal({
  reset: true,
  distance: '111px',
  duration: 2000,
});

//Home times//
ScrollReveal().reveal('.home-bio h1', {origin: 'right', delay: 150});
ScrollReveal().reveal('.home-bio h3', {origin: 'left', delay: 280});
ScrollReveal().reveal('.home-bio p', {origin: 'right', delay: 300});

ScrollReveal().reveal('.profile-pic img', {origin: 'top', delay: 300});

ScrollReveal().reveal('.social-media', {origin: 'left', delay: 320});

ScrollReveal().reveal('.profile-pic img', {origin: 'top', delay: 400});

//Sobre nosotros//
ScrollReveal().reveal('.about h2', {origin: 'top', delay: 150});
ScrollReveal().reveal('.about-resume', {origin: 'left', delay: 300});
ScrollReveal().reveal('.about p', {origin: 'right', delay: 280});

//Nuestras Habilidades//
ScrollReveal().reveal('.skills h2', {origin: 'top'});
ScrollReveal().reveal('.skills-items', {origin: 'bottom'});

//Nuestros proyectos
ScrollReveal().reveal('.projects h2', {origin: 'top', delay: 150});
ScrollReveal().reveal('.project-items', {origin: 'bottom', delay: 250});

//Contacto//
ScrollReveal().reveal('.contact h2', {origin: 'left'});
ScrollReveal().reveal('form > input[type="text"]', {origin: 'right', distance: '50px', delay: 500});
ScrollReveal().reveal('form > input[type="email"]', {origin: 'left', distance: '50px', delay: 500});
ScrollReveal().reveal('form > textarea', {opacity: 0.2, distance: '15px', delay: 400});

//ScrollReveal().reveal('.form', {origin: 'right'}, {delay: 130});
ScrollReveal().reveal('', {origin: '',distance: '0px'});

// Fotter//
ScrollReveal().reveal('.footer', {origin: 'bottom', delay: 300});

/*Typing section*/

const animText = new Typed ('.animated-text',{
  strings: ['Corazon', 'Planeta', 'Proposito'],
  backSpeed: 100,
  typeSpeed: 100,
  backDelay: 425,
  loop: true
});