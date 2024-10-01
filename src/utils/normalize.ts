import { Config } from '../types/Config';
import XmlBuilder from '../xml/xmlBuilder';
import { isValidString } from './string';

export function normalizeConstructor(props: string | Config) {
  const config: Omit<Config, 'elements'> & { elements?: XmlBuilder[] } = {};

  if (!props) {
    props = {};
  } else if (typeof props === 'string') {
    props = { name: props };
  }

  config.name = isValidString(props.name) ? props.name : '';
  config.value = isValidString(props.value) ? props.value : '';
  config.elements = normalizeElements(props.elements);
  config.props = props.props || {};

  return config;
}

export function normalizeElements(elements: Config[]): XmlBuilder[] {
  if (!Array.isArray(elements)) {
    return [];
  }

  return elements.map((config) => new XmlBuilder(config));
}