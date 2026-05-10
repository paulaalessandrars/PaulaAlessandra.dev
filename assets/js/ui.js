/* ui.js — Navbar, hamburger, scroll-spy, smooth scroll, back-to-top */

const navbar   = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-menu');

/* Navbar scroll + back-to-top + scroll-spy */
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 40);
  document.getElementById('back-to-top')?.classList.toggle('visible', window.scrollY > 400);

  let current = '';
  document.querySelectorAll('section[id]').forEach(sec => {
    if (sec.getBoundingClientRect().top <= 90) current = sec.id;
  });
  navLinks.forEach(link =>
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`)
  );
}, { passive: true });

/* Hamburger */
hamburger?.addEventListener('click', () => {
  const open = navMenu?.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(!!open));
});

navLinks.forEach(link => link.addEventListener('click', () => {
  navMenu?.classList.remove('open');
  hamburger?.classList.remove('open');
  hamburger?.setAttribute('aria-expanded', 'false');
}));

/* Smooth scroll com offset para navbar fixa */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  });
});

/* Back to top */
document.getElementById('back-to-top')?.addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
);
