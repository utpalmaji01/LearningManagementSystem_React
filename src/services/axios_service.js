const axios = require('axios').default;

const post = (url, data, isTokenRequired=false, header=null) =>{
    return axios.post(url, data, isTokenRequired && header);
}
const get = (url, data) =>{
    return axios.get(url, data);
}
const DELETE = (url, isTokenRequired=false, header=null) =>{
    return axios.delete(url, isTokenRequired && header);
}
const put = (url, data, isTokenRequired=false, header=null) =>{
    return axios.put(url, data, isTokenRequired && header);
}
module.exports = {post, get, DELETE, put};