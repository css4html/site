/** Strips TypeScript syntax (types, interfaces, annotations) so the logic worker can run it.
 * Sucrase only removes types: it does not type-check. Syntax problems become a SyntaxError
 * thrown inside the sandboxed worker, so they reach the Console like any JS error.
 */
import { transform } from 'sucrase';

export function transpileTs(code: string): { code: string; error?: undefined } | { code?: undefined; error: string } {
  try {
    return { code: transform(code, { transforms: ['typescript'], disableESTransforms: true }).code };
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export function tsToLogicCode(code: string): string {
  const result = transpileTs(code);
  if (result.error === undefined) return result.code;
  return 'throw new SyntaxError(' + JSON.stringify('TypeScript: ' + result.error + ' — confira parênteses, chaves e anotações de tipo.') + ');';
}
