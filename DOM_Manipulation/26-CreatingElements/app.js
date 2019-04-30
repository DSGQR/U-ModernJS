// Create Element

const li = document.createElement('li')

// Add a class
li.className = 'collection-item'

// Add an ID
li.id = 'new-item'

// Add attribute
li.setAttribute('title', 'New Item')

// Create Text Node and Append
const text = document.createTextNode('Hello Multiverse!')
li.appendChild(text)

// Create new link element
const link = document.createElement('a')
// Add classes
link.className = 'delete-item secondary-content'
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>'

// Append link into li
li.appendChild(link)

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li) 




console.log(li)