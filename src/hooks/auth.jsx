import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import React from 'react'

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})
  const toastId = React.useRef(null)

  async function signIn({ email, password }) {
    try {
      const response = await api.post(
        'sessions',
        { email, password },
        { withCredentials: true }
      )
      const { user } = response.data
      localStorage.setItem('@foodexplorer:user', JSON.stringify(user))
      setData({ user })
    } catch (error) {
      if (error.response) {
        toast.error('Não foi possível acessar', {
          autoClose: 3000,
          closeButton: false,
          progress: false,
          bodyStyle: { background: '#92000E' },
          progressStyle: { background: '#AB4D55' },
          style: { background: '#92000E' }
        })
      } else {
        toast.error('Não foi possível acessar', error.message)
      }
    }
  }

  async function signUp({ name, email, password }) {
    try {
      toastId.current = toast.loading('Por favor aguarde...', {
        autoClose: false
      })
      await api.post('users', { name, email, password }).then(() => {
        toast.update(toastId.current, {
          render: 'Conta criada com sucesso!',
          type: 'success',
          isLoading: false,
          progress: false,
          bodyStyle: { background: '#04D361' },
          style: { background: '#04D361' },
          autoClose: 5000
        })
      })
      toast.loading('Redirecionando para o login.', {
        bodyStyle: { color: '#ffffff' , background: '#065E7C' },
        progressStyle: { background: '#82F3FF' },
        style: { background: '#065E7C' }
      })
      setTimeout(() => {
        window.location.href = '/'
      }, 1000)
    } catch (error) {
      if (error.response.status === 400) {
        toast.dismiss(toastId.current)
        toast.warning('E-mail já cadastrado!')
      } else {
        toast.error('Não foi possível criar a conta')
      }
    }
  }

  async function signOut() {
    localStorage.removeItem('@foodexplorer:user')
    setData({})
    toast.info('Redirecionando para o login.', {
      bodyStyle: { color: '#ffffff' , background: '#065E7C' },
      progressStyle: { background: '#82F3FF' },
      style: { background: '#065E7C' },
      autoClose: 3000,
    })
    window.location.href = '/'
  }

  useEffect(() => {
    const user = localStorage.getItem('@foodexplorer:user')
    if (user) {
      setData({
        user: JSON.parse(user)
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signUp,
        signOut,
        user: data.user
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }
