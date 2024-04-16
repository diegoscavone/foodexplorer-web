import { Container, Form } from './styles'

import { Input } from '../../components/Input'
import { Label } from '../../components/Label'
import { Brand } from '../../components/Brand'

export function SignIn() {
  return (
    <Container>
      <Form>
        <Brand />
        <div className="input-wrapper">
          <Label htmlFor="name">Seu nome</Label>
          <Input placeholder="Exemplo: Maria da Silva" type="text" id="name" />
        </div>

        <div className="input-wrapper">
          <Label htmlFor="name">Email</Label>
          <Input placeholder="exemplo@exemplo.com.br" type="email" />
        </div>

        <div className="input-wrapper">
          <Label htmlFor="name">Senha</Label>
          <Input placeholder="No mínimo 6 caracteres" type="password" />
        </div>
      </Form>
    </Container>
  )
}
