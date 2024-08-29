import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://foodexplorer-api-kaol.onrender.com',
  withCredentials: true
})
