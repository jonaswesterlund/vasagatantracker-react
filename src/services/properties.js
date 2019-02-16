import axios from 'axios';

const baseUrl = 'https://vasagatantracker-spektrumrf.herokuapp.com/api/properties';

let token = null;

const setToken = (newToken) => {
    token = `bearer ${newToken}`;
};

const update = (newObject, year) => {
    const config = {
        headers: { 'Authorization': token },
        params: { year }
    };

    const request = axios.put(baseUrl, newObject, config);
    return request.then(response => response.data);
};

export default { update, setToken };