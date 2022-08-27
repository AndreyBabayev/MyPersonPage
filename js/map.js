function myMap() {
  let mapCanvas = document.getElementById("map");
  let myCenter = new google.maps.LatLng(49.946002, 36.308349, 17);
  let mapOptions = { center: myCenter, zoom: 13 };
  let map = new google.maps.Map(mapCanvas, mapOptions);
  let marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);
}
