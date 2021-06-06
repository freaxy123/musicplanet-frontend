import axios from 'axios'

let token = localStorage.getItem("user"); //Get Bearer token
token = token.replace(/['"]+/g, ''); //removes double quotes

const instance = axios.create({
    baseURL: "http://localhost:8080",
    headers:{
        Authorization: 'Bearer ' + token
    }
})

export default instance
