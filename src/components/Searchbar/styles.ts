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

`;
