var numsquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var modebutton = document.querySelectorAll(".mode");

init();

function init(){
	setupmodebuttons();
	setupsquares();
	reseting();
}

function setupmodebuttons(){
	for(var i = 0; i < modebutton.length; i++){
		modebutton[i].addEventListener("click", function(){
			modebutton[0].classList.remove("selected");
			modebutton[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numsquares = 3: numsquares = 6;
			reseting();
		});
	}
}

function setupsquares(){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];

		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				changeColor(pickedColor);
				h1.style.backgroundColor = pickedColor;
				message.textContent = "Correct";
				reset.textContent = "Play Again?"
			}else{
				this.style.backgroundColor = "#232323";
				message.textContent = "Try Again";
			}
		});
	}
	colorDisplay.textContent = pickedColor;
}

function reseting(){
	colors = randomColors(numsquares);
	pickedColor = pickColor();
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
 			squares[i].style.backgroundColor = colors[i];
 		}else{
 			squares[i].style.display = "none";
 		}
	}
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	reset.textContent = "New Colors";
	message.textContent = "";
}

reset.addEventListener("click", function(){
	reseting();
});

function changeColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function randomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(createColor());
	}
	return arr;
}

function createColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb("+r+", "+g+", "+b+")";
}