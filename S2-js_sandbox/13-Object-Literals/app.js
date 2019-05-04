const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@aol.com',
  hobbies: [ 'music', 'sports' ],   // Arrays
  address: {                       // Objects
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function() {      // Funcitons
    return 2017 - this.age                    
  }
}

let val


val = person                                                

// Get Specific Value
val = person.firstName                                      // Output: Steve - Recommended Method
// OR
val = person['lastName']                                   // Output: Smith

val = person.age                                           // Output: 30

val = person.hobbies                                       // Output: Array [ "music", "sports" ]
val = person.hobbies[1]                                    // Output: sports

val = person.address                                       // Output: Object { city: "Miami", state: "FL" }
val = person.address.state                                 // Output: FL
val = person.address['city']                               // Output: Miami

val = person.getBirthYear()                                // Output: 1987

console.log(val)

const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23},
  {name: 'Nancy', age: 40}
]

for (let i = 0;  i < people.length; i++) {
  console.log(people[i].name)                             // Output: John Mike     
}