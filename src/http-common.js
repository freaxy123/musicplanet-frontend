import axios from 'axios'
import Authorization from '../src/services/Authorization';

let token = localStorage.getItem("user"); //Get Bearer token

if(token != null){
    token = token.substring(1, token.length - 1);
}
else{
    Authorization.logout();
}


const instance = axios.create({
    baseURL: "http://localhost:8080",
    headers:{
        Authorization: 'Bearer ' + token
    }
})

instance.interceptors.response.use((response) => {
    if(response.status === 403) {
        console.log("You are not authorized(http-common.js)");
    }
    return response;
}, (error) => {
    if (error.response && error.response.data) {
         //add your code
         return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
});

export default instance
