import { Container, Form } from './styles'

import { Input } from '../../components/Input'
import { Label } from '../../components/Label'
import { Brand } from '../../components/Brand'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../hooks/auth'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  function handleSignIn() {
    if(!email ||!password){
      return toast.error('Preencha todos os campos!', {
        autoClose: 3000,
        closeButton: false,
        progress: false,
        bodyStyle: { background: '#92000E' },
        progressStyle: { background: '#AB4D55' },
        style: { background: '#92000E' }
      })
    }
    signIn({ email, password })
  }

  function handleKeyEnter(event){
    if(event.key === 'Enter')
      handleSignIn()
  }
  return (
    <Container>
      <div className="brand">
        <Brand />
      </div>
      <Form>
        <h2>Faça login</h2>
        <div className="input-wrapper">
          <Label htmlFor="name">Email</Label>
          <Input
            placeholder="exemplo@exemplo.com.br"
            type="email"
            onChange={e => setEmail(e.target.value)}
            onKeyDown={handleKeyEnter}
          />
        </div>

        <div className="input-wrapper">
          <Label htmlFor="name">Senha</Label>
          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={e => setPassword(e.target.value)}
            onKeyDown={handleKeyEnter}
          />
        </div>

        <div className="input-wrapper">
          <Button
            title="Entrar"
            onClick={handleSignIn}
          />
        </div>

        <div className="input-wrapper">
          <Link to="/register">
            <span>Criar uma Conta</span>
          </Link>
        </div>
      </Form>
    </Container>
  )
}
