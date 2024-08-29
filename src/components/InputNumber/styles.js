import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  > input {
    height: 3.2rem;
    width: 5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    background-color: transparent;
    border: none;
    text-align: center;

    font-size: 2.2rem;
    font-weight: 600;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }

  > button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding-top: 0.7rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    svg {
      font-size: 2.4rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    > input {
    font-size: 2rem;
    font-weight: 600;
  }

  > button {
    svg {
      font-size: 2rem;
    }
  }
}
`
