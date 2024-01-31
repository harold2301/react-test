import Axios from 'axios'

export default function () {
    const baseURL = "https://backend-test-harold-4dde42d7a5f3.herokuapp.com"
    // const baseURL = "http://localhost:8080"
    // const baseURL = import.meta.env.API_URL

    const axios = Axios.create({ baseURL, timeout: 30000 })

    return { axios }
}