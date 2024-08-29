import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%;
  }

  body{
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    font-size: 1.6rem;
  }

  a{
    text-decoration: none;
  }

  body, input, textarea{
    font-family: 'Roboto', sans-serif;
  }
 
  button, h1, h2, span, a{
    font-family: 'Poppins', sans-serif;
  }

  input{
    outline: none;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

`
