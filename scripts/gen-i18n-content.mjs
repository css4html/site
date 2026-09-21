import fs from 'fs';
import path from 'path';

const ROOT = '/workspace/css4html-mvp';

// ========== SNIPPETS ==========
const snippets = {
  'aspect-ratio': { en: { title: 'Media aspect ratio', description: 'Keep 16:9 (or another ratio) without padding hacks.' }, es: { title: 'Proporción de medios', description: 'Mantén 16:9 (u otra) sin hacks de padding.' } },
  'botao-primario': { en: { title: 'Primary button', description: 'Base CTA style with hover.' }, es: { title: 'Botón primario', description: 'Estilo base de CTA con hover.' } },
  'card-sombra': { en: { title: 'Card with soft shadow', description: 'Light elevation for content blocks.' }, es: { title: 'Card con sombra suave', description: 'Elevación ligera para bloques de contenido.' } },
  'centralizar-flex': { en: { title: 'Center with Flex', description: 'Absolute center of a child in the container.' }, es: { title: 'Centrar con Flex', description: 'Centro absoluto de un hijo en el contenedor.' } },
  'centralizar-grid': { en: { title: 'Center with Grid', description: 'place-items centers on a single grid axis.' }, es: { title: 'Centrar con Grid', description: 'place-items centra en un único eje de cuadrícula.' } },
  'checkbox-custom': { en: { title: 'Custom checkbox', description: 'Custom look while keeping the native input accessible.' }, es: { title: 'Checkbox personalizado', description: 'Visual propio manteniendo el input nativo accesible.' } },
  'chip-list': { en: { title: 'Chip list', description: 'Compact tag group with automatic wrap.' }, es: { title: 'Lista de chips', description: 'Grupo de tags compactas con wrap automático.' } },
  'container-query': { en: { title: 'Simple container query', description: 'Style based on component width.' }, es: { title: 'Container query simple', description: 'Estilo basado en el ancho del componente.' } },
  'dark-mode-vars': { en: { title: 'Variables for dark mode', description: 'Light/dark theme base with custom properties.' }, es: { title: 'Variables para dark mode', description: 'Base de tema claro/oscuro con custom properties.' } },
  'focus-ring': { en: { title: 'Visible focus ring', description: ':focus-visible state without removing accessibility.' }, es: { title: 'Anillo de foco visible', description: 'Estado :focus-visible sin quitar accesibilidad.' } },
  'full-bleed': { en: { title: 'Full bleed in a narrow container', description: 'Section that escapes the column and fills 100vw.' }, es: { title: 'Full bleed en contenedor estrecho', description: 'Sección que escapa de la columna y ocupa 100vw.' } },
  'gap-flex': { en: { title: 'Spacing with gap', description: 'Replace manual margins with gap in flex/grid.' }, es: { title: 'Espacio entre ítems con gap', description: 'Sustituye margins manuales por gap en flex/grid.' } },
  'glass': { en: { title: 'Glassmorphism effect', description: 'Frosted glass with backdrop-filter.' }, es: { title: 'Efecto glassmorphism', description: 'Vidrio esmerilado con backdrop-filter.' } },
  'gradiente-texto': { en: { title: 'Gradient text', description: 'Fill text with linear-gradient via clip.' }, es: { title: 'Texto con gradiente', description: 'Rellena el texto con linear-gradient vía clip.' } },
  'html-button-types': { en: { title: 'Button types', description: 'submit, button, and reset with clear intent.' }, es: { title: 'Tipos de button', description: 'submit, button y reset con intención clara.' } },
  'html-details-summary': { en: { title: 'Details / summary', description: 'Native disclosure without JavaScript.' }, es: { title: 'Details / summary', description: 'Disclosure nativo sin JavaScript.' } },
  'html-dialog-basico': { en: { title: 'Basic dialog', description: 'Native modal with showModal().' }, es: { title: 'Dialog básico', description: 'Modal nativo con showModal().' } },
  'html-label-input': { en: { title: 'Label + input', description: 'Explicit for/id association.' }, es: { title: 'Label + input', description: 'Asociación explícita for/id.' } },
  'html-meta-viewport': { en: { title: 'Meta viewport', description: 'Essential viewport for mobile layout.' }, es: { title: 'Meta viewport', description: 'Viewport esencial para layout móvil.' } },
  'html-open-graph-stub': { en: { title: 'Open Graph (stub)', description: 'Basic meta tags for social previews.' }, es: { title: 'Open Graph (stub)', description: 'Metas básicas para vista previa en redes.' } },
  'html-picture-source': { en: { title: 'Picture + source', description: 'Responsive image via media query.' }, es: { title: 'Picture + source', description: 'Imagen responsiva por media query.' } },
  'html-skip-link': { en: { title: 'Skip link', description: 'Skip navigation and jump to content.' }, es: { title: 'Skip link', description: 'Saltar la navegación e ir al contenido.' } },
  'html-time-datetime': { en: { title: 'time + datetime', description: 'Human-readable date with machine-readable value.' }, es: { title: 'time + datetime', description: 'Fecha legible con valor machine-readable.' } },
  'js-add-event-listener': { en: { title: 'addEventListener', description: 'Listen for clicks the idiomatic way.' }, es: { title: 'addEventListener', description: 'Escuchar clics de forma idiomática.' } },
  'js-classlist-toggle': { en: { title: 'classList for menus', description: 'Open/close a mobile menu.' }, es: { title: 'classList en menú', description: 'Abrir/cerrar menú móvil.' } },
  'js-create-element': { en: { title: 'createElement', description: 'Create and insert DOM nodes.' }, es: { title: 'createElement', description: 'Crear e insertar nodos en el DOM.' } },
  'js-dataset': { en: { title: 'dataset', description: 'Read data-* as camelCase.' }, es: { title: 'dataset', description: 'Leer data-* como camelCase.' } },
  'js-debounce-sketch': { en: { title: 'Debounce (sketch)', description: 'Delay execution until the user pauses.' }, es: { title: 'Debounce (esqueleto)', description: 'Retrasar la ejecución hasta que el usuario pause.' } },
  'js-fetch-json': { en: { title: 'fetch JSON', description: 'async/await with an ok check.' }, es: { title: 'fetch JSON', description: 'async/await con comprobación de ok.' } },
  'js-prevent-default': { en: { title: 'preventDefault', description: 'Cancel default submit or navigation.' }, es: { title: 'preventDefault', description: 'Cancelar submit o navegación por defecto.' } },
  'js-query-selector-all-loop': { en: { title: 'querySelectorAll + loop', description: 'Iterate a NodeList with forEach.' }, es: { title: 'querySelectorAll + loop', description: 'Iterar NodeList con forEach.' } },
  'js-toggle-class': { en: { title: 'Class toggle', description: 'Toggle visual state via classList.' }, es: { title: 'Toggle de clase', description: 'Alternar estado visual vía classList.' } },
  'line-clamp': { en: { title: 'Clamp text to N lines', description: 'Multiline cut with -webkit-line-clamp.' }, es: { title: 'Limitar texto a N líneas', description: 'Corte multilínea con -webkit-line-clamp.' } },
  'object-fit-cover': { en: { title: 'Image object-fit cover', description: 'Fill the frame without distortion — smart crop.' }, es: { title: 'Imagen object-fit cover', description: 'Rellena el marco sin distorsionar — crop inteligente.' } },
  'pill-badge': { en: { title: 'Pill badge', description: 'Rounded label for status and tags.' }, es: { title: 'Badge en forma de píldora', description: 'Etiqueta redondeada para estados y tags.' } },
  'print-hide': { en: { title: 'Hide on print', description: 'Hide nav, buttons, and ads with @media print.' }, es: { title: 'Ocultar al imprimir', description: 'Oculta nav, botones y anuncios con @media print.' } },
  'radio-custom': { en: { title: 'Custom radio', description: 'Option group with consistent look and visible focus.' }, es: { title: 'Radio personalizado', description: 'Grupo de opciones con apariencia consistente y foco visible.' } },
  'reset-basico': { en: { title: 'Minimal reset', description: 'A clean start without wiping the whole UA stylesheet.' }, es: { title: 'Reset mínimo', description: 'Inicio limpio sin borrar toda la UA stylesheet.' } },
  'scroll-suave': { en: { title: 'Smooth scroll', description: 'Anchors with native animated scrolling.' }, es: { title: 'Scroll suave', description: 'Anclas con desplazamiento animado nativo.' } },
  'skeleton': { en: { title: 'Skeleton loading', description: 'Animated placeholder while content loads.' }, es: { title: 'Skeleton loading', description: 'Placeholder animado mientras carga el contenido.' } },
  'sr-only': { en: { title: 'Screen-reader-only text', description: 'Accessible visually hidden (sr-only).' }, es: { title: 'Texto solo para lectores de pantalla', description: 'Visually hidden accesible (sr-only).' } },
  'sticky-footer': { en: { title: 'Sticky footer', description: 'Footer at the bottom of the viewport even with little content.' }, es: { title: 'Footer pegado al pie', description: 'Footer al final del viewport aunque haya poco contenido.' } },
  'sticky-nav': { en: { title: 'Sticky navigation', description: 'Keep the bar at the top while scrolling.' }, es: { title: 'Navegación sticky', description: 'Mantiene la barra arriba durante el scroll.' } },
  'tooltip-css': { en: { title: 'CSS-only tooltip', description: 'Hint on hover/focus using attr() and a pseudo-element.' }, es: { title: 'Tooltip solo con CSS', description: 'Pista al hover/focus usando attr() y un pseudo-elemento.' } },
  'truncate-text': { en: { title: 'Truncate text to one line', description: 'Ellipsis when text overflows the width.' }, es: { title: 'Truncar texto en una línea', description: 'Ellipsis cuando el texto supera el ancho.' } },
  'underline-animation': { en: { title: 'Animated underline on hover', description: 'Line that grows with transform — light and accessible.' }, es: { title: 'Underline animado al hover', description: 'Línea que crece con transform — ligera y accesible.' } },
};

