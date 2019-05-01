// Replace Element

// Create Element
const newHeading = document.createElement('h2')
// Add ID
newHeading.id = 'task-title'
// New Text Node
newHeading.appendChild(document.createTextNode('Task List'))

// Get Old Heading You Want To Replace
const oldHeading = document.getElementById('task-title')
// Parent 
const cardAction = document.querySelector('.card-action')

// Replace 
cardAction.replaceChild(newHeading, oldHeading)


// REMOVE ELEMENT
const lis = document.querySelectorAll('li')
const list = document.querySelector('ul')

// Removelist item
lis[0].remove()

// Remove Child Element 
list.removeChild(lis[3])

// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child')
const link = firstLi.children[0]

let val 

// Classes
val = link.className
val = link.classList
val = link.classList[0]
link.classList.add('test')
link.classList.remove('test')
val = link

// Attributes
val = link.getAttribute('href')
val = link.setAttribute('href', 'http://apple.com')
val = link.setAttribute('target', '_blank')
val = link.hasAttribute('href') // Output: true (There is a link)
val = link.hasAttribute('title') // Output: false (There is no title)
link.setAttribute('title', 'Apple')
val = link
val = link.hasAttribute('title') // Output: true
link.removeAttribute('title')
val = link

console.log(val)