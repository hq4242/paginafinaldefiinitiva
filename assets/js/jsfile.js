const myportada = document.querySelectorAll('.myportada'),
	  giro = document.querySelectorAll('.giro');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myportada.length;i++){
		myportada[i].style.display = "none";
	}
	for(i = 0;i<giro.length;i++) {
		giro[i].className = giro[i].className.replace(' active', '');
	}
	if(n > myportada.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myportada.length;
	   }
	   myportada[counter - 1].style.display = "block";
	giro[counter - 1].className += " active";
}

var mostrador = document.getElementById("mostrador");

window.addEventListener('load', function(){
  mostrador.style.display = 'none';
})