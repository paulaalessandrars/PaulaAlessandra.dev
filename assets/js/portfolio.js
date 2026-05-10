/* portfolio.js — Filtro de projetos */

const filterBtns  = document.querySelectorAll('.filtro-btn');
const portItems   = document.querySelectorAll('.portfolio-item');
const portCounter = document.getElementById('portfolio-counter');

function updateCounter() {
  const n = document.querySelectorAll('.portfolio-item:not(.hidden)').length;
  if (portCounter) portCounter.textContent = `${n} projeto${n !== 1 ? 's' : ''} exibido${n !== 1 ? 's' : ''}`;
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
