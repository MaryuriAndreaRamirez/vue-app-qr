import axios from 'axios'

const appQrApi = axios.create({
    baseURL: 'https://logirastreo.com/ws_app/serviciosqr'
})

export default appQrApi