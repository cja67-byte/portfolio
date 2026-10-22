const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-navigation');

if (menuButton && navigation) {
  const mobileLayout = window.matchMedia('(max-width: 759px)');
  const menuSymbol = menuButton.querySelector('span');

  function setMenuOpen(isOpen) {
    navigation.classList.toggle('is-open', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    if (menuSymbol) menuSymbol.textContent = isOpen ? '−' : '+';
  }

  function syncMenuLayout() {
    // Without JavaScript, navigation stays visible on every screen size.
    menuButton.hidden = !mobileLayout.matches;
    navigation.classList.toggle('is-collapsible', mobileLayout.matches);
    setMenuOpen(false);
  }

  menuButton.addEventListener('click', () => {
    setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  navigation.addEventListener('click', (event) => {
    if (mobileLayout.matches && event.target.closest('a')) {
      setMenuOpen(false);
      // Keep keyboard focus at the destination after hiding the menu link.
      const href = event.target.closest('a').getAttribute('href');
      if (href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
          target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
        }
      }
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  mobileLayout.addEventListener('change', syncMenuLayout);
  syncMenuLayout();
}

const projectFilter = document.querySelector('.project-filter');
const projectCards = document.querySelectorAll('[data-project-category]');
const projectCount = document.querySelector('#project-count');

if (projectFilter && projectCards.length && projectCount) {
  projectFilter.hidden = false;
  projectFilter.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    const category = button.dataset.filter;
    let visibleCount = 0;
    projectCards.forEach((card) => {
      card.hidden = category !== 'all' && card.dataset.projectCategory !== category;
      if (!card.hidden) visibleCount += 1;
    });
    projectFilter.querySelectorAll('button').forEach((control) => {
      control.setAttribute('aria-pressed', String(control === button));
    });
    projectCount.textContent = `Showing ${visibleCount} of ${projectCards.length} projects`;
  });
}
