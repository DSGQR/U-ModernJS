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
  // DOM Load Event
  document.addEventListener('DOMContentLoaded', getTasks)
  // Add Task Event
  form.addEventListener('submit', addTask)
  // Remove task Event
  taskList.addEventListener('click', removeTask)
  // Clear Task Event
  clearBtn.addEventListener('click', clearTasks)
  // Filter Tasks Event
  filter.addEventListener('keyup', filterTasks)
}

// Get Tasks From Local Storage
function getTasks() {
  let tasks;
 if (localStorage.getItem('tasks') === null) {
   tasks = [];
 } else {
   tasks = JSON.parse(localStorage.getItem('tasks'))
 }

 tasks.forEach(function(task) {
   // Create li Element
  const li = document.createElement('li')
  // Add class
  li.className = 'collection-item'
  // Create Text Node & Append To li 
  li.appendChild(document.createTextNode(task))
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
 })
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

  // Store In Local Storage
  storeTaskInLocalStorage(taskInput.value)
  
  // Clear input
  taskInput.value = ''

}

// Store Task Function 
function storeTaskInLocalStorage(task) {
 let tasks;
 if (localStorage.getItem('tasks') === null) {
   tasks = [];
 } else {
   tasks = JSON.parse(localStorage.getItem('tasks'))
 }

 tasks.push(task);

 localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Remove Task Funciton 
function removeTask(event) {
  if (event.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are You Sure?')) {
      event.target.parentElement.parentElement.remove()

      // Remove From Local Storage
      removeTaskFromLocalStorage(event.target.parentElement.parentElement);
    }
  }
}

// Remove From Local Storage Function
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
 if (localStorage.getItem('tasks') === null) {
   tasks = [];
 } else {
   tasks = JSON.parse(localStorage.getItem('tasks'))
 }

 tasks.forEach(function(task, index) {
  if (taskItem.textContent === task) {
    tasks.splice(index, 1)
  }
 })

 localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Clear All Tasks
function clearTasks(event) {
  // taskList.innerHTML = ''

  // Faster Method
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild)
  }

  // Clear From Local Storage
  clearTasksFromLocalStorage();

}

// Clear All Tasks From Local Storage Function
function clearTasksFromLocalStorage() {
   localStorage.clear()
}

// Filter Tasks Function
function filterTasks(event) {
  const text = event.target.value.toLowerCase()

  document.querySelectorAll('.collection-item').forEach(function(task) {
    const item = task.firstChild.textContent
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block'
    } else {
      task.style.display = 'none'
    }
  })
}