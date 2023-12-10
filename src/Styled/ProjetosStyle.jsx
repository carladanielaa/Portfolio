import styled from "styled-components";

export const Section1 = styled.section`

h1{
    color:#ff0072 ;
    margin: 20px;
    text-align: center;
}
`
export const Img = styled.img`

max-width: 440px; 
height: 35vh; 
margin-bottom: 5px; 


@media (max-width: 768px) {
   
    max-width: 200%;
    padding: 10px;
    border: solid;
}
@media (max-width: 1280px) {
  

  border: solid;
  max-width: 400px;
}

`
export const Section = styled.section`
display: flex;

flex-wrap: wrap;
justify-content: space-around;
color: #ff0072;
line-height: 24px;
word-spacing: 5px;
h1{
    
    padding: 10px;
   
}
h2{
    text-align: center;
    color: #ff0072;  
}
h3{
    text-align: center;
    color: #ff0072;
}
p{
    text-align: center;
    color: #ff0072;
}



`

