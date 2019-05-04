const form = document.querySelector('form')
const taskInput = document.getElementById('task')
const heading = document.querySelector('h5')
const select = document.querySelector('select')

// Clear Input
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
// Blur
// taskInput.addEventListener('blur', runEvent)
// Cut
// taskInput.addEventListener('cut', runEvent)
// Paste
// taskInput.addEventListener('paste', runEvent)
// Copy
// taskInput.addEventListener('copy', runEvent)
// Input
// taskInput.addEventListener('input', runEvent)
// Change Event
select.addEventListener('change', runEvent)             // Comment Out Materialize CDN to view select options


function runEvent (e) {
  console.log(`EVENT TYPE: ${e.type}`)

  console.log(e.target.value)

  // heading.innerText = e.target.value
  
  // Get Input Value
  // console.log(taskInput.value)

  // e.preventDefault()
}