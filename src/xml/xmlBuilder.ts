import { buildProps, buildTag } from '../utils/builders';
import { normalizeConstructor } from '../utils/normalize';
import { Config } from '../types/Config';
import { Props } from '../types/Props';

export default class XmlBuilder {
  private name: string;
  private value: string;
  private props: Props;
  private elements: XmlBuilder[];

  constructor(nameOrConfig?: string | Config) {
    const config = normalizeConstructor(nameOrConfig);

    Object.assign(this, config);
  }

  getXml(): string {
    return this.buildXml(this);
  }

  private buildXml(element: XmlBuilder): string {
    const [openingTag, closingTag] = buildTag(element.name, buildProps(element.props));

    if (element.elements.length === 0) {
      return `${openingTag}${element.value}${closingTag}`;
    }

    const children = element.elements
      .map((child) => this.buildXml(child))
      .join('');

    return `${openingTag}${element.value}${children}${closingTag}`;
  }
}