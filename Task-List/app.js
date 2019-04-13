// Define UI Variables
const form = document.querySelector('#task-form')         // Above Form
const taskInput = document.querySelector('#task')         // New Task
const filter = document.querySelector('#filter')          // Filter Tasks
const clearBtn = document.querySelector('.clear-tasks')   // Clear Task Button
const taskList = document.querySelector('.collection')    // UL

// Load All Event Listeners
loadEventListeners();

// Load All Event Listeners Function
function loadEventListeners() {
  // Add Task Event
  form.addEventListener('submit', addTask)
}

// Add Task Function
function addTask(event) {
  event.preventDefault()
  if (taskInput.value === '') {
    alert('Add A Task')
  }

  // Create li Element
  const li = document.createElement('li')
  // Add class
  li.className = 'collection-item'
  // Create Text Node & Append To li 
  li.appendChild(document.createTextNode(taskInput.value))
  // Create New Link Element
  const link = document.createElement('a')
  // Add class
  link.className = 'delete-item secondary-content'
  // Add Icon HTML
  link.innerHTML = '<i class="fa fa-remove"></i>'
  // Append The Link To li
  li.appendChild(link)

  // Append li to ul
  taskList.appendChild(li)
  
  // Clear input
  taskInput.value = ''

}
