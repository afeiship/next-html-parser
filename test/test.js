var nx = require('next-js-core2');
var fs = require('fs');
require('../src/next-html-parser');

test('nx.HtmlParser', function() {
  var html = fs.readFileSync('./test/rich.html').toString();
  var nodes = nx.HtmlParser.parse(html);
  console.log(nodes);
  // expect(result.name, obj1.name).toBe(null);
});
