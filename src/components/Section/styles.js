import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints'

export const Container = styled.section`
  padding: 2.4rem 0 0;
  > h2 {
    padding-bottom: 2.4rem;
    font-size: 1.8rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 4.8rem 0 0;
    > h2 {
    font-size: 3.2rem;
  }
  }
`
