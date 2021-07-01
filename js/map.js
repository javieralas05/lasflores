function iniciarMap(){
    var coord = {lat:13.172968715128054,lng: -88.11768682665053};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 16,
      center: coord,
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}