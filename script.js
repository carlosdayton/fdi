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
const portfolioFilters = document.querySelector('.portfolio-filters');
const portfolioGrid = document.getElementById('portfolioGrid');
let filterBtns = document.querySelectorAll('.filter-btn');
let portfolioItems = document.querySelectorAll('.portfolio-item');

const portfolioFolders = [
  {
    slug: 'adesivagem-de-parede',
    label: 'ADESIVAGEM DE PAREDE',
    folder: 'ADESIVAGEM DE PAREDE',
    files: [
      'acrilico mais adesivo .jpeg', 'adesivagem de freezer .jpeg',
      'adesivagem de parede .jpeg', 'adesivagem frezzer.jpeg', 'adesivagem mercado.jpeg', 'adesivagem parede ciplan.jpeg',
      'adesivagem porta escola tecnica.jpeg', 'adesivagem vidro .jpeg',
      'adesivo entrada herbalife.jpeg', 'adesivo parede vc.jpeg', 'adesivo perfurado voolivre.jpeg', 'adesivo recortado.jpeg',
      'adesivo voolivre.jpeg', 'adesivos parede.jpeg', 'Captura de tela 2026-01-19 120704.jpg',
      'crer adesivagem porta.jpeg', 'faixa de segurança ciplan.jpeg', 'faixa de segurança safa.jpeg',
      'IMG_20140514_154125.jpg', 'IMG-20250418-WA0036.jpg', 'IMG-20250802-WA0140.jpg', 'IMG-20250802-WA0177.jpg',
      'IMG-20250901-WA0226.jpg', 'IMG-20250901-WA0332.jpg', 'IMG-20260113-WA0005.jpg', 'IMG-20260113-WA0013.jpg',
      'motz entrada.jpeg', 'motz parede.jpeg', 'motz transporte.jpeg', 'parede adesivada safa.jpeg', 'parede salute.jpeg'
    ],
    descriptions: {
      'acrilico mais adesivo .jpeg': '',
      'adesivagem de freezer .jpeg': '',
      'adesivagem de parede .jpeg': '',
      'adesivagem frezzer.jpeg': '',
      'adesivagem mercado.jpeg': '',
      'adesivagem parede ciplan.jpeg': '',
      'adesivagem porta escola tecnica.jpeg': '',
      'adesivagem vidro .jpeg': '',
      'adesivo entrada herbalife.jpeg': '',
      'adesivo parede vc.jpeg': '',
      'adesivo perfurado voolivre.jpeg': '',
      'adesivo recortado.jpeg': '',
      'adesivo voolivre.jpeg': '',
      'adesivos parede.jpeg': '',
      'Captura de tela 2026-01-19 120704.jpg': '',
      'crer adesivagem porta.jpeg': '',
      'faixa de segurança ciplan.jpeg': '',
      'faixa de segurança safa.jpeg': '',
      'IMG_20140514_154125.jpg': '',
      'IMG-20250418-WA0036.jpg': '',
      'IMG-20250802-WA0140.jpg': '',
      'IMG-20250802-WA0177.jpg': '',
      'IMG-20250901-WA0226.jpg': '',
      'IMG-20250901-WA0332.jpg': '',
      'IMG-20260113-WA0005.jpg': '',
      'IMG-20260113-WA0013.jpg': '',
      'motz entrada.jpeg': '',
      'motz parede.jpeg': '',
      'motz transporte.jpeg': '',
      'parede adesivada safa.jpeg': '',
      'parede salute.jpeg': ''
    }
  },
  {
    slug: 'adesivos-redondos',
    label: 'ADESIVOS REDONDOS',
    folder: 'ADESIVOS REDONDOS',
    files: [
      'adesivo catalizador.jpeg', 'adesivo gato.jpeg', 'adesivo jk.jpg', 'adesivo pegadas.jpeg', 'adesivo pequeno.jpeg',
      'adesivo produtos.jpeg', 'adesivos recortados.jpg', 'WhatsApp Image 2026-01-28 at 21.36.23.jpeg',
      'WhatsApp Image 2026-01-28 at 21.36.24.jpeg', 'WhatsApp Image 2026-01-28 at 21.36.34.jpeg',
      'WhatsApp Image 2026-01-28 at 21.36.35.jpeg', 'WhatsApp Image 2026-01-29 at 17.57.14.jpeg'
    ],
    descriptions: {
      'adesivo catalizador.jpeg': '',
      'adesivo gato.jpeg': '',
      'adesivo jk.jpg': '',
      'adesivo pegadas.jpeg': '',
      'adesivo pequeno.jpeg': '',
      'adesivo produtos.jpeg': '',
      'adesivos recortados.jpg': '',
      'WhatsApp Image 2026-01-28 at 21.36.23.jpeg': '',
      'WhatsApp Image 2026-01-28 at 21.36.24.jpeg': '',
      'WhatsApp Image 2026-01-28 at 21.36.34.jpeg': '',
      'WhatsApp Image 2026-01-28 at 21.36.35.jpeg': '',
      'WhatsApp Image 2026-01-29 at 17.57.14.jpeg': ''
    }
  },
  {
    slug: 'banners',
    label: 'LONAS',
    folder: 'BANNERS',
    files: [
      '20260115_182547.jpg', '20260121_143540.jpg', 'banners modelos.jpeg',
      'IMG_20250909_175642.jpg',
      'outdoor.jpeg'
    ],
    descriptions: {
      '20260115_182547.jpg': 'Lona Informativa',
      '20260121_143540.jpg': 'Lona personalizada para carnaval',
      'banners modelos.jpeg': 'Lona Informativa',
      'IMG_20250909_175642.jpg': 'Lona Empresarial',
      'outdoor.jpeg': 'Lona para anúncios'
    }
  },
  {
    slug: 'backdrop-fotografico', label: 'BACKDROP FOTOGRÁFICO', folder: 'BANNERS',
    files: ['IMG-20251210-WA0195.jpg', 'IMG-20250701-WA0363.jpg', 'IMG-20250802-WA0131.jpg', 'IMG-20251112-WA0188.jpg', 'outdoor ciplan.jpeg'],
    descriptions: {
      'IMG-20251210-WA0195.jpg': 'Backdrop',
      'IMG-20250701-WA0363.jpg': 'Backdrop',
      'IMG-20250802-WA0131.jpg': 'Backdrop',
      'IMG-20251112-WA0188.jpg': 'Backdrop',
      'outdoor ciplan.jpeg': 'Backdrop'
    }
  },
  {
    slug: 'carpachos', label: 'CARPACHOS', folder: 'CARPACHOS',
    files: ['20260121_150102.jpg', 'carpacho vc.jpeg', 'IMG-20251122-WA0240.jpg', 'IMG-20251229-WA0105.jpg', 'tapete em lona sendo usado.jpeg'],
    descriptions: {
      '20260121_150102.jpg': 'Carpachos',         // <- escreva a descricao desta foto aqui
      'carpacho vc.jpeg': 'Carpachos',            // <- escreva a descricao desta foto aqui
      'IMG-20251122-WA0240.jpg': 'Carpachos',     // <- escreva a descricao desta foto aqui
      'IMG-20251229-WA0105.jpg': 'Carpachos',     // <- escreva a descricao desta foto aqui
      'tapete em lona sendo usado.jpeg': 'Carpachos' // <- escreva a descricao desta foto aqui
    }
  },
  {
    slug: 'gravacao-em-laser', label: 'GRAVAÇÃO EM LASER', folder: 'GRAVAÇÃO EM LASER',
    files: ['CANETA GRAVAÇÃO.jpeg', 'CANETAS GRAVADAS.jpeg', 'garrafa gravada.jpeg', 'GRAVAÇÃO LASER.jpeg', 'GRAVAÇÃO VOTORANTIM CANETA.jpeg'],
    descriptions: {
      'CANETA GRAVAÇÃO.jpeg': 'Caneta personalizada para empresas',
      'CANETAS GRAVADAS.jpeg': 'Canetas personalizadas para empresas',
      'garrafa gravada.jpeg': 'Garrafa personalizada para eventos',
      'GRAVAÇÃO LASER.jpeg': 'Gravação a laser em diversos materiais',
      'GRAVAÇÃO VOTORANTIM CANETA.jpeg': 'Canetas personalizadas para empresas'
    }
  },
  {
    slug: 'inflaveis',
    label: 'INFLAVEIS',
    folder: 'INFLAVEIS',
    files: [
      'IMG-20250802-WA0124.jpg', 'IMG-20250802-WA0125 (1).jpg',
      'IMG-20250802-WA0126.jpg', 'IMG-20250802-WA0127.jpg', 'IMG-20250802-WA0128.jpg',
      'IMG-20250808-WA0057.jpg', 'IMG-20250808-WA0071 (1).jpg',
      'IMG-20251108-WA0098.jpg', 'inflavel .jpeg'
    ],
    descriptions: {
      'IMG-20250802-WA0124.jpg': 'Inflável estilo saco de cimento',
      'IMG-20250802-WA0125 (1).jpg': 'Inflável para divulgação em evento',
      'IMG-20250802-WA0126.jpg': 'Inflável imitando embalagem',
      'IMG-20250802-WA0127.jpg': 'Inflável imitando embalagem',
      'IMG-20250802-WA0128.jpg': 'Inflável para divulgação em evento',
      'IMG-20250808-WA0057.jpg': 'Inflável para divulgação',
      'IMG-20250808-WA0071 (1).jpg': 'Inflável para divulgação de bebida',
      'IMG-20251108-WA0098.jpg': 'Inflável para evento promocional',
      'inflavel .jpeg': 'Inflável imitando embalagem'
    }
  },
  {
    slug: 'logo-em-acm', label: 'LOGO EM ACM', folder: 'LOGO EM ACM',
    files: ['entrada vt itau de minas.jpeg', 'IMG-20241027-WA0101.jpg', 'placa itau de minas.jpeg'],
    descriptions: {
      'entrada vt itau de minas.jpeg': 'Faixada em ACM com letras destacadas',
      'IMG-20241027-WA0101.jpg': 'Faixada em ACM com letras destacadas',
      'placa itau de minas.jpeg': 'Placa em ACM com letras destacadas'
    }
  },
  {
    slug: 'logo-em-acrilico',
    label: 'LOGO EM ACRILICO',
    folder: 'LOGO EM ACRILICO',
    files: [
      'IMG_20250923_150036.jpg', 'IMG-20241128-WA0091.jpg', 'IMG-20250320-WA0302 (1).jpg',
      'IMG-20250320-WA0302.jpg', 'IMG-20251127-WA0308.jpg', 'IMG-20251127-WA0309.jpg',
      'IMG-20251203-WA0029.jpeg', 'placa de acrilico.jpeg',
      'placa identificação .jpeg', 'placa identificação 2.jpeg',
      'placa lotus 2.jpeg', 'placa lotus.jpeg'
    ],
    descriptions: {
      'IMG_20250923_150036.jpg': 'Logo em Acrílico',
      'IMG-20241128-WA0091.jpg': 'Logo em Acrílico',
      'IMG-20250320-WA0302 (1).jpg': 'Logo em Acrílico',
      'IMG-20250320-WA0302.jpg': 'Logo em Acrílico',
      'IMG-20251127-WA0308.jpg': 'Logo em Acrílico',
      'IMG-20251127-WA0309.jpg': 'Logo em Acrílico',
      'IMG-20251203-WA0029.jpeg': 'Logo em Acrílico',
      'placa de acrilico.jpeg': 'Logo em Acrílico',
      'placa identificação .jpeg': 'Logo em Acrílico',
      'placa identificação 2.jpeg': 'Logo em Acrílico',
      'placa lotus 2.jpeg': 'Logo em Acrílico',
      'placa lotus.jpeg': 'Logo em Acrílico'
    }
  },
  {
    slug: 'logo-em-pvc-expandido',
    label: 'LOGO EM PVC EXPANDIDO',
    folder: 'LOGO EM PVC EXPANDIDO',
    files: [
      'ana bah brecho.jpeg', 'escola tecnica.jpeg', 'IMG_20251009_140926.jpg', 'IMG_20251009_140928.jpg',
      'IMG-20250511-WA0061.jpg', 'letra pvc expandido.jpg', 'logo friboi.jpeg', 'motz logo.jpeg',
      'PLACA ACM .jpeg', 'placa crer 2.jpeg', 'placa pvc expandido ciplan.jpeg', 'placa radiomais.jpeg',
      'placa voolivre.jpeg', 'placa votorantim.jpeg', 'PVC EXPANDIDO RESIDENCIAL.jpeg'
    ],
    descriptions: {
      'ana bah brecho.jpeg': 'Logo em PVC Expandido',
      'escola tecnica.jpeg': 'Logo em PVC Expandido',
      'IMG_20251009_140926.jpg': 'Logo em PVC Expandido',
      'IMG_20251009_140928.jpg': 'Logo em PVC Expandido',
      'IMG-20250511-WA0061.jpg': 'Logo em PVC Expandido',
      'letra pvc expandido.jpg': 'Logo em PVC Expandido',
      'logo friboi.jpeg': 'Logo em PVC Expandido',
      'motz logo.jpeg': 'Logo em PVC Expandido',
      'PLACA ACM .jpeg': 'Logo em PVC Expandido',
      'placa crer 2.jpeg': 'Logo em PVC Expandido',
      'placa pvc expandido ciplan.jpeg': 'Logo em PVC Expandido',
      'placa radiomais.jpeg': 'Logo em PVC Expandido',
      'placa voolivre.jpeg': 'Logo em PVC Expandido',
      'placa votorantim.jpeg': 'Logo em PVC Expandido',
      'PVC EXPANDIDO RESIDENCIAL.jpeg': 'Logo em PVC Expandido'
    }
  },
  {
    slug: 'placa-de-homenagem', label: 'PLACA DE HOMENAGEM', folder: 'PLACA DE HOMENAGEM',
    files: ['IMG-20250826-WA0014 (1).jpg', 'IMG-20250826-WA0014.jpg', 'IMG-20251121-WA0226.jpg', 'IMG-20251121-WA0229.jpg', 'placa de homenagem pequena.jpg', 'placa de homenagem.jpeg'],
    descriptions: {
      'IMG-20250826-WA0014 (1).jpg': 'Placa de Homenagem',
      'IMG-20250826-WA0014.jpg': 'Placa de Homenagem',
      'IMG-20251121-WA0226.jpg': 'Placa de Homenagem',
      'IMG-20251121-WA0229.jpg': 'Placa de Homenagem',
      'placa de homenagem pequena.jpg': 'Placa de Homenagem Votorantim',
      'placa de homenagem.jpeg': 'Placa de Homenagem'
    }
  },
  {
    slug: 'placa-de-sinalizacao',
    label: 'PLACA DE SINALIZAÇÃO',
    folder: 'PLACA DE SINALIZAÇÃO',
    featured: ['placa de sinalização.jpeg'],
    files: [
      'placa de sinalização.jpeg',
      'IMG-20241125-WA0048.jpg', 'IMG-20250802-WA0103.jpg', 'IMG-20250815-WA0211.jpg',
      'IMG-20250825-WA0287.jpg', 'placa de segurança.jpeg',
      'placa de sinalização alta voltagem.jpeg', 'placa de sinalização epi.jpeg',
      'placa de sinalização pedestre(1).jpeg', 'placa de sinalização pedestre.jpeg',
      'placa de sinalização somente .jpeg', 'placa de sinalização(1).jpg',
      'PLACA DE SINALIZAÇÃO.jpg', 'PLACA ESCOLAR PS.jpeg', 'placa refletiva detonação.jpeg',
      'placa refletiva km.jpeg', 'placa refletiva.jpeg', 'PLACAS.jpg', 'PLAQUINHA PS.jpeg'
    ],
    descriptions: {
      'IMG-20241125-WA0048.jpg': 'Placa personalizada',
      'IMG-20250802-WA0103.jpg': 'Placa personalizada',
      'IMG-20250815-WA0211.jpg': 'Placa personalizada',
      'IMG-20250825-WA0287.jpg': 'Placa personalizada',
      'placa de segurança.jpeg': 'Placa personalizada',
      'placa de sinalização alta voltagem.jpeg': 'Placa personalizada',
      'placa de sinalização epi.jpeg': 'Placa personalizada',
      'placa de sinalização pedestre(1).jpeg': 'Placa personalizada',
      'placa de sinalização pedestre.jpeg': 'Placa personalizada',
      'placa de sinalização somente .jpeg': 'Placa personalizada',
      'placa de sinalização(1).jpg': 'Placa personalizada',
      'placa de sinalização.jpeg': 'Placa personalizada',
      'PLACA DE SINALIZAÇÃO.jpg': 'Placa personalizada',
      'PLACA ESCOLAR PS.jpeg': 'Placa personalizada',
      'placa refletiva detonação.jpeg': 'Placa personalizada',
      'placa refletiva km.jpeg': 'Placa personalizada',
      'placa refletiva.jpeg': 'Placa personalizada',
      'PLACAS.jpg': 'Placa personalizada',
      'PLAQUINHA PS.jpeg': 'Placa personalizada'
    }
  },
  {
    slug: 'plotagem-de-carro',
    label: 'PLOTAGEM DE CARRO',
    folder: 'PLOTAGEM DE CARRO',
    files: [
      'adesivagem caminhão ciplan.jpeg', 'adesivagem carro.jpeg', 'adesivagem de carrinho frente.jpeg',
      'adesivagem de carrinho.jpeg', 'adesivagem de onibus.jpeg', 'adesivo para carro.jpg', 'carro .jpeg',
      'carro adesivado.jpg', 'IMG-20251022-WA0312.jpg', 'IMG-20251022-WA0313.jpg', 'IMG-20251026-WA0160.jpg',
      'IMG-20251110-WA0104.jpg', 'lateral adesivagem carro.jpeg', 'RODOTREM.jpg'
    ],
    descriptions: {
      'adesivagem caminhão ciplan.jpeg': 'Caminhão Ciplan adesivado',
      'adesivagem carro.jpeg': 'Carro adesivado',
      'adesivagem de carrinho frente.jpeg': 'Carrinho adesivado',
      'adesivagem de carrinho.jpeg': 'Carrinho adesivado',
      'adesivagem de onibus.jpeg': 'Ônibus adesivado',
      'adesivo para carro.jpg': 'Adesivo para carro',
      'carro .jpeg': 'Carro adesivado',
      'carro adesivado.jpg': 'Carro Ciplan adesivado',
      'IMG-20251022-WA0312.jpg': 'Adesivagem personalizada',
      'IMG-20251022-WA0313.jpg': 'Adesivagem personalizada',
      'IMG-20251026-WA0160.jpg': 'Adesivagem personalizada',
      'IMG-20251110-WA0104.jpg': 'Adesivagem personalizada',
      'lateral adesivagem carro.jpeg': 'Adesivagem personalizada',
      'RODOTREM.jpg': 'Rodotrem adesivado'
    }
  },
  {
    slug: 'projetos-personalizados',
    label: 'PROJETOS PERSONALIZADOS',
    folder: 'PROJETOS PERSONALIZADOS',
    files: [
      'acrilico + pvc expandido .jpeg', 'adesivagem e lona em evento.jpeg', 'adesivo em parede circular.jpeg',
      'cordão personalizado.jpeg', 'display acrilico wifi.jpeg', 'dsd entrada.jpeg', 'DTF BLOCO DE NOTAS.jpeg',
      'empena ciplan.jpeg', 'IMG-20241111-WA0199.jpg', 'IMG-20241129-WA0199.jpg',
      'IMG-20250802-WA0118.jpg', 'IMG-20250802-WA0119 (1).jpg',
      'IMG-20251114-WA0029.jpg',
      'IMG-20251229-WA0067.jpg', 'IMG-20251229-WA0099.jpg', 'laboratorio vc 2.jpeg',
      'IMG_20251009_065101_212.webp', 'laboratorio vc 3.jpeg', 'laboratorio vc 4.jpeg', 'laboratorio vc.jpeg', 'letra caixa distak.jpeg',
      'letra caixa santa helena.jpeg', 'letra caixa vc cuiaba.jpeg', 'logo vc .jpeg', 'mansao pink entrada.jpeg',
      'outdoor undf.jpeg', 'painel decorativo ciplan.jpeg', 'pdv votorantim 2.jpeg', 'pdv votorantim.jpeg',
      'placa iluminada .jpeg', 'placa pvc expandido ciplan.jpeg', 'quadro herbalife.jpeg',
      'quadro impresso 2.jpeg', 'quadro impresso.jpeg', 'quadro pvc expandido.jpeg', 'quadros herbalife.jpeg',
      'quadros impressos.jpeg', 'sesc totem 2.jpeg', 'sesc totem.jpeg', 'triumph.jpeg',
      'vc cimentos .jpeg', 'vc cimentos pvc + acrilico.jpeg'
    ],
    descriptions: {
      'acrilico + pvc expandido .jpeg': 'Projeto em ACM e Acrílico',
      'adesivagem e lona em evento.jpeg': 'Adesivagem de Balcão para Evento de Divulgação + Lona',
      'adesivo em parede circular.jpeg': 'Adesivo em parede circular',
      'cordão personalizado.jpeg': 'Cordão de crachá personalizado',
      'display acrilico wifi.jpeg': 'Display de acrílico personalizável',
      'dsd entrada.jpeg': 'PAREDE PERSONALIZADA EM PVC EXPANDIDO + QUADRO COM IMPRESSÃO DIGITAL',
      'DTF BLOCO DE NOTAS.jpeg': 'Kit evento personalizado',
      'empena ciplan.jpeg': 'Empena em lona para fábricas',
      'IMG-20241129-WA0199.jpg': 'Logo em acrílico com iluminação personalizada',
      'IMG-20250802-WA0119 (1).jpg': 'Outdoor de identificação',
      'IMG-20251114-WA0029.jpg': 'Quadro impresso digitalmente',
      'IMG-20251229-WA0067.jpg': 'Logo personalizada conforme pedido do cliente',
      'IMG-20251229-WA0099.jpg': 'Outdoor promocional para empresa',
      'laboratorio vc 2.jpeg': 'Destaque de produção de detalhes em PVC expandido',
      'laboratorio vc 3.jpeg': 'Adesivagem especial com letras personalizadas',
      'laboratorio vc 4.jpeg': 'Adesivagem especial em detalhes de produção',
      'laboratorio vc.jpeg': 'Adesivagem laboratório personalizada',
      'letra caixa distak.jpeg': 'Letreiro personalizado',
      'letra caixa santa helena.jpeg': 'Letra caixa de identificação empresarial',
      'letra caixa vc cuiaba.jpeg': 'Letra caixa de identificação empresarial',
      'logo vc .jpeg': 'Logo iluminada',
      'mansao pink entrada.jpeg': 'Logo iluminada',
      'outdoor undf.jpeg': 'Empena para identificação',
      'painel decorativo ciplan.jpeg': 'Projeto de painel decorativo',
      'pdv votorantim 2.jpeg': 'Ponto de venda Votorantim',
      'pdv votorantim.jpeg': 'Ponto de venda personalizado',
      'placa iluminada .jpeg': 'Placa iluminada com detalhes em impressão digital',
      'placa pvc expandido ciplan.jpeg': 'Placa em pvc expandido',
      'quadro herbalife.jpeg': 'Quadro impresso digitalmente',
      'quadro impresso 2.jpeg': 'Quadro impresso digitalmente',
      'quadro impresso.jpeg': 'Quadro impresso digitalmente',
      'quadro pvc expandido.jpeg': 'Projeto em PVC expandido conforme projeto desenvolvido',
      'quadros herbalife.jpeg': 'Quadro impresso digitalmente',
      'quadros impressos.jpeg': 'Quadro impresso digitalmente',
      'sesc totem 2.jpeg': 'Totem promocional',
      'sesc totem.jpeg': 'Totem promocional',
      'vc cimentos .jpeg': 'Totem promocional',
      'vc cimentos pvc + acrilico.jpeg': 'Logo personalizada, produzimos conforme projeto'
    }
  },
  {
    slug: 'quadro-de-gestao',
    label: 'QUADRO DE GESTÃO',
    folder: 'QUADRO DE GESTÃO',
    files: [
      'IMG-20250424-WA0232.jpg', 'IMG-20250425-WA0338.jpg', 'IMG-20250426-WA0056.jpg',
      'painel de segurança.jpeg', 'placa chega ai.jpeg', 'quadro de processos.jpeg',
      'WhatsApp Image 2026-03-12 at 17.04.33.jpeg'
    ],
    descriptions: {
      'IMG-20250424-WA0232.jpg': 'Quadro de gestão personalizado',
      'IMG-20250425-WA0338.jpg': 'Quadro de gestão personalizado',
      'IMG-20250426-WA0056.jpg': 'Quadro de gestão personalizado',
      'painel de segurança.jpeg': 'Quadro de gestão personalizado',
      'placa chega ai.jpeg': 'Quadro de gestão personalizado',
      'quadro de processos.jpeg': 'Quadro de gestão personalizado',
      'WhatsApp Image 2026-03-12 at 17.04.33.jpeg': 'Quadro de gestão personalizado'
    }
  },
  {
    slug: 'roll-banner', label: 'ROLL BANNER', folder: 'roll banner',
    files: ['cavalete em t.jpeg', 'IMG-20251022-WA0271.jpg', 'IMG-20251210-WA0244.jpg', 'ROLL BANNER SEARA LATERAL.jpeg', 'ROLL BANNER SEARA.jpeg'],
    descriptions: {
      'cavalete em t.jpeg': 'Cavalete em T',
      'IMG-20251022-WA0271.jpg': 'Flag Banner',
      'IMG-20251210-WA0244.jpg': 'Roll Banner',
      'ROLL BANNER SEARA LATERAL.jpeg': 'Roll Banner Seara',
      'ROLL BANNER SEARA.jpeg': 'Roll Banner Seara'
    }
  },
  {
    slug: 'totens',
    label: 'TOTENS',
    folder: 'TOTENS',
    files: [
      'entrada vt cimentos foto de frente.jpeg', 'entrada vt cimentos.jpeg', 'IMG_20260114_142302.jpg',
      'IMG-20241027-WA0126.jpg', 'IMG-20250426-WA0058.jpg', 'IMG-20250902-WA0226.jpg',
      'totem de sinalização.jpeg', 'totem em mdf_.jpg', 'TOTEM MDF.jpeg',
      'WhatsApp Image 2026-03-11 at 18.20.34.jpeg', 'WhatsApp Image 2026-03-11 at 18.20.43.jpeg',
      'WhatsApp Image 2026-03-11 at 18.20.44.jpeg', 'WhatsApp Image 2026-03-11 at 18.20.47.jpeg',
      'WhatsApp Image 2026-03-11 at 18.21.12.jpeg', 'WhatsApp Image 2026-03-11 at 18.21.14.jpeg'
    ],
    descriptions: {
      'entrada vt cimentos foto de frente.jpeg': 'Totens',
      'entrada vt cimentos.jpeg': 'Totens',
      'IMG_20260114_142302.jpg': 'Totens',
      'IMG-20241027-WA0126.jpg': 'Totens',
      'IMG-20250426-WA0058.jpg': 'Totens',
      'IMG-20250902-WA0226.jpg': 'Totens',
      'totem de sinalização.jpeg': 'Totens',
      'totem em mdf_.jpg': 'Totens',
      'TOTEM MDF.jpeg': 'Totens',
      'WhatsApp Image 2026-03-11 at 18.20.34.jpeg': 'Totens',
      'WhatsApp Image 2026-03-11 at 18.20.43.jpeg': 'Totens',
      'WhatsApp Image 2026-03-11 at 18.20.44.jpeg': 'Totens',
      'WhatsApp Image 2026-03-11 at 18.20.47.jpeg': 'Totens',
      'WhatsApp Image 2026-03-11 at 18.21.12.jpeg': 'Totens',
      'WhatsApp Image 2026-03-11 at 18.21.14.jpeg': 'Totens'
    }
  },
  {
    slug: 'trofeus',
    label: 'TROFEUS',
    folder: 'TROFEUS',
    files: [
      '20260122_165641.jpg', '20260122_165702.jpg', 'IMG_20251030_092909.jpg', 'IMG-20250925-WA0532.jpg',
      'medalha .jpg', 'trofeu 2.jpg', 'trofeu bayer.jpeg', 'trofeu.jpg', 'TROFEUS VOTORANTIM.jpeg',
      'TROFEUS.jpeg'
    ],
    descriptions: {
      '20260122_165641.jpg': 'Troféus personalizados',
      '20260122_165702.jpg': 'Troféus personalizados',
      'IMG_20251030_092909.jpg': 'Troféus personalizados',
      'IMG-20250925-WA0532.jpg': 'Troféus personalizados',
      'medalha .jpg': 'Troféus personalizados',
      'trofeu 2.jpg': 'Troféus personalizados',
      'trofeu bayer.jpeg': 'Troféus personalizados',
      'trofeu.jpg': 'Troféus personalizados',
      'TROFEUS VOTORANTIM.jpeg': 'Troféus personalizados',
      'TROFEUS.jpeg': 'Troféus personalizados'
    }
  }
];

