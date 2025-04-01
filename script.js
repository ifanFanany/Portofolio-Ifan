// Navigation Bar Code
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach ( sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150 ;
    let height = sec.getAttribute('id');
    
    if (top >= offset && top < offset + height ) {
      navLinks.forEach (links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href=' + id + ']').classList.add('active');
      });
    }
  });
  
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100 );
  
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// Typing Text Code
var typed = new Typed('.multiple-text', {
  strings: ['Software Engineer', 'Front-End Engieer', 'Back-End Engieer','AI Engieer'],
  typeSpeed: 60,
  backSpeed: 60,
  backDelay: 1000,
  loop: true,
});

// // Scroll Reveal Code
// ScrollReveal({
//   distance:'80px',
//   duration:1000,
//   delay:50,
// });

// ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
// ScrollReveal().reveal('.home-img, .service-container, .porfotolio-box, .contact form', {origin:'bottom'});
// ScrollReveal().reveal('.home-content h1, .about-img .skill-container', {origin:'left'});
// ScrollReveal().reveal('.home-content p, .about-content', {origin:'right'});

// ga ush dikasih terlalu berat di device hp


// Scroll Smooth Code
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });