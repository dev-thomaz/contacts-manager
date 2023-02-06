import styled from 'styled-components';
import { shade } from 'polished'

type labelProps = {
    isSelected: boolean,
}

export const Container = styled.div`
max-width: 1120px;
display:inline-flex;
overflow:hidden;
border-radius:15px;
box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
margin: 0.8rem auto 1rem;


 

`;


export const Input = styled.input`

   display:none;
  

`
export const Label = styled.label<labelProps>`
 padding: 8px 14px;
 min-width:100px;
 display:flex;
 align-items:center;
 justify-content:center;
 font-weight: bold;
    font-size: 1rem;
    background: ${props => props.isSelected ? shade(0.2, props.theme.primary) : props.theme.primary };
    color: ${props => props.theme.white};
    cursor:pointer;
    transition: background 0.1s;
    &:hover{
    background-color: ${props => shade(0.2, props.theme.primary)}
    }
    &:not(:last-of-type) {
        border-right: 1px solid ${props => shade(0.2, props.theme.primary)}
    }
    &:checked {
        background-color: ${props => shade(0.2, props.theme.primary)}
    }
`