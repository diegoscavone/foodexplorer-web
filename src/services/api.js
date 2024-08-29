import axios from 'axios'
import { useAuth } from '../hooks/auth'

export const api = axios.create({
  baseURL: 'https://foodexplorer-api-r0im.onrender.com',
  withCredentials: true
})
