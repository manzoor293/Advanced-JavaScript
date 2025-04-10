//* ==========================================================
//* DOM IN JAVASCRIPT
//* ==========================================================

/*//? When a web browser loads an HTML docuent, it parses the HTML source code  
 and creates a tree-like structure known as the Document Object Model (DOM). 
 This DOM tree represents the structure of the HTML document, with each HTML
  element being a node in the tree.*/

/*//? This entire DOM tree is then accessible to JavaScript as an object.
 JavaScript can interact with this object to manipulate the contain, 
 structure, and style of the document dynamically. The DOM essentially 
 serves as an interface between the HTML document and JavaScript, providing 
 a way for scripts to access and modify the document's structure and content.*/

/*// todo The Document Object Model (DOM)  is an Application Programming Interface  (API).
The DOM tree is the structure of your HTML document, as represented by the DOM API. As 
stated, this API then gives us many methods and properties that we can use to manipulate 
the tree, and therfore, by extension, the document.*/

//* Here is a types of nodes in JS:

//? eLEMENT NODE: An HTML tag, the tree building blocks.

//? Text node: In the DOM tree, text content, including new lines, spaces, and tabs, is treated as text nodes.

//? Attribue node: An attribute af an element.

//? Comment node: Rrepresent comments within the HTML document.


//? Processing Instruction node: A processing instruction node, such as <? xml-stylesheet ... ?>

//? Document node: A Document node.

//? Document type node: A document type node, such as <!Doctype html>.

//* ==========================================================
//* DOM properties and Methods
//* ==========================================================
//! DOM Properties 
// document
// getElementById(id)
// getElementsByClassName(className)
// getElementsByTagName(tagName()
// querySelector(selector)
// querySelectorAll(selector)
// innerHTML
// textContent
// style


//! DOM Methods:
// createElement(tagName)
// appendChild(node)
// removeChild(node)
// addEventListener(Event, fuction)
// removEventListener(Event, fuction)
// setAttribute(Name, Value)
// getAttribute(Name)
// parentNode / parentElement
// childNodes / children
// firstChild / firstElementChild
// lastChild /  lastElementChild
// nextSibling / nextElementSibling
// previousSibling / previousElementSibling
// closest(selector)
// forEach(Array.from)

//* ==================================================
//* DOM Navigation
//* ==================================================

//? document represnts the entire document
// console.log(document)

/*//? Document.documentElement returns the Element that is the 
root element of the document (for example, the <html> element for HTML documents)*/

//? parentNode / parentElement:
//Navigate to the parent node or element.

/*// Document and DocumentFragment nodes can 
never have a parent, so parentNode will always 
return null. it also returns null if the node just been created and is not 
yet attached to the tree.*/

// childNodes / children:
// Navigate to childnodes or elements.

/*// childNodes is a property that returns 
a NodeList containing all child nodes of a given element, includeing text nodes and comment nodes.*/

// firstChild / firstElementChild:
// Navigate to the first child node or element.

/*// todo The Element suffeix in firstElementChild and similar properties
signifies that only element nodes are considered.*/ 

//? lastChild / lastElementChild:
// Navigate to the last child node or element.

//? nextSibling / nextElementSibling:
// Navigate to the next sibling node or element.

//? previousSibling / previousElementSibling:
// Navigate to the previous sibling node or element.
