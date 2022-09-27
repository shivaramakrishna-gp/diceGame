//pic.setAttribute("style", width="150px", height="150px");
//var div = document.getElementById("dice1");
// img.id="firstPic"
//document.querySelector("dice2").classList.add("img");
// function start() {
//     var z = document.getElementById("diceImg");
//     document.getElementById("dice1").innerHTML=z;

const img = document.createElement("img");
img.src="dice1.png";
document.body.appendChild(img);
img.setAttribute("class","firstPic");
//h2.setAttribute("id","firstPic");


const img2 = document.createElement("img");
img2.src="dice2.png";
document.body.appendChild(img2);
img2.setAttribute("class","secondPic");



function startGame(){
    img.setAttribute("style", width="150px", height="150px");

    var x = Math.floor(Math.random() * 6)+1;
    //document.getElementById("dice1").innerHTML=x;
    var y = Math.floor(Math.random() * 6)+1;
    //document.getElementById("dice2").innerHTML=y;
    if(x==1){
        img.setAttribute("src","dice1.png");
    }else if(x==2){
        img.setAttribute("src","dice2.png");
    }else if(x==3){
        img.setAttribute("src","dice3.png");
    }else if(x==4){
        img.setAttribute("src","dice4.png");
    }else if(x==5){
        img.setAttribute("src","dice5.png");
    }else if(x==6){
        img.setAttribute("src","dice6.png");
    }

    if(y==1){
        img2.setAttribute("src","dice1.png");
    }else if(y==2){
        img2.setAttribute("src","dice2.png");
    }else if(y==3){
        img2.setAttribute("src","dice3.png");
    }else if(y==4){
        img2.setAttribute("src","dice4.png");
    }else if(y==5){
        img2.setAttribute("src","dice5.png");
    }else if(y==6){
        img2.setAttribute("src","dice6.png");
    }

if(x>y){
    document.getElementById("player").innerHTML="&nbsp &nbsp Player 1 wins &#128588";
}else if(y>x)
{
    document.getElementById("player").innerHTML="&nbsp &nbsp Player 2 wins &#128588";
}else {
    document.getElementById("player").innerHTML="&nbsp &nbsp &nbsp &nbsp &nbsp Draw &#128582";

}
}