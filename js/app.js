'use strict';

// Question 1
console.log('Hello world!');
var name = prompt('what is your name?');
console.log('hi ' + name);

// Question 2
var food = prompt ('Is my favorite food pizza?').toLowerCase();

if(food === 'yes' || food === 'y'){
  // console.log('Yes! I love pizza');
  alert('Yes! I love pizza!');
} else {
  alert('I am sorry to hear that');
  console.log('Is my favorite food pizza?');
}

// Question 3
var date = prompt ('Is it the weekend yet?').toLowerCase();

if(date === 'yes' || date === 'y'){
  // console.log('Yes! it/'s finally the weekend!);
  alert('Yes! It\'s finally the weekend!');
} else {
  alert('That\'s to bad');
  console.log(date + ' it is finally the weekend!');
}
// question 4
var weather = prompt ('do you like rain?').toLowerCase();

if(weather === 'yes' || weather === 'y'){
  // console.log('Yes! i love the rain!');
  alert('Yes! I love the rain!');
} else {
  alert('Understandable, rain can make things seem gloomy');
  console.log( weather + ' gotta love that weather!!');
}
// question 5
var homeLocation = prompt ('Are you from Seattle?').toLowerCase();

if(homeLocation === 'yes' || homeLocation === 'y'){
  // console.log('Nope! I\'m originally from Indiana');
  alert('Nope! I\'m sorry' + name +' I\'m originally from Indiana');
} else {
  alert('That is correct ' + name +'!');
  console.log( homeLocation + ' home is originally Indiana');
}
  
// alert('it is nice to meet you ' + name + '. ' + food + ' is my favorite too!' + date + ' is the best day for it ' + weather + '. ' + ' makes the day even better!');