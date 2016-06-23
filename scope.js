var score = 0;

function increaseScore() {
    score++;
}

function decreaseScore() {
    score--;
}

function run(){
  (function(){
    increaseScore();
     })();
}