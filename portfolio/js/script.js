// Smooth scroll for internal nav links (#about, #skills etc.)
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    const section = document.querySelector(href);
    if (!section) return; // safety
    e.preventDefault();
    const y = section.getBoundingClientRect().top + window.pageYOffset - 60;
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
});
