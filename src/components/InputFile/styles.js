import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  border-radius: 0.8rem;
  padding: 1.2rem 3.2rem;
  justify-content: center;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > input {
    display: block;
    position: absolute;
    top: 10;
    left: 0;
    right: 0;
    opacity: 0;
    width: 100%;
    height: 4.8rem;

    cursor: pointer;
  }

  > span {
    padding-left: 0.8rem;
    font-weight: 400;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`
