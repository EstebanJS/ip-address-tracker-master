import '../sass/Footer.scss'
import frontendmentor from '../images/favicon-32x32.png'
import github from '../images/GitHub-Mark-Light-32px.png'
import js from '../images/javascript.svg'
import html from '../images/html5.svg'
import css from '../images/css3.svg'
import webpack from '../images/webpack.svg'

const Footer = () => {
    const view = `
        <footer>
            <div>
                <img src="${frontendmentor}"/>
                <a href="https://www.frontendmentor.io/" target="_blank">Frontend Mentor</a>
            </div>
            <div>
                <img src="${github}"/>
                <a href="https://github.com/EstebanJS" target="_blank">EstebanJS</a>
            </div>
            <div class="power">
                <div>Power by: </div>
                <div id="Logos">
                    <img src="${html}"  align="middle" />
                    <img src="${css}"  align="middle" />
                    <img src="${webpack}"  align="middle" />
                    <img src="${js}"  align="middle" />
                </div>
            </div>
        </footer>
    `
    return view
}

export default Footer
