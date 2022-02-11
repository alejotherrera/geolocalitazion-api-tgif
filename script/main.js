// DOM

//Geolocatio

let id = null;

const successCallBack = (position) => {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude);
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: latitude, lng: longitude},
        zoom: 15
    });
    let div = document.createElement('div');
    div.append("map");
    let 

    const marker = new google.maps.Marker({
        position: {lat: latitude, lng: longitude},
        map: map,
        title: 'Vous êtes ici'
    });
    id = setInterval(() => {
        navigator.geolocation.getCurrentPosition(successCallBack);
    }, 1000);
    console.log(id)
    console.log(marker);
}

const errorCallBack = (error) => {
    console.log("Ha ocurrido un ERROR->", error);
}

const options = {
    enableHighAccuracy: true,
    maximumAge: 30000
}

if ("geolocation" in navigator) {
    id = navigator.geolocation.watchPosition(successCallBack, errorCallBack, options);
    console.log($id);
} else {
    console.error("Tu navegador no soporta geolocalizacion");
}

// ClearWatch Navigator
navigator.geolocation.clearWatch(id);