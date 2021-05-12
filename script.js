let colorOne = document.getElementById('color-a');
let colorTwo = document.getElementById('color-b');
let currentDirection = 'to bottom'; 
let outputCode = document.getElementById('code');
let copyButton = document.getElementById('copy');
let directions = document.querySelectorAll('.buttons button');

function setDirection(value, el) {
	for(let i of directions) {
		i.classList.remove('active');
	}
	el.classList.add('active');
	currentDirection = value;
}

function generateCode() {
	outputCode.value = `background-image: linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value});`;
	document.body.style.backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
}

function copyText(button) {
	outputCode.select();
	document.execCommand('copy');
	button.textContent = 'Copied!';
	setTimeout(() => button.textContent = 'Copy', 2000);
}

generateCode();
