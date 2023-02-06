import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  max-width: 1120px;
  border: 1px solid #dedede;
  border-radius:16px;
  height:90px;
  overflow:hidden;
  display:flex;
  margin:10px 0;
  justify-content:space-between;
`;


export const ContactImg = styled.div`
img{
    width:90px;
    height:90px;
}
`

export const ContactName = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:1rem;
flex:8;
font-weight:bold;

@media screen and (max-width:620px){
    flex-direction:column;
    gap:0.8rem;
    justify-content:space-around;
    align-items:flex-start;
    font-size:14px;
    overflow:hidden;
}
`
export const ActionArea = styled.div`
background-color:${props => props.theme.primary};
flex:1;
display:flex;
align-items:center;
justify-content:center;
color: white;
padding:0.5rem;
cursor: pointer;
&:hover{
    background-color: ${props => shade(0.2, props.theme.primary)};
    font-size:18px;
}
`