const portfolioCategories = [
  { slug: 'banner', label: 'Lonas', folders: ['banners'] },
  { slug: 'roll-banner', label: 'Roll Banner', folders: ['roll-banner'] },
  { slug: 'backdrop', label: 'Backdrop Fotográfico', folders: ['backdrop-fotografico'] },
  {
    slug: 'totens',
    label: 'Totens',
    folders: ['totens'],
    descriptions: [
      { first: 7, text: 'Totem' },
      { text: 'Totem em MDF para festas' }
    ]
  },
  { slug: 'inflaveis', label: 'Infláveis', folders: ['inflaveis'] },
  { slug: 'carpachos', label: 'Carpachos', folders: ['carpachos'] },
  { slug: 'trofeus', label: 'Troféus Personalizados', folders: ['trofeus'] },
  {
    slug: 'estruturas-acm-acrilico-pvc',
    label: 'Estruturas em ACM, Acrílico e PVC Expandido',
    folders: ['logo-em-acm', 'logo-em-acrilico', 'logo-em-pvc-expandido']
  },
  { slug: 'gestao-quadros', label: 'Quadros de Gestão', folders: ['quadro-de-gestao'] },
  {
    slug: 'projetos-personalizados',
    label: 'Projetos Personalizados',
    folders: ['projetos-personalizados']
  }
];

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));
}

