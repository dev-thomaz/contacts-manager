import styled from 'styled-components';

export const Container = styled.header`
  background: ${props => props.theme.primary};
  padding: 1rem 0 1.5rem;
  border-bottom: 1px solid #dedede;
`;

export const Content = styled.div`
width:100%;
max-width: 1120px;
margin:0 auto;
padding: 0 1.5rem;

display:flex;
justify-content: space-between;
align-items:center;
color: #fff;

`

export const TitleContent = styled.div`
display:flex;
align-items:center;
gap:1rem;
@media screen and (max-width:1024px){
  gap:0.5rem;
}
`

export const AddContactButton = styled.button`
border: none;
text-decoration:none;
background-color:transparent;
display:flex;
align-items:center;
justify-content:center;
cursor: pointer;
gap:1rem;
box-shadow:none;
&:active{
    opacity: 0.5;
    border:none;
    
}
`

export const AddContactText = styled.span`
color: ${props => props.theme.white};

@media screen and (max-width:1024px){
    display:none;
}
`