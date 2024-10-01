import XmlBuilder from './xml/xmlBuilder';
import { Config } from './types/Config';

export default function buildXml(config: Config): XmlBuilder {
  return new XmlBuilder(config);
}

export { XmlBuilder };