var timer=60;
var score=0;
var randm=0;
var bubble=document.querySelector("#bubble");
var bottom=document.querySelector("#bottom");

var clutter="";

function showbubble(){
    for(var i=0;i<84;i++){
        clutter+=` <div id="bubble">
        <h4>${Math.floor(Math.random()*10)}</h4>       
        </div>`
    }
    document.querySelector("#bottom").innerHTML=clutter;
}
showbubble();
var h1 =document.querySelector("#h1")
function settimer(){
    setInterval(function(){
        if(timer<0){
            h1.innerHTML=`Game over <br> Your score is: ${score}`;
            h1.style.display="inline";

            bottom.style.display="none"
        }
        else{
            document.querySelector("#timer").textContent=timer;
            timer--;
        }
    },1000)
}
function pickrandom(){
     randm=Math.floor(Math.random()*10);
    document.querySelector("#random").innerHTML=randm;
}
function setscore(){
    score=score+10;
    document.querySelector("#score").textContent=score;
}
settimer();
pickrandom();
bottom.addEventListener("click",function(dets){
    clutter="";
    showbubble();
    var x=Number(dets.target.textContent);
    console.log(x);
    if(x===randm){
        console.log("hi");
        setscore();
        pickrandom();
    }
})