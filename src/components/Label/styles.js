import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  
  > label {
    font-family: ${({ theme }) => theme.TYPOGRAFY.ROBOTO_SMALLREGULAR};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`
