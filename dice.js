var numbers1 = Math.floor(Math.random()*6)+1;
var randomImage1 = "dice" + numbers1 +".png";
var randomSrc = "images/" + randomImage1;
var image1 = document.querySelector(".img1");
var changes = image1.setAttribute("src",randomSrc);


var numbers2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "dice" + numbers2 +".png";
var randomSrc2 = "images/" + randomImage2;
var image2 = document.querySelector(".img2");
var changes2 = image2.setAttribute("src",randomSrc2);

if(numbers1>numbers2){
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS";
}
else if(numbers2>numbers1){
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS";
}
else{
    document.querySelector("h1").innerHTML = "DRAW";
}