var baseTranslate = System.translate;
System.translate = function(options) {
  if (!options.address || !options.address.match(/\.html$/)) {
    return baseTranslate.apply(this, arguments);
  }
  var html = options.source;
  html = html.replace(/\"/g, '\\"');
  html = html.replace(/\n/g, '\\n');
  var script = [
    'var div = document.createElement("div");',
    'div.innerHTML = "' + html + '";',
    'export var template = div.firstElementChild',
  ].join('\n');
  return script;
};
var baseLocate = System.locate;
System.locate = function(load) {
  if (load.name.match(/\.html$/)) {
    var a = document.createElement('a');
    a.href = load.name;
    return a.href;
  }
  return baseLocate.apply(this, arguments);
};
