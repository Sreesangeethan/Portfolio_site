// 1) NAVBAR TOGGLE
const toggler = document.getElementById('navbar-toggler');
const navList = document.querySelector('.navbar-nav');
toggler.addEventListener('click', () => {
  navList.classList.toggle('showNav');
});

// 2) STICKY → SOLID NAVBAR
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// 3) ACTIVE LINK HIGHLIGHT
const sections = document.querySelectorAll('section[id]');
const links    = document.querySelectorAll('.nav-link');
function highlight() {
  const y = window.pageYOffset;
  sections.forEach(sec => {
    const top    = sec.offsetTop - 100;
    const bottom = top + sec.offsetHeight;
    if (y >= top && y < bottom) {
      links.forEach(l => l.classList.remove('active'));
      document.querySelector(`.nav-link[href="#${sec.id}"]`)
              .classList.add('active');
    }
  });
}
window.addEventListener('scroll', highlight);
highlight();  // on load

// 4) FADE IN ON SCROLL
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('active');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(s => {
  s.classList.add('reveal');
  observer.observe(s);
});

// 5) STOP TRANSITIONS ON RESIZE
let resizeTimer;
window.addEventListener('resize', () => {
  document.body.classList.add('resize-animation-stopper');
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove('resize-animation-stopper');
  }, 400);
});
