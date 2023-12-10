import React from "react";
import Figura from "../assets/figura.png";
import { Imagem,Nome, Redes } from "../Styled/InicioStyle";
import Linked2 from "../assets/linked2.png";
import Github2 from "../assets/github2.png";
import { Infomacao, ContactSocial } from "../Styled/InicioStyle";


function Inicio() {
  return (
    <section>
      <Infomacao>
        <figure>
          <Imagem src={Figura} alt="minha foto" />
        </figure>
          <ContactSocial>
            <Nome>Olá, Sou Carla Daniela</Nome>
            </ContactSocial> 

             </Infomacao>       
                    <Redes>
            <a href="https://www.linkedin.com/in/carladanieladev/" target="_blank">
              <img src={Linked2} alt="" />
            </a>
            <a href="https://github.com/carladanielaa" target="_blank">
              <img src={Github2} alt="" />
            </a>
                    </Redes>
         
     
      
      
    </section>
   
    
  );
}
export default Inicio;
