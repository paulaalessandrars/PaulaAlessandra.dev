/* theme.js — Dark / Light toggle */

function applyTheme(theme) {
  const isLight = theme === 'light';
  document.body.classList.toggle('light-theme',  isLight);
  document.body.classList.toggle('dark-theme',  !isLight);

  ['icon-moon', 'icon-moon-mobile'].forEach(id =>
    document.getElementById(id)?.classList.toggle('d-none', isLight)
  );
  ['icon-sun', 'icon-sun-mobile'].forEach(id =>
    document.getElementById(id)?.classList.toggle('d-none', !isLight)
  );

  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  applyTheme(document.body.classList.contains('light-theme') ? 'dark' : 'light');
}

// Aplica tema salvo ou preferência do sistema
const savedTheme = localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
applyTheme(savedTheme);

document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
document.getElementById('theme-toggle-mobile')?.addEventListener('click', toggleTheme);
