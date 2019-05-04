let val

const list = document.querySelector('ul.collection')
const listItem = document.querySelector('li.collection-item:first-child')

val = listItem
val = list

// Get Child Nodes
val = list.childNodes
val = list.childNodes[0]
val = list.childNodes[0].nodeName
val = list.childNodes[1].nodeType

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document Itself 
// 10 - Doctype

// Get children element nodes
val = list.children
val = list.children[1]
list.children[1].textContent = 'Hello'
// Children of children
list.children[3].children[0].id = 'test-link'
val = list.children[3].children[0]

// First Child
val = list.firstChild // Output: #text (node)
val = list.firstElementChild

// Last Child
val = list.lastChild  // Output: #text (node)
val = list.lastElementChild

// Count child elements
val = list.childElementCount

// Get Parent Node
val = listItem.parentNode
val = listItem.parentElement //Usually The Same As Above Code
val = listItem.parentElement.parentElement

// Get Next Sibling
val = listItem.nextSibling
val = listItem.nextElementSibling
val = listItem.nextElementSibling.nextElementSibling

// Get Previous Sibling
val = listItem.previousSibling
val = listItem.previousElementSibling


console.log(val)