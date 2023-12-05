import styled from "styled-components";


export const Img = styled.img`

max-width: 300px; 
height: auto; 
margin-bottom: 10px; 

@media (max-width: 768px) {
    max-width: 100%;
    padding: 10px;
    border: solid;
}
@media (max-width: 1280px) {
  
  padding: 10px;
  border: solid;
  max-width: 400px;
}

`
export const Section = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-around;

line-height: 24px;
word-spacing: 5px;
h1{
    padding: 20px;
    border: solid;
}
h2{

    color: #f36a71;   
}
h3{
    color: white;
}
p{
    color: white;
}


`
export const Cordel = styled.section`



`

// export const RedesSociais = styled.div`
// display: flex;
// `