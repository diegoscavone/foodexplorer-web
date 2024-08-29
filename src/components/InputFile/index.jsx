import { Container } from './styles'
export function InputFile({ title, icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={24} />}
      <input {...rest} />
      <span>{title}</span>
    </Container>
  )
}
