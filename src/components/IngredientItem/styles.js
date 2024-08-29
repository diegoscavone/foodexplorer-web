import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 3.2rem;
  flex: 1 1 100px;
  min-width: 90px;
  max-width: 116px;
  border-radius: 1rem;

  background-color: ${({ theme, $isnew }) =>
    $isnew ? 'transparent' : theme.COLORS.LIGHT_600};
  border: ${({ theme, $isnew }) =>
    $isnew ? `1px dashed ${theme.COLORS.LIGHT_500} ` : 'none'};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};

  padding: 0.8rem 1.6rem;

  > button {
    cursor: pointer;
    display: flex;

    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  > input {
    width:100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    border: none;
    font-size: 1.4rem;
  }
`
