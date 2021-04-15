import * as path from 'path';
import { DEFAULT_EDITORS, DefaultEditorId, EditorId } from '../interfaces';

export function isKnownFile(filename: string): boolean {
  return DEFAULT_EDITORS.includes(filename as any);
}

const TITLE_MAP: Record<DefaultEditorId, string> = Object.freeze({
  [DefaultEditorId.main]: `Main Process (${DefaultEditorId.main})`,
  [DefaultEditorId.renderer]: `Renderer Process (${DefaultEditorId.renderer})`,
  [DefaultEditorId.preload]: `Preload (${DefaultEditorId.preload})`,
  [DefaultEditorId.html]: `HTML (${DefaultEditorId.html})`,
  [DefaultEditorId.css]: `Stylesheet (${DefaultEditorId.css})`,
});

export function getEditorTitle(id: EditorId): string {
  return TITLE_MAP[id] || `Custom Editor (${id})`;
}

const EMPTY_EDITOR_CONTENT = {
  css: '/* Empty */',
  html: '<!-- Empty -->',
  js: '// Empty',
} as const;

export function getEmptyContent(filename: string): string {
  const suffix = path.parse(filename).ext.slice(1);
  return EMPTY_EDITOR_CONTENT[suffix] || '';
}

export function isSupportedFile(filename: string): boolean {
  return /\.(css|html|js)$/i.test(filename);
}