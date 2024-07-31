let gameSqe = [];
let userSqe = [];
let btns = ["red", "green", "yellow", "blue"];
let level = 0;
let start = false;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if (start == false) {
        console.log("game is started");
        start = true;
        levelUp();

    }
});

function gameFlash(btn) {
    btn.classList.add("Flash");
    setTimeout(function (){
        btn.classList.remove("Flash");
    },250);
}
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    },250);
}
function levelUp() {
    userSqe=[];
    level++;
    h2.innerText = `level ${level}`;
    let randomIdx = Math.floor(Math.random() * 3);
    let randcolor = btns[randomIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameSqe.push(randcolor);
    console.log(gameSqe);
    gameFlash(randbtn);
}

function checkAns(idx){
   //let idx=level-1;
   if(userSqe[idx]===gameSqe[idx]){
    if(userSqe.length===gameSqe.length){
     setTimeout(levelUp,1000);
    }
   }else{
    h2.innerHTML=`Game over !  your level was <b> ${level}</b>  <br/>please press any key to start again`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";

    },150);
   reset();

   }
}

function btnPress() {
    console.log(this);
    let btn = this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSqe.push(userColor);
    checkAns(userSqe.length-1);
    
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
function reset(){
    start=false;
    gameSqe=[];
    userSqe=[];
    level=0;

}

