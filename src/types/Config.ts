import { Props } from './Props';

export interface Config {
  name?: string;
  value?: string;
  props?: Props;
  elements?: Config[];
}