import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
max-width: 1120px;
margin:0 auto;
padding: 0 0.5rem;
display:flex;
flex-direction:column;
`;


export const ContactArea = styled.div`
overflow-y:scroll;
height:80vh;
&::-webkit-scrollbar{
    display:none;
}

@media screen and (max-width:1024px){
    height:75vh;
}
`


export const EmptyContactList = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
font-weight:bold;
color: ${({theme}) => theme.primary};
height:50%;
`

export const SegmentArea = styled.div`
display:flex;
justify-content:center;
align-items:center;

button{
  outline:none;
  border:none;
  color: ${({theme}) => theme.primary};

  font-weight:bold;
  &:hover{
    cursor: pointer;
    color: ${props => shade(0.2, props.theme.primary)};
  }
}
`

export const CreateNewSegmentForm = styled.div`
 display:flex;
  gap:1rem;
    margin: 0.1rem;
    align-items:center;
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
    justify-content:center;
    gap:0.75rem;
    border:0;
    min-width:70px;
    height:50px;
    background:transparent;
    border:1px solid ${({theme}) => theme.primary};
    color: ${({theme}) => theme.primary};
    font-weight: bold;
    border-radius:6px;

    &:hover{
        background:${({theme}) => theme.primary};
    border:1px solid ${({theme}) => theme.primary};
    color: ${({theme}) => theme.white};
    transition: background-color 0.5s, color 0.5s, border-color 0.5s;
    cursor: pointer;
    }

    &:disabled{
      opacity:0.2;
      cursor:default;
      &:hover{
        background-color:transparent;
        color: ${({theme}) => theme.primary};
      }
    }
  }

`