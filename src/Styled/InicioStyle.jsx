import styled, {keyframes} from "styled-components";

export const Section1 = styled.section`
display: flex;
`

export const Imagem = styled.img`

width:40vw;
margin-top:100px;
margin-left:90px;


transform: translatey(0px);
animation: float 4s ease-in-out infinite;

@keyframes float{
0%{
    transform: translatey(0px);
}
50%{
transform: translatey(-30px);
}
100%{
    transform: translatey(0px);
}
}
`



export const Redes = styled.div`
border: solid;
img{
    width: 10vw;
    height: 10vh;
}


`
const typing = keyframes`
    from {
        width: 0;
    }
    to {
        width: 11ch;
    }
`;

const blinking = keyframes`
    50% {
        border-color: transparent;
    }
`;

export const Nome = styled.p`
   
    font-size: 40px;
    font-family: monospace;
    border-right: 4px solid;
    white-space: nowrap;
    overflow: hidden;
    width: 24ch;
    animation: ${typing} 2s steps(24, end), ${blinking} 0.5s infinite step-end alternate;`