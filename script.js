// NAVBAR TOGGLE
const navToggler = document.getElementById('navbar-toggler');
const navMenu    = document.querySelector('.navbar-nav');
const navbar     = document.querySelector('.navbar');

navToggler.addEventListener('click', () => {
  navMenu.classList.toggle('showNav');
});

// CHANGE NAVBAR ON SCROLL
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// SMOOTH ACTIVE LINK ON SCROLL
const sections = document.querySelectorAll('section[id]');
const links    = document.querySelectorAll('.nav-link');

function highlightLink() {
  const scrollY = window.pageYOffset;
  sections.forEach(sec => {
    const top    = sec.offsetTop - 120;
    const bottom = top + sec.offsetHeight;
    const id     = sec.getAttribute('id');
    if (scrollY >= top && scrollY < bottom) {
      links.forEach(l => l.classList.remove('active'));
      document.querySelector('.nav-link[href="#'+id+'"]').classList.add('active');
    }
  });
}
window.addEventListener('scroll', highlightLink);
highlightLink();

// REVEAL ON SCROLL
document.querySelectorAll('.section').forEach(s => s.classList.add('reveal'));
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// RESIZE TRANSITION STOPPER
let resizeTimer;
window.addEventListener('resize', () => {
  document.body.classList.add('resize-animation-stopper');
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove('resize-animation-stopper');
  }, 400);
});
