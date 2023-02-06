import styled from 'styled-components';

type iconProps = {
    fill: string;
}

export const Icon = styled.svg<iconProps>`
  fill: ${({fill}) => fill}
`;


