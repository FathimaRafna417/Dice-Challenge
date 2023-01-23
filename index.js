var randomnumber1=Math.floor(Math.random() * 6)+1;


var randomDiceImage="dice" + randomnumber1 + ".png"; //gets dice1-dice6

var randomSourceImage="images/" + randomDiceImage; //gets images/dice1.pmg 

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomSourceImage);



var randomnumber2=Math.floor(Math.random() * 6)+1;


var randomDiceImage2="dice" + randomnumber2 + ".png"; //gets dice1-dice6

var randomSourceImage2="images/" + randomDiceImage2; //gets images/dice1.pmg 

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomSourceImage2);

if(randomnumber1 > randomnumber2)
{
    document.querySelector("h1").innerHTML="Player1 wins ! "
}

else if(randomnumber2> randomnumber1)
{
    document.querySelector("h1").innerHTML="Player2 wins ! "

}

else
{
    document.querySelector("h1").innerHTML="Draws ! "

}