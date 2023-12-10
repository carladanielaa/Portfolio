import React from "react";
import Figura from "../assets/carla.png"
import Java from "../assets/java.png"
import HTML from "../assets/htmlecss.png"
import Reac from "../assets/react-js.png"
import Style from "../assets/style.png"
import {Sobre1, Tecnologia} from "../Styled/SobreStyle"

export default function Sobre() {
    return (
      <>
        <Sobre1>
        <figure>
          <img src={Figura} alt="" />
        </figure>
          <h1>Carla Daniela</h1>
          <p>Desenvolvedora Front-end apaixonada por criar experiências web incríveis.
             Com habilidades sólidas em HTML, CSS e JavaScript, estou focada em proporcionar
             interfaces intuitivas e atraentes.</p>
             <h3>Habilidades Técnicas:</h3>
             
        </Sobre1>
        <Tecnologia>
          <figure>
          <img src={Java} alt="" />
          <img src={HTML} alt="" />
          </figure>

          <figure>
          <img src={Reac} alt="" />
          <img src={Style} alt="" />
          </figure>
        </Tecnologia>

      </>
    )
  }