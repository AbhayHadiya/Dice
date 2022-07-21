//code for firstplayer's random dice image
var randomNumber1=Math.floor(Math.random()*6)+1;
var imageSource1="images/dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imageSource1);
document.getElementById("p1").innerHTML=randomNumber1;
//code for secondplayer's random dice image

var randomNumber2=Math.floor(Math.random()*6)+1;
var imageSource2="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",imageSource2);
document.getElementById("p2").innerHTML=randomNumber2;

//for the result of who wins

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 winss🏆!!"
}
else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML="Player 2 winss🏆!!"
}
else {
  document.querySelector("h1").innerHTML="Its a Draw !! "
}