const examples = JSON.parse(fs.readFileSync('/tmp/examples-i18n.json', 'utf8'));

const lessonsMeta = {
  '01-o-que-e-css': {
    en: { title: 'What CSS is and where to start', description: 'Understand the role of CSS on the web and how to attach styles to HTML.' },
    es: { title: 'Qué es CSS y por dónde empezar', description: 'Entiende el papel del CSS en la web y cómo enlazar estilos al HTML.' },
  },
  '02-seletores-e-cascata': {
    en: { title: 'Selectors and specificity', description: 'Target the right element without overusing IDs and !important.' },
    es: { title: 'Selectores y especificidad', description: 'Elige el objetivo correcto sin abusar de IDs y !important.' },
  },
  '03-box-model-espacamento': {
    en: { title: 'Box model and spacing', description: 'Content, padding, border, margin, and box-sizing.' },
    es: { title: 'Box model y espaciado', description: 'Content, padding, border, margin y box-sizing.' },
  },
  '04-flexbox-fundamentos': {
    en: { title: 'Flexbox: axes and alignment', description: 'Distribute items in one dimension with flex.' },
    es: { title: 'Flexbox: ejes y alineación', description: 'Distribuye ítems en una dimensión con flex.' },
  },
  '05-grid-layouts': {
    en: { title: 'CSS Grid for layouts', description: 'Build responsive grids with repeat and minmax.' },
    es: { title: 'CSS Grid para layouts', description: 'Crea cuadrículas responsivas con repeat y minmax.' },
  },
  '06-tipografia-responsiva': {
    en: { title: 'Typography and responsiveness', description: 'clamp(), contrast, and comfortable reading on any screen.' },
    es: { title: 'Tipografía y responsividad', description: 'clamp(), contraste y lectura cómoda en cualquier pantalla.' },
  },
  '07-projeto-layout': {
    en: { title: 'Project: building a complete layout', description: 'Combine sticky header, grid, cards, and theme on one page.' },
    es: { title: 'Proyecto: montando un layout completo', description: 'Une sticky header, grid, cards y tema en una página.' },
  },
  '08-responsivo-moderno': {
    en: { title: 'Modern responsive beyond media queries', description: 'clamp, container queries, scroll-snap, and layouts that adapt to the component.' },
    es: { title: 'Responsive moderno más allá de las media queries', description: 'clamp, container queries, scroll-snap y layouts que se adaptan al componente.' },
  },
  '09-acessibilidade-css': {
    en: { title: 'CSS accessibility', description: 'Visible focus, forms, contrast, and motion — CSS in service of everyone.' },
    es: { title: 'Accesibilidad CSS', description: 'Foco visible, formularios, contraste y motion — CSS al servicio de todas las personas.' },
  },
  'html-01-estrutura-documento': {
    en: { title: 'Structure of an HTML document', description: 'DOCTYPE, html, head, body, and the minimum anatomy of a page.' },
    es: { title: 'Estructura de un documento HTML', description: 'DOCTYPE, html, head, body y la anatomía mínima de una página.' },
  },
  'html-02-semantica-landmarks': {
    en: { title: 'Semantics and landmarks', description: 'header, nav, main, article, section, aside, and footer with purpose.' },
    es: { title: 'Semántica y landmarks', description: 'header, nav, main, article, section, aside y footer con propósito.' },
  },
  'html-03-links-imagens-midia': {
    en: { title: 'Links, images, and media', description: 'a, img with alt, figure/figcaption, and picture for responsiveness.' },
    es: { title: 'Enlaces, imágenes y medios', description: 'a, img con alt, figure/figcaption y picture para responsividad.' },
  },
  'html-04-formularios': {
    en: { title: 'Accessible forms', description: 'label, input, button, fieldset, and native HTML validation.' },
    es: { title: 'Formularios accesibles', description: 'label, input, button, fieldset y validación nativa de HTML.' },
  },
  'html-05-tabelas-listas': {
    en: { title: 'Tables and lists', description: 'ul, ol, dl, and data tables with thead, th, and scope.' },
    es: { title: 'Tablas y listas', description: 'ul, ol, dl y tablas de datos con thead, th y scope.' },
  },
  'html-06-acessibilidade-basica': {
    en: { title: 'Basic HTML accessibility', description: 'Focus order, skip link, alt, labels, and useful landmarks.' },
    es: { title: 'Accesibilidad básica en HTML', description: 'Orden de foco, skip link, alt, labels y landmarks útiles.' },
  },
  'html-07-projeto-pagina': {
    en: { title: 'Project: complete page', description: 'Build a profile page with landmarks, content, and a form.' },
    es: { title: 'Proyecto: página completa', description: 'Monta una página de perfil con landmarks, contenido y formulario.' },
  },
  'js-01-variaveis-tipos': {
    en: { title: 'Variables and types', description: 'let, const, string, number, boolean, null, and undefined.' },
    es: { title: 'Variables y tipos', description: 'let, const, string, number, boolean, null y undefined.' },
  },
  'js-02-funcoes': {
    en: { title: 'Functions', description: 'Declare, return values, and pass parameters clearly.' },
    es: { title: 'Funciones', description: 'Declarar, devolver valores y pasar parámetros con claridad.' },
  },
  'js-03-dom-query': {
    en: { title: 'Selecting elements in the DOM', description: 'querySelector, querySelectorAll, and node text/content.' },
    es: { title: 'Seleccionar elementos en el DOM', description: 'querySelector, querySelectorAll y texto/contenido del nodo.' },
  },
  'js-04-eventos': {
    en: { title: 'Events and interaction', description: 'addEventListener, preventDefault, and the event object.' },
    es: { title: 'Eventos e interacción', description: 'addEventListener, preventDefault y el objeto event.' },
  },
  'js-05-arrays-objetos': {
    en: { title: 'Arrays and objects', description: 'map, filter, find, and everyday object literals.' },
    es: { title: 'Arrays y objetos', description: 'map, filter, find y objetos literales del día a día.' },
  },
  'js-06-fetch-intro': {
    en: { title: 'Introduction to fetch', description: 'Fetch async data with fetch, async/await, and JSON.' },
    es: { title: 'Introducción a fetch', description: 'Obtener datos asíncronos con fetch, async/await y JSON.' },
  },
  'js-07-projeto-dom': {
    en: { title: 'Project: small DOM app', description: 'Combine events, state, and rendering in a counter or list.' },
    es: { title: 'Proyecto: app pequeña en el DOM', description: 'Combina eventos, estado y renderizado en un contador o lista.' },
  },
};

