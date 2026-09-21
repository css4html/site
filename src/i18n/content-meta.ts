import type { Locale } from './config';

type Meta = { title: string; description: string };
type LocaleMeta = Partial<Record<'en' | 'es', Meta>>;

export const examplesI18n: Record<string, LocaleMeta> = {
  "animacao-fade": {
    "en": {
      "title": "Fade + slide animation",
      "description": "Simple @keyframes for smooth element entrance."
    },
    "es": {
      "title": "Animación fade + slide",
      "description": "Simple @keyframes para entrada suave de elementos."
    }
  },
  "botao-hover": {
    "en": {
      "title": "Button with hover and transition",
      "description": "Micro-interaction with transition and :hover / :active."
    },
    "es": {
      "title": "Botón con hover y transición",
      "description": "Microinteracción con transition y estados :hover / :active."
    }
  },
  "box-model": {
    "en": {
      "title": "Box model in practice",
      "description": "Content, padding, border, and margin — the CSS box model."
    },
    "es": {
      "title": "Box model en la práctica",
      "description": "Content, padding, border y margin — el modelo de caja de CSS."
    }
  },
  "cards-responsivos": {
    "en": {
      "title": "Responsive cards",
      "description": "A card list that rearranges with grid and readable type."
    },
    "es": {
      "title": "Cards responsivos",
      "description": "Lista de cards que se reorganiza con grid y tipografía legible."
    }
  },
  "container-queries-layout": {
    "en": {
      "title": "Layout with container queries",
      "description": "The card changes layout based on container width, not the viewport."
    },
    "es": {
      "title": "Layout con container queries",
      "description": "El card cambia de layout según el ancho del container, no del viewport."
    }
  },
  "dark-mode-vars": {
    "en": {
      "title": "Dark mode with CSS variables",
      "description": "Switch themes using only custom properties and system preference."
    },
    "es": {
      "title": "Dark mode con variables CSS",
      "description": "Cambia el tema solo con custom properties y preferencia del sistema."
    }
  },
  "filter-backdrop-blur": {
    "en": {
      "title": "Card with filter and backdrop-blur",
      "description": "Frosted glass and depth with backdrop-filter + filter."
    },
    "es": {
      "title": "Card con filter y backdrop-blur",
      "description": "Vidrio esmerilado y profundidad con backdrop-filter + filter."
    }
  },
  "flexbox-centro": {
    "en": {
      "title": "Center with Flexbox",
      "description": "Align horizontally and vertically with a few flex utilities."
    },
    "es": {
      "title": "Centrar con Flexbox",
      "description": "Alinea horizontal y verticalmente con pocas utilidades de flex."
    }
  },
  "formulario-basico": {
    "en": {
      "title": "Basic accessible form",
      "description": "Labels, visible focus, and field states without JavaScript."
    },
    "es": {
      "title": "Formulario accesible básico",
      "description": "Labels, foco visible y estados de campo sin JavaScript."
    }
  },
  "grid-galeria": {
    "en": {
      "title": "Gallery with CSS Grid",
      "description": "Automatic responsive grid with repeat and minmax."
    },
    "es": {
      "title": "Galería con CSS Grid",
      "description": "Cuadrícula responsiva automática con repeat y minmax."
    }
  },
  "has-parent-selector": {
    "en": {
      "title": ":has() parent selector",
      "description": "Style the container based on what is inside — modern CSS."
    },
    "es": {
      "title": "Selector :has() en el padre",
      "description": "Estiliza el contenedor según lo que tiene dentro — CSS moderno."
    }
  },
  "html-artigo-semantico": {
    "en": {
      "title": "Semantic article",
      "description": "article with header, headings, and metadata footer."
    },
    "es": {
      "title": "Artículo semántico",
      "description": "article con header, headings y pie de metadatos."
    }
  },
  "html-figure-figcaption": {
    "en": {
      "title": "Figure and figcaption",
      "description": "Image with a semantic grouped caption."
    },
    "es": {
      "title": "Figure y figcaption",
      "description": "Imagen con leyenda semántica agrupada."
    }
  },
  "html-formulario-acessivel": {
    "en": {
      "title": "Accessible form",
      "description": "Associated labels, required, and buttons with the correct type."
    },
    "es": {
      "title": "Formulario accesible",
      "description": "Labels asociados, required y botones con type correcto."
    }
  },
  "html-lista-definicoes": {
    "en": {
      "title": "Definition list",
      "description": "dl/dt/dd for an HTML term glossary."
    },
    "es": {
      "title": "Lista de definiciones",
      "description": "dl/dt/dd para glosario de términos HTML."
    }
  },
  "html-nav-landmarks": {
    "en": {
      "title": "Navigation and landmarks",
      "description": "header, nav, main, and footer forming the page structure."
    },
    "es": {
      "title": "Navegación y landmarks",
      "description": "header, nav, main y footer formando la estructura de la página."
    }
  },
  "html-pagina-perfil": {
    "en": {
      "title": "Profile page",
      "description": "Project: profile with landmarks, figure, and contact form."
    },
    "es": {
      "title": "Página de perfil",
      "description": "Proyecto: perfil con landmarks, figure y formulario de contacto."
    }
  },
  "html-tabela-dados": {
    "en": {
      "title": "Data table",
      "description": "caption, thead, th with scope — an accessible table."
    },
    "es": {
      "title": "Tabla de datos",
      "description": "caption, thead, th con scope — tabla accesible."
    }
  },
  "js-accordion": {
    "en": {
      "title": "Accordion",
      "description": "Open/close sections with a button and aria-expanded."
    },
    "es": {
      "title": "Acordeón",
      "description": "Abrir/cerrar secciones con botón y aria-expanded."
    }
  },
  "js-contador": {
    "en": {
      "title": "Interactive counter",
      "description": "Simple state, buttons, and DOM updates."
    },
    "es": {
      "title": "Contador interactivo",
      "description": "Estado simple, botones y actualización del DOM."
    }
  },
  "js-fetch-lista-mock": {
    "en": {
      "title": "List with mock fetch",
      "description": "Simulates fetch with Promise and renders a list."
    },
    "es": {
      "title": "Lista con fetch mock",
      "description": "Simula fetch con Promise y renderiza una lista."
    }
  },
  "js-form-validate": {
    "en": {
      "title": "Form validation",
      "description": "Check fields on submit and show friendly messages."
    },
    "es": {
      "title": "Validación de formulario",
      "description": "Comprueba campos al enviar y muestra mensajes amigables."
    }
  },
  "js-localstorage-theme": {
    "en": {
      "title": "Theme with localStorage",
      "description": "Persist light/dark preference in the browser."
    },
    "es": {
      "title": "Tema con localStorage",
      "description": "Persiste la preferencia claro/oscuro en el navegador."
    }
  },
  "js-tabs": {
    "en": {
      "title": "Tabs",
      "description": "Accessible panel switching with roles and keyboard support."
    },
    "es": {
      "title": "Pestañas (tabs)",
      "description": "Cambio de paneles accesible con roles y teclado."
    }
  },
  "js-todo-basico": {
    "en": {
      "title": "Basic todo list",
      "description": "Add and remove items with DOM and a simple array."
    },
    "es": {
      "title": "Lista de tareas básica",
      "description": "Añade y quita ítems con DOM y un array simple."
    }
  },
  "media-queries": {
    "en": {
      "title": "Media queries",
      "description": "Adapt layout and typography by viewport width."
    },
    "es": {
      "title": "Media queries",
      "description": "Adapta layout y tipografía según el ancho del viewport."
    }
  },
  "multi-column-masonry": {
    "en": {
      "title": "Multi-column “masonry”",
      "description": "column-count for a magazine-like flow without JS."
    },
    "es": {
      "title": "Multi-column tipo masonry",
      "description": "column-count para un flujo tipo revista sin JS."
    }
  },
  "position-absolute-relative": {
    "en": {
      "title": "position absolute and relative",
      "description": "Understand containing blocks and overlays."
    },
    "es": {
      "title": "position absolute y relative",
      "description": "Entiende containing blocks y superposiciones."
    }
  },
  "scroll-snap-carrossel": {
    "en": {
      "title": "Carousel with scroll-snap",
      "description": "Horizontal scroll with snap points — no library needed."
    },
    "es": {
      "title": "Carrusel con scroll-snap",
      "description": "Scroll horizontal con puntos de ajuste — sin librería."
    }
  },
  "seletores-basicos": {
    "en": {
      "title": "Basic selectors",
      "description": "Element, class, descendant, and pseudo-class selectors."
    },
    "es": {
      "title": "Selectores básicos",
      "description": "Selectores de elemento, clase, descendiente y pseudo-clase."
    }
  },
  "sticky-header": {
    "en": {
      "title": "Sticky header",
      "description": "A bar that sticks on scroll with position: sticky."
    },
    "es": {
      "title": "Header sticky",
      "description": "Barra que se fija al hacer scroll con position: sticky."
    }
  },
  "tema-toggle-custom-properties": {
    "en": {
      "title": "Theme toggle with custom properties",
      "description": "Light/dark switch driven only by CSS variables."
    },
    "es": {
      "title": "Toggle de tema con custom properties",
      "description": "Cambio claro/oscuro impulsado solo por variables CSS."
    }
  },
  "tipografia-clamp": {
    "en": {
      "title": "Fluid typography with clamp()",
      "description": "Font size that scales between min and max without breakpoints."
    },
    "es": {
      "title": "Tipografía fluida con clamp()",
      "description": "Tamaño de fuente que escala entre min y max sin breakpoints."
    }
  },
  "z-index-empilhamento": {
    "en": {
      "title": "z-index and stacking",
      "description": "Stacking contexts and when z-index actually works."
    },
    "es": {
      "title": "z-index y apilamiento",
      "description": "Contextos de apilamiento y cuándo z-index realmente funciona."
    }
  }
};

