const firstName = 'Daniel'
const lastName = 'Amini'
const age = 34
const str = 'Hello there my name is Daniel'
const tags = 'web design, web development, programming'

const gf = 'Marissa'

let val;

val = `${firstName} ${lastName}`

// Append
val = 'Daniel '
val += 'Amini'

val = `Hello, my name is ${firstName} and I am ${age}.`

// Escaping 
val = 'That\'s awesome, I can\'t wait' //OR

// Length
val = firstName.length

// Method: concat() 
val = firstName.concat(' ', lastName)

// Method: Change Case
val = firstName.toUpperCase()                          // Output: DANIEL
val = firstName.toLowerCase()                          // Output: daniel

val = firstName[0]                                     // Output: D

// Method: indexOf()
val = gf.indexOf('s')                                  // Output: 4
val = gf.lastIndexOf('s')                              // Output: 5

// Opposite of indexof() is
// Method: charAt()
val = firstName.charAt('2')                            // Output: n
// Get last character
val = firstName.charAt(firstName.length - 1)           // Output: l

//  Method: substring()
val = firstName.substring(0, 4)                        // Output: Dani

// Method: slice()
val = firstName.slice(0, 4)                            // Output: Dani
val = firstName.slice(-2)                              // Output: el

// Method: split()
val = str.split(' ')                                   // Output: Array(6) [ "Hello", "there", "my", "name", "is", "Daniel" ]
val = tags.split(',')                                  // Output: Array(3) [ "web design", " web development", " programming" ]

// Method: replace()
val = str.replace('Daniel', 'Dominic')                 // Output: Hello there my name is Dominic

// Method: includes()
val = str.includes('Hello')                            // Output: true
val = str.includes('food')                             // Output: false

console.log(val)