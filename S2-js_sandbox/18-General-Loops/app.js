// FOR LOOP

for (let i = 0; i < 10; i++) {        // i++ = i + 1
  if (i === 2) {
    console.log('2 is my favorite number')
    continue
  }

  if (i === 5) {
    console.log('Stop The Loop!')
    break;
  }

  console.log(`Number ${i}`)
}


// WHILE LOOP

let i = 0

while (i < 10) {
  console.log(`Number ${i}`)
  i++
}


// DO WHILE

// let i = 0

do {
  console.log(`Number ${i}`)
  i++
}

while(i < 10)

// LOOP THROUGH ARRAY
const cars = ['Lamborghini', 'BMW', 'Rolls Royce', 'Ferrari', 'Bently']

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i])
}

// forEach() Recommended For Looping Through An Array
cars.forEach (function (car, index, array) {
  console.log(`${index} : ${car}`)
  // console.log(array)
})


// MAP

const users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Sara'},
  {id: 3, name: 'Karen'},
  {id: 4, name: 'Steve'}
]

const ids = users.map(function (user) {
  return user.id
})

console.log(ids)


const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}

for (let x in user) {
  //console.log(x)                    // Output: Keys
  console.log(`${x} : ${user[x]}`)    // Output: Keys + Values
}