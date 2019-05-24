/*!
 * name: next-html-parser
 * url: https://github.com/afeiship/next-html-parser
 * version: 1.0.0
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var parse = require('himalaya').parse;
  var nxTraverse = nx.traverse || require('next-traverse');
  var DEFAULT_OPTIONS = { callback: nx.noop };
  var DEFAULT_TRAVERSE_OPTS = { itemsKey: 'children' };

  var NxHtmlParser = nx.declare('nx.HtmlParser', {
    statics: {
      parse: function(inHtml, inOptions) {
        var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
        var nodes = parse(inHtml, options);
        nxTraverse(
          nodes,
          function(index, item) {
            var attributes = item.attributes;
            var _attributes = {};
            if (attributes) {
              attributes.forEach(function(item) {
                _attributes[item.key] = item.value;
              });
            }
            item.attrs = _attributes;
            options.callback(index, item, nodes);
          },
          DEFAULT_TRAVERSE_OPTS
        );
        return nodes;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxHtmlParser;
  }
})();
