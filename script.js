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

const modalData = {
  nba: {
    title: 'NBA MVP Analysis (1981–2021)',
    blocks: [
      {
        heading: { pt: 'Visão Geral', en: 'Project Overview' },
        body: {
          pt: 'Este projeto analisa 42 temporadas de votação do MVP da NBA para entender os fatores por trás do prêmio. O dashboard explora performance estatística, sucesso do time e comparações históricas entre os maiores jogadores da liga.',
          en: 'This project analyzes 42 seasons of NBA MVP voting to understand the factors behind the award. The dashboard explores statistical performance, team success, and historical comparisons between some of the greatest players in league history.'
        }
      },
      {
        heading: { pt: 'Dataset', en: 'Dataset' },
        body: {
          pt: 'Dados de votação do MVP da NBA cobrindo temporadas de 1981 a 2021, obtidos do Kaggle.',
          en: 'NBA MVP voting data covering seasons from 1981 to 2021 sourced from Kaggle.'
        }
      },
      {
        heading: { pt: 'Processo de Desenvolvimento', en: 'Development Process' },
        body: {
          pt: '• Limpeza e transformação de dados com Power Query<br>• KPIs personalizados e cálculos avançados com DAX<br>• Análise estatística de médias de pontos, performance do time e padrões de votação<br>• Design de dashboards interativos com foco em storytelling visual',
          en: '• Data cleaning and transformation using Power Query<br>• Custom KPIs and advanced calculations using DAX<br>• Statistical analysis of scoring averages, team performance and voting patterns<br>• Design of interactive visual storytelling dashboards'
        }
      }
    ],
    tech: ['Power BI', 'DAX', 'Power Query', 'Excel', 'Kaggle Dataset'],
    iframe: 'https://app.powerbi.com/view?r=eyJrIjoiZTY1ZDJjYTAtZTQyZi00MzRkLTgwOTktNDBiMGUyNzJjY2RmIiwidCI6IjU5NzcyMDkwLTM5MGMtNDY2OC1iNWNkLWVmODQyYmJhNTM4OCJ9&pageName=75fc95a2bd66e6064ea6',
    link:   'https://app.powerbi.com/view?r=eyJrIjoiZTY1ZDJjYTAtZTQyZi00MzRkLTgwOTktNDBiMGUyNzJjY2RmIiwidCI6IjU5NzcyMDkwLTM5MGMtNDY2OC1iNWNkLWVmODQyYmJhNTM4OCJ9&pageName=75fc95a2bd66e6064ea6'
  },
  project2: {
    title: 'Business Performance Dashboard',
    blocks: [
      {
        heading: { pt: 'Visão Geral', en: 'Project Overview' },
        body: {
          pt: 'Dashboard interativo em Power BI focado no monitoramento de performance empresarial. O objetivo foi criar um ambiente visual claro para análise de KPIs, tendências e indicadores de performance operacional.',
          en: 'Interactive Power BI dashboard focused on business performance monitoring. The goal was to create a clear visual environment for analyzing KPIs, trends and operational performance indicators.'
        }
      },
      {
        heading: { pt: 'Processo de Desenvolvimento', en: 'Development Process' },
        body: {
          pt: '• Modelagem de dados e estruturação de tabelas analíticas<br>• Criação de KPIs de performance<br>• Filtragem interativa e análise cruzada<br>• Layout focado em clareza e storytelling',
          en: '• Data modeling and structuring of analytical tables<br>• Creation of performance KPIs<br>• Interactive filtering and cross-analysis<br>• Dashboard layout focused on clarity and storytelling'
        }
      }
    ],
    tech: ['Power BI', 'DAX', 'Power Query', 'Excel'],
    iframe: 'https://app.powerbi.com/view?r=eyJrIjoiYWI5ZmYxNjktMmY5Zi00YjM3LTg1MDEtOTliNDllYjVlMTJmIiwidCI6IjU5NzcyMDkwLTM5MGMtNDY2OC1iNWNkLWVmODQyYmJhNTM4OCJ9&pageName=2ecf3755db000392a001',
    link:   'https://app.powerbi.com/view?r=eyJrIjoiYWI5ZmYxNjktMmY5Zi00YjM3LTg1MDEtOTliNDllYjVlMTJmIiwidCI6IjU5NzcyMDkwLTM5MGMtNDY2OC1iNWNkLWVmODQyYmJhNTM4OCJ9&pageName=2ecf3755db000392a001'
  },
  churn: {
    title: 'Customer Churn Analysis',
    blocks: [
      {
        heading: { pt: 'Visão Geral', en: 'Project Overview' },
        body: {
          pt: 'Projeto completo de análise de churn de clientes, cobrindo desde o processo de ETL no SQL Server até a visualização no Power BI. O objetivo foi identificar o perfil dos clientes que cancelam, analisar padrões demográficos, geográficos e de serviços, e levantar oportunidades para campanhas de retenção.',
          en: 'End-to-end customer churn analysis project, covering the full ETL process in SQL Server through to Power BI visualization. The goal was to identify churner profiles, analyze demographic, geographic and service-level patterns, and surface opportunities for targeted retention campaigns.'
        }
      },
      {
        heading: { pt: 'Processo de Desenvolvimento', en: 'Development Process' },
        body: {
          pt: '• Criação do banco de dados e ingestão dos dados via Import Wizard no SQL Server<br>• Exploração dos dados com queries de contagem, distribuição e verificação de nulos<br>• Limpeza e tratamento de nulos, inserção na tabela de produção e criação de Views para Power BI<br>• Transformações no Power Query: colunas calculadas, grupos de idade, grupos de tenure e unpivot de serviços<br>• Medidas DAX: Total Customers, Total Churn, Churn Rate e New Joiners<br>• Dashboard com análises de perfil demográfico, geográfico, account info, distribuição de churn e serviços utilizados',
          en: '• Database creation and data ingestion via Import Wizard in SQL Server<br>• Data exploration with count queries, distribution analysis and null checks<br>• Null handling and data cleaning, insertion into production table and creation of Views for Power BI<br>• Power Query transformations: calculated columns, age groups, tenure groups and services unpivot<br>• DAX measures: Total Customers, Total Churn, Churn Rate and New Joiners<br>• Dashboard covering demographic profile, geographic, account info, churn distribution and services used'
        }
      }
    ],
    tech: ['SQL Server', 'Power BI', 'DAX', 'Power Query', 'ETL'],
    iframe: 'https://app.powerbi.com/view?r=eyJrIjoiNmMxMmI4NDYtZGJkNC00NzFlLTk4ZTgtYTcwMzZhOTNhNzg0IiwidCI6IjU5NzcyMDkwLTM5MGMtNDY2OC1iNWNkLWVmODQyYmJhNTM4OCJ9&pageName=a6564ddbf105a5312f10',
    link:   'https://app.powerbi.com/view?r=eyJrIjoiNmMxMmI4NDYtZGJkNC00NzFlLTk4ZTgtYTcwMzZhOTNhNzg0IiwidCI6IjU5NzcyMDkwLTM5MGMtNDY2OC1iNWNkLWVmODQyYmJhNTM4OCJ9&pageName=a6564ddbf105a5312f10'
  }
};

