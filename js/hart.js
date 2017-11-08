/* Bron: Met behulp van Roene */
var counter = 0;
var heartButtons = document.querySelectorAll('.heartButton');		
for (var i = 0; i < heartButtons.length; i++) {
    heartButtons[i].addEventListener('click', function () {
		if(this.classList.contains('color-active')){
			counter--;
		}else{
			counter++;
		}
		document.getElementById("counter").innerHTML = counter; 
		this.classList.toggle('color-active');
	});
}
