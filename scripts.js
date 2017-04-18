console.log('sourced');

var arrayNames = ['Amy', 'Sean', 'Tiffany'];
var nameShown = "";

function onReady(){
appendDivs();
$('#guess').on('click', guessPerson);
$('.container').on('click', '.person', checkPerson);
}

function appendDivs(){
$('.container').append("<div class = 'person' data-name = 'Amy'>'<img src='https:github.com/aventurino13.png' alt='Profile image of Amy'>'</div>");
$('.container').append("<div class = 'person' data-name = 'Sean'>'<img src='https:github.com/SF-Felling7.png' alt='Profile image of Sean'>'</div>");
$('.container').append("<div class = 'person' data-name = 'Tiffany'>'<img src='https:github.com/tiffanylove.png' alt='Profile image of Tiffany'>'</div>");
}

function guessPerson() {
  $('p').empty();
  var number = randomNumber(1,3);
  if (number === 1) {
    nameShown = arrayNames[0];
    $('p').append("Who is " + arrayNames[0]);
  }
  if (number === 2) {
    nameShown = arrayNames[1];
    $('p').append("Who is " + arrayNames[1]);
  }
  if (number === 3) {
    nameShown = arrayNames[2];
    $('p').append("Who is " + arrayNames[2]);
  }
  return nameShown;
}

function randomNumber(min, max){
    return parseInt(Math.floor(Math.random() * (1 + max - min) + min));
}

function checkPerson(nameShown) {
  if ($(this).data('name') === nameShown){
    alert("Great Job - You Guessed Correct!");
  } else {alert("Guess again!");
}

}
























$(document).ready(onReady);
