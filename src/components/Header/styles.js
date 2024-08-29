import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints'

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.2rem;
  padding: 5.6rem 2.8rem 2.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 2.8rem 12.4rem;
  }
`

export const Menu = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  /* display: none; */
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 2.6rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none ;
  }
`

export const Brand = styled.div`
  > img {
    width: 19.7rem;
    cursor: pointer;
  }
`

export const Search = styled.div`
  width: 100%;
  display: none;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: block;
  }
`

export const OrderButton = styled.div`
  width: 40rem;
  display: none;
  svg {
    font-size: 2.6rem;
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: block;
  }
`

export const Order = styled.button`
  border: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 2.6rem;
  display: block;

  > .notify {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    border-radius: 50%;
    padding: 0.4rem 0.9rem;

    position: absolute;
    top: 47px;
    right: 15px;

    font-weight: 500;
    font-size: 1.2rem;
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }
`

export const Logout = styled.button`
  border: 0;
  background-color: transparent;
  display: none;
  cursor: pointer;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 2.6rem;
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: block;
  }
`
