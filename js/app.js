'use strict';
var points = 0

// Question 1
console.log('Hello world!');
var name = prompt('what is your name?');
console.log('hi ' + name);

// Question 2
var food = prompt ('Is my favorite food pizza?').toLowerCase();

if(food === 'yes' || food === 'y'){
  // console.log('Yes! I love pizza');
  alert('Yes! I love pizza!');
  points++;
} else {
  alert('I am sorry to hear that');
  console.log('Is my favorite food pizza?');
}

// Question 3
var date = prompt ('Is it the weekend yet?').toLowerCase();

if(date === 'yes' || date === 'y'){
  // console.log('Yes! it/'s finally the weekend!);
  alert('Yes! It\'s finally the weekend!');
  points++;
} else {
  alert('That\'s to bad');
  console.log(date + ' it is finally the weekend!');
}
// question 4
var weather = prompt ('do you like rain?').toLowerCase();

if(weather === 'yes' || weather === 'y'){
  // console.log('Yes! i love the rain!');
  alert('Yes! I love the rain!');
  points++;
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
  points++;
}
// question 6
function Numbergame() {

var tries = 0;
var number = 5;
var q6answeredCorrect = false;
// var random = Math.floor(Math.random() * 10 + 1);
// console.log(random);
// var guess1 = prompt('Hey' + name + 'try to guess the number I\'m thinking.');

while (tries <= 3 && !q6answeredCorrect) {
var guess1 = prompt('Hey' + name + 'try to guess the number I\'m thinking.');

if(guess1 < number ) {
  alert('Sorry ' + name + ' too low');
  tries++;
  // console.log('tries + amount + ' + tries');
}
  if(guess1 > number) {
  alert('a little too high' + name + 'try again');
  tries++;
}

 if(number === guess1) {
    alert('Congrats,' + name + 'YOU WIN!');
    points++;
    q6answeredCorrect = true;
  }
  else {
    alert('Sorry' + name + 'you lose this time');
  } 
}

// question 7
var correctAnswer = ['Indiana', 'Florida', 'Virginia', 'Washington'];
var guessAnswer = prompt('Guess what state I\ve lived in');
var attempts = 6;
var answeredCorrectly = false;
while (attempts > 0 && !answeredCorrectly)
  attempts--;
  for (var i = 0; i < correctAnswer.length; i++) {
  if (guessAnswer === correctAnswers[i]) {
    answeredCorrectly = true;
    alert(`Yes I have lived in ${guessAnswer}`);
    points++;
  }
}
  if (attempts = true) {
  alert(`Yes I have lived in ${guessAnswer}`);

  guessAnswer = prompt('Sorry still is not correct, try again!');
  }
 if(attempts === 0 && !answeredCorrectly) {
  alert ('Game Over!');
  }
}
  alert(`You got ${points} / 7 points!`);


// alert('it is nice to meet you ' + name + '. ' + food + ' is my favorite too!' + date + ' is the best day for it ' + weather + '. ' + ' makes the day even better!')


