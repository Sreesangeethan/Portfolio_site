// navbar toggle on mobile
const navToggler = document.getElementById('navbar-toggler');
const navMenu    = document.querySelector('.navbar-nav');
navToggler.addEventListener('click', () => {
  navMenu.classList.toggle('showNav');
});

// highlight menu on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function onScroll() {
  const scrollY = window.pageYOffset;
  sections.forEach(section => {
    const top    = section.offsetTop - 100;
    const height = section.offsetHeight;
    const id     = section.getAttribute('id');
    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active');
        }
      });
    }
  });
}
window.addEventListener('scroll', onScroll);
onScroll();  // init on load

// prevent transition on resize
let resizeTimer;
window.addEventListener('resize', () => {
  document.body.classList.add('resize-animation-stopper');
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove('resize-animation-stopper');
  }, 400);
});
