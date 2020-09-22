import './sass/test.scss'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Map from './Components/Map';
import 'leaflet/dist/leaflet.js'
import getInfoIP from './lib/getInfoIP';
import ShowMap from './lib/ShowMap';
import getQueryIP from './lib/getQueryIP';

import frontendmentor from './images/favicon-32x32.png'



const RenderApp = async () => {
    const InputIp = getQueryIP()
    const info = await getInfoIP({ ip:InputIp })
    const App = document.getElementById('App');
    const render = `${Header({ value: InputIp, ip: info.query, city: info.city, region: info.region, zip: info.zip, timezone: info.timezone, ISP: info.org })}${Map()}${Footer()}`
    App.innerHTML = render;
    if (info.status === "success") {
        ShowMap(info.lat, info.lon)
    } else {
        alert('Page not found! 😥')
    }

    function setFavicons(favImg){
        let headTitle = document.querySelector('head')
        let setFavicon = document.createElement('link')
        setFavicon.setAttribute('rel','shortcut icon')
        setFavicon.setAttribute('href',favImg)
        headTitle.appendChild(setFavicon)
    }

    setFavicons(frontendmentor)
}

window.addEventListener('load', RenderApp);
window.addEventListener('hashchange', RenderApp);