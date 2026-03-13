/* ============================================================
   portfolio.js
   ============================================================ */

let currentLang = 'pt';

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

function openProject(id) {
  const target = document.getElementById(id);
  if (!target) return;
  if (target.style.display === 'none') {
    target.style.display = '';
    target.querySelectorAll('[data-lang]').forEach(el => {
      el.style.display = el.getAttribute('data-lang') === currentLang ? '' : 'none';
    });
    target.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: el.classList.contains('reveal') ? 50 : 0,
          x: el.classList.contains('reveal-left') ? -60 : el.classList.contains('reveal-right') ? 60 : 0,
          scale: el.classList.contains('reveal-scale') ? 0.9 : 1 },
        { scrollTrigger: { trigger: el, start: 'top 92%' },
          opacity: 1, y: 0, x: 0, scale: 1, duration: .9, ease: 'power3.out', delay: i * 0.06 }
      );
    });
    ScrollTrigger.refresh();
  }
  setTimeout(() => window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' }), 60);
}

window.addEventListener('scroll', () => {
  const total = document.body.scrollHeight - window.innerHeight;
  document.getElementById('progress-bar').style.width = (window.scrollY / total * 100) + '%';
}, { passive: true });

let lastScroll = 0;
window.addEventListener('scroll', () => {
  const cur = window.scrollY;
  document.querySelector('header').style.transform = (cur > lastScroll && cur > 100) ? 'translateY(-100%)' : 'translateY(0)';
  lastScroll = cur;
}, { passive: true });

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  /* --- Hero: set initial states, animate once, NEVER touch opacity again --- */
  const h1    = document.querySelector('.hero h1');
  const sub   = document.querySelector('.hero-sub');
  const eyebrow = document.querySelector('.hero-eyebrow');
  const actions = document.querySelector('.hero-actions');

  gsap.set([eyebrow, sub, actions], { opacity: 0, y: 20 });
  gsap.set(h1, { opacity: 0, y: 80 });

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  tl.to(eyebrow, { opacity: 1, y: 0, duration: .8 })
    .to(h1,      { opacity: 1, y: 0, duration: 1.1 }, '-=.4')
    .to(sub,     { opacity: 1, y: 0, duration: 1   }, '-=.6')
    .to(actions, { opacity: 1, y: 0, duration: .9  }, '-=.5');

  /* Parallax: ONLY y movement, no opacity at all */
  gsap.to('.hero-bg-blur', {
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
    y: 140, scale: 1.3
  });
  gsap.to('.hero h1',      { scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1   }, y: -50 });
  gsap.to('.hero-sub',     { scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: .8  }, y: -30 });
  gsap.to('.hero-actions', { scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: .6  }, y: -20 });
  gsap.to('.hero-eyebrow', { scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: .5  }, y: -10 });

  /* Section titles */
  gsap.utils.toArray('.section-title').forEach(el => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none reverse' },
      y: 40, opacity: 0, duration: .9, ease: 'power3.out'
    });
  });

  /* Reveals */
  gsap.utils.toArray('.reveal').forEach((el, i) => {
    gsap.to(el, {
      scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none reverse' },
      opacity: 1, y: 0, duration: .9, ease: 'power3.out', delay: (i % 3) * 0.06
    });
  });
  gsap.utils.toArray('.reveal-left').forEach(el => {
    gsap.to(el, {
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' },
      opacity: 1, x: 0, duration: 1, ease: 'power3.out'
    });
  });
  gsap.utils.toArray('.reveal-right').forEach(el => {
    gsap.to(el, {
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' },
      opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: .12
    });
  });
  gsap.utils.toArray('.reveal-scale').forEach(el => {
    gsap.to(el, {
      scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none reverse' },
      opacity: 1, scale: 1, duration: .9, ease: 'back.out(1.4)'
    });
  });

  /* Cards */
  gsap.utils.toArray('.card').forEach((el, i) => {
    gsap.fromTo(el,
      { y: 60, opacity: 0 },
      { scrollTrigger: { trigger: el, start: 'top 92%', toggleActions: 'play none none reverse' },
        y: 0, opacity: 1, duration: .8, ease: 'power3.out', delay: i * 0.12 }
    );
  });

  /* Skills */
  gsap.utils.toArray('.skill').forEach((el, i) => {
    gsap.fromTo(el,
      { y: 30, opacity: 0 },
      { scrollTrigger: { trigger: el, start: 'top 92%', toggleActions: 'play none none reverse' },
        y: 0, opacity: 1, duration: .6, ease: 'power2.out', delay: i * 0.06 }
    );
  });
});