export const snippetsI18n: Record<string, LocaleMeta> = {
  "aspect-ratio": {
    "en": {
      "title": "Media aspect ratio",
      "description": "Keep 16:9 (or another) without padding hacks."
    },
    "es": {
      "title": "Proporción de medios",
      "description": "Mantén 16:9 (u otra) sin hacks de padding."
    }
  },
  "botao-primario": {
    "en": {
      "title": "Primary button",
      "description": "Base CTA style with hover."
    },
    "es": {
      "title": "Botón primario",
      "description": "Estilo base de CTA con hover."
    }
  },
  "card-sombra": {
    "en": {
      "title": "Card with soft shadow",
      "description": "Light elevation for content blocks."
    },
    "es": {
      "title": "Card con sombra suave",
      "description": "Elevación ligera para bloques de contenido."
    }
  },
  "centralizar-flex": {
    "en": {
      "title": "Center with Flex",
      "description": "Absolute center of a child in the container."
    },
    "es": {
      "title": "Centrar con Flex",
      "description": "Centro absoluto de un hijo en el contenedor."
    }
  },
  "centralizar-grid": {
    "en": {
      "title": "Center with Grid",
      "description": "place-items centers on a single grid axis."
    },
    "es": {
      "title": "Centrar con Grid",
      "description": "place-items centra en un único eje de cuadrícula."
    }
  },
  "checkbox-custom": {
    "en": {
      "title": "Custom checkbox",
      "description": "Custom look while keeping the native input accessible."
    },
    "es": {
      "title": "Checkbox personalizado",
      "description": "Visual propio manteniendo el input nativo accesible."
    }
  },
  "chip-list": {
    "en": {
      "title": "Chip list",
      "description": "Compact tag group with automatic wrap."
    },
    "es": {
      "title": "Lista de chips",
      "description": "Grupo de tags compactas con wrap automático."
    }
  },
  "container-query": {
    "en": {
      "title": "Simple container query",
      "description": "Style based on component width."
    },
    "es": {
      "title": "Container query simple",
      "description": "Estilo basado en el ancho del componente."
    }
  },
  "dark-mode-vars": {
    "en": {
      "title": "Variables for dark mode",
      "description": "Light/dark theme base with custom properties."
    },
    "es": {
      "title": "Variables para dark mode",
      "description": "Base de tema claro/oscuro con custom properties."
    }
  },
  "focus-ring": {
    "en": {
      "title": "Visible focus ring",
      "description": ":focus-visible state without removing accessibility."
    },
    "es": {
      "title": "Anillo de foco visible",
      "description": "Estado :focus-visible sin quitar accesibilidad."
    }
  },
  "full-bleed": {
    "en": {
      "title": "Full bleed in a narrow container",
      "description": "Section that escapes the column and fills 100vw."
    },
    "es": {
      "title": "Full bleed en contenedor estrecho",
      "description": "Sección que escapa de la columna y ocupa 100vw."
    }
  },
  "gap-flex": {
    "en": {
      "title": "Spacing with gap",
      "description": "Replace manual margins with gap in flex/grid."
    },
    "es": {
      "title": "Espacio entre ítems con gap",
      "description": "Sustituye margins manuales por gap en flex/grid."
    }
  },
  "glass": {
    "en": {
      "title": "Glassmorphism effect",
      "description": "Frosted glass with backdrop-filter."
    },
    "es": {
      "title": "Efecto glassmorphism",
      "description": "Vidrio esmerilado con backdrop-filter."
    }
  },
  "gradiente-texto": {
    "en": {
      "title": "Gradient text",
      "description": "Fill text with linear-gradient via clip."
    },
    "es": {
      "title": "Texto con gradiente",
      "description": "Rellena el texto con linear-gradient vía clip."
    }
  },
  "html-button-types": {
    "en": {
      "title": "Button types",
      "description": "submit, button, and reset with clear intent."
    },
    "es": {
      "title": "Tipos de button",
      "description": "submit, button y reset con intención clara."
    }
  },
  "html-details-summary": {
    "en": {
      "title": "Details / summary",
      "description": "Native disclosure without JavaScript."
    },
    "es": {
      "title": "Details / summary",
      "description": "Disclosure nativo sin JavaScript."
    }
  },
  "html-dialog-basico": {
    "en": {
      "title": "Basic dialog",
      "description": "Native modal with showModal()."
    },
    "es": {
      "title": "Dialog básico",
      "description": "Modal nativo con showModal()."
    }
  },
  "html-label-input": {
    "en": {
      "title": "Label + input",
      "description": "Explicit for/id association."
    },
    "es": {
      "title": "Label + input",
      "description": "Asociación explícita for/id."
    }
  },
  "html-meta-viewport": {
    "en": {
      "title": "Meta viewport",
      "description": "Essential viewport for mobile layout."
    },
    "es": {
      "title": "Meta viewport",
      "description": "Viewport esencial para layout móvil."
    }
  },
  "html-open-graph-stub": {
    "en": {
      "title": "Open Graph (stub)",
      "description": "Basic meta tags for social previews."
    },
    "es": {
      "title": "Open Graph (stub)",
      "description": "Metas básicas para vista previa en redes."
    }
  },
  "html-picture-source": {
    "en": {
      "title": "Picture + source",
      "description": "Responsive image via media query."
    },
    "es": {
      "title": "Picture + source",
      "description": "Imagen responsiva por media query."
    }
  },
  "html-skip-link": {
    "en": {
      "title": "Skip link",
      "description": "Skip navigation and jump to content."
    },
    "es": {
      "title": "Skip link",
      "description": "Saltar la navegación e ir al contenido."
    }
  },
  "html-time-datetime": {
    "en": {
      "title": "time + datetime",
      "description": "Human-readable date with machine-readable value."
    },
    "es": {
      "title": "time + datetime",
      "description": "Fecha legible con valor machine-readable."
    }
  },
  "js-add-event-listener": {
    "en": {
      "title": "addEventListener",
      "description": "Listen for clicks the idiomatic way."
    },
    "es": {
      "title": "addEventListener",
      "description": "Escuchar clics de forma idiomática."
    }
  },
  "js-classlist-toggle": {
    "en": {
      "title": "classList for menus",
      "description": "Open/close a mobile menu."
    },
    "es": {
      "title": "classList en menú",
      "description": "Abrir/cerrar menú móvil."
    }
  },
  "js-create-element": {
    "en": {
      "title": "createElement",
      "description": "Create and insert DOM nodes."
    },
    "es": {
      "title": "createElement",
      "description": "Crear e insertar nodos en el DOM."
    }
  },
  "js-dataset": {
    "en": {
      "title": "dataset",
      "description": "Read data-* as camelCase."
    },
    "es": {
      "title": "dataset",
      "description": "Leer data-* como camelCase."
    }
  },
  "js-debounce-sketch": {
    "en": {
      "title": "Debounce (sketch)",
      "description": "Delay execution until the user pauses."
    },
    "es": {
      "title": "Debounce (esqueleto)",
      "description": "Retrasar la ejecución hasta que el usuario pause."
    }
  },
  "js-fetch-json": {
    "en": {
      "title": "fetch JSON",
      "description": "async/await with an ok check."
    },
    "es": {
      "title": "fetch JSON",
      "description": "async/await con comprobación de ok."
    }
  },
  "js-prevent-default": {
    "en": {
      "title": "preventDefault",
      "description": "Cancel default submit or navigation."
    },
    "es": {
      "title": "preventDefault",
      "description": "Cancelar submit o navegación por defecto."
    }
  },
  "js-query-selector-all-loop": {
    "en": {
      "title": "querySelectorAll + loop",
      "description": "Iterate a NodeList with forEach."
    },
    "es": {
      "title": "querySelectorAll + loop",
      "description": "Iterar NodeList con forEach."
    }
  },
  "js-toggle-class": {
    "en": {
      "title": "Class toggle",
      "description": "Toggle visual state via classList."
    },
    "es": {
      "title": "Toggle de clase",
      "description": "Alternar estado visual vía classList."
    }
  },
  "line-clamp": {
    "en": {
      "title": "Clamp text to N lines",
      "description": "Multiline cut with -webkit-line-clamp."
    },
    "es": {
      "title": "Limitar texto a N líneas",
      "description": "Corte multilínea con -webkit-line-clamp."
    }
  },
  "object-fit-cover": {
    "en": {
      "title": "Image object-fit cover",
      "description": "Fill the frame without distortion — smart crop."
    },
    "es": {
      "title": "Imagen object-fit cover",
      "description": "Rellena el marco sin distorsionar — crop inteligente."
    }
  },
  "pill-badge": {
    "en": {
      "title": "Pill badge",
      "description": "Rounded label for status and tags."
    },
    "es": {
      "title": "Badge en forma de píldora",
      "description": "Etiqueta redondeada para estados y tags."
    }
  },
  "print-hide": {
    "en": {
      "title": "Hide on print",
      "description": "Hide nav, buttons, and ads with @media print."
    },
    "es": {
      "title": "Ocultar al imprimir",
      "description": "Oculta nav, botones y anuncios con @media print."
    }
  },
  "radio-custom": {
    "en": {
      "title": "Custom radio",
      "description": "Option group with consistent look and visible focus."
    },
    "es": {
      "title": "Radio personalizado",
      "description": "Grupo de opciones con apariencia consistente y foco visible."
    }
  },
  "reset-basico": {
    "en": {
      "title": "Minimal reset",
      "description": "A clean start without wiping the whole UA stylesheet."
    },
    "es": {
      "title": "Reset mínimo",
      "description": "Inicio limpio sin borrar toda la UA stylesheet."
    }
  },
  "scroll-suave": {
    "en": {
      "title": "Smooth scroll",
      "description": "Anchors with native animated scrolling."
    },
    "es": {
      "title": "Scroll suave",
      "description": "Anclas con desplazamiento animado nativo."
    }
  },
  "skeleton": {
    "en": {
      "title": "Skeleton loading",
      "description": "Animated placeholder while content loads."
    },
    "es": {
      "title": "Skeleton loading",
      "description": "Placeholder animado mientras carga el contenido."
    }
  },
  "sr-only": {
    "en": {
      "title": "Screen-reader-only text",
      "description": "Accessible visually hidden (sr-only)."
    },
    "es": {
      "title": "Texto solo para lectores de pantalla",
      "description": "Visually hidden accesible (sr-only)."
    }
  },
  "sticky-footer": {
    "en": {
      "title": "Sticky footer",
      "description": "Footer at the bottom of the viewport even with little content."
    },
    "es": {
      "title": "Footer pegado al pie",
      "description": "Footer al final del viewport aunque haya poco contenido."
    }
  },
  "sticky-nav": {
    "en": {
      "title": "Sticky navigation",
      "description": "Keep the bar at the top while scrolling."
    },
    "es": {
      "title": "Navegación sticky",
      "description": "Mantiene la barra arriba durante el scroll."
    }
  },
  "tooltip-css": {
    "en": {
      "title": "CSS-only tooltip",
      "description": "Hint on hover/focus using attr() and a pseudo-element."
    },
    "es": {
      "title": "Tooltip solo con CSS",
      "description": "Pista al hover/focus usando attr() y un pseudo-elemento."
    }
  },
  "truncate-text": {
    "en": {
      "title": "Truncate text to one line",
      "description": "Ellipsis when text overflows the width."
    },
    "es": {
      "title": "Truncar texto en una línea",
      "description": "Ellipsis cuando el texto supera el ancho."
    }
  },
  "underline-animation": {
    "en": {
      "title": "Animated underline on hover",
      "description": "Line that grows with transform — light and accessible."
    },
    "es": {
      "title": "Underline animado al hover",
      "description": "Línea que crece con transform — ligera y accesible."
    }
  }
};

export function localizeMeta(
  map: Record<string, LocaleMeta>,
  slug: string,
  locale: Locale,
  fallback: Meta,
): Meta {
  if (locale === 'pt-BR') return fallback;
  return map[slug]?.[locale] ?? fallback;
}
