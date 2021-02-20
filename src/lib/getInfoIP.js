import getOwnIp from './getOwnIP';
const getInfoIP = async ({ip=0}={}) => {
    let IP_SEARCH = ''
    if(ip === 0){
        IP_SEARCH = await getOwnIp()
    }else{
        IP_SEARCH = ip
    }
    
    const rest = await fetch(`https://cors-anywhere.herokuapp.com/http://ip-api.com/json/${IP_SEARCH}`);
    const result = await rest.json()
    return result
}

export default getInfoIP