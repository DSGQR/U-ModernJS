// FUNCTION DECLARATIONS 

function greet(firstName =  'John', lastName = 'Doe') {
  // if (typeof firstName === 'undefined') { firstName = 'John' }
  // if (typeof lastName === 'undefined') { lastName = 'Doe' }
  // console.log('Hello')
  return `Hello ${firstName} ${lastName}`
}

// console.log(greet())


// FUNCTION EXPRESSIONS

// const square = function (x = 3) {
//   return x * x
// }

//console.log(square(8))                

// IMMIDIATELLY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function() {
//   console.log('IIFE Ran...')
// })()

// (function(name = 'John Doe') {
//   console.log(`Hello ${name}`)
// })('Daniel')


// PROPERTY METHODS

const todo = {
  add: function () {
    console.log('Add todo...')
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`)
  }
}

todo.delete = function () {
  console.log('Delete todo...')
}

todo.add()                   // Output: Add todo
todo.edit(22)                // Output: Edit todo 22
todo.delete()                // Output: Delete todo...