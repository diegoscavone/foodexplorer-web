import { Container, Form } from './styles'

import { Input } from '../../components/Input'
import { Label } from '../../components/Label'
import { Brand } from '../../components/Brand'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { toast } from 'react-toastify'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signUp } = useAuth()

  function handleSignUp() {
    if (!name || !email || !password) {
      return toast.error('Preencha todos os campos!', {
        autoClose: 3000,
        closeButton: false,
        progress: false,
        bodyClassName: '#FFFFFF',
        bodyStyle: { background: '#065E7C' },
        style: { background: '#065E7C' }
      })
    }
    if(password.length < 6){
      return toast.error('Senha precisa ter no mínimo 6 caracteres!', {
        autoClose: 3000,
        closeButton: false,
        progress: false,
        bodyClassName: '#FFFFFF',
        bodyStyle: { background: '#065E7C' },
        style: { background: '#065E7C' }
      })
    }
    signUp({ name, email, password })
  }

  return (
    <Container>
      <div className="brand">
        <Brand />
      </div>
      <Form>
        <h2>Crie sua conta</h2>
        <div className="input-wrapper">
          <Label htmlFor="name">Seu nome</Label>
          <Input
            placeholder="Exemplo: Maria da Silva"
            type="text"
            id="name"
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <Label htmlFor="email">Email</Label>
          <Input
            placeholder="exemplo@exemplo.com.br"
            type="email"
            id="email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <Label htmlFor="password">Senha</Label>
          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
            id="password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <Button title="Criar conta" onClick={handleSignUp} />
        </div>

        <div className="input-wrapper">
          <Link to="/">
            <span>Já tenho uma conta</span>
          </Link>
        </div>
      </Form>
    </Container>
  )
}
