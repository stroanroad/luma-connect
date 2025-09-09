// View switcher
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('data-view');
    document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
    link.classList.add('active');
    document.querySelectorAll('.view').forEach(v => v.classList.remove('visible'));
    document.querySelector(`.view[data-view="${target}"]`)?.classList.add('visible');
  });
});

// Theme toggle (auto → light → dark → auto)
const root = document.documentElement;
const btn  = document.getElementById('themeToggle');
const icon = document.getElementById('themeIcon');
const lab  = document.getElementById('themeLabel');
const inlineBtn = document.getElementById('inlineThemeToggle');

const saved = localStorage.getItem('theme') || 'auto';
setTheme(saved);

btn.addEventListener('click', cycleTheme);
inlineBtn?.addEventListener('click', cycleTheme);

function cycleTheme(){
  const current = root.getAttribute('data-theme') || 'auto';
  const next = current === 'auto' ? 'light' : current === 'light' ? 'dark' : 'auto';
  setTheme(next);
  localStorage.setItem('theme', next);
}

function setTheme(mode){
  root.setAttribute('data-theme', mode);
  const isAuto = mode === 'auto';
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  const effectiveLight = isAuto ? prefersLight : (mode === 'light');

  if (effectiveLight){
    icon.textContent = '🌞';
    lab.textContent  = isAuto ? 'Auto · Light' : 'Light';
  } else {
    icon.textContent = '🌙';
    lab.textContent  = isAuto ? 'Auto · Dark' : 'Dark';
  }
  btn?.setAttribute('aria-label', `Toggle theme (current: ${lab.textContent})`);
}
