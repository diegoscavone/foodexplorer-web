import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints'


export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  > img{
    width: 32.5rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
    > img{
      width: 20rem;
    }
  }
`