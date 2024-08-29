import { useEffect, useState } from 'react'
import { Container } from './styles'

import { PiMinus, PiPlus } from 'react-icons/pi'

export function InputNumber({ value, onChange }) {
  const [quantity, setQuantity] = useState(value || 1)

  useEffect(() => {
    setQuantity(value || 1)
  },[value])

  function handleIncrement() {
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
    onChange(newQuantity)
  }

  function handleDecrement() {
    const newQuantity = quantity > 1 ? quantity - 1 : 1
    setQuantity(newQuantity)
    onChange(newQuantity)
  }

  function handleChange(event) {
    // Atualiza o estado com o valor do input
    const value = Math.max(1, Number(event.target.value))
    setQuantity(value)
    onChange(value)
  }

  function formatQuantity(value) {
    return value < 10 ? `0${value}` : value
  }
  return (
    <Container>
      <button onClick={handleDecrement}>
        <PiMinus />
      </button>
      <input
        type="number"
        placeholder="01"
        min="1"
        value={formatQuantity(quantity)}
        onChange={handleChange}
      />
      <button onClick={handleIncrement}>
        <PiPlus />
      </button>
    </Container>
  )
}
