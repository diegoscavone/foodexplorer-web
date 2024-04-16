import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
`

export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  > .input-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
    padding: 6.5rem 4.7rem;
  }
`