console.log('sourced');

var arrayNames = ['Amy', 'Sean', 'Tiffany'];
var nameShown = "";

function onReady(){//runs appendDiv function and contains event handlers
appendDivs();//appends #3 div with images to DOM
$('#guess').on('click', guessPerson);// event handler for guess button click
$('.container').on('click', '.person', checkPerson);//event handler for user click photo


}

function appendDivs(){
  $('.container').append("<div class = 'person' data-name = 'Amy'><img src='https:github.com/aventurino13.png' alt='Profile image of Amy'></div>");
  $('.container').append("<div class = 'person' data-name = 'Sean'><img src='https:github.com/SF-Felling7.png' alt='Profile image of Sean'></div>");
  $('.container').append("<div class = 'person' data-name = 'Tiffany'><img src='https:github.com/tiffanylove.png' alt='Profile image of Tiffany'></div>");
}

function guessPerson() {
  $('p').empty();//empty p tag so only new name is shown
  var number = randomNumber(1,3);//call randomNumber function
  if (number === 1) {// if randomNumber is 1 will append Amy to DOM
    nameShown = arrayNames[0];
    $('p').append("Who is " + arrayNames[0]);
  }
  if (number === 2) {// if randomNumber is 2 will append Sean to DOM
    nameShown = arrayNames[1];
    $('p').append("Who is " + arrayNames[1]);
  }
  if (number === 3) {// if randomNumber is 3 will append Tiffany to DOM
    nameShown = arrayNames[2];
    $('p').append("Who is " + arrayNames[2]);
  }
}


function randomNumber(min, max){//calculates random number
    return parseInt(Math.floor(Math.random() * (1 + max - min) + min));
}

function checkPerson() {//
  if (nameShown === $(this).data('name')){
    alert("Great Job! - You Guessed Correct! You must be a GENIUS");
  } else {alert("Guess again! -- This time try HARDER!");
    }

}
























$(document).ready(onReady);
