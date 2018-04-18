var hamburger = document.getElementById('openFull');

var i;

hamburger.addEventListener('click', function(e) {
	
	var content = document.querySelector(".tablets-menu")  
    //var element = document.getElementById("menu");
    //element.classList.toggle("active")
    hamburger.classList.toggle("active")

    if (content.style.height) {
      content.style.height = null;
    } else {
      content.style.height = content.scrollHeight + 'px';      
    }

});