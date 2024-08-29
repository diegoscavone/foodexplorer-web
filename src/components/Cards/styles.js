import '@splidejs/react-splide/css/skyblue'

import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints'

export const Container = styled.div`
  display: flex;
`
export const Content = styled.section`
  width: 21rem;
  padding: 0 2.4rem 2.4rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  > img {
    width: 8.8rem;
    cursor: pointer;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 30.4rem;
    padding: 0 2.4rem 4.8rem;

    > img {
      width: 17.6rem;
    }
  }
`
export const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  cursor: pointer;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    font-size: 2.4rem;
    font-weight: 600;
  }
`
export const Description = styled.span`
  display: none;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: block;
    font-size: 1.4rem;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`
export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
    flex-direction: row;
    gap: 1.6rem;
  }
`
export const Quantity = styled.div`
  display: flex;
`
export const Price = styled.span`
  color: ${({ theme }) => theme.COLORS.CAKE_200};
  font-size: 1.6rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    font-size: 3.2rem;
  }
`
export const Favorite = styled.button`
  border: none;
  background-color: transparent;
  position: relative;
  right: 160px;
  top: 16px;
  cursor: pointer;
  svg{
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    right: -120px;

    svg {

    }
  }
`
