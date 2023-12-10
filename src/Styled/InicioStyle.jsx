import styled, {keyframes} from "styled-components";



export const Imagem = styled.img`

width:40vw;
margin-top:80px;
margin-left:40px;


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

@media (min-width: 300px) and (max-width: 600px) {
   
    display: flex;
    flex-direction: column;
  img {
    border: solid;
    
  
  }
}
`

export const Redes = styled.div`
display: flex;
padding: 10px;
margin-left: 65vw;
position: absolute;
bottom: 150px;

img{
    width: 5vw;
    height: 5vh;
}

@media (min-width: 300px) and (max-width: 600px) {
    
    img{
   
   width: 12vw;
   height: 8vh;
   position: relative;
   top: 60px;
   right: 100px;
  

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
     color: #ff0072;
    font-size: 40px;
    font-family: monospace;
    border-right: 4px solid;
    white-space: nowrap;
    overflow: hidden;
    width: 24ch;
    animation: ${typing} 2s steps(24, end), ${blinking} 0.5s infinite step-end alternate;
    
    @media (min-width: 300px) and (max-width: 600px) {
    
   margin-top: 50px;

    }
    `

    export const Infomacao = styled.div`
    display: flex;
    
   justify-content: center;
   align-items: center;

   @media (min-width: 300px) and (max-width: 600px) {
  
   margin-top: 50px;
   flex-direction: column;
   p{
    padding-left: 8px;
    font-size: 29px;
   }
   img{
    width: 70vw;
    margin-top: 10px;
    margin-left: 12px;
   }
   } 
`
export const ContactSocial  = styled.address`
display: flex;

`