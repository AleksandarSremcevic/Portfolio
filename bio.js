// Fade-in Effect for Scroll
document.addEventListener('scroll', () => {
    const fadeInElements = document.querySelectorAll('.bio-box p, .bio-box h2');
    const viewportHeight = window.innerHeight;
  
    fadeInElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= viewportHeight - 100) {
        el.style.opacity = '1';
        el.style.transform = 'translateX(0)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      } else {
        el.style.opacity = '0';
        el.style.transform = 'translateX(-50px)';
      }
    });
  });
   