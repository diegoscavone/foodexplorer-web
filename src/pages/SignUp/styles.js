import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32rem;

  height: 100vh;
  width: 100%;

  span{
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: 500;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
    flex-direction: column;
    gap: 7.3rem
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
    gap: 7.3rem
  }
`

export const Form = styled.div`
  width: 47.6rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  padding: 6.4rem;
  border-radius: 1.6rem;

  
  > h2 {
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    text-align: center;
  }

  > .input-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
    padding: 0 5.6rem;
    background-color: transparent;
    width: 100%;

    > h2 {
      display: none;
    }
  }
`