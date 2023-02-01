import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer jOgfKpOY30JiwAelq2ePn8nmoLLZZsy1nTK3PBEnYG3LlSACzaMQDUcY6DRoZUV-LPm3ZHX9uagiAy9nsNrlciQ5yTuwlARSLce1teeL76RcLggm2O0Y77AzfRXQY3Yx'
    }
});
