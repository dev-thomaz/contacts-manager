import styled from 'styled-components';

export const Container = styled.form`
  display:flex;
  gap:1rem;
    margin: 0.1rem;
  input{
    flex:1;
    border-radius:6px;
    border:0;
    color: ${({theme}) => theme["gray-300"]};
    padding:1rem;

    &::placeholder {
    color: ${({theme}) => theme["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items:center;
    gap:0.75rem;

    border:0;
    padding:1rem;
    background:transparent;
    border:1px solid ${({theme}) => theme.primary};
    color: ${({theme}) => theme.primary};
    font-weight: bold;
    border-radius:6px;

    &:hover{
        background:${({theme}) => theme["green-500"]};
    border:1px solid ${({theme}) => theme["green-500"]};
    color: ${({theme}) => theme.white};
    transition: background-color 0.5s, color 0.5s, border-color 0.5s;
    }
  }
`;
