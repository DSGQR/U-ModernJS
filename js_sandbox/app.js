document.querySelector('.clear-tasks').addEventListener('click', onClick)

function onClick (e) {
  // console.log('clicked')

  let val;

  val = e

  val = e.target
  val = e.target.id
  val = e.target.className
  val = e.target.classList

  // e.target.innerText = 'Hello'

  val = e.type

  val = e.timeStamp

  val = e.clientY
  val = e.clientX

  val = e.offsetY
  val = e.offsetX
  
  console.log(val)
}