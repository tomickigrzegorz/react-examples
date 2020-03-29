import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-2503f.firebaseio.com/'
});

export default instance;