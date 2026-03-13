/* ============================================================
   portfolio.js — animations, lang switcher, project nav
   ============================================================ */

let currentLang = 'pt';

/* ── Language switcher ─────────────────────────────────────── */
function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.style.display = el.getAttribute('data-lang') === lang ? '' : 'none';
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase().startsWith(lang));
  });
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
}

/* ── Open project case study ──────────────────────────────── */
function openProject(id) {
  const target = document.getElementById(id);
  if (!target) return;
  if (target.style.display === 'none') {
    target.style.display = '';
    // Apply current lang inside newly shown section
    target.querySelectorAll('[data-lang]').forEach(el => {
      el.style.display = el.getAttribute('data-lang') === currentLang ? '' : 'none';
    });
    // Animate reveals inside case study
    target.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
      gsap.to(el, {
        scrollTrigger: { trigger: el, start: 'top 90%' },
        opacity: 1, y: 0, x: 0, scale: 1,
        duration: .9, ease: 'power3.out'
      });
    });
    ScrollTrigger.refresh();
  }
  setTimeout(() => window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' }), 60);
}

/* ── Progress bar ─────────────────────────────────────────── */
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const total = document.body.scrollHeight - window.innerHeight;
  document.getElementById('progress-bar').style.width = (scrolled / total * 100) + '%';
});

/* ── Header hide / show on scroll ────────────────────────── */
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const cur = window.scrollY;
  const header = document.querySelector('header');
  header.style.transform = (cur > lastScroll && cur > 100) ? 'translateY(-100%)' : 'translateY(0)';
  lastScroll = cur;
});

/* ── GSAP animations ──────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  /* Hero entrance */
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  heroTl
    .to('.hero-eyebrow', { opacity: 1, y: 0, duration: .8 })
    .from('.hero h1',    { y: 90, opacity: 0, duration: 1.2 }, '-=.4')
    .to('.hero-sub',     { opacity: 1, y: 0, duration: 1 },    '-=.7')
    .to('.hero-actions', { opacity: 1, y: 0, duration: .9 },   '-=.6');

  /* Hero parallax — scrub keeps hero text visible while at top,
     only fades when user actively scrolls away.
     FIX: use 'end: bottom top' so elements fully leave before opacity hits 0 */
  gsap.to('.hero-bg-blur', {
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
    y: 150, scale: 1.3
  });

  /* Title and sub fade out as user scrolls — but restore on scroll up */
  gsap.to('.hero h1', {
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: '80% top',        // give more room before fading
      scrub: 1,
    },
    y: -60, opacity: 0
  });

  gsap.to('.hero-sub', {
    scrollTrigger: {
      trigger: '.hero',
      start: '10% top',
      end: '70% top',
      scrub: .8,
    },
    y: -40, opacity: 0
  });

  gsap.to('.hero-actions', {
    scrollTrigger: {
      trigger: '.hero',
      start: '10% top',
      end: '60% top',
      scrub: .7,
    },
    y: -30, opacity: 0
  });

  /* Section titles */
  gsap.utils.toArray('.section-title').forEach(el => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' },
      y: 50, opacity: 0, duration: 1, ease: 'power3.out'
    });
  });

  /* Generic reveal */
  gsap.utils.toArray('.reveal').forEach((el, i) => {
    gsap.to(el, {
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' },
      opacity: 1, y: 0, duration: .9, ease: 'power3.out',
      delay: (i % 3) * 0.07
    });
  });

  /* Reveal left */
  gsap.utils.toArray('.reveal-left').forEach(el => {
    gsap.to(el, {
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
      opacity: 1, x: 0, duration: 1, ease: 'power3.out'
    });
  });

  /* Reveal right */
  gsap.utils.toArray('.reveal-right').forEach(el => {
    gsap.to(el, {
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
      opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: .15
    });
  });

  /* Reveal scale */
  gsap.utils.toArray('.reveal-scale').forEach(el => {
    gsap.to(el, {
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' },
      opacity: 1, scale: 1, duration: .9, ease: 'back.out(1.4)'
    });
  });

  /* Cards stagger */
  gsap.from('.card', {
    scrollTrigger: { trigger: '.projects', start: 'top 80%', toggleActions: 'play none none reverse' },
    y: 80, opacity: 0, stagger: .18, duration: .9, ease: 'power3.out'
  });

  /* Skills stagger */
  gsap.from('.skill', {
    scrollTrigger: { trigger: '.skills-grid', start: 'top 85%', toggleActions: 'play none none reverse' },
    y: 40, opacity: 0, stagger: .07, duration: .7, ease: 'power2.out'
  });
});
