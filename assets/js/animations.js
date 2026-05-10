/* animations.js — Particles, Typed, AOS, Counters */

/* Particles.js */
if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
  particlesJS('particles-js', {
    particles: {
      number:   { value: 55, density: { enable: true, value_area: 900 } },
      color:    { value: '#58a6ff' },
      shape:    { type: 'circle' },
      opacity:  { value: 0.35, random: true, anim: { enable: true, speed: 0.6, opacity_min: 0.1, sync: false } },
      size:     { value: 2.5, random: true },
      line_linked: { enable: true, distance: 140, color: '#58a6ff', opacity: 0.18, width: 1 },
      move: { enable: true, speed: 0.9, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false }
    },
    interactivity: {
      detect_on: 'canvas',
      events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
      modes:  { grab: { distance: 160, line_linked: { opacity: 0.5 } }, push: { particles_nb: 3 } }
    },
    retina_detect: true
  });
}

/* Typed.js */
if (typeof Typed !== 'undefined' && document.getElementById('typed')) {
  new Typed('#typed', {
    strings: ['Full-Stack Developer', 'PHP · Java · Spring Boot', 'MySQL · MariaDB', 'JavaScript · Bootstrap', 'Systems Analyst'],
    typeSpeed: 52, backSpeed: 28, backDelay: 1800, startDelay: 400,
    loop: true, smartBackspace: true
  });
}

/* AOS */
if (typeof AOS !== 'undefined') {
  AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic', offset: 60 });
}

/* Counters com IntersectionObserver */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const step   = target / (1600 / 16);
  let cur = 0;
  const t = setInterval(() => {
    cur += step;
    if (cur >= target) { el.textContent = target; clearInterval(t); }
    else el.textContent = Math.floor(cur);
  }, 16);
}

const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { animateCounter(e.target); obs.unobserve(e.target); } });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(c => obs.observe(c));
