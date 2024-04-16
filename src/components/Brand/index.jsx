import logoFoodExplorer from '../../assets/logo.svg'
import { Container } from './styles'

export function Brand() {
  return (
    <Container>
      <img src={logoFoodExplorer} alt="Logo Food Explorer" />
    </Container>
  )
}
