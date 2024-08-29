import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints'

export const Container = styled.div``
export const Slider = styled.div`
  display: flex;
  align-items: center;
  height: 12rem;
  background: ${({ theme }) => theme.COLORS.GRADIENT_200};
  border-radius: 0.3rem;
  margin: 4.4rem 1.6rem 3.8rem 3.6rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    height: 26rem;
    margin: 16.4rem 12.4rem 0;
  }
`
export const SliderImage = styled.div`
  max-width: 17.9rem;

  > img {
    height: 14.9rem;
    position: relative;
    top: -17px;
    left: -40px;

    animation: fadeInLeft; 
    animation-duration: 1s;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    max-width: 59.5rem;
    > img {
      width: 63.2rem;
      height: 40rem;
      top: -70px;
      left: -60px;
    }
  }
`
export const Headline = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  animation: fadeInDown;
  animation-duration: 1.5s;
  > h1 {
    font-size: 1.6rem;
    font-weight: 500;

  }
  > span {
    font-size: 1.1rem;
    font-weight: 300;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 100%;
    position: relative;

    > h1 {
      font-size: 4rem;
    }
    > span {
      font-size: 1.4rem;
    }
  }
`

export const Content = styled.div`
  margin: 2.4rem 2.4rem ;

  .splide {
      &::before{
        content: "";
        position: absolute;
        top: 0;
        width: 10%;
        height: 100%;
        background: linear-gradient(to left, transparent, #0001, #000);
        background-repeat: repeat-y;
        z-index: 1;
      }
      &::after {
        content: "";
        position: absolute;
        top: 0;
        width: 10%;
        height: 100%;
        background: linear-gradient(to right, transparent, #0001, #000);
        background-repeat: repeat-y;
        z-index: 0;
      }
      &::before {
        left: 0;
      }
    
      &::after {
        right: 0;
      }

  }

  .splide__arrow svg {
    fill: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .splide__arrow svg:hover {
    fill: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0 2.4rem;
    margin: 0.6rem 10.6rem;
  }
`
