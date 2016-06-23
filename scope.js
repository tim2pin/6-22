;(function(){
var score = 0;

function increaseScore() {
    score++;
}

function decreaseScore() {
    score--;
}

function run(){
  
    increaseScore();
    console.log(score);
}
run();


})();