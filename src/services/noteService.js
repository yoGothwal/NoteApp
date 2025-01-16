import axios from "axios"
const baseUrl = process.env.baseUrl
let token
const setToken = (value) => {
    token = `Bearer ${value}`
}
const getAll = async () => {
    const config = { headers: { Authorization: token } }
    const response = await axios.get(`${baseUrl}/notes`, config)
    return response.data
}
const create = async (object) => {
    console.log(baseUrl)
    const config = { headers: { Authorization: token } }
    const response = await axios.post(`${baseUrl}/notes`, object, config)
    console.log(response.data)
    return response.data
}
export default { create, setToken, getAll }