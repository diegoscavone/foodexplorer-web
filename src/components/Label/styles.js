import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints'

export const Container = styled.div`
  width: 100%;
  display: flex;
  
  > label {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
   
  }
`
