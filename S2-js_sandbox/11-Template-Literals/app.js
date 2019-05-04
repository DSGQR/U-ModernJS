const name = 'Daniel'
const age = 34
const job = 'Web Developer'
const city = 'California'
let html

// Without Tempalte Strings (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: '+ job + ' </li><li>City: '+ city +' </li></ul>'

html =  '<ul>' +
        '<li>Name: ' + name + ' </li>' +
        '<li>Age: ' + age + ' </li>' +
        '<li>Job: ' + job + ' </li>' +
        '<li>City: ' + city + ' </li>' +
        '</ul>'

function hello() {
  return 'How You Doin?'
}

// Template Literals (es6)
html = `
  <ul>
    <li>NAME: ${name}</li>
    <li>AGE: ${age}</li>
    <li>JOB: ${job}</li>
    <li>CITY: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
    <li></li>
  </ul>` 

document.body.innerHTML = html