const getOwnIp = async () => {
    // Not for vercel
    const rest = await fetch('https://cors-anywhere.herokuapp.com/http://api.ipify.org/?format=json');
    const result = await rest.json()
    return result.ip
    // return 'www.google.com'
}

export default getOwnIp