mapboxgl.accessToken = 'pk.eyJ1Ijoic2FpZG11aGFtbWFkIiwiYSI6ImNrcjBzdDA2djB0cHMzMG1udDVzeG4weDEifQ.BYJpBYwWwaEazvqg5opiYQ';

navigator.geolocation.getCurrentPosition(succesLocation,errorLocation,{enableHighAccuracy:true})

function succesLocation(position) {
    console.log(position);
    setUpMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation(){
    setUpMap([41.3,69.1])

}

function setUpMap(center){
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center:center,
      zoom:15
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
      });
      
      map.addControl(directions, 'top-left');
}
