var numSquares=6
var colors=generateRandomColors(numSquares);
var sq=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var msgDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	msgDisplay.textContent="";
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<sq.length;i++){
		if (colors[i]){
			sq[i].style.backgroundColor=colors[i];
		}
		else{
			sq[i].style.display="none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	msgDisplay.textContent="";
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<sq.length;i++){
			sq[i].style.backgroundColor=colors[i];
			sq[i].style.display="block";
		}
});

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors=generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor=pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent=pickedColor;
	//change colors of squares
	for (var i = 0; i < sq.length; i++){
		sq[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
	msgDisplay.textContent="";
	this.textContent="New Colors"
})

colorDisplay.textContent=pickedColor;

for (var i = 0; i < sq.length; i++) {
	//add initial colors to the squares
	sq[i].style.backgroundColor=colors[i];
	//add click listeners to the squares
	sq[i].addEventListener("click", function(){
		//grab color of clicked square 
		var clickedColor=this.style.backgroundColor;
		//compare to pickedColor
		if(clickedColor===pickedColor){
			msgDisplay.textContent="Correct!"
			resetButton.textContent="Play Again?"
			changeColor(clickedColor);
			h1.style.backgroundColor=clickedColor;
		}
		else{
			this.style.backgroundColor="#232323";
			msgDisplay.textContent="Try Again!"
		}
	});
}
function changeColor(color){
	//loop through all squares
	for(var i=0;i<colors.length;i++)
		//change each color to match the given color
		sq[i].style.backgroundColor=color;
}
function pickColor(){
	var random=Math.floor(Math.random()*colors.length)
	return colors[random];
}
function generateRandomColors(num){
	//make random array
	var arr=[]
	//repeat num times
	for(var i=0;i<num;i++){
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}
function randomColor(){
	//pick a "red" from 0-255
	var r=Math.floor(Math.random()*256);
	//pick a "green" from 0-255
	var g=Math.floor(Math.random()*256);
	//pick a "blue" from 0-255
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}
