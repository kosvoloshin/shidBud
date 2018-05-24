if($('#map').length) {
    window.initMap = function() {
        var uluru = {lat: 50.443085, lng: 30.499954};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
    }
}