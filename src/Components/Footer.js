import '../sass/Footer.scss'
import frontendmentor from '../images/favicon-32x32.png'
import github from '../images/GitHub-Mark-Light-32px.png'
import js from '../images/javascript.svg'

const Footer = ()=>{
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
            <div>
                Power by <img id="logo" src="${js}"/>
            </div>
        </footer>
    `
    return view
}

export default Footer
