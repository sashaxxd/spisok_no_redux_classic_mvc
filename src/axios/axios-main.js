import axios from 'axios'

export default axios.create({
    baseURL: 'https://robot-x-db319.firebaseio.com'
})