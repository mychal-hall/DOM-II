// Your code goes here

window.addEventListener('load', (event) => alert('NOT A SCAM! You just won a free trip to a beach somewhere!'));

let aNav = document.querySelectorAll('.nav-link');
console.log(aNav);
aNav.forEach(node => {
    node.addEventListener('click', event => (event.target.style.background = 'black'))
})

let sandPic = document.querySelector('.intro img');
sandPic.addEventListener('drag', (event) => sandPic.style.visibility = 'hidden');

let mapPic = document.querySelector('.mapPic');
mapPic.addEventListener('contextmenu', (event) => mapPic.style.visibility = 'hidden');

let boatPic = document.querySelector('.boatPic');
boatPic.addEventListener('click', (event) => boatPic.style.visibility = 'hidden');

let logo = document.querySelector('.logo-heading');
logo.addEventListener('dblclick', (event) => {logo.textContent = 'The Ritual is Finished',
document.querySelector('body').style.background = 'red',
document.querySelector('.main-navigation').style.background = 'grey'
});

let funButton = document.querySelectorAll('.btn')[0];
funButton.addEventListener('mouseenter', (event) => {alert('How is your credit score?'),
event.style.background = 'red',
event.stopPropagation});

let mountButton = document.querySelectorAll('.btn')[1];
mountButton.addEventListener('click', (event) => {alert('Please enter your SSN so our keylogger can capture that.'),
mountButton.style.background = 'yellow'});

let getawayButton = document.querySelectorAll('.btn')[2];
getawayButton.addEventListener('mouseleave', (event) => {alert('Just used your camera to get your picture... we need it... for things.'),
getawayButton.style.background = 'green'});


//

