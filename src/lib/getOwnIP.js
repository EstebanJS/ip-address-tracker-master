const getOwnIp = async () => {
    const rest = await fetch('http://api.ipify.org/?format=json');
    const result = await rest.json()
    return result.ip
}

export default getOwnIp