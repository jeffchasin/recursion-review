// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var results = [];
  if (document.childNodes.length === 0) {
    return results;
  }
  var getDom = function(topNode, results, className) {
    var childrens = topNode.childNodes;
    for (var i = 0; i < childrens.length; i++) {
      if (childrens[i].nodeType === 1) {
        var classes = childrens[i].classList;
      }
      if (classes && classes.contains(className)) {
        results.push(childrens[i]);
      }
      if (childrens[i].childNodes[0]) {
        getDom(childrens[i], results, className);
      }
    }
  };
  getDom(document, results, className);
  return results;
};
