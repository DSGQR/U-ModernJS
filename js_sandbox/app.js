const newHeading = document.createElement('h2')
const oldHeading = document.getElementById('task-title')
const cardAction = document.querySelector('.card-action')

newHeading.id = 'task-title'

newHeading.appendChild(document.createTextNode('Task List'))

cardAction.replaceChild(newHeading, oldHeading)

// console.log(newHeading)

const lis = document.querySelectorAll('li')
const list = document.querySelector('ul')

lis[0].remove()

list.removeChild(lis[3])

document.querySelector('li:first-child').children[0].className

const firstLi = document.querySelector('li:first-child')
const link = firstLi.children[0]

let val;

val = link.className;
val = link.classList
val = link.classList[0]

link.classList.add('test')
link.classList.remove('test')
val = link

val = link.getAttribute('href')
val = link.setAttribute('href', 'http://google.com')
link.setAttribute('title', 'Google')
val = link.hasAttribute('title')
val = link
link.removeAttribute('title')

console.log(val)
