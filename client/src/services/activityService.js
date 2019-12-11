import axios from 'axios'

const base_url = '/api/activity'

export default {
    getAll() {
        return axios.get('/api/activity').then( response => {
            return response.data
        })
    },

    addActivity(activity) {
        return axios.post(base_url, activity).then(response => {
            return response.data
        })
    }
}