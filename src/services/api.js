import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://foodexplorer-api-kaol.onrender.com:3333',
  withCredentials: true
})
