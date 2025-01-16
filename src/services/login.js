import axios from 'axios'
const baseUrl = process.env.baseUrl
import noteService from './noteService'
const login = async credentials => {
    const response = await axios.post(`${baseUrl}/login`, credentials)
    console.log(response.data)
    noteService.setToken(response.data.token)
    return response.data
}

export default { login }