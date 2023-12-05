import React from "react";
import Figura from "../assets/figura.png";
import { Imagem, Redes, Nome } from "../Styled/InicioStyle";
import Linked from "../assets/linked.jpeg";
import Github from "../assets/github.png";

function Inicio() {
  return (
    <section>
      <figure>
        <Imagem src={Figura} alt="minha foto" />
      </figure>

     
        <Nome>Olá, Sou Carla Daniela</Nome>
      

      <Redes>
        <a href="https://www.linkedin.com/in/carladanieladev/" target="_blank">
          <img src={Linked} alt="" />
        </a>

        <a href="https://github.com/carladanielaa" target="_blank">
          <img src={Github} alt="" />
        </a>

      </Redes>
      
      
    </section>
   
    
  );
}
export default Inicio;
