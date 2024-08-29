import axios from 'axios'
import { useAuth } from '../hooks/auth'

const api = axios.create({
  baseURL: 'https://foodexplorer-api-r0im.onrender.com' || 'http://localhost:3333',
  withCredentials: true
})

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      const { signOut } = useAuth()
      console.log('deslogado')
      signOut()
    }
    return Promise.reject(error)
  }
)
export { api }
