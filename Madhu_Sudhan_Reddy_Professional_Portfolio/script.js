const menu = document.querySelector('.menu');
const nav = document.querySelector('#navLinks');
menu?.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('#navLinks a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('open'));
});

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#copyEmail')?.addEventListener('click', async () => {
  const email = 'madhusudhan6755@gmail.com';
  try {
    await navigator.clipboard.writeText(email);
    document.querySelector('#copyEmail').textContent = 'Copied!';
    setTimeout(() => document.querySelector('#copyEmail').textContent = 'Copy Email', 1800);
  } catch {
    window.location.href = `mailto:${email}`;
  }
});
