// Create Some Arrays
const numbers = [43, 56, 33, 23, 44, 36, 5]
const numbers2 = new Array(22, 45, 33, 76, 54)
const fruit = ['Apple', 'Banana', 'Orange', 'Pear']
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()]

// Initialize Val
let val

// Get Array Length
val = numbers.length                                    // Output: 7

// Check If Is Array
val = Array.isArray(numbers)                            // Output: true
val = Array.isArray('hello')                            // Output: fales

// Get A Single Value (index position)
val = numbers[3]                                        // Output: 23
val = numbers[0]                                        // Output: 43

//  Insert Into Array
numbers[2] = 100                                        // Array Changed: [ 43, 56, 33, 23, 44, 36, 5 ] 
                                                                    // to [43, 56, 100, 23, 44, 36, 5 ]

// Find Index of Value
val = numbers.indexOf(36)                               // Output: 5


// MUTATING ARRAYS //

// Method: Push() - Add On To End of Array
numbers.push(250)                                       // Output:      [ 43, 56, 100, 23, 44, 36, 5, 250 ]

// Method: unshift() - Add On To Front of Array
numbers.unshift(120)                                    // Output: [ 120, 43, 56, 100, 23, 44, 36, 5, 250 ] 

// Method: pop() - Take off From End of Array
numbers.pop()                                           // Output: [ 120, 43, 56, 100, 23, 44, 36, 5 ] (250 No Longer There)

// Method: pop() - Take off From Front of Array
numbers.shift()                                         // Output: [ 43, 56, 100, 23, 44, 36, 5 ] (120 No Longer There)


// Method: splice(start position, end position) Values
numbers.splice(1, 3)                                    // Output: [ 43, 44, 36, 5 ] (56, 100 & 23 GONE)

// Method: reverse()
numbers.reverse()                                       // Output: [ 5, 36, 44, 43 ]

// Method: concat() - Concatenate Arrays
val = numbers.concat(numbers2)                          // Output: [ 5, 36, 44, 43, 22, 45, 33, 76, 54 ] (Both Arrays Joined Together)

// Method: sort() - Sorting Arrays 
val = fruit.sort()                                      // Output: [ "Apple", "Banana", "Orange", "Pear" ] (Alphabetically)
val = numbers.sort()                                    // Output: [ 36, 43, 44, 5 ]


// Use The "Compare Function"
val = numbers.sort(function (x, y) {
 return x - y                                           // Output: [ 5, 36, 43, 44 ]
})

// Reverse Sort
val = numbers.sort(function (x, y) {
  return y - x                                          // Output: [ 5, 36, 43, 44 ]
})

// Find
function under50(num) {
  return num < 50
}

val = numbers.find(under50)                             // Output:  44 (Recorded 1st # under 50 Note: Sort IS Active)


// Find
function over50(num) {
  return num > 50
}

val = numbers2.find(over50)                             // Output:  76 





console.log(numbers)
console.log(val)