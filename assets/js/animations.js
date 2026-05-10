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

/* ── Code Terminal rotation ────────────────────────────────── */
(function () {
  const codeEl  = document.getElementById('terminal-code');
  const titleEl = document.getElementById('terminal-title');
  const langEl  = document.getElementById('terminal-lang');
  const bodyEl  = codeEl?.closest('.terminal-body');
  if (!codeEl || !titleEl || !langEl || !bodyEl) return;

  const snippets = [
    {
      title: 'PontoService.php',
      lang:  'PHP',
      html: [
        '<span class="t-comment">// Registra entrada/saída com tolerância</span>',
        '<span class="t-keyword">public function</span> <span class="t-fn">registrarPonto</span>(<span class="t-class">$userId</span>) {',
        '  <span class="t-var">$agora</span>  = <span class="t-fn">Carbon</span>::<span class="t-fn">now</span>();',
        '  <span class="t-var">$ultimo</span> = <span class="t-fn">$this</span>-><span class="t-fn">pontoRepo</span>-><span class="t-fn">ultimo</span>(<span class="t-var">$userId</span>);',
        '',
        '  <span class="t-keyword">if</span> (<span class="t-var">$ultimo</span> && <span class="t-var">$ultimo</span>-><span class="t-fn">saida</span> === <span class="t-keyword">null</span>) {',
        '    <span class="t-var">$ultimo</span>-><span class="t-fn">update</span>([<span class="t-string">\'saida\'</span> => <span class="t-var">$agora</span>]);',
        '    <span class="t-keyword">return</span> [<span class="t-string">\'status\'</span> => <span class="t-string">\'saída registrada\'</span>];',
        '  }',
        '',
        '  <span class="t-keyword">return</span> <span class="t-fn">Ponto</span>::<span class="t-fn">create</span>([',
        '    <span class="t-string">\'user_id\'</span> => <span class="t-var">$userId</span>,',
        '    <span class="t-string">\'entrada\'</span> => <span class="t-var">$agora</span>,',
        '  ]);',
        '}',
      ].join('\n'),
    },
    {
      title: 'PrecosController.java',
      lang:  'Java',
      html: [
        '<span class="t-annotation">@RestController</span>',
        '<span class="t-annotation">@RequestMapping</span>(<span class="t-string">"/api/precos"</span>)',
        '<span class="t-keyword">public class</span> <span class="t-class">PrecosController</span> {',
        '',
        '  <span class="t-annotation">@Autowired</span>',
        '  <span class="t-keyword">private</span> <span class="t-class">PrecosService</span> <span class="t-var">service</span>;',
        '',
        '  <span class="t-annotation">@GetMapping</span>(<span class="t-string">"/{id}"</span>)',
        '  <span class="t-keyword">public</span> <span class="t-class">ResponseEntity</span>&lt;<span class="t-class">PrecoDTO</span>&gt; <span class="t-fn">getPreco</span>(',
        '      <span class="t-annotation">@PathVariable</span> <span class="t-class">Long</span> <span class="t-var">id</span>) {',
        '    <span class="t-keyword">return</span> <span class="t-class">ResponseEntity</span>.<span class="t-fn">ok</span>(<span class="t-var">service</span>.<span class="t-fn">findById</span>(<span class="t-var">id</span>));',
        '  }',
        '}',
      ].join('\n'),
    },
    {
      title: 'SaldoScheduler.java',
      lang:  'Java',
      html: [
        '<span class="t-annotation">@Component</span>',
        '<span class="t-keyword">public class</span> <span class="t-class">SaldoScheduler</span> {',
        '',
        '  <span class="t-annotation">@Autowired</span>',
        '  <span class="t-keyword">private</span> <span class="t-class">SaldoService</span> <span class="t-var">saldoService</span>;',
        '',
        '  <span class="t-annotation">@Scheduled</span>(cron = <span class="t-string">"0 0 1 * * ?"</span>)',
        '  <span class="t-keyword">public void</span> <span class="t-fn">expirarPontosVencidos</span>() {',
        '    <span class="t-keyword">int</span> <span class="t-var">total</span> = <span class="t-var">saldoService</span>.<span class="t-fn">expirarVencidos</span>();',
        '    <span class="t-class">log</span>.<span class="t-fn">info</span>(<span class="t-string">"Pontos expirados: {}"</span>, <span class="t-var">total</span>);',
        '  }',
        '}',
      ].join('\n'),
    },
  ];

  let current = 0;

  function showSnippet(idx) {
    const s = snippets[idx];
    bodyEl.classList.add('fading');
    setTimeout(() => {
      titleEl.textContent  = s.title;
      langEl.textContent   = s.lang;
      codeEl.innerHTML     = s.html;
      bodyEl.classList.remove('fading');
    }, 300);
  }

  showSnippet(0);
  setInterval(() => {
    current = (current + 1) % snippets.length;
    showSnippet(current);
  }, 5000);
})();

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
