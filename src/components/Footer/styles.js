import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints'

export const Container = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  padding: 2.93rem 2.7rem;

  /* position: absolute;
  bottom: 0; */

  margin-top: 2.4rem;

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-size: 1.2rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 2.93rem 12.3rem;
  }
`
