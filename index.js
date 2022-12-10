
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage="images/dice"+randomNumber1+".png";
var Image1=document.querySelectorAll("img")[0];
Image1.setAttribute("src",randomDiceImage);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageSource="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource);


// Player wins
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩 Play 1 Won!";
}
else if(randomNumber2>randomNumber1){
document.querySelector("h1").innerHTML="🚩 Play 2 Won!"
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}