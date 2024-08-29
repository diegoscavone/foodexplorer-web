import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints'

export const Container = styled.aside`
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  width: 100%;
  height: 100vh;

  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  position: absolute;
    z-index: 999;

    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;

    &[data-menu-is-open='true'] {
      transform: translateX(0);
    }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {

  }
`

export const Header = styled.header`
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  padding: 5.6rem 2.8rem 2.4rem;

  display: flex;
  gap: 1.6rem;

  > button {
    cursor: pointer;
    border: none;
    background: transparent;

    svg {
      font-size: 2.16rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  > h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 2.16rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 3.6rem 0;

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    display: flex;
    align-items: center;
    gap: 7px;
    padding-left: 1rem;
    height: 56px;
    font-size: 2.4rem;
    text-decoration: none;
    cursor: pointer;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

    &[data-menu-active='true'] {
      background-color: ${({ theme }) => theme.COLORS.BLUE_200};
      color: ${({ theme }) => theme.COLORS.BLUE_600};
    }
  }
`

export const Content = styled.div`
  padding: 3.6rem 2.8rem;
`
