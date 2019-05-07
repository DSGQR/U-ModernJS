// Define UI Variables
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

// Load All Event Listeners
loadEventListeners()

// Load All Event Listeners 
function loadEventListeners() {
  // DOM Load event
  document.addEventListener('DOMContentLoaded', getTasks)
  // Add task event
  form.addEventListener('submit', addTask)
  // Remove task event
  taskList.addEventListener('click', removeTask)
  // Clear task event
  clearBtn.addEventListener('click', clearTasks)
  // Filter Tasks
  filter.addEventListener('keyup', filterTasks)
}

// get Tasks From Local Storage Function 
function getTasks() {
  let tasks
  if (localStorage.getItem('tasks') === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.forEach(function (task) {
    // Create li element
    const li = document.createElement('li')
    // Add class
    li.className = 'collection-item'
    // Add text node and append to the li 
    li.appendChild(document.createTextNode(task))
    // Create new link element
    const link = document.createElement('a')
    // Add class
    link.className = 'delete-item secondary-content'
    // add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>'
    // Append the link to the li
    li.appendChild(link)

    // Append li to ul
    taskList.appendChild(li)
  })
}

// Add Task Function
function addTask() {
  if (taskInput.value === '') {
    alert('Please Add A Task')
  }

  // Create li element
  const li = document.createElement('li')
  // Add class
  li.className = 'collection-item'
  // Add text node and append to the li 
  li.appendChild(document.createTextNode(taskInput.value))
  // Create new link element
  const link = document.createElement('a')
  // Add class
  link.className = 'delete-item secondary-content'
  // add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>'
  // Append the link to the li
  li.appendChild(link)

  // Append li to ul
  taskList.appendChild(li)

  // Store In Local Storage
  storeTaskInLocalStorage(taskInput.value)

  // Clear Input
  taskInput.value = ''

  event.preventDefault()
}

// Local Storage Function
function storeTaskInLocalStorage(task) {
  let tasks
  if (localStorage.getItem('tasks') === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.push(task)

  localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Remove Task Function
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove()

      // Remove from Local Storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement)
    }
  }
}

// Remove From Local Storage Function
function removeTaskFromLocalStorage(taskItem) {
  let tasks
  if (localStorage.getItem('tasks') === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1)
    }
  })

  localStorage.setItem('tasks', JSON.stringify(tasks))
}


// Clear Task Function
function clearTasks() {
  // taskList.innerHTML = ''

  // Faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild)
  }

  // https://jsperf.com/innerhtml-vs-removechild/47

  // Clear From Local Storage 
  clearTasksFromLocalStorage()
}

// Clear Tasks From Local Storage Function
function clearTasksFromLocalStorage() {
  localStorage.clear()
}


// Filter Tasks Function
function filterTasks(e) {
  const text = e.target.value.toLowerCase()

  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block'
    } else {
      task.style.display = 'none'
    }
  })
}

