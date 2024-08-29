import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints'

export const Container = styled.button`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;
  height: 4.8rem;

  background: ${({ theme }) => theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  border: 0;

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    /* font-size: 2.4rem; */
  }  
`
