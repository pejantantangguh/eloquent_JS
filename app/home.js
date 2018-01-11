console.log("Hello Home JS");

//Recursive Actions:
function talksAbout(node,string){
  if(node.nodeType == document.ELEMENT_NODE){
    for (var i = 0; i < node.childNodes.length; i++){
        if(talksAbout(node.childNodes[i], string))
          return true;
          // console.log(node.childNodes[i]);
    }
    return false;
  }
  else if (node.nodeType == document.TEXT_NODE){
    return node.nodeValue.indexOf(string) > -1;
  }
}
// function talksAbout(node, string) {
//   if (node.nodeType == document.ELEMENT_NODE) {
//     for (var i = 0; i < node.childNodes.length; i++) {
//       if (talksAbout(node.childNodes[i], string))
//         return true;
//     }
//     return false;
//   } else if (node.nodeType == document.TEXT_NODE) {
//     return node.nodeValue.indexOf(string) > -1;
//   }
// }

// Finding the text inside body.
console.log(talksAbout(document.body, "here"));

//Finding Element

let link = document.body.getElementsByTagName("a")[0];
console.log(link.href);

//All element nodes have a getElementsByTagName method, which collects all elements with the given tag name that are descendants (direct or indirect children) of the given node and returns them as an array-like object.

//Appending element with JS
/* The following example defines a utility elt, which creates an element node
and treats the rest of its arguments as children to that node.
This function is then used to add a simple attribution to a quote. */

function elt(type){
  var node = document.createElement(type);
  for (var i = 1; i<arguments.length; i++){
    var child = arguments[i];
    if (typeof child == "string")
      child = document.createTextNode(child);
      node.appendChild(child);
  }
  return node;
}

document.getElementById("quote").appendChild(
  elt("footer", "-",
    elt("strong","Karl Popper"),
    ", preface to the second condition of ",
      elt("em","The Open Society and Its Enemies"),
      ", 1950"));

let paras = document.body.getElementsByTagName("p");
Array.prototype.forEach.call(paras, function(para){
  if(para.getAttribute("data-classified")=="secret")
    para.parentNode.removeChild(para);
})
