const initializePortfolio = () => {
  const mapContainer = document.querySelector('.map-container');
  if (!mapContainer) return;

  const worldsAtlas = {
    metropolis: {
      title: 'Metropolis Full-Stack',
      tagline: 'Ecosistema de comercio, datos en tiempo real y paneles analíticos.',
      description:
        'Un universo pensado para negocios digitales que necesitan responder a cada clic. Desarrollo backends robustos en PHP con arquitecturas limpias y frontends que transforman datos en decisiones inmediatas.',
      stack: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'REST APIs'],
      accent: 'linear-gradient(135deg, rgba(255,95,109,0.25), rgba(255,191,105,0.25))',
      countries: [
        {
          id: 'market-square',
          name: 'Mercado Central',
          preview: {
            title: 'Marketplace modular',
            description:
              'Catálogo dinámico con filtros en vivo y panel de administración orientado a métricas de conversión.',
            highlights: [
              'Panel PHP con arquitectura MVC y endpoints REST para integraciones externas.',
              'Sincronización de inventario en tiempo real usando websockets ligeros.',
              'Optimización de rendimiento con consultas parametrizadas y caché Redis.'
            ],
            link: 'https://github.com'
          }
        },
        {
          id: 'logistics-port',
          name: 'Puerto Logístico',
          preview: {
            title: 'Tracking de pedidos',
            description:
              'Visualización de rutas y estados para seguimiento operativo y experiencia del cliente.',
            highlights: [
              'Mapa interactivo construido con Leaflet.js y consumo de APIs geoespaciales.',
              'Automatización de notificaciones por correo y WhatsApp mediante webhooks.',
              'Dashboard responsive con dark mode para operativa nocturna.'
            ],
            link: 'https://github.com'
          }
        },
        {
          id: 'data-forge',
          name: 'Forja de Datos',
          preview: {
            title: 'ETL de insights',
            description:
              'Pipeline que transforma datos de ventas en decisiones accionables con storytelling visual.',
            highlights: [
              'Extracción periódica desde CRM y normalización en MySQL.',
              'Indicadores KPI renderizados con Chart.js y componentes accesibles.',
              'Generación automática de informes PDF listos para dirección.'
            ],
            link: 'https://github.com'
          }
        }
      ]
    },
    muses: {
      title: 'Muses Playground',
      tagline: 'Experiencias interactivas donde diseño y animación cuentan historias.',
      description:
        'Aquí experimento con microinteracciones, efectos parallax y narrativas inmersivas que convierten un sitio web en una aventura con personalidad propia.',
      stack: ['GSAP', 'Canvas', 'SVG', 'CSS Houdini', 'Storytelling UX'],
      accent: 'linear-gradient(135deg, rgba(74,193,255,0.25), rgba(173,121,255,0.25))',
      countries: [
        {
          id: 'aurora-studio',
          name: 'Estudio Aurora',
          preview: {
            title: 'Landing cinematográfica',
            description:
              'Secuencia tipo tráiler con scroll narrativo que combina animaciones vectoriales y audio espacial.',
            highlights: [
              'Timeline coreografiada con GSAP ScrollTrigger.',
              'Diseño modular para campañas con versiones multilingües.',
              'Controles de accesibilidad y alternancia entre narración hablada y texto.'
            ],
            link: 'https://dribbble.com'
          }
        },
        {
          id: 'pixel-garden',
          name: 'Jardín de Píxeles',
          preview: {
            title: 'Interacciones experimentales',
            description:
              'Colección de microexperimentos con CSS Houdini y Web Animations para interfaces sorprendentes.',
            highlights: [
              'Sistema de partículas controlado con custom properties.',
              'Componentes reutilizables encapsulados en Web Components.',
              'Modo laboratorio para comparar iteraciones con métricas de uso.'
            ],
            link: 'https://codepen.io'
          }
        },
        {
          id: 'story-district',
          name: 'Distrito Storytelling',
          preview: {
            title: 'Narrativas interactivas',
            description:
              'Historias en formato cómic animado donde cada viñeta reacciona al desplazamiento del usuario.',
            highlights: [
              'Sistema de escenas controlado por máquina de estados finitos.',
              'Sincronización de ilustraciones SVG con efectos de sonido generativos.',
              'Modo editor para guionistas con vista previa en tiempo real.'
            ],
            link: 'https://behance.net'
          }
        }
      ]
    },
    academy: {
      title: 'Learning Nebula',
      tagline: 'Zona de experimentación constante: juegos, POCs y proyectos académicos.',
      description:
        'Este mundo recoge los retos que amplían mis habilidades: desde minijuegos hasta pruebas de concepto para nuevas tecnologías.',
      stack: ['HTML5', 'CSS', 'JavaScript', 'PHP', 'APIs abiertas'],
      accent: 'linear-gradient(135deg, rgba(255,95,109,0.18), rgba(74,193,255,0.18))',
      countries: [
        {
          id: 'tic-tac-dojo',
          name: 'Dojo 3 en Raya',
          preview: {
            title: 'Juego responsive con almacenamiento local',
            description:
              'Minijuego creado en clase para practicar lógica condicional, eventos y APIs web.',
            highlights: [
              'Tablero con transiciones suaves y emojis como avatares.',
              'Persistencia de datos con LocalStorage y SessionStorage.',
              'Modo claro / oscuro controlado desde JavaScript.'
            ],
            link: 'Juego.html'
          }
        },
        {
          id: 'api-atlas',
          name: 'Atlas de APIs',
          preview: {
            title: 'Colección de integraciones rápidas',
            description:
              'Pruebas de concepto conectadas a APIs públicas para aprender nuevos estándares y patrones de autenticación.',
            highlights: [
              'Implementación de fetch con manejo de errores resiliente.',
              'Componentes reutilizables para listar datos remotos.',
              'Documentación en Markdown que explica cada experimento.'
            ],
            link: 'https://github.com'
          }
        },
        {
          id: 'lab-journal',
          name: 'Diario de laboratorio',
          preview: {
            title: 'Bitácora técnica',
            description:
              'Notas de aprendizaje y snippets reutilizables escritos tras cada sprint o hackathon personal.',
            highlights: [
              'Automatización para generar PDF con resúmenes semanales.',
              'Integración con Notion y GitHub Issues.',
              'Sistema de etiquetas para recuperar aprendizajes por stack.'
            ],
            link: 'https://github.com'
          }
        }
      ]
    }
  };

  const worldNodes = Array.from(document.querySelectorAll('.world-node'));
  const traveller = document.getElementById('traveller');
  const worldTitle = document.getElementById('world-title');
  const worldTagline = document.getElementById('world-tagline');
  const worldDescription = document.getElementById('world-description');
  const worldStack = document.getElementById('world-stack');
  const countryList = document.getElementById('country-list');
  const previewTitle = document.getElementById('preview-title');
  const previewDescription = document.getElementById('preview-description');
  const previewHighlights = document.getElementById('preview-highlights');
  const previewLink = document.getElementById('preview-link');

  worldNodes.forEach((node) => {
    const x = Number(node.dataset.x || 50);
    const y = Number(node.dataset.y || 50);
    node.style.setProperty('--x', `${x}%`);
    node.style.setProperty('--y', `${y}%`);
    node.style.left = `${x}%`;
    node.style.top = `${y}%`;
  });

  const updateTravellerPosition = (node) => {
    if (!traveller || !node) return;
    traveller.style.left = node.style.left;
    traveller.style.top = node.style.top;
  };

  const renderStack = (stack = []) => {
    worldStack.innerHTML = '';
    stack.forEach((item) => {
      const chip = document.createElement('span');
      chip.textContent = item;
      worldStack.appendChild(chip);
    });
  };

  let currentWorldId = null;
  let currentCountryId = null;

  const renderPreview = (country) => {
    if (!country) return;
    const { title, description, highlights = [], link } = country.preview;
    previewTitle.textContent = title;
    previewDescription.textContent = description;
    previewHighlights.innerHTML = '';

    highlights.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      previewHighlights.appendChild(li);
    });

    if (link) {
      previewLink.href = link;
      previewLink.classList.remove('hidden');
    } else {
      previewLink.classList.add('hidden');
    }
  };

  const renderCountries = (worldId) => {
    const world = worldsAtlas[worldId];
    if (!world) return;

    countryList.innerHTML = '';
    world.countries.forEach((country) => {
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = country.name;
      button.dataset.countryId = country.id;
      button.addEventListener('mouseenter', () => setActiveCountry(worldId, country.id));
      button.addEventListener('focus', () => setActiveCountry(worldId, country.id));
      button.addEventListener('click', () => setActiveCountry(worldId, country.id));
      li.appendChild(button);
      countryList.appendChild(li);
    });
  };

  const setActiveCountry = (worldId, countryId) => {
    const world = worldsAtlas[worldId];
    if (!world) return;
    const country = world.countries.find((item) => item.id === countryId) || world.countries[0];
    currentCountryId = country.id;

    Array.from(countryList.querySelectorAll('button')).forEach((button) => {
      button.classList.toggle('active', button.dataset.countryId === currentCountryId);
    });

    renderPreview(country);
  };

  const setActiveWorld = (worldId) => {
    const world = worldsAtlas[worldId];
    if (!world) return;
    currentWorldId = worldId;

    worldNodes.forEach((node) => {
      node.classList.toggle('active', node.dataset.world === worldId);
      if (node.dataset.world === worldId) {
        updateTravellerPosition(node);
        mapContainer.style.setProperty('--world-accent', world.accent);
      }
    });

    worldTitle.textContent = world.title;
    worldTagline.textContent = world.tagline;
    worldDescription.textContent = world.description;
    renderStack(world.stack);
    renderCountries(worldId);
    setActiveCountry(worldId, world.countries[0].id);
  };

  worldNodes.forEach((node) => {
    node.addEventListener('click', () => setActiveWorld(node.dataset.world));
    node.addEventListener('focus', () => setActiveWorld(node.dataset.world));
  });

  const startJourney = () => {
    const defaultWorld = worldsAtlas.metropolis ? 'metropolis' : Object.keys(worldsAtlas)[0];
    setActiveWorld(defaultWorld);
  };

  const startButton = document.getElementById('startJourney');
  if (startButton) {
    startButton.addEventListener('click', () => {
      document.getElementById('worlds').scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(startJourney, 300);
    });
  }

  // Activar primer mundo al cargar si está visible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !currentWorldId) {
          startJourney();
        }
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(document.getElementById('worlds'));

  const currentYearEl = document.getElementById('current-year');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }
};

