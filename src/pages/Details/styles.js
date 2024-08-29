import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`
export const Content = styled.div`
  flex-grow: 1;
  width: 100%;
  /* min-height: 550px; */
  padding: 1.6rem 5.6rem;

  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 1.8rem;
    font-weight: 500;
    display: flex;
    align-items: center;
  }

  > a svg {
    font-size: 2.4rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 2.4rem 12.2rem;
    min-height: 550px;
 
    > a {
      font-size: 2.4rem;
      font-weight: bold;
    }
  }
`
export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.6rem;
  padding: 4.2rem 0;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    gap: 4.7rem;
    > h2 {
      font-size: 4rem;
    }
  }
`
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  animation: fadeIn;
  animation-duration: 1.5s;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 60%;
  }
`
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > h2 {
    font-size: 2.8rem;
    font-weight: 500;
    text-align: center;
  }

  > h2,
  span {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  span {
    font-size: 1.6rem;
    text-align: center;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 78%;
    > h2 {
      font-size: 4rem;
      text-align: left;
    }
    span {
      font-size: 2.4rem;
      text-align: left;
    }
  }
`
export const Image = styled.div`
  animation: fadeInLeft;
  animation-duration: 1.5s;
  > img {
    width: 26.4rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    > h2 {
      font-size: 4rem;
    }
    > img {
      width: 39rem;
    }
  }
`
export const Tags = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.4rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    gap: 1.2rem;
    justify-content: start;
  }
`
export const Order = styled.div`
  width: 100%;
  display: flex;
  gap: 1.6rem;
  margin-top: 2.4rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: ${({ isAdmin }) => (isAdmin ? '20%' : '30%')};
    > button svg {
      display: none;
    }
  }
`
