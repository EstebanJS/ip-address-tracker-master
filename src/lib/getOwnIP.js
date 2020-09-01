const getOwnIp = async () => {
    // Not for vercel
    // const rest = await fetch('http://api.ipify.org/?format=json');
    // const result = await rest.json()
    // return result.ip
    return 'www.google.com'
}

export default getOwnIp