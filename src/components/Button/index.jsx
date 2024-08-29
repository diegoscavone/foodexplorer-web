import { Container } from './styles'

export function Button({ icon: Icon, title, itemsCount, color, ...rest }) {
  return (
    <Container type="button" color={color} {...rest}>
      {Icon && <Icon />}
      <span>{title}</span>
      {itemsCount > 0 && <span>({itemsCount})</span>}
      {itemsCount === 0 && <span>(0)</span>}
    </Container>
  )
}
