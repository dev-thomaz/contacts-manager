import styled, { keyframes } from 'styled-components';

type modalContainerProps = {
    show: boolean;
}

type buttonProps = {
    color: string;
    
}

const blowUpModal = keyframes`
 
  0% {
    transform:scale(0);
  }
  100% {
    transform:scale(1);
  }

`

export const Container = styled.div<modalContainerProps>`
  width:100vw;
  height:100vh;
  background-color:rgba(0, 0, 0, 0.5);
  position:absolute;
  z-index:100;
  display:${({show}) => show ? 'flex' : 'none'};
  `


export const ModalContainer = styled.div`

background: ${props => props.theme.gray};
width:25rem;
height:40rem;
margin: auto;
border-radius:16px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
padding:1rem 0 0;
overflow:hidden;
transform:scale(1);
 
  animation: ${blowUpModal} .2s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;

`

export const ModalFooter = styled.div`
display:flex;
width:100%;
justify-content:space-around;
`

export const ModalActionButton = styled.button<buttonProps>`
width:100%;
background: ${({color}) => color};
color: #fff;
font-weight: bold;
height:3rem;
border:none;
outline:none;

&:active{
    opacity: 0.5;
    font-size:18px;
}
&:disabled{
      opacity:0.5
    }
`

export const FormContainer = styled.form`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
width:100%;
height:100%;

  input, select, option{
    width:90%;
    border-radius:6px;
    border:0;
    background: ${({theme}) => theme.white};
    color: ${({theme}) => theme["gray-500"]};
    padding:1rem;
    &::placeholder {
    color: ${({theme}) => theme["gray-500"]};
    }

   
  }
`

export const InputsArea = styled.div`
display:flex;
flex-direction:column;
width:100%;
align-items:center;
gap:1rem;
margin:2rem 0 0 0;
`