/* ============================================================
   Paula Alessandra — Portfolio v2
   Main Script
   ============================================================ */

/* ── 1. Theme Toggle ──────────────────────────────────────── */
const body          = document.body;
const toggleDesktop = document.getElementById('theme-toggle');
const toggleMobile  = document.getElementById('theme-toggle-mobile');

function applyTheme(theme) {
  const isLight = theme === 'light';
  body.classList.toggle('light-theme', isLight);
  body.classList.toggle('dark-theme', !isLight);

  ['icon-moon', 'icon-moon-mobile'].forEach(id => {
    document.getElementById(id)?.classList.toggle('d-none', isLight);
  });
  ['icon-sun', 'icon-sun-mobile'].forEach(id => {
    document.getElementById(id)?.classList.toggle('d-none', !isLight);
  });

  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  applyTheme(body.classList.contains('light-theme') ? 'dark' : 'light');
}

// Apply saved or OS-preferred theme
const savedTheme = localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
applyTheme(savedTheme);

toggleDesktop?.addEventListener('click', toggleTheme);
toggleMobile?.addEventListener('click', toggleTheme);

/* ── 2. Navbar scroll + scroll-spy ───────────────────────── */
const navbar   = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  // Glass navbar
  navbar?.classList.toggle('scrolled', window.scrollY > 40);

  // Back-to-top visibility
  document.getElementById('back-to-top')
    ?.classList.toggle('visible', window.scrollY > 400);

  // Active nav link
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach(sec => {
    if (sec.getBoundingClientRect().top <= 90) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}, { passive: true });

/* ── 3. Mobile hamburger ──────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-menu');

hamburger?.addEventListener('click', () => {
  const open = navMenu?.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(!!open));
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu?.classList.remove('open');
    hamburger?.classList.remove('open');
    hamburger?.setAttribute('aria-expanded', 'false');
  });
});

/* ── 4. Smooth scrolling (offset for fixed navbar) ───────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ── 5. Back to top ───────────────────────────────────────── */
document.getElementById('back-to-top')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ── 6. Particles.js ──────────────────────────────────────── */
if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
  particlesJS('particles-js', {
    particles: {
      number:   { value: 55, density: { enable: true, value_area: 900 } },
      color:    { value: '#58a6ff' },
      shape:    { type: 'circle' },
      opacity:  { value: 0.35, random: true, anim: { enable: true, speed: 0.6, opacity_min: 0.1, sync: false } },
      size:     { value: 2.5, random: true },
      line_linked: {
        enable: true, distance: 140, color: '#58a6ff',
        opacity: 0.18, width: 1
      },
      move: {
        enable: true, speed: 0.9, direction: 'none',
        random: true, straight: false, out_mode: 'out', bounce: false
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'grab' },
        onclick:  { enable: true, mode: 'push' },
        resize:   true
      },
      modes: {
        grab: { distance: 160, line_linked: { opacity: 0.5 } },
        push: { particles_nb: 3 }
      }
    },
    retina_detect: true
  });
}

/* ── 7. Typed.js ──────────────────────────────────────────── */
if (typeof Typed !== 'undefined' && document.getElementById('typed')) {
  new Typed('#typed', {
    strings: [
      'Full-Stack Developer',
      'PHP · Java · Spring Boot',
      'MySQL · MariaDB',
      'JavaScript · Bootstrap',
      'Systems Analyst'
    ],
    typeSpeed:    52,
    backSpeed:    28,
    backDelay:    1800,
    startDelay:   400,
    loop:         true,
    smartBackspace: true
  });
}

/* ── 8. AOS ───────────────────────────────────────────────── */
if (typeof AOS !== 'undefined') {
  AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic', offset: 60 });
}

/* ── 9. Counter animation ─────────────────────────────────── */
function animateCounter(el) {
  const target    = parseInt(el.dataset.target, 10);
  const duration  = 1600;
  const interval  = 16;
  const increment = target / (duration / interval);
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) { el.textContent = target; clearInterval(timer); }
    else el.textContent = Math.floor(current);
  }, interval);
}

const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(c => counterObs.observe(c));

/* ── 10. Portfolio filter ─────────────────────────────────── */
const filterBtns  = document.querySelectorAll('.filtro-btn');
const portItems   = document.querySelectorAll('.portfolio-item');
const portCounter = document.getElementById('portfolio-counter');

function updateCounter() {
  const visible = document.querySelectorAll('.portfolio-item:not(.hidden)').length;
  if (portCounter) {
    portCounter.textContent = `${visible} projeto${visible !== 1 ? 's' : ''} exibido${visible !== 1 ? 's' : ''}`;
  }
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    portItems.forEach(item => {
      item.classList.toggle('hidden', filter !== 'all' && item.dataset.category !== filter);
    });
    updateCounter();
  });
});

updateCounter();

/* ── 11. Contact form ─────────────────────────────────────── */
const contactForm = document.getElementById('contact-form');
const modalSucesso = document.getElementById('modal-sucesso');
const btnFechar    = document.getElementById('btn-fechar');
const btnSubmit    = document.getElementById('btn-submit');

contactForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  clearErrors();

  const nome     = contactForm.querySelector('#nome').value.trim();
  const email    = contactForm.querySelector('#email').value.trim();
  const mensagem = contactForm.querySelector('#mensagem').value.trim();

  // Validation
  let hasError = false;
  if (!nome) { showError('erro-nome', 'Nome é obrigatório.'); hasError = true; }
  if (!email) { showError('erro-email', 'E-mail é obrigatório.'); hasError = true; }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError('erro-email', 'E-mail inválido.'); hasError = true;
  }
  if (!mensagem) { showError('erro-mensagem', 'Mensagem é obrigatória.'); hasError = true; }
  if (hasError) return;

  // Loading state
  setLoading(true);

  try {
    const res  = await fetch('contact.php', { method: 'POST', body: new FormData(contactForm) });
    const data = await res.json();

    if (data.success) {
      contactForm.reset();
      modalSucesso?.classList.add('active');
    } else {
      showError('erro-mensagem', data.message || 'Erro ao enviar. Tente novamente.');
    }
  } catch {
    showError('erro-mensagem', 'Erro de conexão. Tente novamente mais tarde.');
  } finally {
    setLoading(false);
  }
});

// Close modal
btnFechar?.addEventListener('click', () => modalSucesso?.classList.remove('active'));
modalSucesso?.addEventListener('click', (e) => {
  if (e.target === modalSucesso) modalSucesso.classList.remove('active');
});

function showError(id, msg) {
  const el = document.getElementById(id);
  if (el) el.textContent = msg;
  const input = el?.previousElementSibling;
  input?.classList.add('is-invalid');
}

function clearErrors() {
  document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
  document.querySelectorAll('.form-control-custom').forEach(el => el.classList.remove('is-invalid'));
}

function setLoading(loading) {
  if (!btnSubmit) return;
  const btnText    = btnSubmit.querySelector('.btn-text');
  const btnLoading = btnSubmit.querySelector('.btn-loading');
  btnSubmit.disabled = loading;
  btnText?.classList.toggle('d-none', loading);
  btnLoading?.classList.toggle('d-none', !loading);
}
