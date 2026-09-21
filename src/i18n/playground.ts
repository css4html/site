import type { Locale } from './config';
import { useTranslations } from './utils';

export function playgroundLabels(locale: Locale) {
  const t = useTranslations(locale);
  return {
    actions: t('pg.actions'),
    reset: t('pg.reset'),
    resetTitle: t('pg.resetTitle'),
    copyHtml: t('pg.copyHtml'),
    copyCss: t('pg.copyCss'),
    copyJs: t('pg.copyJs'),
    copyJsTitle: t('pg.copyJsTitle'),
    panels: t('pg.panels'),
    preview: t('pg.preview'),
    editors: t('pg.editors'),
    copy: t('pg.copy'),
    editorHtml: t('pg.editorHtml'),
    editorCss: t('pg.editorCss'),
    editorJs: t('pg.editorJs'),
    livePreview: t('pg.livePreview'),
    iframeTitle: t('pg.iframeTitle'),
    previewPanel: t('pg.previewPanel'),
  };
}
