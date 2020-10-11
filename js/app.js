'use strict';

var points = 0;

console.log('Hello world!');
function questionOne() {
  var name = prompt('what is your name?');
  console.log('hi ' + name);
}
questionOne();


var food = prompt('Is my favorite food pizza?').toLowerCase();
function questionTwo() {
  if (food === 'yes' || food === 'y') {
    alert('Yes! I love pizza!');
    points++;
  } else {
    alert('I am sorry to hear that');
    console.log('Is my favorite food pizza?');
  }
}
questionTwo();


var date = prompt('Is it the weekend yet?').toLowerCase();
function questionThree() {
  if (date === 'yes' || date === 'y') {
    alert('Yes! It\'s finally the weekend!');
    points++;
  } else {
    alert('That\'s to bad');
    console.log(date + ' it is finally the weekend!');
  }
}
questionThree();

var weather = prompt('do you like rain?').toLowerCase();
function questionFour() {
  if (weather === 'yes' || weather === 'y') {
    alert('Yes! I love the rain!');
    points++;
  } else {
    alert('Understandable, rain can make things seem gloomy');
    console.log(weather + ' gotta love that weather!!');
  }
}
questionFour();

// question 5
var homeLocation = prompt('Are you from Seattle?').toLowerCase();
function questionFive() {
  if (homeLocation === 'yes' || homeLocation === 'y') {
    alert('Nope! I\'m sorry' + name + ' I\'m originally from Indiana');
  } else {
    alert('That is correct ' + name + '!');
    console.log(homeLocation + ' home is originally Indiana');
    points++;
  }
}
questionFive();


var tries = 0;
var number = 5;
var q6answeredCorrect = false;

function questionSix() {
  while (tries <= 3 && !q6answeredCorrect) {
    var guess1 = parseInt(prompt('Hey' + name + 'try to guess the number I\'m thinking.'));

    if (guess1 < number) {
      alert('Sorry ' + name + ' too low');
      tries++;
    }
    else if (guess1 > number) {
      alert('a little too high' + name + 'try again');
      tries++;
    }

    else if (number === guess1) {
      alert('Congrats,' + name + 'YOU WIN!');
      points++;
      q6answeredCorrect = true;
    }
  }
  if (!q6answeredCorrect) {
    alert('You are out of guesses, the correct answer was ' + number);
  }
}
questionSix();

var correctAnswers = ['indiana', 'florida', 'virginia', 'washington'];
var guessAnswer = prompt('What state have i lived in?').toLowerCase();
var attempts = 6;
var answeredCorrectly = false;

function questionSeven() {
  while (attempts > 0 && !answeredCorrectly) {

    attempts--;
    for (var i = 0; i < correctAnswers.length; i++)
      if (guessAnswer === correctAnswers[i]) {
        answeredCorrectly = true;
        alert(`Yes I have lived in ${guessAnswer}`);
        points++;
      }

    if (attempts > 0 && !answeredCorrectly) {
      guessAnswer = prompt('Sorry still is not correct, try again!');
    }
  }
  if (attempts === 0 && !answeredCorrectly) {
    alert('You are out of guesses, the correct answer was ' + guessAnswer);
  }
}
questionSeven();

alert(`You got ${points} / 7 points!`);


