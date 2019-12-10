import axios from 'axios'

export default {
    getAll() {
        return axios.get('/api/activity').then( response => {
            return response.data
        })
    }
}