import { Container } from './styles'

export function Label({ htmlFor, children }) {
  return (
    <Container>
      <label htmlFor={htmlFor}>{children}</label>
    </Container>
  )
}
