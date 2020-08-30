import './sass/test.scss'
import Header from './Components/Header';
import Map from './Components/Map';
import 'leaflet/dist/leaflet.js'
import getInfoIP from './lib/getInfoIP';
import ShowMap from './lib/ShowMap';
import getQueryIP from './lib/getQueryIP';


const RenderApp = async () => {
    const ip = getQueryIP()
    const info = await getInfoIP({ ip })
    const App = document.getElementById('App');
    const render = `${Header({ value:ip,ip: info.query, city: info.city, region: info.region, zip: info.zip, timezone: info.timezone, ISP: info.org })}${Map()}`
    App.innerHTML = render;
    if (info.status === "success") {
        ShowMap(info.lat, info.lon)
    }else{
        alert('Page not found! 😥')
    }

}

window.addEventListener('load', RenderApp);
window.addEventListener('hashchange', RenderApp);