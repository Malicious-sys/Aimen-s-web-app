// Initialize theme based on saved preference
function applySavedTheme() {
  const currentTheme = localStorage.getItem('theme') || 'light';
  const body = document.body;
  const themeBtn = document.getElementById('themeBtn');
  if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    if (themeBtn) themeBtn.textContent = '☀️';
  } else {
    body.classList.remove('dark-mode');
    if (themeBtn) themeBtn.textContent = '🌙';
  }
}

function toggleTheme() {
  const body = document.body;
  const themeBtn = document.getElementById('themeBtn');
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    if (themeBtn) themeBtn.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    if (themeBtn) themeBtn.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Apply theme from localStorage
  applySavedTheme();

  // Wire up theme toggle button
  const themeBtn = document.getElementById('themeBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }

  // Newsletter form submission handler
  const form = document.querySelector('.newsletter-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for subscribing!');
    });
  }

  // Smooth scroll for in-page anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    const targetId = link.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  });
});
