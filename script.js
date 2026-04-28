/* ===== NAVBAR SCROLL ===== */
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta)');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  highlightNav();
});

function highlightNav() {
  const scrollY = window.scrollY + 100;
  sections.forEach(sec => {
    if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight) {
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + sec.id);
      });
    }
  });
}

/* ===== MOBILE MENU ===== */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ===== SCROLL REVEAL ===== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ===== COUNTER ANIMATION ===== */
function animateCounter(el) {
  const target = +el.dataset.target;
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current);
    if (current >= target) clearInterval(timer);
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-num').forEach(animateCounter);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) counterObserver.observe(statsSection);

/* ===== PORTFOLIO FILTER ===== */
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

function applyFilter(filter) {
  portfolioItems.forEach(item => {
    const match = item.dataset.category === filter;
    item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    if (match) {
      item.classList.remove('hidden');
      item.style.opacity = '1';
      item.style.transform = 'scale(1)';
    } else {
      item.style.opacity = '0';
      item.style.transform = 'scale(0.95)';
      setTimeout(() => item.classList.add('hidden'), 300);
    }
  });
}

// Aplica o filtro inicial (primeiro botão ativo)
const initialFilter = document.querySelector('.filter-btn.active');
if (initialFilter) applyFilter(initialFilter.dataset.filter);

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilter(btn.dataset.filter);
  });
});

/* ===== LIGHTBOX ===== */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentIndex = 0;
let visibleItems = [];

function openLightbox(index) {
  visibleItems = [...portfolioItems].filter(i => !i.classList.contains('hidden'));
  currentIndex = index;
  showLightboxImage();
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function showLightboxImage() {
  const item = visibleItems[currentIndex];
  const img = item.querySelector('img');
  const caption = item.querySelector('.portfolio-overlay span');
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightboxCaption.textContent = caption ? caption.textContent : '';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

portfolioItems.forEach((item, i) => {
  item.querySelector('.portfolio-img-wrap').addEventListener('click', () => {
    visibleItems = [...portfolioItems].filter(it => !it.classList.contains('hidden'));
    const visibleIndex = visibleItems.indexOf(item);
    openLightbox(visibleIndex);
  });
});

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

lightboxPrev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
  showLightboxImage();
});

lightboxNext.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % visibleItems.length;
  showLightboxImage();
});

document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') lightboxPrev.click();
  if (e.key === 'ArrowRight') lightboxNext.click();
});

/* ===== SMOOTH SCROLL para links âncora ===== */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
