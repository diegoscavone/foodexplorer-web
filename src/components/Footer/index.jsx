import logoFooter from '../../assets/logo_footer.svg'

import { Container } from './styles'
export function Footer(){
  return(
    <Container>
      <img src={logoFooter}/>
      <span>© 2024 - Todos os direitos reservados.</span>
    </Container>
  )

}