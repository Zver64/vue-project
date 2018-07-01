import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: 'http://webstudio/wp-json/'
    })
}