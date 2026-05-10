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
      const show = filter === 'all' || item.dataset.category === filter;
      item.classList.toggle('hidden', !show);

      // Força AOS a mostrar items que estavam fora da viewport quando a página carregou
      if (show) item.classList.add('aos-animate');
    });

    updateCounter();
  });
});

updateCounter();
