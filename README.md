# next-html-parser
> A html parser

## installation
```bash
npm install -S afeiship/next-html-parser --registry=https://registry.npm.taobao.org
```

## apis
| api   | params          | description                       |
| ----- | --------------- | --------------------------------- |
| parse | (html, options) | Parse to json based on `himalaya` |

## usage
```js
import NxHtmlParser from 'next-html-parser';

// code goes here:
NxHtmlParser.parse('<div class="nx-html-parser">test <storng>storng text</storng> </div>', {
  callback: function(index, item) {
    item.index = index;
  }
});
```

## resources
- https://github.com/afeiship
