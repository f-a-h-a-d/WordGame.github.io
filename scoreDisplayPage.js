var Totalscore = localStorage.getItem('TotalScore');

let changeScore = document.getElementById('myvalue');

changeScore.innerHTML  = "Your Total Score: " + Totalscore;

window.localStorage.clear();