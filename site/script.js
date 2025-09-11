document.addEventListener('DOMContentLoaded', () => {
  // Update footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // CTA button (placeholder)
  const cta = document.getElementById('cta');
  if (cta) {
    cta.addEventListener('click', () => {
      alert('Thanks for your interest! We’ll share updates soon.');
    });
  }
});
