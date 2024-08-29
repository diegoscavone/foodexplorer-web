import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  padding: 1.6rem 5.6rem 3.6rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

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
    > a {
      font-size: 2.4rem;
      font-weight: bold;
    }
    padding: 4rem 12.4rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  .col-3, .col-2, .col-1 {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    .col-3 {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 3fr 1fr;
      gap: 3.2rem;
    }

    .col-2 {
      width: 100%;
      display: grid;
      grid-template-columns: 5fr 1fr;
      gap: 3.2rem;
    }

    .col-1 {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: end;
    }
    .col-1 button {
      width: 18rem;
    }
  }
`

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`
export const Ingredients = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  padding: 0.8rem;
  border-radius: 1rem;
`