const blogMeta = {
  'acessibilidade-css-rapido': {
    en: { title: 'CSS accessibility: a quick checklist', description: 'Visible focus, contrast, motion, and forms — what CSS solves (and what it doesn’t).' },
    es: { title: 'Accesibilidad con CSS: checklist rápido', description: 'Foco visible, contraste, motion y formularios — lo que CSS resuelve (y lo que no).' },
  },
  'container-queries-na-pratica': {
    en: { title: 'Container queries in practice', description: 'Why @container changes the game for responsive components — with hub examples.' },
    es: { title: 'Container queries en la práctica', description: 'Por qué @container cambia el juego de componentes responsivos — con ejemplos del hub.' },
  },
  'dark-mode-com-variaveis-css': {
    en: { title: 'Dark mode with CSS variables only', description: 'Light and dark themes without depending on a UI framework.' },
    es: { title: 'Dark mode solo con variables CSS', description: 'Temas claros y oscuros sin depender de un framework de UI.' },
  },
  'dom-e-classes-css': {
    en: { title: 'DOM + CSS classes: the front-end combo', description: 'How JavaScript and CSS talk via classList — without inline styles.' },
    es: { title: 'DOM + clases CSS: el combo del front-end', description: 'Cómo JavaScript y CSS conversan vía classList — sin mezclar estilo inline.' },
  },
  'flex-vs-grid-quando-usar': {
    en: { title: 'Flex vs Grid: when to use each', description: 'One dimension or two? A quick guide with hub examples.' },
    es: { title: 'Flex vs Grid: cuándo usar cada uno', description: '¿Una dimensión o dos? Una guía rápida con ejemplos del hub.' },
  },
  'por-que-aprender-css-em-2026': {
    en: { title: 'Why learn CSS in 2026', description: 'Frameworks change; CSS remains the language of the interface.' },
    es: { title: 'Por qué aprender CSS en 2026', description: 'Los frameworks cambian; CSS sigue siendo el lenguaje de la interfaz.' },
  },
  'progressive-enhancement-html-css-js': {
    en: { title: 'Progressive enhancement: HTML, then CSS, then JS', description: 'Why order matters — and how the CSS4HTML hub reflects that in its trails.' },
    es: { title: 'Progressive enhancement: HTML, luego CSS, luego JS', description: 'Por qué el orden importa — y cómo el hub CSS4HTML lo refleja en las rutas.' },
  },
};

