import styled from 'styled-components'

export const Container = styled.aside`
  width: 100%;
  > h2{
    font-size: 3.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300}
  }
`