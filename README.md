# showdown-viz

Graphviz extension for [Showdown](https://github.com/showdownjs/showdown).

## Screenshot

![img](res.png)

## Usage

- download and include [Viz.js](https://github.com/mdaines/viz.js)
- download showdown-viz.js and include it to the html
- registrate the extension when initializing the converter, like
```javascript
var converter = new showdown.Converter({extensions: ['showdown-toc','showdown-viz']});
```
- Use markdown code block with tag `dot-parse`, e.g.

\`\`\`dot-parse

// your Graphviz code here

\`\`\`

then the `<pre>` element generated by the code block will be replaced by the corresponded svg element.
