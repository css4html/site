import type { Locale } from './config';
import { useTranslations } from './utils';

export function playgroundLabels(locale: Locale, mode: 'html' | 'react' = 'html') {
  const t = useTranslations(locale);
  const isReact = mode === 'react';
  return {
    actions: t('pg.actions'),
    reset: t('pg.reset'),
    resetTitle: t('pg.resetTitle'),
    copyHtml: t('pg.copyHtml'),
    copyCss: t('pg.copyCss'),
    copyJs: isReact ? t('pg.copyTsx') : t('pg.copyJs'),
    copyJsTitle: isReact ? t('pg.copyTsxTitle') : t('pg.copyJsTitle'),
    panels: t('pg.panels'),
    preview: t('pg.preview'),
    editors: t('pg.editors'),
    copy: t('pg.copy'),
    editorHtml: isReact ? t('pg.editorHtmlReact') : t('pg.editorHtml'),
    editorCss: t('pg.editorCss'),
    editorJs: isReact ? t('pg.editorTsx') : t('pg.editorJs'),
    livePreview: t('pg.livePreview'),
    iframeTitle: t('pg.iframeTitle'),
    previewPanel: t('pg.previewPanel'),
    jsTab: isReact ? t('pg.tsxTab') : t('pg.jsTab'),
    jsPane: isReact ? t('pg.tsxPane') : t('pg.jsPane'),
    reactShellSummary: t('pg.reactShellSummary'),
    reactShellHint: t('pg.reactShellHint'),
    reactShellViteNote: t('pg.reactShellViteNote'),
    htmlPaneLabel: isReact ? t('pg.htmlPaneReact') : 'HTML',
  };
}
