import '../sass/Header.scss'
import Arrow from '../images/icon-arrow.svg'
const Header = ({ value = '?????', ip = '?????', city = '?????', region = '?????', zip = '?????', timezone = '?????', ISP = '?????' } = {}) => {
    const view = `
        <header>
            <div class="titleContent">
                <h2>IP Address Tracker</h2>
            </div>
            <form class="boxInput">
                <input type="text" name="ip" value="${value}" placeholder="Search for any IP address or domain"/>
                <button>
                    <img src='${Arrow}'/>
                </button>
            </form>
            <div class="Resonse">
                <div>
                    <p>IP ADDRESS</p>
                    <h2>${ip}</h2>
                </div>
                <div class="divider"><div></div></div>
                <div>
                    <p>LOCATION</p>
                    <h2>${city},${region}<br/>
                    ${zip}</h2>
                </div>
                <div class="divider"><div></div></div>
                <div>
                    <p>TIMEZONE</p>
                    <h2>${timezone}</h2>
                </div>
                <div class="divider"><div></div></div>
                <div>
                    <p>ISP</p>
                    <h2>${ISP}</h2>
                </div>
            </div>
        </header>
    `
    return view
}

export default Header