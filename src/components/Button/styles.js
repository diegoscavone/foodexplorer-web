import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints'

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;

  background-color: ${({ color, theme }) => {
    if (color) return theme.COLORS[color]
    else return theme.COLORS.TOMATO_100
  }};
  /* background-color: ${({ theme }) => theme.COLORS.TOMATO_100}; */
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  padding: 1.2rem 2.4rem;
  border: 0;
  border-radius: 0.5rem;

  cursor: pointer;

  > span {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.4rem;
  }

  &:hover {
    transition: all 0.3s;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
  }

  > svg {
    font-size: 2.2rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    height: 4.8rem;
    padding: 1.6rem 2.4rem;
  }
`
