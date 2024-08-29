import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  border-radius: 0.8rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > textarea {
    height: 17.2rem;
    width: 100%;
    border: 0;
    padding: 1.4rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    background-color: transparent;
    resize: none;
    outline: none;

    &::placeholder {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`
