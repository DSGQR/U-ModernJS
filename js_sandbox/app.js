const form = document.querySelector('form')
const taskInput = document.getElementById('task')
const heading = document.querySelector('h5')
const select = document.querySelector('select')

taskInput.value = ''

// form.addEventListener('submit', runEvent)

// Keydown
// taskInput.addEventListener('keydown', runEvent)
// Keyup
// taskInput.addEventListener('keyup', runEvent)
// Keypress
// taskInput.addEventListener('keypress', runEvent)
// Focus
// taskInput.addEventListener('focus', runEvent)
// blur
// taskInput.addEventListener('blur', runEvent)
// Cut
// taskInput.addEventListener('cut', runEvent)
// paste
// taskInput.addEventListener('paste', runEvent)
// Input 
// taskInput.addEventListener('input', runEvent)
//  Change
select.addEventListener('change', runEvent)

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`)

  console.log(e.target.value)

  // heading.innerText = e.target.value
  // console.log(taskInput.value)

  // e.preventDefault()
}

