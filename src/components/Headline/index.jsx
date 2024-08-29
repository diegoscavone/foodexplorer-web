import { Container } from './styles'

export function Headline({title, ...rest}){
  return (
    <Container {...rest}>
      <h2>{title}</h2>
    </Container>
  )

}