// Write content.ts
const contentTs = `import type { Locale } from './config';

type Meta = { title: string; description: string };
type LocaleMeta = Partial<Record<Exclude<Locale, 'pt-BR'>, Meta>>;

export const examplesI18n: Record<string, LocaleMeta> = ${JSON.stringify(examples, null, 2)};

export const snippetsI18n: Record<string, LocaleMeta> = ${JSON.stringify(snippets, null, 2)};

export const lessonsI18n: Record<string, LocaleMeta> = ${JSON.stringify(lessonsMeta, null, 2)};

export const blogI18n: Record<string, LocaleMeta> = ${JSON.stringify(blogMeta, null, 2)};

export function localizeMeta(
  map: Record<string, LocaleMeta>,
  slug: string,
  locale: Locale,
  fallback: Meta,
): Meta {
  if (locale === 'pt-BR') return fallback;
  return map[slug]?.[locale] ?? fallback;
}
`;

fs.writeFileSync(path.join(ROOT, 'src/i18n/content.ts'), contentTs);
console.log('Wrote content.ts');

// Generate EN/ES lesson files: translated frontmatter + full translated bodies where we have them,
// otherwise first paragraph translated + PT remainder with TODO
function parseFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) throw new Error('bad fm ' + filePath);
  return { fm: m[1], body: m[2] };
}

