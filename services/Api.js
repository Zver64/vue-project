import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: 'https://demo.wp-api.org/wp-json/'
    })
}