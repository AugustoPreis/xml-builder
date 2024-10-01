# XML Builder
Javascript XML Builder

### Example

```
const xmlBuilder = require('xmlBuilder');

const builder = xmlBuilder({
  name: 'xml',
  props: { total_elements: '3' },
  elements: [
    { name: 'element1', value: 'Value 1' },
    { name: 'element2', value: 'Value 2' },
    { name: 'element3', value: 'Value 3' },
  ],
});

console.log(builder.getXml());
/*
    <xml total_elements="3">
      <element1>Value 1</element1>
      <element2>Value 2</element2>
      <element3>Value 3</element3>
    </xml>
*/
```