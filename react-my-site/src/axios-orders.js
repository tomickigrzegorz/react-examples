import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://www.grzegorztomicki.pl/serwisy/newSite/data/'
});

export default instance;