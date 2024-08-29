import { Container } from './styles'
import { useState } from 'react'
export function InputMask({value, onChange, ...rest }) {
  function handleChange(event){
    const priceValue = event.target.value.replace(/\D/g, '')

    if (priceValue.length > 5) {
      return;
    }

    const priceFormatted = new Intl.NumberFormat('pt-BR',{
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(parseFloat(priceValue)/100)
    onChange(priceFormatted)
  }

  function handleKeyDown(event) {
    const allowedKeys = [
      'Backspace',
      'Tab',
      'ArrowLeft',
      'ArrowRight',
      'Delete',
      'Enter'
    ];
    // Verifica se a tecla pressionada não é um número ou uma das teclas permitidas
    if (!/\d/.test(event.key) && !allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }
  return (
    <Container>
      <input {...rest}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </Container>
  )
}
