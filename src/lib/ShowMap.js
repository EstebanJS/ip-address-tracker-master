import locationIcon from '../images/icon-location.svg'
const ShowMap = (lat, lon) => {
    const mymap = L.map('mapid', {
        center: [lat, lon],
        zoom: 13
    });

    const myIcon = L.icon({
        iconUrl: locationIcon,
        iconSize: [38, 38],
        iconAnchor: [22, 37],
        popupAnchor: [-3, -37],
    });

    const marker = L.marker([lat, lon], { icon: myIcon }).addTo(mymap);
    marker.bindPopup("<b>Here!</b><br>This is the point.").openPopup();

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZXN0ZWJhbmpzIiwiYSI6ImNrZWhjNWF0eDE1Yncyc3BxcG45MmJpc2QifQ.0qKtoStiG_6OtK9XyqDllQ'
    }).addTo(mymap);
}
export default ShowMap