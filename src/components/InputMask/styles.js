import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  border-radius: 0.8rem;
  padding: 0 1.4rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > input {
    height: 4.8rem;
    width: 100%;
    border: 0;
    padding: 1.6rem 1.4rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    background-color: transparent;

    label {
      color: red;
    }

    &::placeholder {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`
