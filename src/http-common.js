import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-type": "application/json",
        "Authorization" : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmcmVlayIsImV4cCI6MTYyMjY2MzAyNywiaWF0IjoxNjIyNjI3MDI3fQ.2eznWdmLifVQgMSqLLAfoDDI7YPgkYMTFBEe8JEiZSw",
        'Access-Control-Allow-Origin': '*'
      }
})

export default instance
