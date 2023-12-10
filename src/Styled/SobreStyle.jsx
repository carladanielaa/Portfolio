import styled from "styled-components";

export const Figure = styled.img`


`

export const Sobre1 = styled.section`
color: #ff0072;
text-align: center;
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
margin-bottom: 20px;
line-height: 24px;
word-spacing: 5px;
img{
  
    width: 45vw;
}


/* Estilos para telas entre 700px e 1280px */
@media (min-width: 700px) and (max-width: 1280px) {
  img {
   
    width: 45vw;
    height: 50vw;
  }
  
}
/* Estilos para telas acima de 1280px */
@media (min-width: 1000px) {
p{
text-align: center;
margin-left: 270px;
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
margin-bottom: 20px;
line-height: 30px;
word-spacing: 7px;

width: 60vw;
}
h1{
  padding: 2px;

}
h3{
  padding:2px
}

  img {
    width:20%;
    height: 45vh;
  }
}
`
export const Tecnologia = styled.div`

display: flex;
img{

  width: 15vw;
  height: 15vh;
  margin-left: 90px;
}

@media (min-width: 300px) and (max-width: 700px) {
  img {
  
    width: 20vw;
    height: 10vh;
    margin-left: 15px;
  }
  
}

`
