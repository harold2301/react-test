import Axios from 'axios'

export default function () {
    const baseURL = "https://backend-test-harold-4dde42d7a5f3.herokuapp.com"
    // const baseURL = import.meta.env.API_URL

    const axios = Axios.create({ baseURL, timeout: 30000 })

    axios.interceptors.request.use(
        config => {
            config.headers['Content-Type'] = 'application/json'
            config.headers['Access-Control-Allow-Origin'] = '*'
            config.headers['Access-Control-Allow-Credentials'] = false
            return config
        },
        error => {
            return Promise.reject(error)
        }
    )

    return { axios }
}