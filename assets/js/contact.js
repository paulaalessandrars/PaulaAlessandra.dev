/* contact.js — Formulário de contato */

const form         = document.getElementById('contact-form');
const modal        = document.getElementById('modal-sucesso');
const btnFechar    = document.getElementById('btn-fechar');
const btnSubmit    = document.getElementById('btn-submit');

form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  clearErrors();

  const nome     = form.querySelector('#nome').value.trim();
  const email    = form.querySelector('#email').value.trim();
  const mensagem = form.querySelector('#mensagem').value.trim();

  let hasError = false;
  if (!nome)    { showError('erro-nome', 'Nome é obrigatório.');       hasError = true; }
  if (!email)   { showError('erro-email', 'E-mail é obrigatório.');    hasError = true; }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
                { showError('erro-email', 'E-mail inválido.');          hasError = true; }
  if (!mensagem){ showError('erro-mensagem', 'Mensagem é obrigatória.'); hasError = true; }
  if (hasError) return;

  setLoading(true);

  try {
    const res  = await fetch('contact.php', { method: 'POST', body: new FormData(form) });
    const data = await res.json();
    if (data.success) { form.reset(); modal?.classList.add('active'); }
    else showError('erro-mensagem', data.message || 'Erro ao enviar. Tente novamente.');
  } catch {
    showError('erro-mensagem', 'Erro de conexão. Tente novamente mais tarde.');
  } finally {
    setLoading(false);
  }
});

btnFechar?.addEventListener('click',  () => modal?.classList.remove('active'));
modal?.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('active'); });

function showError(id, msg) {
  const el = document.getElementById(id);
  if (el) el.textContent = msg;
  el?.previousElementSibling?.classList.add('is-invalid');
}

function clearErrors() {
  document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
  document.querySelectorAll('.form-control-custom').forEach(el => el.classList.remove('is-invalid'));
}

function setLoading(loading) {
  if (!btnSubmit) return;
  btnSubmit.disabled = loading;
  btnSubmit.querySelector('.btn-text')?.classList.toggle('d-none', loading);
  btnSubmit.querySelector('.btn-loading')?.classList.toggle('d-none', !loading);
}
