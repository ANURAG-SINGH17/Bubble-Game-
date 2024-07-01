function bubbleprint() {
    var bubble = "";
for (let i = 1; i <= 128; i++){
    let number = Math.floor(Math.random()*10);
    bubble += `<div class="bubble">${number}</div>` 
}

document.querySelector(".game-box").innerHTML = bubble;

var time = 60;
}

var timer = 60;
function runtimer() {
        let timestop = setInterval (function () {
            if (timer > 0) {
                timer--;
                document.querySelector("#timerset").innerHTML = timer;
            }
            else{
                clearInterval(timestop);
                document.querySelector(".game-box").innerHTML = `<h1>Game Over</h1> <h4> Score ${score}</h4>`
                document.querySelector(".game-box").style.flexDirection = "column";
                
            }

    },1000)
}

var score = 0;
function scorehit() {
score += 10;
document.querySelector("#scoreset").innerHTML = score;
}

var nn ;
function hittt() {
   nn = Math.floor(Math.random()*10);
   document.querySelector("#thishit").innerHTML = nn;
}

  document.querySelector(".game-box")
  .addEventListener("click" , function(details){
    let num = (Number (details.target.textContent));
    if (num === nn) {
        scorehit();
        hittt();
        bubbleprint();
    }
  })

hittt();
runtimer();
bubbleprint();

