// Your code goes here

window.addEventListener('load', (event) => alert('NOT A SCAM! You just won a free trip to a beach somewhere!'))

let sandPic = document.querySelector('.intro img');
sandPic.addEventListener('drag', (event) => sandPic.style.visibility = 'hidden');

let aChange = document.querySelectorAll('a');
aChange.addEventListener('click', (event) => {event.preventDefault()})

let logo = document.querySelector('.logo-heading');
logo.addEventListener('dblclick', (event) => {logo.textContent = 'The Ritual is Finished',
document.querySelector('body').style.background = 'red';
document.querySelector('.main-navigation').style.background = 'grey';
aChange.forEach(function(element) {element.textContent = 'There is only ZUUL.'});
});

let h2Change = document.querySelectorAll('h2');
h2Change.forEach().addEventListener('mouseover', (event) => h2Change.textContent = 'Super Safe, not a scam.');
// let pChange = document.querySelectorAll('a');
// pChange.forEach(function(element) {element.textContent = 'There is only ZUUL.'});

let funButton = document.querySelectorAll('.btn')[0];
funButton.addEventListener('mouseenter', (event) => {alert('How is your credit score?'),
event.style.background = 'red',
event.stopPropagation()});

let mountButton = document.querySelectorAll('.btn')[1];
mountButton.addEventListener('click', (event) => {alert('Please enter your SSN so our keylogger can capture that.'),
mountButton.style.background = 'yellow'});

let getawayButton = document.querySelectorAll('.btn')[2];
getawayButton.addEventListener('mouseleave', (event) => {alert('Just used your camera to get your picture... we need it... for things.'),
getawayButton.style.background = 'green'});

GSDevTools.create(); // This is for stretch goal.

