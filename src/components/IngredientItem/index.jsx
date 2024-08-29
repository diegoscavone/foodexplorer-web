import { PiPlus, PiX } from 'react-icons/pi'

import { Container } from './styles'
export function IngredientItem({ isNew = false, value, onClick, ...rest }) {
  return (
    <Container $isnew={isNew}>
        <input type="text" value={value} readOnly={!isNew} {...rest} />

        <button
          type="button"
          onClick={onClick}
          className={isNew ? 'button-add' : 'button-delete'}
        >
          {isNew ? <PiPlus /> : <PiX />}
        </button>
    </Container>
  )
}