function replaceFmField(fm, key, value) {
  const re = new RegExp(`^${key}:\\s*.*$`, 'm');
  const escaped = JSON.stringify(value);
  if (re.test(fm)) return fm.replace(re, `${key}: ${escaped}`);
  return fm + `\n${key}: ${escaped}`;
}

// Full body translations for lessons (EN). ES similarly.
const lessonBodies = JSON.parse(fs.readFileSync('/tmp/lesson-bodies-i18n.json', 'utf8'));

for (const locale of ['en', 'es']) {
  const dir = path.join(ROOT, `src/content/lessons/${locale}`);
  fs.mkdirSync(dir, { recursive: true });
  for (const file of fs.readdirSync(path.join(ROOT, 'src/content/lessons/pt-BR'))) {
    if (!file.endsWith('.md')) continue;
    const slug = file.replace(/\.md$/, '');
    const { fm, body } = parseFile(path.join(ROOT, 'src/content/lessons/pt-BR', file));
    const meta = lessonsMeta[slug]?.[locale];
    let newFm = fm;
    if (meta) {
      newFm = replaceFmField(newFm, 'title', meta.title);
      newFm = replaceFmField(newFm, 'description', meta.description);
    }
    const translated = lessonBodies[slug]?.[locale];
    let newBody;
    if (translated) {
      newBody = translated;
    } else {
      // partial: keep code blocks, mark TODO
      const note =
        locale === 'en'
          ? '> **TODO i18n:** Full lesson body translation pending. Title and description are localized; body below remains in Portuguese for now.\n\n'
          : '> **TODO i18n:** Traducción completa del cuerpo pendiente. Título y descripción ya están localizados; el cuerpo permanece en portugués por ahora.\n\n';
      newBody = note + body;
    }
    fs.writeFileSync(path.join(dir, file), `---\n${newFm}\n---\n${newBody}`);
  }
  console.log('lessons', locale, fs.readdirSync(dir).length);
}

