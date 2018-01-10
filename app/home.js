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
