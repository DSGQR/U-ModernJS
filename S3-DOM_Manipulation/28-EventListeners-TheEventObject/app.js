const clearTask = document.querySelector('.clear-tasks')

// clearTask.addEventListener('click', function () {
//   event.preventDefault()
//   console.log('Hello')
// })


clearTask.addEventListener('click', onClick)

function onClick (e) {
  // console.log('Clicked')
  let val

  val = e

  // Event target element
  val = e.target
  val = e.target.id
  val = e.target.className                                      // Output: clear-tasks btn black
  val = e.target.classList                                      // Output: Adds above to an array

  // e.target.innerText = 'Hello'                               // Output: Changes Button Text to "Hello"

  // Event type
  val = e.type                                                  // Output: click

  val = e.timeStamp

  // Coordinates event relative to the window
  val = e.clientY
  val = e.clientX

  // Coordinates event relative to the element (button)
  val = e.offsetY
  val = e.offsetX

  console.log(val)
}