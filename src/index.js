import './sass/test.scss'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Map from './Components/Map';
import 'leaflet/dist/leaflet.js'
import getInfoIP from './lib/getInfoIP';
import ShowMap from './lib/ShowMap';
import getQueryIP from './lib/getQueryIP';

import frontendmentor from './images/favicon-32x32.png'
import js from './images/javascript.svg'
import webpack from './images/webpack.svg'
import sass from './images/sass-1.svg'
import html from './images/html5.svg'


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

    const arrayLogos = [js, webpack, sass, html]

    let cont = 0

    let mylogo = document.getElementById('logo');

    function setFavicons(favImg){
        let headTitle = document.querySelector('head')
        let setFavicon = document.createElement('link')
        setFavicon.setAttribute('rel','shortcut icon')
        setFavicon.setAttribute('href',favImg)
        headTitle.appendChild(setFavicon)
    }

    setFavicons(frontendmentor)
    setInterval(() => {
        mylogo.classList.toggle('fade');
        if (cont < arrayLogos.length - 1) {
            cont = cont + 1
        } else {
            cont = 0
        }
        mylogo.src = arrayLogos[cont]
        mylogo.classList.toggle('fade');
    }, 5000);
}

window.addEventListener('load', RenderApp);
window.addEventListener('hashchange', RenderApp);