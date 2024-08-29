import { BrowserRouter } from 'react-router-dom'

import { useAuth } from '../hooks/auth'

import { UserRoutes } from './user.routes'
import { AuthRoutes } from './auth.routes'

import { useEffect } from 'react'
import { api } from '../services/api'
import { AdminRoutes } from './admin.routes'

export function Routes() {
  const { user, signOut } = useAuth()

  useEffect(() => {
    api.get('/users/validated').catch(error => {
      if (error.response?.status === 401) {
        signOut()
      }
    })
  }, [])

  function AcessRoute() {
    if (user.isAdmin) {
      return <AdminRoutes />
    } else {
      return <UserRoutes />
    }
  }

  return <BrowserRouter>{user ? <AcessRoute /> : <AuthRoutes />}</BrowserRouter>
}
