# Hop

Hop is a lightweight parser that converts an HTML-like string into a DOM-like JavaScript object. It was created to be used in [Inter HTML intellisense](https://github.com/interjs/inter-intellisense/), and it exposes the parseHTML function, which, as the name suggests, is used to parse the HTML-like string and returns an array of objects (HTML-like elements).

```ts

 import {  parseHTML  } from "./core/index"


  parseHTML(`
     <div id="app">
     <p _if="available" class="check"> This one is available </p>
     <p  _else> This one is not available </p>
     </div>
      
  `)

/**
 * Result:
 * [
  {
    type: 'Tag',
    tag: 'div',
    tagStart: 5,
    tagEnd: 18,
    attrs: [ [Object] ]
  },
  {
    type: 'Tag',
    tag: 'p',
    tagStart: 24,
    tagEnd: 56,
    attrs: [ [Object], [Object] ]
  },
  {
    type: 'Tag',
    tag: 'p',
    tagStart: 89,
    tagEnd: 98,
    attrs: [ [Object] ]
  }
]
 * 
 * 
 * 
 */

```

As stated earlier, it was created to enhance The inter's extension linting system, so it comes with some drawbacks, such as:

* No nested elements.
* It does not include Text Nodes.