for (const locale of ['en', 'es']) {
  const dir = path.join(ROOT, `src/content/blog/${locale}`);
  fs.mkdirSync(dir, { recursive: true });
  for (const file of fs.readdirSync(path.join(ROOT, 'src/content/blog/pt-BR'))) {
    if (!file.endsWith('.md')) continue;
    const slug = file.replace(/\.md$/, '');
    const { fm, body } = parseFile(path.join(ROOT, 'src/content/blog/pt-BR', file));
    const meta = blogMeta[slug]?.[locale];
    let newFm = fm;
    if (meta) {
      newFm = replaceFmField(newFm, 'title', meta.title);
      newFm = replaceFmField(newFm, 'description', meta.description);
    }
    const translated = lessonBodies[`blog:${slug}`]?.[locale];
    let newBody;
    if (translated) {
      newBody = translated;
    } else {
      const note =
        locale === 'en'
          ? '> **TODO i18n:** Full post body translation pending. Title and description are localized.\n\n'
          : '> **TODO i18n:** Traducción completa del cuerpo pendiente. Título y descripción ya están localizados.\n\n';
      // First paragraph attempt: keep body with note
      newBody = note + body;
    }
    fs.writeFileSync(path.join(dir, file), `---\n${newFm}\n---\n${newBody}`);
  }
  console.log('blog', locale, fs.readdirSync(dir).length);
}

console.log('done gen');
