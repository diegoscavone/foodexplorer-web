import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: .8rem;

  > input {
    height: 4.8rem;
    width: 100%;
    border: 0;
    padding: 1.6rem 1.4rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_500};

    background-color: transparent;

    label{
      color: red;
    }

    &::placeholder{
      font-family: ${({ theme }) => theme.TYPOGRAFY.ROBOTO_SMALLREGULAR};
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }


`