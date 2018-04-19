    var leftArrow = document.querySelector('#left');
    var rightArrow = document.querySelector('#right');
    var sliderList = document.querySelector('.partners__list');
    var sliderContainer = document.querySelector('.partners');
    var size = parseInt(getComputedStyle(sliderContainer).width);
    var start = 3;

    function setupListners(){
      leftArrow.addEventListener('click', function (e) {
        e.preventDefault();
        var currentLeft = (parseInt(getComputedStyle(sliderList).left));
     
        if (start > 1 && currentLeft % size == 0) {        
          sliderList.style.left = currentLeft + size + 'px';
          start--;      
          
        } else if (currentLeft % size == 0) {
          sliderList.style.left = currentLeft - 5 * size + 'px';
          start = 6;      
        }
     })
    
      rightArrow.addEventListener('click', function (e) {
          e.preventDefault();
          var currentLeft = (parseInt(getComputedStyle(sliderList).left));
      
          if (start < 6 && currentLeft % size == 0) {
      
              sliderList.style.left = currentLeft - size + 'px';
              start++;
          
          } else if (currentLeft % size == 0) {
            sliderList.style.left = 0 + 'px';
            start = 1;     
          }
      })

      window.addEventListener('resize', function() {  
        size = parseInt(getComputedStyle(sliderContainer).width); 
        sliderList.style.left = -size * (start-1) + 'px';
      });
    }

    function slider2Init(){
      if (sliderContainer.length !== 0){ // если на странице есть нужный html код
          setupListners();
      }
    }


module.exports = slider2Init;