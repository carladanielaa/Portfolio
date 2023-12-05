import styled from "styled-components"

export const StyleHeader = styled.header`
    background-color: #ef9ca4;
    height: 12vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Navegacao = styled.ul`
    display: flex;
    justify-content: space-around;
    
    list-style: none;
    width: 40vw;

    @media (max-width:800px){
        width: 80vw;
    }

    a{
        text-decoration: none;
    }
`

export const Body = styled.h1`
color: #ef9ca4;

`
