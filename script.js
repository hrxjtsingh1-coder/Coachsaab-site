// Mobile menu toggle and scroll progress bar for CoachSaab

(function () {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  const hamburger = menuToggle && menuToggle.querySelector('.hamburger');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      mainNav.classList.toggle('open');
      // animate hamburger to X
      if (!expanded) {
        hamburger.style.transform = 'rotate(45deg)';
        hamburger.style.background = 'transparent';
        hamburger.style.boxShadow = 'none';
        hamburger.style.position = 'relative';
        hamburger.style.transition = 'transform 0.28s ease';
        hamburger.style.setProperty('--after-top', '0');
      } else {
        hamburger.style.transform = '';
        hamburger.style.background = '';
      }
    });

    // Close menu when clicking outside on mobile
    document.addEventListener('click', (e) => {
      if (!mainNav.classList.contains('open')) return;
      if (!menuToggle.contains(e.target) && !mainNav.contains(e.target)) {
        mainNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        hamburger.style.transform = '';
        hamburger.style.background = '';
      }
    });
  }

  // Scroll progress bar
  const progressEl = document.getElementById('progress');

  function updateProgress() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    if (progressEl) progressEl.style.width = pct + '%';
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  document.addEventListener('DOMContentLoaded', updateProgress);

})();