const initializeGame = () => {
  const squares = document.querySelectorAll('.square');
  if (!squares.length) return;

  let currentPlayer = '🤺';

  const checkWin = (playerSymbol) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    return winningCombinations.some(([a, b, c]) => {
      return squares[a].innerHTML === playerSymbol && squares[b].innerHTML === playerSymbol && squares[c].innerHTML === playerSymbol;
    });
  };

  const checkDraw = () => {
    return Array.from(squares).every((square) => square.innerHTML);
  };

  squares.forEach((square) => {
    square.innerHTML = '';
    square.addEventListener('click', () => {
      if (square.innerHTML) return;
      square.innerHTML = currentPlayer;

      if (checkWin(currentPlayer)) {
        setTimeout(() => alert(`¡Jugador ${currentPlayer} ha ganado!`), 50);
        return;
      }

      if (checkDraw()) {
        setTimeout(() => alert('¡Empate!'), 50);
        return;
      }

      currentPlayer = currentPlayer === '🤺' ? '🤸' : '🤺';
    });
  });

  const localInput = document.getElementById('localInput');
  const localButton = document.getElementById('localButton');
  const localValue = document.getElementById('localValue');
  if (localInput && localButton && localValue) {
    localButton.addEventListener('click', () => {
      localStorage.setItem('localData', localInput.value);
      localValue.textContent = localStorage.getItem('localData');
    });
    localValue.textContent = localStorage.getItem('localData') || '';
  }

  const sessionInput = document.getElementById('sessionInput');
  const sessionButton = document.getElementById('sessionButton');
  const sessionValue = document.getElementById('sessionValue');
  if (sessionInput && sessionButton && sessionValue) {
    sessionButton.addEventListener('click', () => {
      sessionStorage.setItem('sessionData', sessionInput.value);
      sessionValue.textContent = sessionStorage.getItem('sessionData');
    });
    sessionValue.textContent = sessionStorage.getItem('sessionData') || '';
  }

  const modeSwitch = document.getElementById('mode-switch');
  if (modeSwitch) {
    modeSwitch.addEventListener('click', () => {
      const body = document.body;
      const darkModeEnabled = body.classList.toggle('dark');
      modeSwitch.innerHTML = darkModeEnabled ? 'Cambiar a modo día' : 'Cambiar a modo noche';
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initializePortfolio();
  initializeGame();
});
