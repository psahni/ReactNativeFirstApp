const ReactNative = require('react-native');
const { AsyncStorage } = ReactNative;
const storageKeys = {
    serverDetails: "serverDetails"
};

let BASE_URL = "";
let serverDetails = {};

const getServerDetails = () => {
    return serverDetails || {};
}

const fetchServerDetails = () => {
    return AsyncStorage.getItem(storageKeys.serverDetails)
        .then((value) => {
            console.log(value);
            serverDetails = JSON.parse(value);
            if(value){
                setBaseURL(serverDetails.server, serverDetails.protocol, serverDetails.port);
            }
            else {
                setBaseURL();
            }
            return value;
        });
}

const setServerDetails = (protocol, server, port) => {
    setBaseURL(server, protocol, port);
    return AsyncStorage.setItem(storageKeys.serverDetails, JSON.stringify({protocol, server, port}));
}

const getBaseURL = () => {
    console.log("get base url", BASE_URL);
    return BASE_URL;
}

const setBaseURL = (server, protocol="https", port="8501") => {
    if(server){
        serverDetails = {server, protocol, port}
        BASE_URL = [protocol, "://", server, ":", port].join("");    
    }
    else {
        BASE_URL = '';
        serverDetails= {};
    }
}

export {
    getServerDetails,
    fetchServerDetails,
    setServerDetails,
    getBaseURL
}