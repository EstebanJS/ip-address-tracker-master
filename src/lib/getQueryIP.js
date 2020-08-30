const getQueryIP = () => {
    const ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const urlformat = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
    const urlParams = new URLSearchParams(window.location.search);
    const ip = urlParams.get('ip');
    if (ip) {
        if (ip.match(ipformat) || ip.match(urlformat)) {
            return ip
        }
    }
    alert('Input not is a IP address or URL! 😵')
    return 0
}
export default getQueryIP