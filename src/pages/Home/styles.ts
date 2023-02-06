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