function openModal(id) {
  const data = modalData[id];
  if (!data) return;
  const lang = currentLang;
  const blocksHtml = data.blocks.map(b => `
    <div class="case-block">
      <h3>${b.heading[lang]}</h3>
      <p>${b.body[lang]}</p>
    </div>
  `).join('');
  const techHtml = data.tech.map(t => `<span>${t}</span>`).join('');
  document.getElementById('modal-content').innerHTML = `
    <h2 class="section-title">${data.title}</h2>
    ${blocksHtml}
    <div class="case-block">
      <h3>${lang === 'pt' ? 'Tecnologias' : 'Technologies'}</h3>
      <div class="tech-list">${techHtml}</div>
    </div>
    <div class="dashboard case-block">
      <iframe src="${data.iframe}" allowfullscreen></iframe>
      <a class="open-dashboard" href="${data.link}" target="_blank">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
        ${lang === 'pt' ? 'Abrir Dashboard Interativo' : 'Open Interactive Dashboard'}
      </a>
    </div>
  `;
  document.getElementById('modal-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

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

  const h1      = document.querySelector('.hero h1');
  const sub     = document.querySelector('.hero-sub');
  const eyebrow = document.querySelector('.hero-eyebrow');
  const actions = document.querySelector('.hero-actions');

  gsap.set([eyebrow, sub, actions], { opacity: 0, y: 20 });
  gsap.set(h1, { opacity: 0, y: 80 });

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  tl.to(eyebrow, { opacity: 1, y: 0, duration: .8 })
    .to(h1,      { opacity: 1, y: 0, duration: 1.1 }, '-=.4')
    .to(sub,     { opacity: 1, y: 0, duration: 1   }, '-=.6')
    .to(actions, { opacity: 1, y: 0, duration: .9  }, '-=.5');

  gsap.to('.hero-bg-blur', {
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
    y: 140, scale: 1.3
  });

  gsap.utils.toArray('.section-title').forEach(el => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none reverse' },
      y: 40, opacity: 0, duration: .9, ease: 'power3.out'
    });
  });

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

  gsap.utils.toArray('.card').forEach((el, i) => {
    gsap.fromTo(el,
      { y: 60, opacity: 0 },
      { scrollTrigger: { trigger: el, start: 'top 92%', toggleActions: 'play none none reverse' },
        y: 0, opacity: 1, duration: .8, ease: 'power3.out', delay: i * 0.12 }
    );
  });

  gsap.utils.toArray('.skill').forEach((el, i) => {
    gsap.fromTo(el,
      { y: 30, opacity: 0 },
      { scrollTrigger: { trigger: el, start: 'top 92%', toggleActions: 'play none none reverse' },
        y: 0, opacity: 1, duration: .6, ease: 'power2.out', delay: i * 0.06 }
    );
  });
});
