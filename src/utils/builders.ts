import { Props } from '../types/Props';
import { isValidString } from './string';

export function buildProps(props: Props): string {
  if (typeof props != 'object' || props === null) {
    return '';
  }

  return Object.entries(props)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');
}

export function buildTag(name: string, buildedProps: string): [string, string] {
  let openingTag = `<${name}`;

  if (isValidString(buildedProps)) {
    openingTag += ` ${buildedProps}`;
  }

  openingTag += '>';

  return [openingTag, `</${name}>`];
}