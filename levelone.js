var allWords = [
  "ATES",
  "EAST",
  "EATS",
  "ETAS",
  "SATE",
  "SEAT",
  "SETA",
  "TAES",
  "TASE",
  "TEAS",
  "ERST",
  "REST",
  "RETS",
  "TRES",
  "OPTS",
  "POST",
  "POTS",
  "SPOT",
  "STOP",
  "TOPS",
  "DIET",
  "DITE",
  "EDIT",
  "TIDE",
  "TIED"
]

let totalScore = 0;

var countDownDate = new Date().getTime();

countDownDate += 100000;

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;


  var minutes= '';
  var seconds = '';
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"

  try {
    document.getElementById("value").innerHTML =  minutes + "m " + seconds + "s ";
  }
  catch(err) {
  // if any error, Code throws the error
  }

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("value").innerHTML = "EXPIRED";
    var TotalScore;
    localStorage.setItem('TotalScore', totalScore);
    console.log(TotalScore);
    window.location.href='scoreDisplayPage.html'
  }
}, 1000);

let spaces = document.querySelectorAll('#putwords p');  // The letters in the blank space.

try {
 spaces[1].style.boxShadow = '-5px -5px 30px 5px red, 5px 5px 30px 5px blue'; 
}
catch(err) {
  // if any error, Code throws the error
}





var pos = 1;

for(let i = 0; i<spaces.length; i++){
  spaces[i].addEventListener('click', function(){
      console.log('inside space');
      
      spaces[i].style.boxShadow = '-5px -5px 30px 5px red, 5px 5px 30px 5px blue';
      pos = i;

      for(let j = 0 ; j< spaces.length; j++){
        if(i == j)continue;

        spaces[j].style.boxShadow = '-5px -5px 30px 5px yellow, 5px 5px 30px 5px green';
      }
  });
}

function make(){

let got = document.querySelectorAll('#givenwords p');

let preStrings = ["AEST" , "ERST" , "OPST" , "TIDE"];

var s = "";


let val = Math.floor(Math.random() * preStrings.length) % (preStrings.length);
s = preStrings[val];


 val = Math.floor((s.length + Math.floor(Math.random() * 10) ) % (s.length));

for(let i =0; i< got.length; i++){
    
    let ss = s.charAt(val);
    
    got[i].innerHTML = ss;

    val++;
    val =val % s.length; 
}

}


make();

function updateScore(){ 

  let scoreText = document.getElementById('scoreText');

  // Need to check here if the word is valid or not

  let foundWord="";

  for(let i = 0; i< spaces.length; i++){
    foundWord += spaces[i].innerHTML;
  }
  
  let ck_found = false;

  for(let i = 0; i< allWords.length; i++){
    if(allWords[i]=== foundWord){
      ck_found = true;
      break;
    }
  }

  if(ck_found ===false)return;

  console.log(totalScore);

  totalScore++;
  
  scoreText.innerHTML = "Score :" + totalScore; 

  for(let i =0; i< spaces.length; i++){
    spaces[i].innerHTML = '?';
  }
  make();
}

let words = document.querySelectorAll('#givenwords p');

for(let i =0; i < words.length; i++){
  words[i].addEventListener('click' , function(){
    spaces[pos].innerHTML = words[i].textContent; 

    let cnt = 0;
    for(let j =0; j<spaces.length; j++){
      if(spaces[j].innerHTML != ' ')cnt++;
    }

    if(cnt == spaces.length){
      updateScore();
    }

  });
}



