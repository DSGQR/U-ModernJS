// document.getElementsByClassName

const items = document.getElementsByClassName('collection-item')

// console.log(items)
// console.log(items[0])
// items[0].style.color = 'red'
// items[3].textContent = 'Hello'

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item')

// console.log(listItems)

// document.getElementsByTagName
let lis = document.getElementsByTagName('li')

console.log(lis)
console.log(lis[3])
lis[0].style.color = 'red'
lis[3].textContent = 'Hello'

// Convert HTML Collection Into Array
lis = Array.from(lis)

lis.reverse()

console.log(lis)