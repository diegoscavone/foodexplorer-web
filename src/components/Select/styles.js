import styled from 'styled-components'

import chevron from '../../assets/chevron.svg'

export const Container = styled.select`
  display: flex;
  align-items: center;

  border-radius: 0.8rem;
  
  appearance: none;
    -webkit-appearance: none;
    height: 4.8rem;
    
    width: 100%;
    border: 0;
    padding: 1.6rem 1.4rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1.6rem;

    background: url(${chevron}) no-repeat right 1.4rem center ${({ theme }) => theme.COLORS.DARK_800};

    cursor: pointer;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  &:focus {
      outline: none;
    }
  
`