function imageAlt(file) {
  return file.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ');
}

function assetPath(...parts) {
  return parts.map(part => encodeURIComponent(part)).join('/');
}

function labelText(text) {
  return text
    .toLowerCase()
    .replace(/\b\w/g, char => char.toUpperCase());
}

function projectDescription(file) {
  const projectFolder = portfolioFolders.find(item => item.slug === 'projetos-personalizados');
  return projectFolder?.descriptions?.[file] || '';
}

function portfolioDescription(category, folder, file, fileIndex) {
  let fileDescription = folder.descriptions?.[file] || '';
  if (!fileDescription && category.slug === 'projetos-personalizados') {
    fileDescription = projectDescription(file);
  }

  const rule = category.descriptions?.find(item => item.first === undefined || fileIndex < item.first);
  if (fileDescription || rule?.text || category.description) {
    return fileDescription || rule?.text || category.description;
  }

  if (category.slug === 'projetos-personalizados') {
    return labelText(imageAlt(file)) || labelText(folder.label);
  }

  return '';
}

function renderPortfolio() {
  portfolioFilters.innerHTML = portfolioCategories.map((category, index) =>
    `<button class="filter-btn${index === 0 ? ' active' : ''}" data-filter="${category.slug}">${escapeHtml(category.label)}</button>`
  ).join('');

  portfolioGrid.innerHTML = portfolioCategories.flatMap(category =>
    category.folders.flatMap(folderSlug => {
      const folder = portfolioFolders.find(item => item.slug === folderSlug);
      if (!folder) return [];

      return folder.files.map((file, fileIndex) => {
        const src = assetPath('ARTES PARA SITE', folder.folder, file);
        const alt = imageAlt(file);
        const description = portfolioDescription(category, folder, file, fileIndex);
        return `<div class="portfolio-item reveal" data-category="${category.slug}" data-description="${escapeHtml(description)}"${folder.featured?.includes(file) ? " data-featured=\"true\"" : ""}>
          <div class="portfolio-img-wrap">
            <img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy"/>
            <div class="portfolio-overlay"><span>${escapeHtml(category.label)}</span></div>
          </div>
        </div>`;
      });
    })
  ).join('');

  filterBtns = document.querySelectorAll('.filter-btn');
  portfolioItems = document.querySelectorAll('.portfolio-item');
  portfolioItems.forEach(el => revealObserver.observe(el));
}

renderPortfolio();

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
const lightboxDescription = document.getElementById('lightboxDescription');
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
  const description = item.dataset.description || '';
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightboxCaption.textContent = '';
  lightboxDescription.textContent = description;
  lightboxDescription.classList.toggle('empty', !description.trim());
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

/* ===== SERVICO -> PORTFOLIO (clique no card) =====*/
document.querySelectorAll('.servico-card[data-portfolio-filter]').forEach(card => {
  const activate = () => {
    const filter = card.dataset.portfolioFilter;
    filterBtns.forEach(b => b.classList.remove('active'));
    const targetBtn = [...filterBtns].find(b => b.dataset.filter === filter);
    if (targetBtn) targetBtn.classList.add('active');
    applyFilter(filter);
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  card.addEventListener('click', activate);
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
  });
});
